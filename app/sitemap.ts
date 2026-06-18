import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date("2026-06-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
