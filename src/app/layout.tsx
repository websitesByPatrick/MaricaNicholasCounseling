import type { Metadata } from "next";
import { Roboto, Merienda } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700", "900", "100", "300", "500", "600", "800"],
});

const merienda = Merienda({
  subsets: ["latin"],
  variable: "--font-merienda",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Marica Nicholas Counseling",
  description: "Counseling services by Marica Nicholas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merienda.variable} ${roboto.variable}`}>
      <body className="layout">
        <Header />

        <main className="flex flex-col w-full justify-center items-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
