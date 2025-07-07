import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Axalio MVP - Tactical Command Interface",
  description: "Advanced tactical command interface for Axalio MVP platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full bg-black">
      <body className={`${inter.className} bg-black min-h-full w-full overflow-x-hidden`}>
        <SidebarProvider>
          <div className="min-h-screen w-full bg-black overflow-x-hidden">
            <main className="w-full h-full bg-black overflow-x-hidden">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
