import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { AppWrapper } from "@/context";
import Link from "next/link";
import { ProfileNavContainer } from "@/components/profileNav";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Job Search",
  description: "Job search service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppWrapper>
        <body className={inter.className}>
          <header className="bg-gray-500 w-full h-11 flex justify-between items-center pr-[10px] relative p-3">
            <Link href={"/jobs"} className="text-white">
              Search job
            </Link>
            <ProfileNavContainer />
          </header>
          {children}
        </body>
      </AppWrapper>
    </html>
  );
}
