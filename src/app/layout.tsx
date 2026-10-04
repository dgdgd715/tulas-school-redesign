import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Tulas International School",
  description: "Tulas International School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
