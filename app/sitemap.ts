import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qlip.techfamz.com";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/opengraph-image.png`,
        `${baseUrl}/qliplogo.png`,
      ],
    },
    {
      url: `${baseUrl}/tiktok-downloader`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [
        `${baseUrl}/icons/tiktok.svg`,
        `${baseUrl}/qliplogo.png`,
      ],
    },
    {
      url: `${baseUrl}/instagram-downloader`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [
        `${baseUrl}/icons/instagram.svg`,
        `${baseUrl}/qliplogo.png`,
      ],
    },
    {
      url: `${baseUrl}/youtube-downloader`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [
        `${baseUrl}/icons/youtube.svg`,
        `${baseUrl}/qliplogo.png`,
      ],
    },
    {
      url: `${baseUrl}/twitter-downloader`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
      images: [
        `${baseUrl}/icons/x.svg`,
        `${baseUrl}/qliplogo.png`,
      ],
    },
  ];
}
