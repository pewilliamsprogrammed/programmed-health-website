import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/component/header";
import Footer from "@/components/component/footer";

const inter = Inter({ subsets: ["latin"] });

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
  title: "Programmed health professionals",
  description:
    "Australia's busiest nursing agency is recruiting registered nurses, enrolled nurses, personal care attendants, personal service workers leading healthcare recruitment agency for imediated start. Work across Austalia Melbourne, Sydney, Perth, Brisbane, and Adelaide.",
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
