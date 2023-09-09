import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blooming Brands.",
  description: "Websites, Branding, and Online Marketing. ",
};

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
        <Footer/>
      </body>
    </html>
  );
}
