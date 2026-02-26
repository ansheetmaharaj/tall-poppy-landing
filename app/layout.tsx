import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tall Poppy University | ANZ Crypto Trading Community & Signals",
  description:
    "Join 100+ Australian and New Zealand crypto traders. Real signals, real mentorship, and a community that refuses to play small. Led by Dayaan OnChain.",
  openGraph: {
    title: "Tall Poppy University | ANZ Crypto Trading Community & Signals",
    description:
      "Join 100+ Australian and New Zealand crypto traders. Real signals, real mentorship, and a community that refuses to play small. Led by Dayaan OnChain.",
    type: "website",
    locale: "en_AU",
    siteName: "Tall Poppy University",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tall Poppy University | ANZ Crypto Trading Community & Signals",
    description:
      "Join 100+ Australian and New Zealand crypto traders. Real signals, real mentorship, and a community that refuses to play small.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-bg-primary text-text-primary font-body`}
      >
        {children}
      </body>
    </html>
  );
}
