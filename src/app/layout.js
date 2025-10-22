import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/component/nav"
import Footer from "@/component/footer"
import ChatBot from "@/component/ChatBot"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Reivaj",
  description: "Enfatiza la exactitud contable",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 relative`}
      >
        <Nav />
        <main className="pt-14">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
