import type { Metadata } from "next";
import { Roboto, Merienda } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <div className="flex-grow">{children}</div>

          <Footer />
       
      </body>

    </html>
  );
}
