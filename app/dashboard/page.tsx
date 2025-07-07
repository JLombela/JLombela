"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Target, DollarSign, Globe, TrendingUp } from "lucide-react"

// Mock data for the dashboard
const metrics = [
  {
    title: "TOTAL VOLUME",
    value: "$324.7M",
    change: "+18.5%",
    icon: BarChart3,
    color: "text-emerald-400",
  },
  {
    title: "ACTIVE DEALS",
    value: "147",
    change: "+12.3%",
    icon: Target,
    color: "text-blue-400",
  },
  {
    title: "COMMISSION EARNED",
    value: "$8.1M",
    change: "+22.1%",
    icon: DollarSign,
    color: "text-emerald-400",
  },
  {
    title: "GLOBAL PARTNERS",
    value: "89",
    change: "+15.7%",
    icon: Globe,
    color: "text-purple-400",
  },
]

const commodityData = [
  { name: "Gold", volume: "20,500", change: "+13%", color: "text-yellow-400" },
  { name: "Silver", volume: "72,000", change: "+11%", color: "text-gray-300" },
  { name: "Platinum", volume: "4,800", change: "+12%", color: "text-gray-400" },
  { name: "Copper", volume: "205,000", change: "+11%", color: "text-orange-400" },
]

const pipelineStages = [
  { stage: "Prospecting", count: 23, color: "bg-neutral-600" },
  { stage: "PoP Verified", count: 18, color: "bg-emerald-600" },
  { stage: "PoF Verified", count: 12, color: "bg-emerald-600" },
  { stage: "Contracts Signed", count: 15, color: "bg-blue-600" },
  { stage: "In Transit", count: 8, color: "bg-yellow-600" },
  { stage: "Completed", count: 71, color: "bg-neutral-500" },
]

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <DashboardHeader />
          <main className="flex-1 p-6 space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="font-mono text-3xl font-bold text-white tracking-wider">AXALIO COMMAND CENTER</h1>
              <p className="font-mono text-neutral-400 text-sm tracking-wide">
                Global precious metals trading platform overview
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric) => (
                <Card key={metric.title} className="bg-neutral-900 border-neutral-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <p className="font-mono text-xs text-neutral-400 tracking-wider">{metric.title}</p>
                        <p className="font-mono text-3xl font-bold text-white">{metric.value}</p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-emerald-400" />
                          <span className="font-mono text-xs text-emerald-400">{metric.change}</span>
                        </div>
                      </div>
                      <metric.icon className={`h-8 w-8 ${metric.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Commodities Chart */}
              <Card className="lg:col-span-2 bg-neutral-900 border-neutral-800">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-mono text-white tracking-wider">COMMODITIES VOLUME TRENDS (YoY)</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="font-mono text-xs border-neutral-700 bg-transparent">
                      12M
                    </Button>
                    <Button variant="outline" size="sm" className="font-mono text-xs border-neutral-700 bg-transparent">
                      24M
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Legend */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                      <span className="font-mono text-xs text-neutral-300">Gold (oz)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-gray-300 rounded-full" />
                      <span className="font-mono text-xs text-neutral-300">Silver (oz)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-gray-400 rounded-full" />
                      <span className="font-mono text-xs text-neutral-300">Platinum (oz)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-orange-400 rounded-full" />
                      <span className="font-mono text-xs text-neutral-300">Copper (lbs)</span>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-64 bg-neutral-800 rounded-lg p-4 relative">
                    <svg className="w-full h-full" viewBox="0 0 800 200">
                      {/* Grid lines */}
                      <defs>
                        <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 80 0 L 0 0 0 40" fill="none" stroke="#404040" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />

                      {/* Chart lines */}
                      <polyline
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="3"
                        points="50,150 150,140 250,130 350,125 450,120 550,115 650,110 750,105"
                      />
                      <polyline
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="3"
                        points="50,160 150,155 250,145 350,140 450,135 550,130 650,125 750,120"
                      />
                      <polyline
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth="3"
                        points="50,170 150,165 250,160 350,155 450,150 550,145 650,140 750,135"
                      />
                      <polyline
                        fill="none"
                        stroke="#fb923c"
                        strokeWidth="3"
                        points="50,140 150,135 250,125 350,120 450,115 550,110 650,105 750,100"
                      />
                    </svg>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs font-mono text-neutral-400">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>Jun</span>
                      <span>Sep</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* Commodity Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {commodityData.map((commodity) => (
                      <div key={commodity.name} className="bg-neutral-800 p-3 rounded">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              commodity.name === "Gold"
                                ? "bg-yellow-400"
                                : commodity.name === "Silver"
                                  ? "bg-gray-300"
                                  : commodity.name === "Platinum"
                                    ? "bg-gray-400"
                                    : "bg-orange-400"
                            }`}
                          />
                          <span className="font-mono text-xs text-neutral-300">{commodity.name}</span>
                        </div>
                        <div className="font-mono text-lg font-bold text-white">{commodity.volume}</div>
                        <div className="font-mono text-xs text-emerald-400">{commodity.change}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Deal Pipeline */}
              <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <CardTitle className="font-mono text-white tracking-wider">DEAL PIPELINE STATUS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pipelineStages.map((stage) => (
                    <div key={stage.stage} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${stage.color}`} />
                        <span className="font-mono text-sm text-neutral-300">{stage.stage}</span>
                      </div>
                      <span className="font-mono text-lg font-bold text-white">{stage.count}</span>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-neutral-700">
                    <div className="text-center">
                      <div className="font-mono text-xs text-neutral-400 mb-1">CONVERSION RATE</div>
                      <div className="font-mono text-2xl font-bold text-emerald-400">87.3%</div>
                      <div className="font-mono text-xs text-emerald-400">+5.2% vs last month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
