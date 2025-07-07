"use client"

import { useState } from "react"
import { Search, Eye, Edit, Trash2, Users, TrendingUp, DollarSign, Package, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function SellersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const sellers = [
    {
      id: "SLR-001",
      company: "APEX MANUFACTURING",
      contact: "DAVID THOMPSON",
      email: "d.thompson@apexmfg.com",
      sellerId: "SLR-001",
      status: "VERIFIED",
      rating: 4.8,
      sales: "$5,200,000",
      products: 45,
      joined: "2023-08-15",
      statusColor: "text-emerald-500",
      statusBg: "bg-emerald-500/20",
    },
    {
      id: "SLR-002",
      company: "QUANTUM SOLUTIONS",
      contact: "LISA WANG",
      email: "l.wang@quantumsol.com",
      sellerId: "SLR-002",
      status: "PENDING",
      rating: 4.5,
      sales: "$1,850,000",
      products: 23,
      joined: "2024-01-10",
      statusColor: "text-orange-500",
      statusBg: "bg-orange-500/20",
    },
    {
      id: "SLR-003",
      company: "INDUSTRIAL DYNAMICS",
      contact: "ROBERT GARCIA",
      email: "r.garcia@indynamics.com",
      sellerId: "SLR-003",
      status: "VERIFIED",
      rating: 4.9,
      sales: "$8,750,000",
      products: 78,
      joined: "2023-03-22",
      statusColor: "text-emerald-500",
      statusBg: "bg-emerald-500/20",
    },
  ]

  const topPerformers = [
    {
      company: "INDUSTRIAL DYNAMICS",
      sales: "$8.75M SALES",
      rank: "#1",
    },
    {
      company: "APEX MANUFACTURING",
      sales: "$5.20M SALES",
      rank: "#2",
    },
    {
      company: "QUANTUM SOLUTIONS",
      sales: "$1.85M SALES",
      rank: "#3",
    },
  ]

  const verificationQueue = [
    {
      company: "QUANTUM SOLUTIONS",
      status: "PENDING VERIFICATION",
      action: "REVIEW",
      actionColor: "bg-emerald-500 hover:bg-emerald-600 text-white",
    },
    {
      company: "TECH INNOVATIONS",
      status: "DOCUMENTS SUBMITTED",
      action: "REVIEW",
      actionColor: "bg-emerald-500 hover:bg-emerald-600 text-white",
    },
    {
      company: "GLOBAL SUPPLY CO",
      status: "AWAITING DOCUMENTS",
      action: "PENDING",
      actionColor: "bg-orange-500 hover:bg-orange-600 text-white",
    },
  ]

  const stats = [
    { label: "TOTAL SELLERS", value: "34", icon: Users, color: "text-blue-500" },
    { label: "VERIFIED", value: "28", icon: TrendingUp, color: "text-emerald-500" },
    { label: "TOTAL VOLUME", value: "$127.4M", icon: DollarSign, color: "text-emerald-500" },
    { label: "ACTIVE LISTINGS", value: "45", icon: Package, color: "text-yellow-500" },
  ]

  const filteredSellers = sellers.filter(
    (seller) =>
      seller.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        <span className="text-yellow-500 font-mono text-sm">{rating}</span>
      </div>
    )
  }

  return (
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">SELLERS</h2>
            <p className="text-neutral-400 font-mono">Registered precious metals sellers directory</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">ADD SELLER</Button>
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
            placeholder="Search sellers by company, contact, email, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono"
          />
        </div>

        {/* Seller Directory */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">SELLER DIRECTORY</h3>
          </div>
          <div className="p-4 space-y-4">
            {filteredSellers.map((seller) => (
              <div key={seller.id} className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-bold font-mono text-lg">{seller.company}</h4>
                        <p className="text-neutral-400 font-mono text-sm">
                          CONTACT: <span className="text-white">{seller.contact}</span>
                        </p>
                        <p className="text-neutral-400 font-mono text-sm">{seller.email}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Badge className={`${seller.statusBg} ${seller.statusColor} font-mono text-xs border-0`}>
                          {seller.status}
                        </Badge>
                        {renderStars(seller.rating)}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm font-mono">
                      <div>
                        <span className="text-neutral-400">ID:</span>
                        <span className="text-white ml-2">{seller.sellerId}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">SALES:</span>
                        <span className="text-white ml-2">{seller.sales}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">PRODUCTS:</span>
                        <span className="text-white ml-2">{seller.products}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">JOINED:</span>
                        <span className="text-white ml-2">{seller.joined}</span>
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

        {/* Bottom Section - Top Performers and Verification Queue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performing Sellers */}
          <div className="bg-neutral-900 border border-neutral-700 rounded">
            <div className="p-4 border-b border-neutral-700">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                TOP PERFORMING SELLERS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {topPerformers.map((performer, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 border border-neutral-700 p-3 rounded flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-white font-bold font-mono text-sm">{performer.company}</h4>
                    <p className="text-neutral-400 font-mono text-xs">{performer.sales}</p>
                  </div>
                  <div className="bg-emerald-500 text-black font-mono text-xs px-2 py-1 rounded font-bold">
                    {performer.rank}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Queue */}
          <div className="bg-neutral-900 border border-neutral-700 rounded">
            <div className="p-4 border-b border-neutral-700">
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">VERIFICATION QUEUE</h3>
            </div>
            <div className="p-4 space-y-3">
              {verificationQueue.map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 border border-neutral-700 p-3 rounded flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-white font-bold font-mono text-sm">{item.company}</h4>
                    <p className="text-neutral-400 font-mono text-xs">{item.status}</p>
                  </div>
                  <Button size="sm" className={`font-mono text-xs ${item.actionColor}`}>
                    {item.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
