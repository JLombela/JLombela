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
        return "bg-axalio-green/20 text-axalio-green border-axalio-green"
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
        return "bg-axalio-green/20 text-axalio-green border-axalio-green"
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
      <DialogContent className="max-w-4xl bg-popover border-border text-popover-foreground">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-mono tracking-wider text-popover-foreground uppercase">
            {user.id || user.buyerId || user.sellerId || user.brokerId}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-muted-foreground hover:text-popover-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* User Profile Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-muted/50 border border-border p-4 rounded">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt={user.name} />
                  <AvatarFallback className="bg-axalio-green text-black font-mono text-lg">
                    {user.name
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("") || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold font-mono text-popover-foreground">{user.name}</h3>
                  <p className="text-muted-foreground font-mono text-sm">{user.email}</p>
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
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">COMPANY:</span>
                    <span className="text-popover-foreground">{user.company}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">EMAIL:</span>
                  <span className="text-popover-foreground">{user.email}</span>
                </div>

                {user.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">PHONE:</span>
                    <span className="text-popover-foreground">{user.phone}</span>
                  </div>
                )}

                {user.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">LOCATION:</span>
                    <span className="text-popover-foreground">{user.location}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">JOINED:</span>
                  <span className="text-popover-foreground">{user.joined || user.lastActive || "2024-01-01"}</span>
                </div>

                {user.lastActive && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">LAST ACTIVE:</span>
                    <span className="text-popover-foreground">{user.lastActive}</span>
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
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-axalio-green" />
                    <span className="text-xs text-muted-foreground font-mono">PURCHASES</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.purchases}</span>
                </div>
              )}

              {user.sales && (
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-axalio-green" />
                    <span className="text-xs text-muted-foreground font-mono">SALES</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.sales}</span>
                </div>
              )}

              {user.commissions && (
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-axalio-green" />
                    <span className="text-xs text-muted-foreground font-mono">COMMISSIONS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.commissions}</span>
                </div>
              )}

              {user.deals && (
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-muted-foreground font-mono">DEALS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.deals}</span>
                </div>
              )}

              {user.products && (
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-muted-foreground font-mono">PRODUCTS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.products}</span>
                </div>
              )}

              {user.clients && (
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="text-xs text-muted-foreground font-mono">CLIENTS</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.clients}</span>
                </div>
              )}

              {user.rating && (
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-muted-foreground font-mono">RATING</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.rating}</span>
                </div>
              )}

              {user.successRate && (
                <div className="bg-muted/50 border border-border p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="w-4 h-4 text-axalio-green" />
                    <span className="text-xs text-muted-foreground font-mono">SUCCESS RATE</span>
                  </div>
                  <span className="text-lg font-bold font-mono text-popover-foreground">{user.successRate}</span>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-muted/50 border border-border p-4 rounded">
              <h4 className="text-lg font-bold text-popover-foreground font-mono mb-3 uppercase tracking-wider">
                RECENT ACTIVITY
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm font-mono">
                  <div className="w-2 h-2 bg-axalio-green rounded-full"></div>
                  <span className="text-muted-foreground">2 hours ago:</span>
                  <span className="text-popover-foreground">Updated profile information</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">1 day ago:</span>
                  <span className="text-popover-foreground">Completed KYC verification</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-muted-foreground">3 days ago:</span>
                  <span className="text-popover-foreground">Submitted new documentation</span>
                </div>
              </div>
            </div>

            {/* Compliance Status */}
            <div className="bg-muted/50 border border-border p-4 rounded">
              <h4 className="text-lg font-bold text-popover-foreground font-mono mb-3 uppercase tracking-wider">
                COMPLIANCE STATUS
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-mono text-sm">KYC STATUS:</span>
                  <Badge className="bg-axalio-green/20 text-axalio-green border-axalio-green font-mono text-xs">
                    VERIFIED
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-mono text-sm">AML CHECK:</span>
                  <Badge className="bg-axalio-green/20 text-axalio-green border-axalio-green font-mono text-xs">
                    PASSED
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-mono text-sm">DOCUMENTS:</span>
                  <Badge className="bg-axalio-green/20 text-axalio-green border-axalio-green font-mono text-xs">
                    COMPLETE
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-mono text-sm">RISK LEVEL:</span>
                  <Badge className={`font-mono text-xs border ${getRiskColor(user.risk || "LOW RISK")}`}>
                    {user.risk || "LOW RISK"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border">
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:text-popover-foreground bg-transparent font-mono"
          >
            VIEW DOCUMENTS
          </Button>
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:text-popover-foreground bg-transparent font-mono"
          >
            EDIT PROFILE
          </Button>
          <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono">UPDATE STATUS</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
