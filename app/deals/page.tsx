"use client"

import { useState } from "react"
import { Search, Eye, DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DealsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const deals = [
    {
      id: "DEAL-2025-001",
      commodity: "Gold Bars",
      quantity: "500 oz",
      value: "$1,250,000",
      seller: "Golden Mining Co.",
      buyer: "Swiss Refinery AG",
      status: "ACTIVE",
      progress: 75,
      statusColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "DEAL-2025-002",
      commodity: "Silver Coins",
      quantity: "10,000 oz",
      value: "$320,000",
      seller: "American Silver Corp",
      buyer: "European Metals Ltd",
      status: "PENDING",
      progress: 25,
      statusColor: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: "DEAL-2025-003",
      commodity: "Platinum Ingots",
      quantity: "100 oz",
      value: "$95,000",
      seller: "African Platinum",
      buyer: "Tokyo Precious Metals",
      status: "COMPLETED",
      progress: 100,
      statusColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ]

  const stats = [
    { label: "TOTAL VALUE", value: "$47.2M", icon: DollarSign, color: "text-emerald-500" },
    { label: "ACTIVE DEALS", value: "23", icon: TrendingUp, color: "text-blue-500" },
    { label: "PENDING", value: "12", icon: Clock, color: "text-yellow-500" },
    { label: "COMPLETED", value: "156", icon: CheckCircle, color: "text-emerald-500" },
  ]

  const filteredDeals = deals.filter(
    (deal) =>
      deal.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.buyer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">DEALS</h2>
            <p className="text-neutral-400 font-mono">Active precious metals transactions</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">NEW DEAL</Button>
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
            placeholder="Search deals by commodity, ID, seller, or buyer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono"
          />
        </div>

        {/* Deals Table */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase">ACTIVE DEALS</h3>
          </div>
          <div className="overflow-x-auto">
            <div className="space-y-2 p-4">
              {filteredDeals.map((deal) => (
                <div key={deal.id} className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-bold font-mono">{deal.commodity}</h4>
                        <span className="text-xs text-neutral-400 font-mono">{deal.id}</span>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
                        <div>
                          <span className="text-neutral-500 font-mono">Quantity:</span>
                          <span className="text-white ml-2 font-mono">{deal.quantity}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Value:</span>
                          <span className="text-emerald-500 ml-2 font-mono">{deal.value}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Seller:</span>
                          <span className="text-white ml-2 font-mono">{deal.seller}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Buyer:</span>
                          <span className="text-white ml-2 font-mono">{deal.buyer}</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-500 font-mono">Progress:</span>
                          <div className="flex-1 bg-neutral-700 rounded-full h-2">
                            <div
                              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${deal.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-white font-mono">{deal.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3 py-1 rounded text-xs font-mono uppercase ${deal.bgColor} ${deal.statusColor}`}
                      >
                        {deal.status}
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
