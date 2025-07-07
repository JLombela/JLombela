"use client"

import { useState } from "react"
import { Search, Eye, Edit, Trash2, Users, TrendingUp, DollarSign, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BrokersPage() {
  const [searchTerm, setSearchTerm] = useState("")

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
              <div key={broker.id} className="bg-neutral-800 border border-neutral-700 p-4 rounded">
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
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      VIEW
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-600 text-neutral-400 hover:text-white hover:border-neutral-500 bg-transparent font-mono"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      EDIT
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-500 hover:text-white hover:bg-red-600 bg-transparent font-mono"
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
    </div>
  )
}
