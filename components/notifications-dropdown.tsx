"use client"

import { Bell, Check, X, AlertCircle, Info, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mock notification data
const notifications = [
  {
    id: 1,
    type: "alert",
    title: "KYC Review Required",
    message: "New client documentation needs review",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "success",
    title: "Deal Completed",
    message: "Transaction #TX-2024-001 has been finalized",
    time: "15 min ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "System Update",
    message: "Platform maintenance scheduled for tonight",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "alert",
    title: "Compliance Alert",
    message: "AML screening flagged for review",
    time: "2 hours ago",
    read: true,
  },
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "alert":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />
    case "success":
      return <CheckCircle className="h-4 w-4 text-axalio-green" />
    case "info":
      return <Info className="h-4 w-4 text-blue-500" />
    default:
      return <Bell className="h-4 w-4 text-neutral-400" />
  }
}

export function NotificationsDropdown() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9 hover:bg-accent">
          <Bell className="h-5 w-5 text-muted-foreground" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-axalio-green text-black text-xs font-bold">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80 bg-popover border-border font-mono" align="end" sideOffset={10}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-2">
          <h3 className="text-sm font-semibold text-popover-foreground">Notifications</h3>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="text-xs font-semibold border-axalio-green text-axalio-green bg-transparent px-2 py-0.5"
            >
              {unreadCount} NEW
            </Badge>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-accent">
              <Check className="h-3 w-3 text-muted-foreground" />
            </Button>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-border" />

        {/* Notifications List */}
        <ScrollArea className="h-80">
          <div className="py-1">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex items-start gap-3 p-4 cursor-pointer hover:bg-accent focus:bg-accent"
              >
                <div className="flex-shrink-0 mt-0.5">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-popover-foreground truncate">{notification.title}</p>
                    {!notification.read && <div className="h-2 w-2 bg-axalio-green rounded-full flex-shrink-0 ml-2" />}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 hover:bg-accent"
                >
                  <X className="h-3 w-3 text-muted-foreground" />
                </Button>
              </DropdownMenuItem>
            ))}
          </div>
        </ScrollArea>

        <DropdownMenuSeparator className="bg-border" />

        {/* Footer */}
        <div className="p-2">
          <Button
            variant="ghost"
            className="w-full text-xs text-muted-foreground hover:text-accent-foreground hover:bg-accent"
          >
            View All Notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
