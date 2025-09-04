// src/pages/_app.tsx
import "../styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const headerRef = useRef<HTMLElement | null>(null);   // ✅ HTMLElement instead of HTMLDivElement
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateHeight, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      <Head>
        <title>Paul Haefeli</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header ref={headerRef} />
        <main
          className="flex-grow bg-gradient-to-b from-neutral-900 to-gray-700"
          style={{ paddingTop: headerHeight ? `${headerHeight + 32}px` : "10rem" }}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
