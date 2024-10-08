import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";


export const metadata: Metadata = {
  title: "Gsihm Siliguri",
  description: "Gsihm Siliguri",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased", fontSans.variable
        )}>
    <Navbar />

          {children}
    <Footer />
        
          </body>
    </html>
  );
}
