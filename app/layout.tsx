import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Providers } from "./providers";
import { Inter as FontSans } from "next/font/google"

import './globals.css'

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Grey+Qo&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased bg-slate-100 dark:bg-slate-950",
          fontSans.variable
          )}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
