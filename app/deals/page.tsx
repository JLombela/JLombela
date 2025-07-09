"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Filter, Search, FileText, DollarSign, Eye } from "lucide-react"

interface Deal {
  id: string
  seller: string
  buyer: string
  commodity: string
  quantity: string
  value: string
  status: string
  statusColor: string
  broker: string
  created: string
  commission: string
  title: string
}

export default function DealsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const deals: Deal[] = [
    {
      id: "DEAL-2025-047",
      title: "Gold Ore Trade Deal",
      seller: "Golden Mining Co.",
      buyer: "Swiss Refinery AG",
      commodity: "Gold Ore",
      quantity: "500kg",
      value: "$850,000",
      status: "PoP Verified",
      statusColor: "bg-emerald-600",
      broker: "Mining Brokers Ltd",
      created: "2025-06-15",
      commission: "2.5%",
    },
    {
      id: "DEAL-2025-046",
      title: "Gold Concentrate Trade Deal",
      seller: "Artisan Miners Union",
      buyer: "Global Gold Corp",
      commodity: "Gold Concentrate",
      quantity: "250kg",
      value: "$425,000",
      status: "Contracts Signed",
      statusColor: "bg-blue-600",
      broker: "Direct",
      created: "2025-06-12",
      commission: "1.8%",
    },
    {
      id: "DEAL-2025-045",
      title: "Gold Bars Trade Deal",
      seller: "Mountain Gold Ltd",
      buyer: "European Metals",
      commodity: "Gold Bars",
      quantity: "100kg",
      value: "$1,200,000",
      status: "In Transit",
      statusColor: "bg-yellow-600",
      broker: "Trade Connect",
      created: "2025-06-10",
      commission: "3.2%",
    },
    {
      id: "DEAL-2025-044",
      title: "Gold Dust Trade Deal",
      seller: "Desert Mining Co.",
      buyer: "Asian Refineries",
      commodity: "Gold Dust",
      quantity: "750kg",
      value: "$980,000",
      status: "Draft",
      statusColor: "bg-neutral-600",
      broker: "Commodity Bridge",
      created: "2025-06-08",
      commission: "2.1%",
    },
  ]

  const filteredDeals = deals.filter(
    (deal) =>
      deal.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.buyer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.commodity.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDealClick = (deal: Deal) => {
    setSelectedDeal(deal)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedDeal(null)
  }

  return (
    <div className="space-y-6 bg-black min-h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-white font-mono tracking-wider text-2xl">DEALS</h1>
          <p className="text-neutral-400 font-mono text-sm mt-1">Deal lifecycle management will be implemented here.</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-emerald-600 hover:bg-emerald-700 font-mono tracking-wider text-black">
            <Plus className="w-4 h-4 mr-2" />
            NEW DEAL
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 font-mono tracking-wider text-black">
            <Filter className="w-4 h-4 mr-2" />
            FILTER
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <Input
                placeholder="Search deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-transparent border-neutral-700 text-white font-mono placeholder:text-neutral-500"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-mono tracking-wider mb-2">ACTIVE DEALS</p>
                <p className="text-3xl font-bold text-white font-mono">47</p>
              </div>
              <FileText className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-mono tracking-wider mb-2">TOTAL VALUE</p>
                <p className="text-3xl font-bold text-white font-mono">$2.4M</p>
              </div>
              <DollarSign className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 font-mono tracking-wider mb-2">COMPLETION RATE</p>
                <p className="text-3xl font-bold text-white font-mono">94%</p>
              </div>
              <Eye className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-neutral-900 border-neutral-800">
        <CardContent className="p-0">
          <div className="p-6 border-b border-neutral-800">
            <h2 className="text-lg font-bold text-white font-mono tracking-wider">DEAL PIPELINE</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">DEAL ID</th>
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">SELLER</th>
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">BUYER</th>
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">COMMODITY</th>
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">VALUE</th>
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">STATUS</th>
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">BROKER</th>
                  <th className="text-left p-4 text-xs font-mono text-neutral-400 tracking-wider">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeals.map((deal) => (
                  <tr
                    key={deal.id}
                    className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors cursor-pointer"
                    onClick={() => handleDealClick(deal)}
                  >
                    <td className="p-4 text-sm font-mono text-white">{deal.id}</td>
                    <td className="p-4 text-sm font-mono text-white py-4">{deal.seller}</td>
                    <td className="p-4 text-sm font-mono text-white">{deal.buyer}</td>
                    <td className="p-4 text-sm font-mono text-white">
                      {deal.commodity} ({deal.quantity})
                    </td>
                    <td className="p-4 text-sm font-mono text-white">{deal.value}</td>
                    <td className="p-4">
                      <Badge className={`${deal.statusColor} text-white font-mono text-xs px-3 py-1`}>
                        {deal.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm font-mono text-white">{deal.broker}</td>
                    <td className="p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-neutral-400 hover:text-white hover:bg-neutral-800"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDealClick(deal)
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-neutral-900 border-neutral-700 text-white max-w-4xl">
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div>
              <DialogTitle className="text-2xl font-bold font-mono text-white">{selectedDeal?.id}</DialogTitle>
              <p className="text-neutral-400 font-mono text-sm mt-1">{selectedDeal?.title}</p>
            </div>
          </DialogHeader>

          {selectedDeal && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold font-mono text-white mb-4 tracking-wider">DEAL INFORMATION</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Seller:</span>
                      <span className="text-white font-mono">{selectedDeal.seller}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Buyer:</span>
                      <span className="text-white font-mono">{selectedDeal.buyer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Commodity:</span>
                      <span className="text-white font-mono">{selectedDeal.commodity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Quantity:</span>
                      <span className="text-white font-mono">{selectedDeal.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Value:</span>
                      <span className="text-white font-mono">{selectedDeal.value}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-mono text-white mb-4 tracking-wider">STATUS & COMMISSION</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400 font-mono">Status:</span>
                      <Badge className={`${selectedDeal.statusColor} text-white font-mono text-xs px-3 py-1`}>
                        {selectedDeal.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Created:</span>
                      <span className="text-white font-mono">{selectedDeal.created}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Broker:</span>
                      <span className="text-white font-mono">{selectedDeal.broker}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400 font-mono">Commission:</span>
                      <span className="text-white font-mono">{selectedDeal.commission}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-neutral-800">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono tracking-wider">
                  UPDATE STATUS
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-600 text-white hover:bg-neutral-800 font-mono tracking-wider bg-transparent"
                >
                  VIEW DOCUMENTS
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-600 text-white hover:bg-neutral-800 font-mono tracking-wider bg-transparent"
                >
                  GENERATE CONTRACT
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
