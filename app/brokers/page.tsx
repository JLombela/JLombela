"use client"

import { useState } from "react"
import { Search, Eye, Edit, Trash2, Users, TrendingUp, DollarSign, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { UserDetailsModal } from "@/components/user-details-modal"

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
      statusColor: "text-axalio-green",
      statusBg: "bg-axalio-green/20",
      successColor: "text-axalio-green",
      successBg: "bg-axalio-green/20",
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
      statusColor: "text-axalio-green",
      statusBg: "bg-axalio-green/20",
      successColor: "text-axalio-green",
      successBg: "bg-axalio-green/20",
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
      successColor: "text-axalio-green",
      successBg: "bg-axalio-green/20",
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
    { label: "VERIFIED", value: "14", icon: TrendingUp, color: "text-axalio-green" },
    { label: "TOTAL COMMISSIONS", value: "$12.4M", icon: DollarSign, color: "text-axalio-green" },
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

  return (
    <div className="w-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-foreground uppercase">BROKERS</h2>
            <p className="text-muted-foreground font-mono">Registered precious metals brokers directory</p>
          </div>
          <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase">
            ADD BROKER
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border p-4 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase">{stat.label}</p>
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
            placeholder="Search brokers by name, email, company, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card border-border text-foreground font-mono"
          />
        </div>

        {/* Broker Directory */}
        <div className="bg-card border border-border rounded">
          <div className="p-4 border-b border-border">
            <h3 className="text-lg font-bold text-foreground font-mono uppercase tracking-wider">BROKER DIRECTORY</h3>
          </div>
          <div className="p-4 space-y-4">
            {filteredBrokers.map((broker) => (
              <div
                key={broker.id}
                className="bg-muted/50 border border-border p-4 rounded cursor-pointer hover:bg-accent transition-colors"
                onClick={() => handleBrokerClick(broker)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-foreground font-bold font-mono text-lg">{broker.name}</h4>
                        <p className="text-muted-foreground font-mono text-sm">{broker.email}</p>
                        <p className="text-foreground font-mono text-sm">{broker.company}</p>
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
                        <span className="text-muted-foreground">ID:</span>
                        <span className="text-foreground ml-2">{broker.brokerId}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">COMMISSIONS:</span>
                        <span className="text-foreground ml-2">{broker.commissions}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">DEALS:</span>
                        <span className="text-foreground ml-2">{broker.deals}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CLIENTS:</span>
                        <span className="text-foreground ml-2">{broker.clients}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-muted-foreground hover:text-foreground bg-transparent font-mono"
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
                      className="border-border text-muted-foreground hover:text-foreground bg-transparent font-mono"
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
          <div className="bg-card border border-border rounded">
            <div className="p-4 border-b border-border">
              <h3 className="text-lg font-bold text-foreground font-mono uppercase tracking-wider">TOP PERFORMERS</h3>
            </div>
            <div className="p-4 space-y-3">
              {topPerformers.map((performer, index) => (
                <div
                  key={index}
                  className="bg-muted/50 border border-border p-3 rounded flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-foreground font-bold font-mono text-sm">{performer.name}</h4>
                    <p className="text-muted-foreground font-mono text-xs">
                      {performer.commissions} • {performer.deals}
                    </p>
                  </div>
                  <div className="bg-axalio-green text-black font-mono text-xs px-2 py-1 rounded font-bold">
                    {performer.rank}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commission Overview */}
          <div className="bg-card border border-border rounded">
            <div className="p-4 border-b border-border">
              <h3 className="text-lg font-bold text-foreground font-mono uppercase tracking-wider">
                COMMISSION OVERVIEW
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {commissionOverview.map((item, index) => (
                <div
                  key={index}
                  className="bg-muted/50 border border-border p-3 rounded flex items-center justify-between"
                >
                  <span className="text-muted-foreground font-mono text-sm">{item.label}</span>
                  <span
                    className={`font-mono text-lg font-bold ${item.isGrowth ? "text-axalio-green" : "text-foreground"}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <UserDetailsModal user={selectedBroker} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
