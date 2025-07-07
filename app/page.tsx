"use client"

import { useState } from "react"
import { ChevronRight, Monitor, Settings, Shield, Target, Users, Bell, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import DealsPage from "./deals/page"
import OnboardingPage from "./onboarding/page"
import DocumentsPage from "./documents/page"
import CommissionsPage from "./commissions/page"
import AdminPage from "./admin/page"
import BuyersPage from "./buyers/page"
import SellersPage from "./sellers/page"
import BrokersPage from "./brokers/page"

export default function AxalioMVP() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen w-full bg-black overflow-x-hidden">
      {/* ─────────────── Sidebar ─────────────── */}
      <div
        className={`${sidebarCollapsed ? "w-16" : "w-70"} bg-neutral-900 border-r border-neutral-700 transition-all duration-300 fixed md:relative z-50 md:z-auto h-full ${!sidebarCollapsed ? "md:block" : ""}`}
      >
        <div className="p-4 h-full bg-black">
          <div className="flex items-center justify-between mb-8">
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-emerald-500 font-bold text-lg tracking-wider">AXALIO</h1>
                <p className="text-neutral-500 text-xs">MVP v1.0.0 BETA</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-neutral-400 hover:text-emerald-500"
            >
              <ChevronRight
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`}
              />
            </Button>
          </div>

          <nav className="space-y-2">
            {[
              { id: "dashboard", icon: Monitor, label: "DASHBOARD" },
              { id: "deals", icon: Target, label: "DEALS" },
              { id: "buyers", icon: Users, label: "BUYERS" },
              { id: "sellers", icon: Users, label: "SELLERS" },
              { id: "brokers", icon: Users, label: "BROKERS" },
              { id: "onboarding", icon: Users, label: "ONBOARDING" },
              { id: "documents", icon: Shield, label: "DOCUMENTS" },
              { id: "commissions", icon: Settings, label: "COMMISSIONS" },
              { id: "admin", icon: Settings, label: "ADMIN PANEL" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${
                  activeSection === item.id
                    ? "bg-emerald-500 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          {!sidebarCollapsed && (
            <div className="mt-8 p-4 bg-neutral-800 border border-neutral-700 rounded">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-white">SYSTEM ONLINE</span>
              </div>
              <div className="text-xs text-neutral-500 space-y-1">
                <div>UPTIME: 99.9%</div>
                <div>ACTIVE DEALS: 47</div>
                <div>PENDING KYC: 12</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─────────────── Mobile overlay ─────────────── */}
      {!sidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      {/* ─────────────── Main content ─────────────── */}
      <div
        className={`flex-1 flex flex-col bg-black w-full min-w-0 overflow-x-hidden ${
          !sidebarCollapsed ? "md:ml-0" : ""
        }`}
      >
        {/* Top toolbar */}
        <div className="h-16 bg-neutral-800 border-b border-neutral-700 flex items-center justify-between px-6">
          <div className="text-sm text-neutral-400 truncate">
            AXALIO PLATFORM / <span className="text-emerald-500">{activeSection.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-xs text-neutral-500">LAST UPDATE: {new Date().toLocaleString()}</div>
            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-emerald-500">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-emerald-500">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Routed pages */}
        <div className="flex-1 bg-black p-6 overflow-x-hidden">
          {activeSection === "dashboard" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-wider font-mono text-white">DASHBOARD</h2>
              <p className="text-neutral-400">
                Welcome to the Axalio MVP. Use the sidebar to navigate through the platform features.
              </p>
            </div>
          )}
          {activeSection === "deals" && <DealsPage />}
          {activeSection === "buyers" && <BuyersPage />}
          {activeSection === "sellers" && <SellersPage />}
          {activeSection === "brokers" && <BrokersPage />}
          {activeSection === "onboarding" && <OnboardingPage />}
          {activeSection === "documents" && <DocumentsPage />}
          {activeSection === "commissions" && <CommissionsPage />}
          {activeSection === "admin" && <AdminPage />}
        </div>
      </div>
    </div>
  )
}
