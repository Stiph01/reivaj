import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/component/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reivaj",
  description: "Enfatiza la exactitud contable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
