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

// Mock user data - in a real app this would come from an auth context
const currentUser = {
  name: "John Lombela",
  email: "john@axalio.com",
  avatar: "/images/john-lombela.jpg",
  department: "Operations",
  lastLogin: "14:23 UTC",
  permissions: ["Admin", "KYC Reviewer", "Deal Manager"],
}

export function UserProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 px-2 h-auto hover:bg-neutral-800">
          <Avatar className="h-8 w-8">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
            <AvatarFallback className="bg-axalio-green font-bold text-black">JL</AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="font-mono text-sm font-medium text-white">{currentUser.name}</span>
            <span className="font-mono text-xs text-neutral-400">Admin</span>
          </div>
          <ChevronDown className="h-4 w-4 text-neutral-400" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80 bg-neutral-900 border-neutral-700 font-mono" align="end" sideOffset={10}>
        {/* User Info Header */}
        <DropdownMenuLabel className="p-4 pb-3">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
              <AvatarFallback className="bg-axalio-green text-black font-mono text-lg">JL</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-white">{currentUser.name}</span>
              <span className="text-sm text-neutral-400">{currentUser.email}</span>
              <div className="flex items-center gap-3 mt-1.5">
                <Badge
                  variant="outline"
                  className="text-xs font-semibold border-axalio-green text-axalio-green bg-transparent px-2 py-0.5"
                >
                  ADMIN
                </Badge>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 bg-axalio-green rounded-full" />
                  <span className="text-xs font-semibold text-axalio-green">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        {/* User Stats */}
        <div className="px-4 pb-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-neutral-800 p-2 rounded">
              <div className="text-neutral-400 mb-0.5">Department</div>
              <div className="text-white font-semibold">{currentUser.department}</div>
            </div>
            <div className="bg-neutral-800 p-2 rounded">
              <div className="text-neutral-400 mb-0.5">Last Login</div>
              <div className="text-white font-semibold">{currentUser.lastLogin}</div>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-neutral-700" />

        {/* Menu Items */}
        <div className="py-1">
          <DropdownMenuItem className="text-neutral-300 focus:bg-neutral-800 focus:text-white cursor-pointer py-2.5 px-4">
            <User className="mr-3 h-4 w-4" />
            <span>Profile Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="text-neutral-300 focus:bg-neutral-800 focus:text-white cursor-pointer py-2.5 px-4">
            <Settings className="mr-3 h-4 w-4" />
            <span>Preferences</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="text-neutral-300 focus:bg-neutral-800 focus:text-white cursor-pointer py-2.5 px-4">
            <Palette className="mr-3 h-4 w-4" />
            <span>Theme Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="text-neutral-300 focus:bg-neutral-800 focus:text-white cursor-pointer py-2.5 px-4">
            <Bell className="mr-3 h-4 w-4" />
            <span>Notifications</span>
            <Badge className="ml-auto bg-axalio-green text-black text-xs font-bold h-5 w-5 flex items-center justify-center p-0">
              3
            </Badge>
          </DropdownMenuItem>

          <DropdownMenuItem className="text-neutral-300 focus:bg-neutral-800 focus:text-white cursor-pointer py-2.5 px-4">
            <Shield className="mr-3 h-4 w-4" />
            <span>Security</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="text-neutral-300 focus:bg-neutral-800 focus:text-white cursor-pointer py-2.5 px-4">
            <Activity className="mr-3 h-4 w-4" />
            <span>Activity Log</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="bg-neutral-700" />

        {/* Permissions */}
        <div className="px-4 py-3">
          <div className="text-xs text-neutral-400 mb-2">Permissions</div>
          <div className="flex flex-wrap gap-2">
            {currentUser.permissions.map((permission) => (
              <Badge
                key={permission}
                variant="outline"
                className="text-xs font-semibold bg-transparent border-blue-500 text-blue-400"
              >
                {permission.toUpperCase()}
              </Badge>
            ))}
          </div>
        </div>

        <DropdownMenuSeparator className="bg-neutral-700" />

        {/* Logout */}
        <DropdownMenuItem className="text-red-400 focus:bg-red-900/50 focus:text-red-300 cursor-pointer py-2.5 px-4">
          <LogOut className="mr-3 h-4 w-4" />
          <span className="font-semibold">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
