"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, TrendingUp, DollarSign, Users } from "lucide-react"

export default function SellerDashboardPage() {
  return (
    <div className="p-6 space-y-6 px-0 py-0">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground font-mono tracking-wider">SELLER DASHBOARD</h1>
        <p className="text-muted-foreground font-mono">
          Manage your products, track sales performance, and monitor buyer interactions.
        </p>
      </div>

      {/* Seller Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">ACTIVE LISTINGS</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">12</p>
              </div>
              <Package className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">TOTAL SALES</p>
                <p className="text-2xl font-bold text-axalio-green font-mono">$1.2M</p>
              </div>
              <DollarSign className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">CONVERSION RATE</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">87%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">ACTIVE BUYERS</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">34</p>
              </div>
              <Users className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">
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
                <div key={index} className="flex items-center justify-between p-3 bg-accent rounded">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${item.trend === "up" ? "bg-axalio-green" : "bg-red-500"}`}
                    ></div>
                    <span className="text-sm text-accent-foreground">{item.product}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-axalio-green font-mono">{item.sales}</div>
                    <div className="text-xs text-muted-foreground font-mono">{item.units}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4 bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">SELLER ACTIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">ADD NEW PRODUCT</div>
                <div className="text-xs text-muted-foreground mt-1">List a new commodity</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">UPDATE INVENTORY</div>
                <div className="text-xs text-muted-foreground mt-1">Modify stock levels</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">VIEW INQUIRIES</div>
                <div className="text-xs text-muted-foreground mt-1">Check buyer messages</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">SALES ANALYTICS</div>
                <div className="text-xs text-muted-foreground mt-1">View detailed reports</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
