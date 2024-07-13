"use client";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>MADC</title>
        <meta name="description" content="An MADC project" />
      </head>
      <body
        className={`${poppins.className} dark:bg-gray-700 transition duration-200`}
      >
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
