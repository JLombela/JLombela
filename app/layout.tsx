import type React from "react"
import type { Metadata } from "next"
import { Inter, IBM_Plex_Mono } from "next/font/google"
import { headers } from "next/headers"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { ErrorBoundary } from "@/components/error-boundary"
import { ToastProvider } from "@/components/toast-provider"
import "./globals.css"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Axalio | Tactical Command Interface",
  description: "Next-generation platform for global asset exchange.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = headers().get("x-next-pathname") || ""
  const isAuthPage = pathname.startsWith("/auth")

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontMono.variable)}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ToastProvider>
              {isAuthPage ? (
                <div className="flex h-screen items-center justify-center bg-neutral-950">{children}</div>
              ) : (
                <div className="flex h-screen overflow-hidden bg-background">
                  {/* Fixed Sidebar */}
                  <div className="hidden md:flex">
                    <AppSidebar />
                  </div>
                  <div className="flex flex-1 flex-col overflow-hidden">
                    {/* Fixed Header */}
                    <DashboardHeader />
                    {/* Scrollable Main Content */}
                    <main className="flex-1 overflow-y-auto">
                      <div className="h-full w-full p-4 md:p-6 lg:p-8">
                        <ErrorBoundary>{children}</ErrorBoundary>
                      </div>
                    </main>
                  </div>
                </div>
              )}
            </ToastProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
