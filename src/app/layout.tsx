import type { Metadata } from "next";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700", "900", "100", "300", "500", "600", "800"],
});




import "./globals.css";



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
    <html lang="en" className={roboto.variable}>
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
