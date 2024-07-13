// Import necessary modules
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

// Define font configuration
const inter = Poppins({ subsets: ["latin"], weight: "400" });

// Define metadata for the page
export const metadata: Metadata = {
  title: "MADC",
  description: "An MADC project",
};

// Define RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
