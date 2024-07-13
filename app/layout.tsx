"use client";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Retrieve saved theme from localStorage or set default theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
  };

  return (
    <html lang="en" className={theme}>
      <head>
        <title>MADC</title>
        <meta name="description" content="An MADC project" />
      </head>
      <body className={`${poppins.className} dark:bg-gray-700 transition duration-200`}>
        <Header toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
