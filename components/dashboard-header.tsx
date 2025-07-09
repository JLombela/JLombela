"use client"

import { usePathname } from "next/navigation"
import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { AppSidebar } from "./app-sidebar"

const getPageTitle = (pathname: string) => {
  if (pathname === "/dashboard") return "Dashboard"
  if (pathname.startsWith("/deals")) return "Deals"
  if (pathname.startsWith("/documents")) return "Documents"
  if (pathname.startsWith("/buyers")) return "Buyers"
  if (pathname.startsWith("/sellers")) return "Sellers"
  if (pathname.startsWith("/brokers")) return "Brokers"
  if (pathname.startsWith("/kyc-kyb")) return "KYC/KYB"
  if (pathname.startsWith("/commissions")) return "Commissions"
  if (pathname.startsWith("/admin")) return "Admin Panel"
  if (pathname.startsWith("/systems")) {
    const pathEnd = pathname.split("/").pop()
    switch (pathEnd) {
      case "user-roles":
        return "User Roles"
      case "operations":
        return "Operations"
      case "agent-network":
        return "Agent Network"
      case "command-center":
        return "Command Center"
      default:
        return "Systems"
    }
  }
  return "Axalio"
}

export function DashboardHeader() {
  const pathname = usePathname()
  const title = getPageTitle(pathname)

  return (
    <header className="flex h-[65px] shrink-0 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur-sm md:px-6 lg:px-8">
      {/* Mobile Navigation */}
      <div className="md:hidden">
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

      <div className="flex-1">
        {/* FIX: Added font-mono for typographic consistency */}
        <h1 className="font-mono text-lg font-semibold uppercase tracking-wider text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
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
