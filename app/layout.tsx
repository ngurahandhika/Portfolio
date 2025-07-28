import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./css/globals.css";

import Footer from "./components/footer";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Tempat saya memperlihatkan karya-karya saya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmMono.variable} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
