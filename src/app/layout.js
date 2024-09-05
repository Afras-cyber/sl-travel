import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Lanka - Discover the Beauty of Sri Lanka",
  description: "Explore the best travel destinations, cultural experiences, and hidden gems in Sri Lanka. Plan your perfect trip to Sri Lanka with Travel Lanka.",
  keywords: "Sri Lanka travel, Sri Lanka tourism, travel guide, Sri Lanka destinations, cultural experiences, Sri Lanka tours, travel tips",
  authors: [{ name: "Dottech Softwares", url: "https://www.travellanka.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Travel Lanka - Discover the Beauty of Sri Lanka",
    description: "Explore the best travel destinations, cultural experiences, and hidden gems in Sri Lanka. Plan your perfect trip to Sri Lanka with Travel Lanka.",
    type: "website",
    url: "https://www.travellanka.com",
    images: [
      {
        url: "/background.jpg",
        width: 800,
        height: 600,
        alt: "Beautiful landscape of Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@travellanka",
    title: "Travel Lanka - Discover the Beauty of Sri Lanka",
    description: "Explore the best travel destinations, cultural experiences, and hidden gems in Sri Lanka. Plan your perfect trip to Sri Lanka with Travel Lanka.",
    images: [
      {
        url: "/background.jpg",
        alt: "Sri Lanka Travel",
      },
    ],
  },
  alternates: {
    canonical: "https://www.travellanka.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
