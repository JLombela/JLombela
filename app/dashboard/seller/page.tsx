"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, TrendingUp, DollarSign, Users } from "lucide-react"

export default function SellerDashboardPage() {
  return (
    <div className="p-6 space-y-6 font-mono">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white font-mono tracking-wider">SELLER DASHBOARD</h1>
        <p className="text-neutral-400 font-mono">
          Manage your products, track sales performance, and monitor buyer interactions.
        </p>
      </div>

      {/* Seller Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ACTIVE LISTINGS</p>
                <p className="text-2xl font-bold text-white font-mono">12</p>
              </div>
              <Package className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">TOTAL SALES</p>
                <p className="text-2xl font-bold text-emerald-500 font-mono">$1.2M</p>
              </div>
              <DollarSign className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">CONVERSION RATE</p>
                <p className="text-2xl font-bold text-white font-mono">87%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">ACTIVE BUYERS</p>
                <p className="text-2xl font-bold text-white font-mono">34</p>
              </div>
              <Users className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">
              TOP PERFORMING PRODUCTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { product: "Gold Ore - Grade A", sales: "$450K", units: "2.5T", trend: "up" },
                { product: "Silver Concentrate", sales: "$320K", units: "1.8T", trend: "up" },
                { product: "Copper Cathode", sales: "$280K", units: "3.2T", trend: "down" },
                { product: "Platinum Powder", sales: "$150K", units: "0.5T", trend: "up" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-800 rounded">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${item.trend === "up" ? "bg-emerald-500" : "bg-red-500"}`}
                    ></div>
                    <span className="text-sm text-white">{item.product}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-emerald-500 font-mono">{item.sales}</div>
                    <div className="text-xs text-neutral-400 font-mono">{item.units}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4 bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">SELLER ACTIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors">
                <div className="text-sm text-white font-mono tracking-wider">ADD NEW PRODUCT</div>
                <div className="text-xs text-neutral-400 mt-1">List a new commodity</div>
              </button>
              <button className="w-full text-left p-3 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors">
                <div className="text-sm text-white font-mono tracking-wider">UPDATE INVENTORY</div>
                <div className="text-xs text-neutral-400 mt-1">Modify stock levels</div>
              </button>
              <button className="w-full text-left p-3 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors">
                <div className="text-sm text-white font-mono tracking-wider">VIEW INQUIRIES</div>
                <div className="text-xs text-neutral-400 mt-1">Check buyer messages</div>
              </button>
              <button className="w-full text-left p-3 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors">
                <div className="text-sm text-white font-mono tracking-wider">SALES ANALYTICS</div>
                <div className="text-xs text-neutral-400 mt-1">View detailed reports</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
