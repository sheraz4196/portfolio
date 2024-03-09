import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sheraz Manzoor - Frontend Developer",
  description:
    "Explore Sheraz Manzoor's portfolio and insightful blog, featuring creative projects and thought-provoking articles in React, Next-14 and Frammer Motion. Discover a unique blend of expertise, innovation, and industry insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
