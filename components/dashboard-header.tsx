"use client"

import { usePathname } from "next/navigation"
import { UserProfileDropdown } from "./user-profile-dropdown"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"

type AppHeaderProps = {
  onMenuClick: () => void
}

export function DashboardHeader({ onMenuClick }: AppHeaderProps) {
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
  const pageDescription = "Real-time tactical overview of global operations"

  return (
    <header className="flex h-16 items-center justify-between bg-card px-4 md:px-6 border-b border-border sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div>
          <h1 className="text-lg font-bold tracking-wider font-mono text-foreground uppercase">{pageTitle}</h1>
          <p className="text-xs text-muted-foreground font-mono hidden md:block">{pageDescription}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <UserProfileDropdown />
      </div>
    </header>
  )
}
