"use client"

import { useState } from "react"
import { Search, Eye, Edit, Trash2, Users, TrendingUp, DollarSign, Handshake, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BrokersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBroker, setSelectedBroker] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const brokers = [
    {
      id: "BRK-001",
      name: "ALEXANDRA STONE",
      email: "a.stone@premiumbrokers.com",
      company: "PREMIUM BROKERS LLC",
      brokerId: "BRK-001",
      status: "ACTIVE",
      successRate: "94% SUCCESS",
      commissions: "$485,000",
      deals: 127,
      clients: 45,
      statusColor: "text-emerald-500",
      statusBg: "bg-emerald-500/20",
      successColor: "text-emerald-500",
      successBg: "bg-emerald-500/20",
      phone: "+1 (555) 123-4567",
      location: "New York, USA",
      joined: "2023-03-15",
      lastActive: "2 hours ago",
      rating: "4.9",
      totalCommissions: "$485,000",
      activeDeals: 23,
      completedDeals: 127,
      averageDealSize: "$38,200",
      risk: "LOW RISK",
    },
    {
      id: "BRK-002",
      name: "MARCUS JOHNSON",
      email: "m.johnson@elitedeals.com",
      company: "ELITE DEALS GROUP",
      brokerId: "BRK-002",
      status: "ACTIVE",
      successRate: "91% SUCCESS",
      commissions: "$672,000",
      deals: 189,
      clients: 62,
      statusColor: "text-emerald-500",
      statusBg: "bg-emerald-500/20",
      successColor: "text-emerald-500",
      successBg: "bg-emerald-500/20",
      phone: "+1 (555) 987-6543",
      location: "London, UK",
      joined: "2022-11-08",
      lastActive: "1 day ago",
      rating: "4.7",
      totalCommissions: "$672,000",
      activeDeals: 31,
      completedDeals: 189,
      averageDealSize: "$35,600",
      risk: "LOW RISK",
    },
    {
      id: "BRK-003",
      name: "SOPHIA MARTINEZ",
      email: "s.martinez@globalconnect.com",
      company: "GLOBAL CONNECT BROKERS",
      brokerId: "BRK-003",
      status: "SUSPENDED",
      successRate: "87% SUCCESS",
      commissions: "$234,000",
      deals: 78,
      clients: 28,
      statusColor: "text-red-500",
      statusBg: "bg-red-500/20",
      successColor: "text-emerald-500",
      successBg: "bg-emerald-500/20",
      phone: "+1 (555) 456-7890",
      location: "Dubai, UAE",
      joined: "2023-07-22",
      lastActive: "1 week ago",
      rating: "4.3",
      totalCommissions: "$234,000",
      activeDeals: 8,
      completedDeals: 78,
      averageDealSize: "$30,000",
      risk: "MEDIUM RISK",
    },
  ]

  const topPerformers = [
    {
      name: "MARCUS JOHNSON",
      commissions: "$672K COMMISSIONS",
      deals: "189 DEALS",
      rank: "#1",
    },
    {
      name: "ALEXANDRA STONE",
      commissions: "$485K COMMISSIONS",
      deals: "127 DEALS",
      rank: "#2",
    },
    {
      name: "SOPHIA MARTINEZ",
      commissions: "$234K COMMISSIONS",
      deals: "78 DEALS",
      rank: "#3",
    },
  ]

  const commissionOverview = [
    { label: "THIS MONTH", value: "$1.2M" },
    { label: "LAST MONTH", value: "$980K" },
    { label: "YTD TOTAL", value: "$12.4M" },
    { label: "GROWTH RATE", value: "+28%", isGrowth: true },
  ]

  const stats = [
    { label: "TOTAL BROKERS", value: "18", icon: Users, color: "text-blue-500" },
    { label: "VERIFIED", value: "14", icon: TrendingUp, color: "text-emerald-500" },
    { label: "TOTAL COMMISSIONS", value: "$12.4M", icon: DollarSign, color: "text-emerald-500" },
    { label: "ACTIVE DEALS", value: "67", icon: Handshake, color: "text-yellow-500" },
  ]

  const filteredBrokers = brokers.filter(
    (broker) =>
      broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      broker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      broker.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      broker.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleBrokerClick = (broker: any) => {
    setSelectedBroker(broker)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedBroker(null)
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-emerald-500/20 text-emerald-500 border-emerald-500"
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
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">BROKERS</h2>
            <p className="text-neutral-400 font-mono">Registered precious metals brokers directory</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">ADD BROKER</Button>
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
            placeholder="Search brokers by name, email, company, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono"
          />
        </div>

        {/* Broker Directory */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">BROKER DIRECTORY</h3>
          </div>
          <div className="p-4 space-y-4">
            {filteredBrokers.map((broker) => (
              <div
                key={broker.id}
                className="bg-neutral-800 border border-neutral-700 p-4 rounded cursor-pointer hover:border-neutral-600 transition-colors"
                onClick={() => handleBrokerClick(broker)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-bold font-mono text-lg">{broker.name}</h4>
                        <p className="text-neutral-400 font-mono text-sm">{broker.email}</p>
                        <p className="text-white font-mono text-sm">{broker.company}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={`${broker.statusBg} ${broker.statusColor} font-mono text-xs border-0`}>
                          {broker.status}
                        </Badge>
                        <Badge className={`${broker.successBg} ${broker.successColor} font-mono text-xs border-0`}>
                          {broker.successRate}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm font-mono">
                      <div>
                        <span className="text-neutral-400">ID:</span>
                        <span className="text-white ml-2">{broker.brokerId}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">COMMISSIONS:</span>
                        <span className="text-white ml-2">{broker.commissions}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">DEALS:</span>
                        <span className="text-white ml-2">{broker.deals}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">CLIENTS:</span>
                        <span className="text-white ml-2">{broker.clients}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleBrokerClick(broker)
                      }}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      VIEW
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      EDIT
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-500 hover:text-white hover:bg-red-600 bg-transparent font-mono"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      DELETE
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Top Performers and Commission Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performers */}
          <div className="bg-neutral-900 border border-neutral-700 rounded">
            <div className="p-4 border-b border-neutral-700">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">TOP PERFORMERS</h3>
            </div>
            <div className="p-4 space-y-3">
              {topPerformers.map((performer, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 border border-neutral-700 p-3 rounded flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-white font-bold font-mono text-sm">{performer.name}</h4>
                    <p className="text-neutral-400 font-mono text-xs">
                      {performer.commissions} • {performer.deals}
                    </p>
                  </div>
                  <div className="bg-emerald-500 text-black font-mono text-xs px-2 py-1 rounded font-bold">
                    {performer.rank}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commission Overview */}
          <div className="bg-neutral-900 border border-neutral-700 rounded">
            <div className="p-4 border-b border-neutral-700">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">COMMISSION OVERVIEW</h3>
            </div>
            <div className="p-4 space-y-3">
              {commissionOverview.map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 border border-neutral-700 p-3 rounded flex items-center justify-between"
                >
                  <span className="text-neutral-400 font-mono text-sm">{item.label}</span>
                  <span className={`font-mono text-lg font-bold ${item.isGrowth ? "text-emerald-500" : "text-white"}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Broker Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl bg-neutral-900 border-neutral-700 text-white">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-2xl font-mono tracking-wider text-white uppercase">
              {selectedBroker?.brokerId}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={handleCloseModal} className="text-neutral-400 hover:text-white">
              
            </Button>
          </DialogHeader>

          {selectedBroker && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Broker Profile Section */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt={selectedBroker.name} />
                      <AvatarFallback className="bg-emerald-600 text-white font-mono text-lg">
                        {selectedBroker.name
                          ?.split(" ")
                          .map((n: string) => n[0])
                          .join("") || "B"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold font-mono text-white">{selectedBroker.name}</h3>
                      <p className="text-neutral-400 font-mono text-sm">{selectedBroker.email}</p>
                      <div className="flex gap-2 mt-2">
                        <Badge className={`font-mono text-xs border ${getStatusColor(selectedBroker.status)}`}>
                          {selectedBroker.status}
                        </Badge>
                        <Badge className={`font-mono text-xs border ${getRiskColor(selectedBroker.risk)}`}>
                          {selectedBroker.risk}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-400">COMPANY:</span>
                      <span className="text-white">{selectedBroker.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-400">EMAIL:</span>
                      <span className="text-white">{selectedBroker.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-400">PHONE:</span>
                      <span className="text-white">{selectedBroker.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-400">LOCATION:</span>
                      <span className="text-white">{selectedBroker.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-400">JOINED:</span>
                      <span className="text-white">{selectedBroker.joined}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-400">LAST ACTIVE:</span>
                      <span className="text-white">{selectedBroker.lastActive}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details and Statistics */}
              <div className="lg:col-span-2 space-y-4">
                {/* Statistics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs text-neutral-400 font-mono">COMMISSIONS</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-white">{selectedBroker.totalCommissions}</span>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <Handshake className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-neutral-400 font-mono">ACTIVE DEALS</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-white">{selectedBroker.activeDeals}</span>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs text-neutral-400 font-mono">COMPLETED</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-white">{selectedBroker.completedDeals}</span>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs text-neutral-400 font-mono">CLIENTS</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-white">{selectedBroker.clients}</span>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs text-neutral-400 font-mono">RATING</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-white">{selectedBroker.rating}</span>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs text-neutral-400 font-mono">AVG DEAL SIZE</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-white">{selectedBroker.averageDealSize}</span>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-3 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs text-neutral-400 font-mono">SUCCESS RATE</span>
                    </div>
                    <span className="text-lg font-bold font-mono text-white">{selectedBroker.successRate}</span>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                  <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">
                    RECENT ACTIVITY
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm font-mono">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-neutral-400">3 hours ago:</span>
                      <span className="text-white">Completed commission payment for DEAL-2025-047</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mono">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-neutral-400">1 day ago:</span>
                      <span className="text-white">Introduced new buyer to seller network</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-mono">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-neutral-400">2 days ago:</span>
                      <span className="text-white">Updated client portfolio recommendations</span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                  <h4 className="text-lg font-bold text-white font-mono mb-3 uppercase tracking-wider">
                    PERFORMANCE METRICS
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 font-mono text-sm">VERIFICATION:</span>
                      <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500 font-mono text-xs">
                        VERIFIED
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 font-mono text-sm">COMPLIANCE:</span>
                      <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500 font-mono text-xs">
                        COMPLIANT
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 font-mono text-sm">COMMISSION TIER:</span>
                      <Badge className="bg-blue-500/20 text-blue-500 border-blue-500 font-mono text-xs">PREMIUM</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 font-mono text-sm">RISK LEVEL:</span>
                      <Badge className={`font-mono text-xs border ${getRiskColor(selectedBroker.risk)}`}>
                        {selectedBroker.risk}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-neutral-700">
            <Button
              variant="outline"
              className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
            >
              VIEW COMMISSION HISTORY
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
    </div>
  )
}
