"use client"

import { useState } from "react"
import { Users, FileText, DollarSign, TrendingUp, Settings, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Overview")

  const tabs = ["Overview", "Users", "System", "Reports"]

  const metrics = [
    {
      label: "TOTAL USERS",
      value: "1,247",
      icon: Users,
      color: "text-axalio-green",
    },
    {
      label: "ACTIVE DEALS",
      value: "47",
      icon: FileText,
      color: "text-axalio-green",
    },
    {
      label: "TOTAL VOLUME",
      value: "$2.4M",
      icon: DollarSign,
      color: "text-axalio-green",
    },
    {
      label: "SYSTEM UPTIME",
      value: "99.9%",
      icon: TrendingUp,
      color: "text-axalio-green",
    },
  ]

  const recentActivity = [
    {
      time: "2 min ago",
      action: "New user registration",
      entity: "Golden Mining Co.",
      entityColor: "text-axalio-green",
    },
    {
      time: "5 min ago",
      action: "Deal status updated",
      entity: "DEAL-2025-047",
      entityColor: "text-axalio-green",
    },
    {
      time: "12 min ago",
      action: "Document uploaded",
      entity: "Swiss Refinery AG",
      entityColor: "text-axalio-green",
    },
    {
      time: "18 min ago",
      action: "KYC approved",
      entity: "Mining Brokers Ltd",
      entityColor: "text-axalio-green",
    },
    {
      time: "25 min ago",
      action: "Commission processed",
      entity: "COM-2025-001",
      entityColor: "text-axalio-green",
    },
  ]

  const systemAlerts = [
    {
      time: "1 hour ago",
      type: "WARNING",
      message: "Document storage at 85% capacity",
      bgColor: "bg-yellow-600",
    },
    {
      time: "2 hours ago",
      type: "INFO",
      message: "Scheduled maintenance in 24 hours",
      bgColor: "bg-blue-600",
    },
    {
      time: "3 hours ago",
      type: "ERROR",
      message: "KYC API rate limit reached",
      bgColor: "bg-red-600",
    },
    {
      time: "6 hours ago",
      type: "SUCCESS",
      message: "Backup completed successfully",
      bgColor: "bg-axalio-green",
    },
  ]

  const quickActions = [
    {
      title: "MANAGE USERS",
      icon: Users,
    },
    {
      title: "REVIEW KYC",
      icon: FileText,
    },
    {
      title: "SYSTEM CONFIG",
      icon: Settings,
    },
    {
      title: "DATABASE",
      icon: Database,
    },
  ]

  return (
    <div className="w-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-foreground uppercase">ADMIN PANEL</h2>
            <p className="text-muted-foreground font-mono">Global monitoring & user management coming soon.</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase px-6">
              SYSTEM SETTINGS
            </Button>
            <Button className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono uppercase px-6">
              GENERATE REPORT
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-card border border-border p-6 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase mb-2">{metric.label}</p>
                  <p className={`text-3xl font-bold font-mono ${metric.color}`}>{metric.value}</p>
                </div>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-card border border-border rounded p-6">
            <h3 className="text-lg font-bold text-foreground font-mono uppercase mb-6">RECENT ACTIVITY</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-axalio-green rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground font-mono mb-1">{activity.time}</div>
                    <div className="text-foreground font-mono text-sm">
                      {activity.action} <span className={activity.entityColor}>{activity.entity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-card border border-border rounded p-6">
            <h3 className="text-lg font-bold text-foreground font-mono uppercase mb-6">SYSTEM ALERTS</h3>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="bg-muted border border-border p-4 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${alert.bgColor} text-white font-mono text-xs px-2 py-1`}>{alert.type}</Badge>
                    <span className="text-xs text-muted-foreground font-mono">{alert.time}</span>
                  </div>
                  <p className="text-foreground font-mono text-sm">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card border border-border rounded p-6">
          <h3 className="text-lg font-bold text-foreground font-mono uppercase mb-6">QUICK ACTIONS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="bg-muted border border-border hover:border-axalio-green p-6 rounded transition-colors group"
              >
                <div className="flex flex-col items-center gap-3">
                  <action.icon className="w-8 h-8 text-muted-foreground group-hover:text-axalio-green transition-colors" />
                  <span className="text-foreground font-mono text-sm uppercase">{action.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
