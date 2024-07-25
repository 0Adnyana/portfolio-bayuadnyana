import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: '--font-roboto', 
  subsets: ["latin"], 
  weight: ['100', '300', '400', '500', '700', '900' ] });

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ["latin"] });
  
const playfair_display = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Bayu Adnyana ePortfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto_mono.variable} ${playfair_display.variable} bg-background`}>{children}</body>
    </html>
  );
}
