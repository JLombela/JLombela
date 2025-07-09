"use client"

import { Bell, Check, FileText, ShieldCheck, DollarSign, TriangleAlert } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const mockNotifications = [
  {
    id: "deal-1",
    icon: <FileText className="h-5 w-5 text-blue-400" />,
    title: "Deal #AX789-AU",
    description: "Contract signed by buyer. Awaiting final confirmation.",
    timestamp: "5 min ago",
    unread: true,
  },
  {
    id: "kyc-1",
    icon: <ShieldCheck className="h-5 w-5 text-green-500" />,
    title: "KYC Approved",
    description: "Seller 'Ghana Gold Co.' has been verified.",
    timestamp: "25 min ago",
    unread: true,
  },
  {
    id: "commission-1",
    icon: <DollarSign className="h-5 w-5 text-green-400" />,
    title: "Commission Ready",
    description: "$12,500 commission from deal #AX782-BR is ready for payout.",
    timestamp: "1 hour ago",
    unread: false,
  },
  {
    id: "system-1",
    icon: <TriangleAlert className="h-5 w-5 text-red-500" />,
    title: "System Maintenance",
    description: "Scheduled maintenance tonight at 23:00 UTC.",
    timestamp: "3 hours ago",
    unread: false,
  },
]

const unreadCount = mockNotifications.filter((n) => n.unread).length

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-neutral-400 hover:bg-neutral-800 hover:text-white"
          aria-label={`Open notifications (${unreadCount} unread)`}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-bold leading-none text-black">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-96 bg-[#1c1c22] border-neutral-700 text-neutral-200 p-0">
        <DropdownMenuLabel className="px-4 py-3 text-base font-semibold text-white">Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-700" />
        <div className="max-h-96 overflow-y-auto">
          {mockNotifications.map((n) => (
            <DropdownMenuItem
              key={n.id}
              className="flex items-start gap-4 px-4 py-3 hover:bg-neutral-800/60 focus:bg-neutral-800/60 cursor-pointer"
            >
              <div className="mt-0.5">{n.icon}</div>
              <div className="flex-grow">
                <p className="font-semibold text-white">{n.title}</p>
                <p className="text-sm text-neutral-400">{n.description}</p>
                <p className="text-xs text-neutral-500 mt-1">{n.timestamp}</p>
              </div>
              {n.unread && <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />}
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator className="bg-neutral-700" />
        <div className="flex items-center justify-between px-4 py-2">
          <Button
            variant="outline"
            className="h-8 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300 focus:ring-green-500 bg-transparent px-3"
          >
            View All Notifications
          </Button>
          <Button variant="ghost" className="h-8 text-neutral-400 hover:bg-neutral-800 hover:text-white px-3">
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationsDropdown
