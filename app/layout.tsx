import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';


const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SplitWave",
  description:
    "Ditch the finance chaos! SplitWave on Solana brings fun to your money — seamless payments, bill splits, and expense tracking. Join the waitlist for on-chain finance, but cooler! 🚀💸",
    openGraph: {
      images: './metadata.png',
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
        <main className=" bg-[#0E1210]  ">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
