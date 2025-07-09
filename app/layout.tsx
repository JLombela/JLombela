import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono as RobotoMono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const robotoMono = RobotoMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Axalio - Tactical Command Interface",
  description: "Unified command center for global commodity trading.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-black font-sans antialiased", inter.variable, robotoMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex h-screen w-full overflow-hidden">
            {/* Desktop Sidebar */}
            <div className="hidden md:flex">
              <AppSidebar />
            </div>
            <div className="flex flex-1 flex-col overflow-hidden">
              <DashboardHeader />
              <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
