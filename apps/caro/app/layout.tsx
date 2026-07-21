import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import Footer from "@/components/footer"

export const metadata = {
  title: "Caro Online",
  description: "Realtime multiplayer Caro (Gomoku) with emoji reactions and sound effects.",
  generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
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