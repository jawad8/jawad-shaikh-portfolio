import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jawad Shaikh - Senior Software Developer",
    short_name: "Jawad Shaikh",
    description:
      "Portfolio of Jawad Shaikh, Senior Software Developer and AI Engineer based in Abu Dhabi, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#070a10",
    theme_color: "#070a10",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
