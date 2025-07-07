"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Settings, Palette, Bell, Shield, Activity, LogOut, ChevronDown } from "lucide-react"

// Mock user data - in real app this would come from auth context
const currentUser = {
  id: "usr_001",
  name: "Sarah Chen",
  email: "sarah.chen@axalio.com",
  role: "admin",
  department: "Operations",
  lastLogin: "2024-01-07 14:23:00",
  avatar: "/placeholder.svg?height=40&width=40",
  status: "online",
  permissions: ["admin", "kyc_reviewer", "deal_manager"],
}

export function UserProfileDropdown() {
  const handleLogout = () => {
    // In real app, this would handle logout logic
    console.log("Logging out...")
  }

  const handleSettings = () => {
    // Navigate to settings page
    console.log("Opening settings...")
  }

  const handlePreferences = () => {
    // Navigate to preferences page
    console.log("Opening preferences...")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 px-3 py-2 h-auto hover:bg-neutral-800 border border-neutral-700"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
            <AvatarFallback className="bg-emerald-600 text-white font-mono text-xs">
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="font-mono text-sm text-white tracking-wider">{currentUser.name}</span>
            <span className="font-mono text-xs text-neutral-400 uppercase">{currentUser.role}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-neutral-400" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80 bg-neutral-900 border-neutral-700" align="end" sideOffset={5}>
        {/* User Info Header */}
        <DropdownMenuLabel className="p-4 pb-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
              <AvatarFallback className="bg-emerald-600 text-white font-mono">
                {currentUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-mono text-white font-medium tracking-wider">{currentUser.name}</span>
              <span className="font-mono text-xs text-neutral-400">{currentUser.email}</span>
              <div className="flex items-center gap-2 mt-1">
                <Badge
                  variant="outline"
                  className="text-xs font-mono bg-emerald-600/20 text-emerald-400 border-emerald-600"
                >
                  {currentUser.role.toUpperCase()}
                </Badge>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        {/* User Stats */}
        <div className="px-4 pb-2">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-neutral-800 p-2 rounded">
              <div className="text-neutral-400">DEPARTMENT</div>
              <div className="text-white">{currentUser.department}</div>
            </div>
            <div className="bg-neutral-800 p-2 rounded">
              <div className="text-neutral-400">LAST LOGIN</div>
              <div className="text-white">14:23 UTC</div>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-neutral-700" />

        {/* Menu Items */}
        <DropdownMenuItem
          onClick={handleSettings}
          className="font-mono text-sm hover:bg-neutral-800 cursor-pointer px-4 py-3"
        >
          <User className="mr-3 h-4 w-4" />
          <span>PROFILE SETTINGS</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handlePreferences}
          className="font-mono text-sm hover:bg-neutral-800 cursor-pointer px-4 py-3"
        >
          <Settings className="mr-3 h-4 w-4" />
          <span>PREFERENCES</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="font-mono text-sm hover:bg-neutral-800 cursor-pointer px-4 py-3">
          <Palette className="mr-3 h-4 w-4" />
          <span>THEME SETTINGS</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="font-mono text-sm hover:bg-neutral-800 cursor-pointer px-4 py-3">
          <Bell className="mr-3 h-4 w-4" />
          <span>NOTIFICATIONS</span>
          <Badge className="ml-auto bg-emerald-600 text-white text-xs">3</Badge>
        </DropdownMenuItem>

        <DropdownMenuItem className="font-mono text-sm hover:bg-neutral-800 cursor-pointer px-4 py-3">
          <Shield className="mr-3 h-4 w-4" />
          <span>SECURITY</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="font-mono text-sm hover:bg-neutral-800 cursor-pointer px-4 py-3">
          <Activity className="mr-3 h-4 w-4" />
          <span>ACTIVITY LOG</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-neutral-700" />

        {/* Permissions */}
        <div className="px-4 py-2">
          <div className="text-xs font-mono text-neutral-400 mb-2">PERMISSIONS</div>
          <div className="flex flex-wrap gap-1">
            {currentUser.permissions.map((permission) => (
              <Badge
                key={permission}
                variant="outline"
                className="text-xs font-mono bg-blue-600/20 text-blue-400 border-blue-600"
              >
                {permission.replace("_", " ").toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>

        <DropdownMenuSeparator className="bg-neutral-700" />

        {/* Logout */}
        <DropdownMenuItem
          onClick={handleLogout}
          className="font-mono text-sm hover:bg-red-900/50 cursor-pointer px-4 py-3 text-red-400 hover:text-red-300"
        >
          <LogOut className="mr-3 h-4 w-4" />
          <span>LOGOUT</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
