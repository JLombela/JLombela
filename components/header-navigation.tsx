"use client"

import { Search, Bell, Settings, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MainNavigation } from "./main-navigation"

export function HeaderNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Left: Brand and Navigation */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <h1 className="font-mono text-lg font-bold text-emerald-400 tracking-wider">AXALIO</h1>
            <p className="font-mono text-xs text-neutral-400 tracking-wide">MVP v1.0.0 BETA</p>
          </div>

          <nav className="hidden md:flex">
            <MainNavigation />
          </nav>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              placeholder="Search platform..."
              className="pl-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400 font-mono text-sm"
            />
          </div>
        </div>

        {/* Right: System Status, Notifications, User Profile */}
        <div className="flex items-center gap-4">
          {/* System Status */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 tracking-wide">SYSTEM ONLINE</span>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4 text-neutral-400" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-600 text-xs p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-emerald-600 text-black font-mono text-xs">SC</AvatarFallback>
                </Avatar>
                <div className="hidden lg:flex flex-col items-start">
                  <span className="font-mono text-xs text-white">Sarah Chen</span>
                  <span className="font-mono text-xs text-neutral-400">Operations Manager</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-neutral-900 border-neutral-700" align="end">
              <div className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-emerald-600 text-black font-mono">SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-mono text-sm text-white">Sarah Chen</p>
                    <p className="font-mono text-xs text-neutral-400">sarah.chen@axalio.com</p>
                    <Badge className="bg-emerald-600 text-black font-mono text-xs mt-1">Operations Manager</Badge>
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-neutral-700" />
              <DropdownMenuItem className="font-mono text-xs text-neutral-300 hover:text-white cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="font-mono text-xs text-neutral-300 hover:text-white cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-neutral-700" />
              <DropdownMenuItem className="font-mono text-xs text-red-400 hover:text-red-300 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
