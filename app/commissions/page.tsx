"use client"

import { useState } from "react"
import { Search, Eye, DollarSign, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CommissionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredCommission, setHoveredCommission] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
      statusColor: "text-yellow-500",
      bgColor: "bg-yellow-500/20",
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
      statusColor: "text-emerald-500",
      bgColor: "bg-emerald-500/20",
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
      statusColor: "text-blue-500",
      bgColor: "bg-blue-500/20",
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
      statusColor: "text-red-500",
      bgColor: "bg-red-500/20",
    },
  ]

  const stats = [
    { label: "PENDING PAYOUTS", value: "$21,250", icon: DollarSign, color: "text-yellow-500" },
    { label: "PAID THIS MONTH", value: "$21,600", icon: TrendingUp, color: "text-emerald-500" },
    { label: "ACTIVE BROKERS", value: "23", icon: Users, color: "text-emerald-500" },
    { label: "AVG COMMISSION", value: "2.3%", icon: DollarSign, color: "text-emerald-500" },
  ]

  const filteredCommissions = commissions.filter(
    (commission) =>
      commission.broker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.dealId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commission.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleMouseEnter = (commission, event) => {
    setHoveredCommission(commission)
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseLeave = () => {
    setHoveredCommission(null)
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      PENDING: { bg: "bg-yellow-500/20", text: "text-yellow-500" },
      PAID: { bg: "bg-emerald-500/20", text: "text-emerald-500" },
      CALCULATED: { bg: "bg-blue-500/20", text: "text-blue-500" },
      OVERDUE: { bg: "bg-red-500/20", text: "text-red-500" },
    }
    const config = statusConfig[status] || { bg: "bg-neutral-500/20", text: "text-neutral-500" }
    return <Badge className={`${config.bg} ${config.text} font-mono text-xs border-0`}>{status}</Badge>
  }

  return (
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">COMMISSIONS</h2>
            <p className="text-neutral-400 font-mono">Broker commission engine will be shown here.</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase tracking-wider">
              PROCESS PAYOUTS
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase tracking-wider">
              GENERATE REPORT
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-700 p-4 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{stat.label}</p>
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
            placeholder="Search commissions by deal ID, broker, or commission ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono placeholder:text-neutral-500"
          />
        </div>

        {/* Commission Tracking Table */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">COMMISSION TRACKING</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    COMMISSION ID
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    DEAL ID
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    BROKER
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    DEAL VALUE
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    RATE
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    COMMISSION
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    STATUS
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    DUE DATE
                  </th>
                  <th className="text-left py-4 px-4 text-xs font-medium text-neutral-400 tracking-wider font-mono">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCommissions.map((commission, index) => (
                  <tr
                    key={commission.id}
                    className="border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer"
                    onMouseEnter={(e) => handleMouseEnter(commission, e)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <td className="py-4 px-4 text-sm text-white font-mono">{commission.id}</td>
                    <td className="py-4 px-4 text-sm text-emerald-500 font-mono">{commission.dealId}</td>
                    <td className="py-4 px-4 text-sm text-white">{commission.broker}</td>
                    <td className="py-4 px-4 text-sm text-white font-mono">{commission.dealValue}</td>
                    <td className="py-4 px-4 text-sm text-white font-mono">{commission.rate}</td>
                    <td className="py-4 px-4 text-sm text-white font-mono">{commission.commission}</td>
                    <td className="py-4 px-4">{getStatusBadge(commission.status)}</td>
                    <td className="py-4 px-4 text-sm text-white font-mono">{commission.dueDate}</td>
                    <td className="py-4 px-4">
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-emerald-500">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hover Modal */}
        {hoveredCommission && (
          <div
            className="fixed z-50 bg-neutral-900 border border-neutral-700 rounded-lg p-6 shadow-2xl pointer-events-none"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 200,
              width: "500px",
            }}
          >
            {/* Modal Header */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white font-mono">{hoveredCommission.id}</h3>
              <p className="text-sm text-neutral-400 font-mono">Commission for {hoveredCommission.dealId}</p>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-300 tracking-wider mb-2 font-mono">
                    COMMISSION STATUS
                  </h4>
                  {getStatusBadge(hoveredCommission.status)}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-neutral-300 tracking-wider mb-2 font-mono">
                    DEAL INFORMATION
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Deal ID:</span>
                      <span className="text-emerald-500 font-mono">{hoveredCommission.dealId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Deal Value:</span>
                      <span className="text-white font-mono">{hoveredCommission.dealValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Deal Status:</span>
                      <span className="text-white font-mono">{hoveredCommission.dealStatus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Broker:</span>
                      <span className="text-white">{hoveredCommission.broker}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h4 className="text-sm font-medium text-neutral-300 tracking-wider mb-2 font-mono">
                  COMMISSION DETAILS
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-mono">Commission Rate:</span>
                    <span className="text-white font-mono">{hoveredCommission.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-mono">Commission Amount:</span>
                    <span className="text-white font-mono">{hoveredCommission.commission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-mono">Created:</span>
                    <span className="text-white font-mono">{hoveredCommission.created}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400 font-mono">Due Date:</span>
                    <span className="text-white font-mono">{hoveredCommission.dueDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6 pt-4 border-t border-neutral-700">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono tracking-wider text-xs">
                PROCESS PAYMENT
              </Button>
              <Button
                variant="outline"
                className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono tracking-wider text-xs"
              >
                VIEW DEAL
              </Button>
              <Button
                variant="outline"
                className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono tracking-wider text-xs"
              >
                DOWNLOAD INVOICE
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
