import { MetadataRoute } from "next";
const baseRoute = "https://codegyaan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseRoute,
      lastModified: new Date(),
    },
    {
      url: `${baseRoute}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseRoute}/blog`,
      lastModified: new Date(),
    },
  ];
}
