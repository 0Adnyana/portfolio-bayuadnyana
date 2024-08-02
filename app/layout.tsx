import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import {Toaster} from "react-hot-toast"

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
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${roboto_mono.variable} ${playfair_display.variable} bg-background`}>
        {children}
        <Toaster 
          position="top-right"
        />
        </body>
    </html>
  );
}
