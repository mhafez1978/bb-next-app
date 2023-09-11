import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
