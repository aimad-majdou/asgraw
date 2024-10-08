import AppHeader from "@/components/header/app-header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ⴰⵙⴳⵔⴰⵡ (Asgraw)",
  description:
    "ⴰⵙⴳⵔⴰⵡ (Asgraw) is a community platform where users can share posts, engage in discussions, and comment on various topics. Join the conversation and explore a world of ideas and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="grid grid-rows-[auto_1fr] gap-4 h-screen">
            <AppHeader />
            <main className="min-h-0">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
