"use client"

import type React from "react"
import { useState } from "react"
import { Search, Eye, DollarSign, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function CommissionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCommission, setSelectedCommission] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const commissions = [
    {
      id: "COM-2025-001",
      dealId: "DEAL-2025-047",
      broker: "Mining Brokers Ltd",
      dealValue: "$850,000",
      rate: "2.5%",
      commission: "$21,250",
      status: "PENDING",
      dueDate: "2025-07-15",
      created: "2025-06-15",
      dealStatus: "contracts signed",
    },
    {
      id: "COM-2025-002",
      dealId: "DEAL-2025-045",
      broker: "Trade Connect",
      dealValue: "$1,200,000",
      rate: "1.8%",
      commission: "$21,600",
      status: "PAID",
      dueDate: "2025-06-25",
      created: "2025-05-20",
      dealStatus: "completed",
    },
    {
      id: "COM-2025-003",
      dealId: "DEAL-2025-044",
      broker: "Commodity Bridge",
      dealValue: "$980,000",
      rate: "3.0%",
      commission: "$29,400",
      status: "CALCULATED",
      dueDate: "2025-07-17",
      created: "2025-06-10",
      dealStatus: "in transit",
    },
    {
      id: "COM-2025-004",
      dealId: "DEAL-2025-043",
      broker: "Global Trade Partners",
      dealValue: "$650,000",
      rate: "2.2%",
      commission: "$14,300",
      status: "OVERDUE",
      dueDate: "2025-06-05",
      created: "2025-05-15",
      dealStatus: "delivered",
    },
  ]

  const stats = [
    { label: "PENDING PAYOUTS", value: "$21,250", icon: DollarSign, color: "text-yellow-500" },
    { label: "PAID THIS MONTH", value: "$21,600", icon: TrendingUp, color: "text-axalio-green" },
    { label: "ACTIVE BROKERS", value: "23", icon: Users, color: "text-axalio-green" },
    { label: "AVG COMMISSION", value: "2.3%", icon: DollarSign, color: "text-axalio-green" },
  ]

  const filteredCommissions = commissions.filter(
    (commission) =>
      commission.broker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.dealId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleRowClick = (commission: any) => {
    setSelectedCommission(commission)
    setIsModalOpen(true)
  }

  const handleEyeClick = (commission: any, event: React.MouseEvent) => {
    event.stopPropagation()
    setSelectedCommission(commission)
    setIsModalOpen(true)
  }

  const getStatusBadge = (status: string) => {
    const statusConfig: { [key: string]: { bg: string; text: string } } = {
      PENDING: { bg: "bg-yellow-500/20", text: "text-yellow-500" },
      PAID: { bg: "bg-axalio-green/20", text: "text-axalio-green" },
      CALCULATED: { bg: "bg-blue-500/20", text: "text-blue-500" },
      OVERDUE: { bg: "bg-red-500/20", text: "text-red-500" },
    }
    const config = statusConfig[status] || { bg: "bg-neutral-500/20", text: "text-neutral-500" }
    return <Badge className={`${config.bg} ${config.text} font-mono text-xs border-0`}>{status}</Badge>
  }

  return (
    <div className="w-full bg-background min-h-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-foreground uppercase">COMMISSIONS</h2>
            <p className="text-muted-foreground font-mono">Broker commission engine will be shown here.</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase tracking-wider">
              PROCESS PAYOUTS
            </Button>
            <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase tracking-wider">
              GENERATE REPORT
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border p-4 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</p>
                  <p className={`text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search commissions by deal ID, broker, or commission ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card border-border text-foreground font-mono placeholder:text-muted-foreground"
          />
        </div>

        {/* Commission Tracking Table */}
        <div className="bg-card border border-border rounded">
          <div className="p-4 border-b border-border">
            <h3 className="text-lg font-bold text-foreground font-mono uppercase tracking-wider">
              COMMISSION TRACKING
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    COMMISSION ID
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    DEAL ID
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    BROKER
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    DEAL VALUE
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    RATE
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    COMMISSION
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    STATUS
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    DUE DATE
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-muted-foreground tracking-wider font-mono">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCommissions.map((commission) => (
                  <tr
                    key={commission.id}
                    className="border-b border-border hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => handleRowClick(commission)}
                  >
                    <td className="py-4 px-4 text-sm text-foreground font-mono">{commission.id}</td>
                    <td className="py-4 px-4 text-sm text-axalio-green font-mono">{commission.dealId}</td>
                    <td className="py-4 px-4 text-sm text-foreground">{commission.broker}</td>
                    <td className="py-4 px-4 text-sm text-foreground font-mono">{commission.dealValue}</td>
                    <td className="py-4 px-4 text-sm text-foreground font-mono">{commission.rate}</td>
                    <td className="py-4 px-4 text-sm text-foreground font-mono">{commission.commission}</td>
                    <td className="py-4 px-4">{getStatusBadge(commission.status)}</td>
                    <td className="py-4 px-4 text-sm text-foreground font-mono">{commission.dueDate}</td>
                    <td className="py-4 px-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-axalio-green"
                        onClick={(e) => handleEyeClick(commission, e)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Commission Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl bg-popover border-border text-popover-foreground">
            {selectedCommission && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-popover-foreground font-mono">
                    {selectedCommission.id}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground font-mono">Commission for {selectedCommission.dealId}</p>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-6 mt-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground tracking-wider mb-2 font-mono">
                        COMMISSION STATUS
                      </h4>
                      {getStatusBadge(selectedCommission.status)}
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground tracking-wider mb-2 font-mono">
                        DEAL INFORMATION
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground font-mono">Deal ID:</span>
                          <span className="text-axalio-green font-mono">{selectedCommission.dealId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground font-mono">Deal Value:</span>
                          <span className="text-popover-foreground font-mono">{selectedCommission.dealValue}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground font-mono">Deal Status:</span>
                          <span className="text-popover-foreground font-mono">{selectedCommission.dealStatus}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground font-mono">Broker:</span>
                          <span className="text-popover-foreground">{selectedCommission.broker}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground tracking-wider mb-2 font-mono">
                      COMMISSION DETAILS
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-mono">Commission Rate:</span>
                        <span className="text-popover-foreground font-mono">{selectedCommission.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-mono">Commission Amount:</span>
                        <span className="text-popover-foreground font-mono">{selectedCommission.commission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-mono">Created:</span>
                        <span className="text-popover-foreground font-mono">{selectedCommission.created}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-mono">Due Date:</span>
                        <span className="text-popover-foreground font-mono">{selectedCommission.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border">
                  <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono tracking-wider text-xs">
                    PROCESS PAYMENT
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border text-muted-foreground hover:text-popover-foreground bg-transparent font-mono tracking-wider text-xs"
                  >
                    VIEW DEAL
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border text-muted-foreground hover:text-popover-foreground bg-transparent font-mono tracking-wider text-xs"
                  >
                    DOWNLOAD INVOICE
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
