"use client"

import { usePathname } from "next/navigation"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserProfileDropdown } from "@/components/user-profile-dropdown"
import { NotificationsDropdown } from "@/components/notifications-dropdown"
import { AppSidebar } from "./app-sidebar"

export function DashboardHeader() {
  const pathname = usePathname()

  const getPageTitle = (path: string) => {
    if (path.startsWith("/deals/")) return "DEAL DETAILS"
    if (path.startsWith("/contracts/")) return "CONTRACT DETAILS"
    if (path.startsWith("/admin/users")) return "USER MANAGEMENT"
    if (path.startsWith("/admin/system-config")) return "SYSTEM CONFIGURATION"

    const titles: { [key: string]: string } = {
      "/dashboard": "GLOBAL COMMAND DASHBOARD",
      "/command-center": "COMMAND CENTER",
      "/operations": "OPERATIONS CENTER",
      "/agent-network": "AGENT NETWORK",
      "/deals": "DEAL MANAGEMENT",
      "/buyers": "BUYER PROFILES",
      "/sellers": "SELLER PROFILES",
      "/brokers": "BROKER PROFILES",
      "/documents": "DOCUMENT VAULT",
      "/commissions": "COMMISSIONS & PAYOUTS",
      "/kyc-kyb": "KYC/KYB VERIFICATION",
      "/intelligence": "MARKET INTELLIGENCE",
      "/systems": "SYSTEMS STATUS",
      "/admin": "ADMIN PANEL",
      "/settings": "SETTINGS",
      "/contracts": "CONTRACTS",
    }
    return titles[path] || "AXALIO"
  }

  const pageTitle = getPageTitle(pathname)

  return (
    <header className="sticky top-0 z-30 flex h-[65px] items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 lg:hidden bg-transparent">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-0 w-64 border-r-0">
            <AppSidebar />
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold uppercase tracking-wider text-foreground font-mono hidden md:block">
          {pageTitle}
        </h1>
      </div>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <NotificationsDropdown />
        <UserProfileDropdown />
      </div>
    </header>
  )
}
