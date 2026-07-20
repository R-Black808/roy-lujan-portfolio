import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roy Lujan — Software Engineer",
  description: "Product-minded software engineer building reliable, useful systems across interfaces, data, and payments.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Roy Lujan — Software Engineer",
    description: "I turn ambiguous ideas into reliable, useful software.",
    type: "website",
    images: [{ url: "/og.png", width: 1610, height: 977, alt: "Roy Lujan software engineering portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy Lujan — Software Engineer",
    description: "I turn ambiguous ideas into reliable, useful software.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
