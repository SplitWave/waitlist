import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const imgURL =
  "https://github.com/SplitWave/waitlist/blob/main/app/metadata.png?raw=true";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SplitWave",
  description:
    "Ditch the finance chaos! SplitWave on Solana brings fun to your money — seamless payments, bill splits, and expense tracking. Join the waitlist for on-chain finance, but cooler! 🚀💸",
  openGraph: {
    title: "SplitWave",
    description:
      "Ditch the finance chaos! SplitWave on Solana brings fun to your money — seamless payments, bill splits, and expense tracking. Join the waitlist for on-chain finance, but cooler! 🚀💸",
    images: [
      {
        url: imgURL,
        width: 800,
        height: 600,
        alt: "SplitWave",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
