import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ThuglifeScientist - Innovative Software, Hardware & Teaching",
  description: "ThuglifeScientist explores cutting-edge innovations in software and hardware development, offering valuable educational content for tech enthusiasts and professionals.",
  keywords: "software, hardware, innovation, tech education, programming, technology tutorials, hardware development, software engineering, tech entrepreneurship, ThuglifeScientist",
  author: "ThuglifeScientist",
  robots: "index, follow", // Indicates to search engines that the page should be indexed.
  viewport: "width=device-width, initial-scale=1.0", // Ensures responsive design for mobile-first indexing.

  // Open Graph metadata for better visibility on social media platforms
  openGraph: {
    title: "ThuglifeScientist - Innovative Software, Hardware & Teaching",
    description: "Explore innovative software and hardware tutorials, plus tech-focused educational content at ThuglifeScientist.",
    url: "https://thuglifescientist.com", // Replace with your actual URL
    siteName: "ThuglifeScientist",
    images: [
      {
        url: "https://thuglifescientist.com/og-image.jpg", // Provide a relevant Open Graph image URL
        width: 1200,
        height: 630,
        alt: "ThuglifeScientist logo or tech-related image",
      },
    ],
    type: "website",
  },

  // Twitter Card metadata for better preview on Twitter
  twitter: {
    card: "summary_large_image",
    title: "ThuglifeScientist - Innovative Software, Hardware & Teaching",
    description: "Learn about innovative tech with ThuglifeScientist's software and hardware development tutorials, plus tech education.",
    image: "https://thuglifescientist.com/og-image.jpg", // URL for Twitter card image
    site: "@thuglifescientist", // Replace with actual Twitter handle if applicable
  },

  // You can also include a canonical URL if necessary
  canonical: "https://thuglifescientist.com", // Replace with your website's canonical URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon & Meta Tags */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
