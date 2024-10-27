import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Gsihm Siliguri",
  description:
    "Welcome to Gsihm Siliguri - a premier institute dedicated to excellence in hospitality and management education. Discover our comprehensive programs, experienced faculty, and a campus designed to help you succeed in a global industry. Begin your journey with us and unlock endless career opportunities",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
