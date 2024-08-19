import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/component/header";
// import Footer from "@/components/component/footer";

const inter = Inter({ subsets: ["latin"] });

import { Analytics } from "@vercel/analytics/react";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  robots: "follow, index",
  title: "Programmed Health | No 1 Nursing Agency in Australia",
  description:
    "Australia's busiest nursing agency is recruiting registered nurses, enrolled nurses, personal care attendants, personal service workers. Australias leading healthcare recruitment agency need nurse now for imediated start. Nursing agency in Austalia Melbourne, Sydney, Perth, Brisbane, and Adelaide.",
  keywords:
    "nursing agency, healthcare recruitment agency, nursing agency in Australia, nursing agency in Melbourne, nursing agency in Sydney, nursing agency in Perth, nursing agency in Brisbane, nursing agency in Adelaide, healthcare recruitment agency",

  openGraph: {
    title: "Programmed Health | No 1 Nursing Agency in Australia",
    description:
      "Australia's busiest nursing agency is recruiting registered nurses, enrolled nurses, personal care attendants, personal service workers. Australias leading healthcare recruitment agency need nurse now for imediated start. Nursing agency in Austalia Melbourne, Sydney, Perth, Brisbane, and Adelaide.",
    type: "website",
    url: "https://programmedhealth.com.au",
    images: [
      {
        url: "https://programmedhealth.com.au/og-image.png",
        width: 1200,
        height: 630,
        alt: "Programmed Health | No 1 Nursing Agency in Australia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
