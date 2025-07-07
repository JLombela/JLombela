"use client"

import { useState } from "react"
import { Search, Eye, Settings, Users, Shield, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const adminActions = [
    {
      id: "ADM-001",
      action: "User Role Updated",
      user: "john.doe@goldenmining.com",
      timestamp: "2025-01-07 14:32:15",
      details: "Changed role from User to Seller",
      status: "COMPLETED",
      statusColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "ADM-002",
      action: "Document Verification",
      user: "system@axalio.com",
      timestamp: "2025-01-07 13:45:22",
      details: "KYC document approved for Swiss Refinery AG",
      status: "COMPLETED",
      statusColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "ADM-003",
      action: "Deal Status Change",
      user: "admin@axalio.com",
      timestamp: "2025-01-07 12:18:44",
      details: "Deal DEAL-2025-001 marked as completed",
      status: "COMPLETED",
      statusColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "ADM-004",
      action: "Security Alert",
      user: "security@axalio.com",
      timestamp: "2025-01-07 11:22:33",
      details: "Multiple failed login attempts detected",
      status: "INVESTIGATING",
      statusColor: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ]

  const stats = [
    { label: "TOTAL USERS", value: "156", icon: Users, color: "text-blue-500" },
    { label: "ACTIVE SESSIONS", value: "23", icon: Activity, color: "text-emerald-500" },
    { label: "SECURITY ALERTS", value: "3", icon: Shield, color: "text-yellow-500" },
    { label: "SYSTEM UPTIME", value: "99.9%", icon: Settings, color: "text-emerald-500" },
  ]

  const filteredActions = adminActions.filter(
    (action) =>
      action.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">ADMIN PANEL</h2>
            <p className="text-neutral-400 font-mono">System administration and monitoring</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">
            SYSTEM SETTINGS
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-700 p-4 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 font-mono uppercase">{stat.label}</p>
                  <p className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 w-4 h-4" />
          <Input
            placeholder="Search admin actions by type, user, details, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono"
          />
        </div>

        {/* Admin Actions Table */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase">RECENT ADMIN ACTIONS</h3>
          </div>
          <div className="overflow-x-auto">
            <div className="space-y-2 p-4">
              {filteredActions.map((action) => (
                <div key={action.id} className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-bold font-mono">{action.action}</h4>
                        <span className="text-xs text-neutral-400 font-mono">{action.id}</span>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-neutral-500 font-mono">User:</span>
                          <span className="text-white ml-2 font-mono">{action.user}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Timestamp:</span>
                          <span className="text-white ml-2 font-mono">{action.timestamp}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Details:</span>
                          <span className="text-white ml-2 font-mono">{action.details}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3 py-1 rounded text-xs font-mono uppercase ${action.bgColor} ${action.statusColor}`}
                      >
                        {action.status}
                      </div>
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-emerald-500">
                        <Eye className="w-4 h-4" />
                        <span className="sr-only">VIEW</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
