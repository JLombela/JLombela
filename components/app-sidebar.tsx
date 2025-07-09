"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Command,
  LayoutDashboard,
  Handshake,
  FileText,
  Users,
  Briefcase,
  UserCheck,
  HandCoins,
  ShieldCheck,
  Settings,
  ChevronLeft,
  ChevronRight,
  Network,
  UserCog,
  Bot,
  GitBranch,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navSections = [
  {
    title: "COMMAND",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/deals", label: "Deals", icon: Handshake },
      { href: "/documents", label: "Documents", icon: FileText },
    ],
  },
  {
    title: "NETWORK",
    items: [
      { href: "/buyers", label: "Buyers", icon: Users },
      { href: "/sellers", label: "Sellers", icon: Briefcase },
      { href: "/brokers", label: "Brokers", icon: UserCheck },
    ],
  },
  {
    title: "COMPLIANCE",
    items: [
      { href: "/kyc-kyb", label: "KYC/KYB", icon: ShieldCheck },
      { href: "/commissions", label: "Commissions", icon: HandCoins },
      { href: "/admin", label: "Admin Panel", icon: Settings },
    ],
  },
  {
    title: "SYSTEMS",
    items: [
      { href: "/systems/user-roles", label: "User Roles", icon: UserCog },
      { href: "/systems/operations", label: "Operations", icon: GitBranch },
      { href: "/systems/agent-network", label: "Agent Network", icon: Network },
      { href: "/systems/command-center", label: "Command Center", icon: Bot },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const NavLink = ({ item }: { item: any }) => (
    <Link href={item.href} title={isCollapsed ? item.label : ""}>
      <Button
        variant={pathname === item.href ? "secondary" : "ghost"}
        className={cn(
          "w-full justify-start font-mono text-sm h-10",
          isCollapsed ? "px-2" : "px-3",
          pathname === item.href && "bg-axalio-green/10 text-axalio-green hover:bg-axalio-green/20",
          pathname !== item.href && "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200",
        )}
      >
        <item.icon className={cn("h-4 w-4 shrink-0", !isCollapsed && "mr-3")} />
        {!isCollapsed && item.label}
      </Button>
    </Link>
  )

  return (
    <aside
      className={cn(
        "flex h-full flex-col bg-neutral-900 border-r border-neutral-800 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-60",
      )}
    >
      <div className="flex h-full flex-col">
        <div
          className={cn(
            "flex items-center h-[65px] border-b border-neutral-800",
            isCollapsed ? "justify-center" : "px-4",
          )}
        >
          <Command className="h-6 w-6 text-axalio-green flex-shrink-0" />
          {!isCollapsed && (
            <div className="ml-3">
              <h1 className="text-base font-bold text-foreground font-mono tracking-wider">AXALIO</h1>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-4 py-4 px-2 overflow-y-auto">
          {navSections.map((section) => (
            <div key={section.title}>
              {!isCollapsed && (
                <h2 className="px-3 mb-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider font-mono">
                  {section.title}
                </h2>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto p-2 border-t border-neutral-800">
          <Button
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full justify-center h-9 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </aside>
  )
}
