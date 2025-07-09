"use client"

import { Home, LineChart, Users, FileText } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/deals", icon: LineChart, label: "Deals" },
  { href: "/buyers", icon: Users, label: "Buyers" },
  { href: "/documents", icon: FileText, label: "Documents" },
]

export function Sidebar() {
  return (
    <aside className="hidden md:flex h-full w-56 shrink-0 flex-col bg-zinc-900 border-r border-zinc-800">
      <div className="p-4 text-lg font-semibold tracking-widest">
        AXALIO&nbsp;<span className="text-[#39C64C]">TCI</span>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800 transition-colors",
              { "bg-zinc-800 text-[#39C64C] font-semibold": href === "/dashboard" }, // crude active demo
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
