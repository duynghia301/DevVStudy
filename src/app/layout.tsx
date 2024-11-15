import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { Layout } from 'antd'; 






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
  title: "VStudy",
  description: "Generated by NISO company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
