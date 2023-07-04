"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [mode, setMode] = useState("dark");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <html lang="en" className={mode}>
      <body className={inter.className}>{children}</body>
      {isClient && <button
        onClick={changeMode}
        type="button"
        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-black dark:border-gray-500 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 fixed bottom-10 right-10 capitalize"
      >
        {mode} Mode
      </button>}
    </html>
  );
}
