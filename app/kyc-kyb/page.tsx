"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus, Eye, Edit, AlertTriangle, CheckCircle, Clock, FileText, Users } from "lucide-react"

export default function KycKybPage() {
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
      type: "KYC",
      status: "UNDER_REVIEW",
      riskLevel: "LOW",
      submittedDate: "2024-01-15",
      reviewedBy: "COMPLIANCE TEAM A",
      documents: 7,
      completionRate: "90%",
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

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white font-mono tracking-wider">KYC/KYB COMPLIANCE</h1>
          <p className="text-neutral-400 font-mono">
            Monitor Know Your Customer and Know Your Business compliance processes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-neutral-900 border-neutral-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-400 tracking-wider font-mono">{stat.title}</p>
                    <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
                    <p
                      className={`text-xs font-mono ${stat.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}
                    >
                      {stat.change}
                    </p>
                  </div>
                  <stat.icon className="h-8 w-8 text-emerald-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
              <Input
                placeholder="SEARCH APPLICATIONS..."
                className="pl-10 bg-neutral-900 border-neutral-700 text-white font-mono tracking-wider placeholder:text-neutral-500 placeholder:uppercase"
              />
            </div>
            <Button variant="outline" className="border-neutral-700 text-white font-mono tracking-wider bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              FILTER
            </Button>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono tracking-wider">
            <Plus className="h-4 w-4 mr-2" />
            NEW APPLICATION
          </Button>
        </div>

        {/* Applications Table */}
        <Card className="bg-neutral-900 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-white font-mono tracking-wider">COMPLIANCE APPLICATIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-4 bg-neutral-800 rounded-lg border border-neutral-700"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-white font-mono tracking-wider">{app.applicant || app.name}</h3>
                      <Badge className={`font-mono tracking-wider ${getStatusColor(app.status)}`}>
                        {app.status.replace("_", " ")}
                      </Badge>
                      <Badge variant="outline" className={`font-mono tracking-wider ${getRiskColor(app.riskLevel)}`}>
                        {app.riskLevel} RISK
                      </Badge>
                      <Badge variant="outline" className="border-neutral-400 text-neutral-400 font-mono tracking-wider">
                        {app.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-neutral-400 font-mono">REVIEWED BY: {app.reviewedBy}</p>
                    <div className="flex gap-4 text-xs text-neutral-400 font-mono">
                      <span>ID: {app.id}</span>
                      <span>SUBMITTED: {app.submittedDate}</span>
                      <span>DOCUMENTS: {app.documents}</span>
                      <span>COMPLETION: {app.completionRate}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neutral-600 text-white font-mono tracking-wider bg-transparent"
                    >
                      <Eye className="h-4 w-4" />
                      REVIEW
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neutral-600 text-white font-mono tracking-wider bg-transparent"
                    >
                      <Edit className="h-4 w-4" />
                      EDIT
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white font-mono tracking-wider bg-transparent"
                    >
                      <CheckCircle className="h-4 w-4" />
                      APPROVE
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
    </div>
  )
}
