"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus, Eye, AlertTriangle, CheckCircle, Clock, FileText, Users } from "lucide-react"
import { KYCDetailsModal } from "@/components/kyc-details-modal"

export default function KycKybPage() {
  const [selectedApplication, setSelectedApplication] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const applications = [
    {
      id: "KYC-001",
      applicant: "TECHCORP INDUSTRIES",
      type: "KYB",
      status: "APPROVED",
      riskLevel: "LOW",
      submittedDate: "2024-01-10",
      reviewedBy: "COMPLIANCE TEAM A",
      documents: 8,
      completionRate: "100%",
    },
    {
      id: "KYC-002",
      name: "JOHN MITCHELL",
      applicant: "JOHN MITCHELL",
      type: "KYC",
      status: "PENDING",
      riskLevel: "MEDIUM",
      submittedDate: "2024-01-14",
      reviewedBy: "PENDING ASSIGNMENT",
      documents: 5,
      completionRate: "75%",
    },
    {
      id: "KYC-003",
      applicant: "GLOBAL VENTURES LLC",
      type: "KYB",
      status: "REJECTED",
      riskLevel: "HIGH",
      submittedDate: "2024-01-08",
      reviewedBy: "COMPLIANCE TEAM B",
      documents: 3,
      completionRate: "45%",
    },
    {
      id: "KYC-004",
      name: "SARAH CHEN",
      applicant: "SARAH CHEN",
      type: "KYC",
      status: "UNDER_REVIEW",
      riskLevel: "LOW",
      submittedDate: "2024-01-15",
      reviewedBy: "COMPLIANCE TEAM A",
      documents: 7,
      completionRate: "90%",
    },
    {
      id: "KYC-005",
      applicant: "MINING SOLUTIONS INC",
      type: "KYB",
      status: "PENDING",
      riskLevel: "MEDIUM",
      submittedDate: "2024-01-16",
      reviewedBy: "PENDING ASSIGNMENT",
      documents: 6,
      completionRate: "80%",
    },
    {
      id: "KYC-006",
      name: "DAVID RODRIGUEZ",
      applicant: "DAVID RODRIGUEZ",
      type: "KYC",
      status: "APPROVED",
      riskLevel: "LOW",
      submittedDate: "2024-01-12",
      reviewedBy: "COMPLIANCE TEAM B",
      documents: 9,
      completionRate: "100%",
    },
  ]

  const stats = [
    {
      title: "TOTAL APPLICATIONS",
      value: "2,847",
      change: "+15%",
      icon: FileText,
    },
    {
      title: "PENDING REVIEW",
      value: "127",
      change: "-8%",
      icon: Clock,
    },
    {
      title: "APPROVED",
      value: "2,456",
      change: "+18%",
      icon: CheckCircle,
    },
    {
      title: "HIGH RISK FLAGGED",
      value: "89",
      change: "+12%",
      icon: AlertTriangle,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "APPROVED":
        return "bg-emerald-600 text-white"
      case "PENDING":
        return "bg-yellow-600 text-white"
      case "REJECTED":
        return "bg-red-600 text-white"
      case "UNDER_REVIEW":
        return "bg-blue-600 text-white"
      default:
        return "bg-neutral-600 text-white"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "LOW":
        return "border-emerald-400 text-emerald-400"
      case "MEDIUM":
        return "border-yellow-400 text-yellow-400"
      case "HIGH":
        return "border-red-400 text-red-400"
      default:
        return "border-neutral-400 text-neutral-400"
    }
  }

  const handleApplicationClick = (application: any) => {
    setSelectedApplication(application)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedApplication(null)
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="p-6 space-y-6 px-0 py-0">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white font-mono tracking-wider">KYC/KYB</h1>
            <p className="text-neutral-400 font-mono">
              Know Your Customer and Know Your Business compliance management.
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono tracking-wider">
              <Plus className="h-4 w-4 mr-2" />
              NEW APPLICATION
            </Button>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white font-mono tracking-wider bg-transparent"
            >
              <Filter className="h-4 w-4 mr-2" />
              FILTER
            </Button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-neutral-900 border border-neutral-800 p-4 rounded">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
              <Input
                placeholder="Search applications..."
                className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono placeholder:text-neutral-500"
              />
            </div>
          </div>

          {stats.slice(0, 3).map((stat, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-800 p-4 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 tracking-wider font-mono">{stat.title}</p>
                  <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
                </div>
                <stat.icon className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Applications Table */}
        <div className="bg-neutral-900 border border-neutral-800 rounded">
          <div className="p-6">
            <h2 className="text-lg font-bold text-white font-mono tracking-wider mb-6">COMPLIANCE APPLICATIONS</h2>

            {/* Table Header */}
            <div className="grid grid-cols-8 gap-4 pb-4 border-b border-neutral-700">
              <div className="text-neutral-400 font-mono text-sm tracking-wider">APPLICATION ID</div>
              <div className="text-neutral-400 font-mono text-sm tracking-wider">APPLICANT</div>
              <div className="text-neutral-400 font-mono text-sm tracking-wider">TYPE</div>
              <div className="text-neutral-400 font-mono text-sm tracking-wider">SUBMITTED</div>
              <div className="text-neutral-400 font-mono text-sm tracking-wider">COMPLETION</div>
              <div className="text-neutral-400 font-mono text-sm tracking-wider">STATUS</div>
              <div className="text-neutral-400 font-mono text-sm tracking-wider">REVIEWER</div>
              <div className="text-neutral-400 font-mono text-sm tracking-wider">ACTIONS</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4 mt-4">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="grid grid-cols-8 gap-4 py-4 hover:bg-neutral-800/50 cursor-pointer transition-colors rounded"
                  onClick={() => handleApplicationClick(app)}
                >
                  <div className="text-white font-mono text-sm font-semibold">{app.id}</div>
                  <div className="text-white font-mono text-sm">{app.applicant}</div>
                  <div className="text-white font-mono text-sm">{app.type}</div>
                  <div className="text-neutral-400 font-mono text-sm">{app.submittedDate}</div>
                  <div className="text-white font-mono text-sm">{app.completionRate}</div>
                  <div>
                    <Badge className={`font-mono text-xs ${getStatusColor(app.status)}`}>
                      {app.status === "UNDER_REVIEW"
                        ? "Under Review"
                        : app.status.charAt(0) + app.status.slice(1).toLowerCase()}
                    </Badge>
                  </div>
                  <div className="text-neutral-400 font-mono text-sm">{app.reviewedBy}</div>
                  <div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-neutral-400 hover:text-white p-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleApplicationClick(app)
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-white font-mono tracking-wider">PRIORITY QUEUE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-900/20 rounded border border-red-700">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <div>
                      <p className="text-sm font-semibold text-white font-mono">HIGH RISK APPLICATIONS</p>
                      <p className="text-xs text-neutral-400 font-mono">REQUIRES IMMEDIATE REVIEW</p>
                    </div>
                  </div>
                  <Badge className="bg-red-600 text-white font-mono tracking-wider">12</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-900/20 rounded border border-yellow-700">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <div>
                      <p className="text-sm font-semibold text-white font-mono">OVERDUE REVIEWS</p>
                      <p className="text-xs text-neutral-400 font-mono">PAST DUE DATE</p>
                    </div>
                  </div>
                  <Badge className="bg-yellow-600 text-white font-mono tracking-wider">8</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-900/20 rounded border border-blue-700">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-blue-400" />
                    <div>
                      <p className="text-sm font-semibold text-white font-mono">PENDING ASSIGNMENT</p>
                      <p className="text-xs text-neutral-400 font-mono">AWAITING REVIEWER</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-600 text-white font-mono tracking-wider">23</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-white font-mono tracking-wider">COMPLIANCE METRICS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-neutral-800 rounded border border-neutral-700">
                  <span className="text-sm text-neutral-400 font-mono">APPROVAL RATE</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">86.3%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-800 rounded border border-neutral-700">
                  <span className="text-sm text-neutral-400 font-mono">AVG REVIEW TIME</span>
                  <span className="text-lg font-bold text-white font-mono">2.4 DAYS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-800 rounded border border-neutral-700">
                  <span className="text-sm text-neutral-400 font-mono">REJECTION RATE</span>
                  <span className="text-lg font-bold text-red-400 font-mono">8.7%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-900/20 rounded border border-emerald-700">
                  <span className="text-sm text-emerald-400 font-mono">COMPLIANCE SCORE</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">94.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* KYC Details Modal */}
      <KYCDetailsModal application={selectedApplication} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
