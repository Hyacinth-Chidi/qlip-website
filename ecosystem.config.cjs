// .cjs extension is required: PM2's config loader uses require()
module.exports = {
  apps: [
    {
      name: 'qlip-web',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p ' + (process.env.PORT || 3000),
      cwd: __dirname,
      interpreter: 'node',
      instances: 1,
      autorestart: true,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
    },
  ],
};
