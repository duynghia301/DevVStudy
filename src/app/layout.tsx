"use client";

import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import { useEffect, useState } from "react";
import PreLoader from "@/app/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <SessionProvider>
        
              {children}
              <Footer />
              <ScrollToTop />
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
