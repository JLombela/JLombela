"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Building, Calendar, Activity, DollarSign, FileText, Phone, MapPin, Clock, X } from "lucide-react"

interface UserDetailsModalProps {
  user: any
  isOpen: boolean
  onClose: () => void
}

export function UserDetailsModal({ user, isOpen, onClose }: UserDetailsModalProps) {
  if (!user) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "verified":
        return "bg-emerald-500/20 text-emerald-500 border-emerald-500"
      case "pending":
        return "bg-orange-500/20 text-orange-500 border-orange-500"
      case "suspended":
        return "bg-red-500/20 text-red-500 border-red-500"
      default:
        return "bg-neutral-500/20 text-neutral-500 border-neutral-500"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk?.toLowerCase()) {
      case "low risk":
        return "bg-emerald-500/20 text-emerald-500 border-emerald-500"
      case "medium risk":
        return "bg-orange-500/20 text-orange-500 border-orange-500"
      case "high risk":
        return "bg-red-500/20 text-red-500 border-red-500"
      default:
        return "bg-neutral-500/20 text-neutral-500 border-neutral-500"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-neutral-900 border-neutral-700 text-white">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-mono tracking-wider text-white uppercase">
            {user.id || user.buyerId || user.sellerId || user.brokerId}
          </DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-neutral-400 hover:text-white">
            
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* User Profile Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt={user.name} />
                  <AvatarFallback className="bg-emerald-600 text-white font-mono text-lg">
                    {user.name
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("") || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold font-mono text-white">{user.name}</h3>
                  <p className="text-neutral-400 font-mono text-sm">{user.email}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge className={`font-mono text-xs border ${getStatusColor(user.status)}`}>{user.status}</Badge>
                    {user.risk && (
                      <Badge className={`font-mono text-xs border ${getRiskColor(user.risk)}`}>{user.risk}</Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm font-mono">
                {user.company && (
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-400">COMPANY:</span>
                    <span className="text-white">{user.company}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">EMAIL:</span>
                  <span className="text-white">{user.email}</span>
                </div>

                {user.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-400">PHONE:</span>
                    <span className="text-white">{user.phone}</span>
                  </div>
                )}

                {user.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-400">LOCATION:</span>
                    <span className="text-white">{user.location}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-400">JOINED:</span>
                  <span className="text-white">{user.joined || user.lastActive || "2024-01-01"}</span>
                </div>

                {user.lastActive && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-400">LAST ACTIVE:</span>
                    <span className="text-white">{user.lastActive}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details and Statistics */}
          <div className="lg:col-span-2 space-y-4">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {user.purchases && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-neutral-400 font-mono">PURCHASES</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.purchases}</span>
                </div>
              )}

              {user.sales && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-neutral-400 font-mono">SALES</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.sales}</span>
                </div>
              )}

              {user.commissions && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-neutral-400 font-mono">COMMISSIONS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.commissions}</span>
                </div>
              )}

              {user.deals && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-neutral-400 font-mono">DEALS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.deals}</span>
                </div>
              )}

              {user.products && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-neutral-400 font-mono">PRODUCTS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.products}</span>
                </div>
              )}

              {user.clients && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-neutral-400 font-mono">CLIENTS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.clients}</span>
                </div>
              )}

              {user.rating && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-neutral-400 font-mono">RATING</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.rating}</span>
                </div>
              )}

              {user.successRate && (
                <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs text-neutral-400 font-mono">SUCCESS RATE</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-white">{user.successRate}</span>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">RECENT ACTIVITY</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm font-mono">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-neutral-400">2 hours ago:</span>
                  <span className="text-white">Updated profile information</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-neutral-400">1 day ago:</span>
                  <span className="text-white">Completed KYC verification</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-neutral-400">3 days ago:</span>
                  <span className="text-white">Submitted new documentation</span>
                </div>
              </div>
            </div>

            {/* Compliance Status */}
            <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
              <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">
                COMPLIANCE STATUS
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">KYC STATUS:</span>
                  <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500 font-mono text-xs">
                    VERIFIED
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">AML CHECK:</span>
                  <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500 font-mono text-xs">
                    PASSED
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">DOCUMENTS:</span>
                  <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500 font-mono text-xs">
                    COMPLETE
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono text-sm">RISK LEVEL:</span>
                  <Badge className={`font-mono text-xs border ${getRiskColor(user.risk || "LOW RISK")}`}>
                    {user.risk || "LOW RISK"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-neutral-700">
          <Button
            variant="outline"
            className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
          >
            VIEW DOCUMENTS
          </Button>
          <Button
            variant="outline"
            className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
          >
            EDIT PROFILE
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono">UPDATE STATUS</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
