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
      color: "text-emerald-400",
    },
    {
      label: "ACTIVE DEALS",
      value: "47",
      icon: FileText,
      color: "text-emerald-400",
    },
    {
      label: "TOTAL VOLUME",
      value: "$2.4M",
      icon: DollarSign,
      color: "text-emerald-400",
    },
    {
      label: "SYSTEM UPTIME",
      value: "99.9%",
      icon: TrendingUp,
      color: "text-emerald-400",
    },
  ]

  const recentActivity = [
    {
      time: "2 min ago",
      action: "New user registration",
      entity: "Golden Mining Co.",
      entityColor: "text-emerald-400",
    },
    {
      time: "5 min ago",
      action: "Deal status updated",
      entity: "DEAL-2025-047",
      entityColor: "text-emerald-400",
    },
    {
      time: "12 min ago",
      action: "Document uploaded",
      entity: "Swiss Refinery AG",
      entityColor: "text-emerald-400",
    },
    {
      time: "18 min ago",
      action: "KYC approved",
      entity: "Mining Brokers Ltd",
      entityColor: "text-emerald-400",
    },
    {
      time: "25 min ago",
      action: "Commission processed",
      entity: "COM-2025-001",
      entityColor: "text-emerald-400",
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
      bgColor: "bg-emerald-600",
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
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">ADMIN PANEL</h2>
            <p className="text-neutral-400 font-mono">Global monitoring & user management coming soon.</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase px-6">
              SYSTEM SETTINGS
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase px-6">
              GENERATE REPORT
            </Button>
          </div>
        </div>

        {/* Tabs */}
        

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-700 p-6 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 font-mono uppercase mb-2">{metric.label}</p>
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
          <div className="bg-neutral-900 border border-neutral-700 rounded p-6">
            <h3 className="text-lg font-bold text-white font-mono uppercase mb-6">RECENT ACTIVITY</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-xs text-neutral-500 font-mono mb-1">{activity.time}</div>
                    <div className="text-white font-mono text-sm">
                      {activity.action} <span className={activity.entityColor}>{activity.entity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-neutral-900 border border-neutral-700 rounded p-6">
            <h3 className="text-lg font-bold text-white font-mono uppercase mb-6">SYSTEM ALERTS</h3>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${alert.bgColor} text-white font-mono text-xs px-2 py-1`}>{alert.type}</Badge>
                    <span className="text-xs text-neutral-500 font-mono">{alert.time}</span>
                  </div>
                  <p className="text-white font-mono text-sm">{alert.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-neutral-900 border border-neutral-700 rounded p-6">
          <h3 className="text-lg font-bold text-white font-mono uppercase mb-6">QUICK ACTIONS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="bg-neutral-800 border border-neutral-700 hover:border-emerald-500 p-6 rounded transition-colors group"
              >
                <div className="flex flex-col items-center gap-3">
                  <action.icon className="w-8 h-8 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-white font-mono text-sm uppercase">{action.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
