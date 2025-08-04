import type { Metadata } from "next";

import "./css/globals.css";
import Footer from "@/components/layouts/footer";
import { ThemeProvider } from "@/components/themeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
