"use client"

import { UserProfileDropdown } from "./user-profile-dropdown"
import { Bell, Search, Command } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Command className="h-6 w-6 text-emerald-400" />
            <span className="font-mono text-lg font-bold text-white tracking-wider">AXALIO</span>
          </div>
          <div className="h-6 w-px bg-neutral-700" />
          <span className="font-mono text-sm text-neutral-400 tracking-wider">COMMAND CENTER</span>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              placeholder="Search deals, users, documents..."
              className="pl-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 font-mono text-sm"
            />
          </div>
        </div>

        {/* Right side - Notifications and User Profile */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover:bg-neutral-800 border border-neutral-700">
            <Bell className="h-4 w-4 text-neutral-400" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-600 text-white text-xs p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>

          {/* System Status */}
          <div className="flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-700 rounded">
            <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-emerald-400">SYSTEM ONLINE</span>
          </div>

          {/* User Profile Dropdown */}
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  )
}
