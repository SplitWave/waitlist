import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
const imgURL = "https://file.notion.so/f/f/d73cd775-91a8-4371-86e0-f8e43167c197/e63bffc9-460f-4fdc-b303-2274a6bea67f/metadata.png?id=e365abe4-5c36-4d0a-a8fe-ec71aef3ab92&table=block&spaceId=d73cd775-91a8-4371-86e0-f8e43167c197&expirationTimestamp=1701216000000&signature=Fp9OYa9dyhMTCGPFUH2gNn-IrBN2teh417SFv2_R7ow&downloadName=metadata.png";

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
        <main className=" bg-[#0E1210]  ">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
