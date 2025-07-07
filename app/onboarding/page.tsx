"use client"

import { useState } from "react"
import { Search, Eye, Clock, CheckCircle, AlertTriangle, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OnboardingPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const applications = [
    {
      id: "KYC-2025-001",
      company: "Golden Mining Co.",
      type: "Seller",
      location: "Ghana",
      status: "PENDING REVIEW",
      contact: "john.doe@goldenmining.com",
      submitted: "2025-06-17",
      documents: 3,
      statusColor: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      id: "KYC-2025-002",
      company: "Swiss Refinery AG",
      type: "Buyer",
      location: "Switzerland",
      status: "APPROVED",
      contact: "info@swissrefinery.ch",
      submitted: "2025-06-15",
      documents: 3,
      statusColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: "KYC-2025-003",
      company: "Dubai Gold Exchange",
      type: "Broker",
      location: "UAE",
      status: "REQUIRES DOCS",
      contact: "compliance@dubaigold.ae",
      submitted: "2025-06-14",
      documents: 1,
      statusColor: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      id: "KYC-2025-004",
      company: "London Precious Metals",
      type: "Buyer",
      location: "UK",
      status: "IN VERIFICATION",
      contact: "kyc@londonpm.co.uk",
      submitted: "2025-06-13",
      documents: 4,
      statusColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ]

  const stats = [
    { label: "PENDING REVIEW", value: "12", icon: Clock, color: "text-yellow-500" },
    { label: "APPROVED", value: "89", icon: CheckCircle, color: "text-emerald-500" },
    { label: "REQUIRES DOCS", value: "7", icon: AlertTriangle, color: "text-red-500" },
    { label: "IN VERIFICATION", value: "5", icon: UserCheck, color: "text-blue-500" },
  ]

  const filteredApplications = applications.filter(
    (app) =>
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full bg-black min-h-full">
      <div className="space-y-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-wider font-mono text-white uppercase">ONBOARDING</h2>
            <p className="text-neutral-400 font-mono">Digital KYC/KYB workflows coming soon.</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">
              MANUAL ONBOARDING
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-mono uppercase">BULK REVIEW</Button>
          </div>
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
            placeholder="Search applications by company, ID, or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono"
          />
        </div>

        {/* Applications Table */}
        <div className="bg-neutral-900 border border-neutral-700 rounded">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="text-lg font-bold text-white font-mono uppercase">KYC/KYB APPLICATIONS</h3>
          </div>
          <div className="overflow-x-auto">
            <div className="space-y-2 p-4">
              {filteredApplications.map((app) => (
                <div key={app.id} className="bg-neutral-800 border border-neutral-700 p-4 rounded">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-bold font-mono">{app.company}</h4>
                        <span className="text-xs text-neutral-400 font-mono">{app.id}</span>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
                        <div>
                          <span className="text-neutral-500 font-mono">Seller</span>
                          <span className="text-white ml-2 font-mono">{app.location}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Buyer</span>
                          <span className="text-white ml-2 font-mono">{app.location}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Contact:</span>
                          <span className="text-white ml-2 font-mono">{app.contact}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Submitted:</span>
                          <span className="text-white ml-2 font-mono">{app.submitted}</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 font-mono">Documents:</span>
                          <span className="text-white ml-2 font-mono">{app.documents} uploaded</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3 py-1 rounded text-xs font-mono uppercase ${app.bgColor} ${app.statusColor}`}
                      >
                        {app.status}
                      </div>
                      <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-emerald-500">
                        <Eye className="w-4 h-4" />
                        <span className="sr-only">REVIEW</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
