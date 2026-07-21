import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hi",
  description: "Hi there",
  generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'