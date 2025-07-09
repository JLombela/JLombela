"use client"

import { useState } from "react"
import { Search, Eye, Edit, Trash2, Users, TrendingUp, DollarSign, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { UserDetailsModal } from "@/components/user-details-modal"

export default function BuyersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const buyers = [
    {
      id: "BYR-001",
      name: "JOHN MITCHELL",
      email: "j.mitchell@techcorp.com",
      company: "TECHCORP INDUSTRIES",
      buyerId: "BYR-001",
      status: "ACTIVE",
      risk: "LOW RISK",
      purchases: "$2,450,000",
      lastActive: "2024-01-15",
      phone: "+1-555-0123",
      location: "New York, USA",
      joined: "2023-08-15",
      statusColor: "text-emerald-500",
      statusBg: "bg-emerald-500/20",
      riskColor: "text-emerald-500",
      riskBg: "bg-emerald-500/20",
    },
    {
      id: "BYR-002",
      name: "SARAH CHEN",
      email: "s.chen@globalventures.com",
      company: "GLOBAL VENTURES LLC",
      buyerId: "BYR-002",
      status: "PENDING",
      risk: "MEDIUM RISK",
      purchases: "$890,000",
      lastActive: "2024-01-14",
      phone: "+1-555-0456",
      location: "San Francisco, USA",
      joined: "2023-11-22",
      statusColor: "text-orange-500",
      statusBg: "bg-orange-500/20",
      riskColor: "text-orange-500",
      riskBg: "bg-orange-500/20",
    },
    {
      id: "BYR-003",
      name: "MICHAEL RODRIGUEZ",
      email: "m.rodriguez@innovatetech.com",
      company: "INNOVATE TECH SOLUTIONS",
      buyerId: "BYR-003",
      status: "ACTIVE",
      risk: "LOW RISK",
      purchases: "$3,200,000",
      lastActive: "2024-01-16",
      phone: "+1-555-0789",
      location: "Austin, USA",
      joined: "2023-05-10",
      statusColor: "text-emerald-500",
      statusBg: "bg-emerald-500/20",
      riskColor: "text-emerald-500",
      riskBg: "bg-emerald-500/20",
    },
  ]

  const recentActivity = [
    {
      buyer: "JOHN MITCHELL",
      action: "completed purchase of $125,000",
      time: "2 hours ago",
    },
    {
      buyer: "SARAH CHEN",
      action: "submitted new KYC documentation",
      time: "4 hours ago",
    },
    {
      buyer: "MICHAEL RODRIGUEZ",
      action: "updated profile information",
      time: "6 hours ago",
    },
  ]

  const stats = [
    { label: "TOTAL BUYERS", value: "47", icon: Users, color: "text-blue-500" },
    { label: "VERIFIED", value: "32", icon: TrendingUp, color: "text-emerald-500" },
    { label: "TOTAL VOLUME", value: "$89.2M", icon: DollarSign, color: "text-emerald-500" },
    { label: "ACTIVE BIDS", value: "23", icon: MapPin, color: "text-yellow-500" },
  ]

  const filteredBuyers = buyers.filter(
    (buyer) =>
      buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleUserClick = (buyer: any) => {
    setSelectedUser(buyer)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedUser(null)
  }

  return (
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">BUYERS</h2>
            <p className="text-neutral-400 font-mono">Registered precious metals buyers directory</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">ADD BUYER</Button>
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
            placeholder="Search buyers by name, email, company, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono"
          />
        </div>

        {/* Buyer Directory */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">BUYER DIRECTORY</h3>
          </div>
          <div className="p-4 space-y-4">
            {filteredBuyers.map((buyer) => (
              <div
                key={buyer.id}
                className="bg-neutral-800 border border-neutral-700 p-4 rounded cursor-pointer hover:bg-neutral-750 transition-colors"
                onClick={() => handleUserClick(buyer)}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-bold font-mono text-lg">{buyer.name}</h4>
                        <p className="text-neutral-400 font-mono text-sm">{buyer.email}</p>
                        <p className="text-white font-mono text-sm">{buyer.company}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={`${buyer.statusBg} ${buyer.statusColor} font-mono text-xs border-0`}>
                          {buyer.status}
                        </Badge>
                        <Badge className={`${buyer.riskBg} ${buyer.riskColor} font-mono text-xs border-0`}>
                          {buyer.risk}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm font-mono">
                      <div>
                        <span className="text-neutral-400">ID:</span>
                        <span className="text-white ml-2">{buyer.buyerId}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">PURCHASES:</span>
                        <span className="text-white ml-2">{buyer.purchases}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">LAST ACTIVE:</span>
                        <span className="text-white ml-2">{buyer.lastActive}</span>
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
                        handleUserClick(buyer)
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

        {/* Recent Buyer Activity */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">RECENT BUYER ACTIVITY</h3>
          </div>
          <div className="p-4 space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="bg-neutral-800 border border-neutral-700 p-3 rounded flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-white font-mono text-sm">
                    <span className="text-white font-bold">{activity.buyer}</span>{" "}
                    <span className="text-neutral-300">{activity.action}</span>
                  </p>
                  <p className="text-neutral-400 font-mono text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Details Modal */}
      <UserDetailsModal user={selectedUser} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
