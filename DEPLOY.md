# Deploying qlip-web to the VPS

Target: `/var/www/qlip-web`, served at `https://qlip.techfamz.com`, managed by PM2 as `qlip-web`, reverse-proxied by Nginx on the same VPS alongside `qlip-api`.

---

## 0. DNS Setup (Domain Registrar / Cloudflare)

Add an **A record** for `qlip`:
- **Type**: `A`
- **Name**: `qlip` (or `qlip.techfamz.com`)
- **IPv4 Address**: `YOUR_VPS_IP` (the same IP used for `qlip-api.techfamz.com`)
- **Proxy status**: DNS only (or Proxied if using Cloudflare CDN)

Verify on your computer or VPS:
```bash
nslookup qlip.techfamz.com
```

---

## 1. Get the code onto the VPS

Run on the VPS via SSH:

```bash
sudo mkdir -p /var/www/qlip-web
sudo chown $USER:$USER /var/www/qlip-web
cd /var/www/qlip-web
git clone https://github.com/Hyacinth-Chidi/qlip-website.git .
```

*(If already cloned previously, simply run `cd /var/www/qlip-web && git pull`)*

---

## 2. Run the automated setup

```bash
cd /var/www/qlip-web
npm run setup
```

This single command:
1. Installs all npm dependencies (`npm install`)
2. Compiles the Next.js production build (`npm run build`)
3. Starts (or reloads with zero downtime) `qlip-web` under PM2 on port 3000 without touching `qlip-api` or any other process.

### Verify:
```bash
pm2 status
# Expect a row named "qlip-web", status "online" alongside "qlip-api"

curl -I http://127.0.0.1:3000
# Expect: HTTP/1.1 200 OK
```

---

## 3. Configure Nginx Reverse Proxy

```bash
sudo cp deploy/nginx-qlip-web.conf /etc/nginx/sites-available/qlip.techfamz.com
sudo ln -s /etc/nginx/sites-available/qlip.techfamz.com /etc/nginx/sites-enabled/
sudo nginx -t
```

**Important**: Verify that `nginx -t` prints:
`nginx: the configuration file /etc/nginx/nginx.conf syntax is ok`
`nginx: configuration file /etc/nginx/nginx.conf test is successful`

Then reload Nginx (graceful reload, does NOT restart or drop connections):
```bash
sudo systemctl reload nginx
```

---

## 4. Obtain Free SSL Certificate (HTTPS)

```bash
sudo certbot --nginx -d qlip.techfamz.com
```

When prompted:
- Select redirect HTTP traffic to HTTPS (option 2, recommended).

Certbot will automatically install the certificate and configure auto-renewal.

---

## 5. Routine Updates (Future deploys)

Whenever you push changes from your local computer:

```bash
cd /var/www/qlip-web
git pull
npm run setup
```
PM2 will recompile and hot-reload the new code with zero downtime!
