"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Target, DollarSign, Globe, TrendingUp } from "lucide-react"
import { CriticalActivities } from "@/components/critical-activities"
import { GlobalTradingNetwork } from "@/components/global-trading-network"

const metrics = [
  {
    title: "TOTAL VOLUME",
    value: "$324.7M",
    change: "+18.5%",
    icon: BarChart3,
    color: "text-axalio-green",
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
    color: "text-axalio-green",
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
  { name: "Gold", volume: "20,500", change: "+13%", color: "bg-yellow-400" },
  { name: "Silver", volume: "72,000", change: "+11%", color: "bg-gray-300" },
  { name: "Platinum", volume: "4,800", change: "+12%", color: "bg-gray-400" },
  { name: "Copper", volume: "205,000", change: "+11%", color: "bg-orange-400" },
]

const pipelineStages = [
  { stage: "Prospecting", count: 23, color: "bg-neutral-600" },
  { stage: "PoP Verified", count: 18, color: "bg-axalio-green" },
  { stage: "PoF Verified", count: 12, color: "bg-axalio-green" },
  { stage: "Contracts Signed", count: 15, color: "bg-blue-600" },
  { stage: "In Transit", count: 8, color: "bg-yellow-600" },
  { stage: "Completed", count: 71, color: "bg-neutral-500" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="font-mono font-bold text-foreground tracking-wider text-2xl">AXALIO COMMAND CENTER</h1>
        <p className="font-mono text-muted-foreground text-sm tracking-wide">
          Global precious metals trading platform overview
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="font-mono text-xs text-muted-foreground tracking-wider">{metric.title}</p>
                  <p className="font-mono text-3xl font-bold text-foreground">{metric.value}</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-axalio-green" />
                    <span className="font-mono text-xs text-axalio-green">{metric.change}</span>
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
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-mono text-foreground tracking-wider">COMMODITIES VOLUME TRENDS (YoY)</CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs border-border bg-transparent hover:bg-axalio-green hover:text-black"
              >
                12M
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs border-border bg-transparent hover:bg-axalio-green hover:text-black"
              >
                24M
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Legend */}
            <div className="flex flex-wrap gap-6">
              {commodityData.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${c.color}`} />
                  <span className="font-mono text-xs text-muted-foreground">{c.name}</span>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="h-64 bg-muted rounded-lg p-4 relative">
              <img
                src="/placeholder.svg?height=256&width=600"
                alt="Commodities chart placeholder"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </CardContent>
        </Card>

        {/* Deal Pipeline */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-mono text-foreground tracking-wider">DEAL PIPELINE STATUS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pipelineStages.map((stage) => (
              <div key={stage.stage} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${stage.color}`} />
                  <span className="font-mono text-sm text-muted-foreground">{stage.stage}</span>
                </div>
                <span className="font-mono text-lg font-bold text-foreground">{stage.count}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-border text-center">
              <div className="font-mono text-xs text-muted-foreground mb-1">CONVERSION RATE</div>
              <div className="font-mono text-2xl font-bold text-axalio-green">87.3%</div>
              <div className="font-mono text-xs text-axalio-green">+5.2% vs last month</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Global Trading Network and Critical Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlobalTradingNetwork />
        </div>
        <div className="lg:col-span-1">
          <CriticalActivities />
        </div>
      </div>
    </div>
  )
}
