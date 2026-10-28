import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description = "Air and sea freight to 180+ countries. Instant quotes, live tracking, customs handled, door to door.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Tidewing — Global Air & Sea Freight", template: "%s | Tidewing" },
  description,
  applicationName: "Tidewing",
  keywords: ["air freight", "sea freight", "ocean freight", "international shipping", "cargo tracking", "freight forwarding", "customs clearance", "FCL", "LCL"],
  openGraph: { type: "website", siteName: "Tidewing", locale: "en_GB", description },
  twitter: { card: "summary_large_image", description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0b1f3a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
