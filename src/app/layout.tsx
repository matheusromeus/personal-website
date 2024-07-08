import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Kevin Roy`,
  description: `Welcome to my safe space on the internet.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="public/favicon/kr-favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="public/favicon/kr-favicon.png"
        />
        <link rel="shortcut icon" href="public/favicon/kr-favicon.png" />
      </head>
      <body className={`${inter.className}`}>
        <div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
