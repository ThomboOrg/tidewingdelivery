import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const pages: [path: string, priority: number][] = [
  ["", 1],
  ["/services/air", 0.9],
  ["/services/sea", 0.9],
  ["/ship", 0.8],
  ["/track", 0.8],
  ["/support", 0.6],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, priority]) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly", priority }));
}
