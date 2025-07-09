"use client"

import { usePathname } from "next/navigation"
import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { AppSidebar } from "./app-sidebar"

const getPageTitle = (pathname: string): string => {
  if (pathname === "/dashboard") return "DASHBOARD"
  if (pathname.startsWith("/deals")) return "DEALS"
  if (pathname.startsWith("/documents")) return "DOCUMENTS"
  if (pathname.startsWith("/buyers")) return "BUYERS"
  if (pathname.startsWith("/sellers")) return "SELLERS"
  if (pathname.startsWith("/brokers")) return "BROKERS"
  if (pathname.startsWith("/kyc-kyb")) return "KYC/KYB"
  if (pathname.startsWith("/commissions")) return "COMMISSIONS"
  if (pathname.startsWith("/admin")) return "ADMIN PANEL"
  if (pathname.startsWith("/settings")) return "SETTINGS"
  if (pathname.startsWith("/systems")) {
    const pathEnd = pathname.split("/").pop()
    switch (pathEnd) {
      case "user-roles":
        return "USER ROLES"
      case "operations":
        return "OPERATIONS"
      case "agent-network":
        return "AGENT NETWORK"
      case "command-center":
        return "COMMAND CENTER"
      default:
        return "SYSTEMS"
    }
  }
  return "AXALIO"
}

export function DashboardHeader() {
  const pathname = usePathname()
  const title = getPageTitle(pathname)

  return (
    <header className="sticky top-0 flex h-[65px] shrink-0 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-sm z-30">
      {/* Mobile Navigation */}
      <div className="md:hidden px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 bg-transparent">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0 w-64 border-r-0">
            <AppSidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Title - Left aligned with main content */}
      <div className="flex-1 px-4 md:px-6 lg:px-8">
        <h1 className="font-mono text-lg font-semibold uppercase tracking-wider text-foreground">{title}</h1>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4 px-4 md:px-6 lg:px-8">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[300px] focus:border-axalio-green"
          />
        </div>
        <NotificationsDropdown />
        <UserProfileDropdown />
      </div>
    </header>
  )
}
