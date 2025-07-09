"use client"

import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Settings,
  Bell,
  Shield,
  Activity,
  LogOut,
  ChevronDown,
  Palette,
  Monitor,
  Sun,
  Moon,
  Check,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

// Mock user data
const currentUser = {
  name: "John Lombela",
  email: "john@axalio.com",
  avatar: "/images/john-lombela.jpg",
  department: "Operations",
  lastLogin: "14:23 UTC",
  permissions: ["Admin", "KYC Reviewer", "Deal Manager"],
}

export function UserProfileDropdown() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 px-2 h-auto hover:bg-accent">
          <Avatar className="h-8 w-8">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
            <AvatarFallback className="bg-axalio-green font-bold text-black">JL</AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="font-mono text-sm font-medium text-foreground">{currentUser.name}</span>
            <span className="font-mono text-xs text-muted-foreground">Admin</span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80 font-mono p-0" align="end" sideOffset={10}>
        <div className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
              <AvatarFallback className="bg-axalio-green text-black font-mono text-lg">JL</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-foreground">{currentUser.name}</span>
              <span className="text-sm text-muted-foreground">{currentUser.email}</span>
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
          <div className="grid grid-cols-2 gap-2 text-xs mt-4">
            <div className="bg-muted p-2 rounded">
              <div className="text-muted-foreground mb-0.5">Department</div>
              <div className="text-foreground font-semibold">{currentUser.department}</div>
            </div>
            <div className="bg-muted p-2 rounded">
              <div className="text-muted-foreground mb-0.5">Last Login</div>
              <div className="text-foreground font-semibold">{currentUser.lastLogin}</div>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <div className="py-1">
          <DropdownMenuItem asChild className="cursor-pointer py-2.5 px-4">
            <Link href="/settings">
              <User className="mr-3 h-4 w-4" />
              <span>Profile Settings</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-4">
            <Settings className="mr-3 h-4 w-4" />
            <span>Preferences</span>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="py-2.5 px-4 cursor-pointer">
              <Palette className="mr-3 h-4 w-4" />
              <span>Theme Settings</span>
              
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent sideOffset={8} alignOffset={-5}>
                <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                  {theme === "light" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                  {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>System</span>
                  {theme === "system" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-4">
            <Bell className="mr-3 h-4 w-4" />
            <span>Notifications</span>
            <Badge className="ml-auto bg-axalio-green text-black text-xs font-bold h-5 w-5 flex items-center justify-center p-0">
              3
            </Badge>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-4">
            <Shield className="mr-3 h-4 w-4" />
            <span>Security</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-4">
            <Activity className="mr-3 h-4 w-4" />
            <span>Activity Log</span>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        <div className="px-4 py-3">
          <div className="text-xs text-muted-foreground mb-2">Permissions</div>
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

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-red-400 focus:text-red-300 cursor-pointer py-2.5 px-4">
          <LogOut className="mr-3 h-4 w-4" />
          <span className="font-semibold">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
