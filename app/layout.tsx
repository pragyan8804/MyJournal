import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Providers } from "./providers";
import { Inter as FontSans } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyJournal",
  description: "Journaling App",
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
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased bg-slate-100 dark:bg-slate-950",
          fontSans.variable
          )}>

           <Providers>
          {children}
          </Providers>

          <Footer />
      </body>
    </html>
  );
}
