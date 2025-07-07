"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Users,
  Settings,
  Eye,
  FileText,
  Handshake,
  CheckCircle,
  XCircle,
  Minus,
  Edit,
  Download,
} from "lucide-react"

const USER_ROLES = [
  {
    role: "Buyer",
    permissions: "View matched deals, upload PoF, sign contracts",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: Users,
    count: 34,
  },
  {
    role: "Seller",
    permissions: "Submit gold offers, upload PoP, sign contracts",
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    icon: Settings,
    count: 28,
  },
  {
    role: "Broker",
    permissions: "View introduced deals and commissions only",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: Handshake,
    count: 15,
  },
  {
    role: "Admin",
    permissions: "Full platform control including onboarding, deal management, compliance, and reporting",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: Shield,
    count: 8,
  },
]

const RBAC_MATRIX = [
  {
    module: "View Own Profile",
    buyer: "Yes",
    seller: "Yes",
    broker: "Yes",
    admin: "All",
    icon: Eye,
  },
  {
    module: "Manage KYC/KYB Docs",
    buyer: "Yes",
    seller: "Yes",
    broker: "Yes",
    admin: "All (Approve/Reject)",
    icon: FileText,
  },
  {
    module: "View Deals",
    buyer: "Own",
    seller: "Own",
    broker: "Introduced",
    admin: "All",
    icon: Handshake,
  },
  {
    module: "Contracts",
    buyer: "Sign",
    seller: "Sign",
    broker: "View",
    admin: "Generate/Sign",
    icon: FileText,
  },
  {
    module: "Commission Reports",
    buyer: "N/A",
    seller: "View",
    broker: "View",
    admin: "Process",
    icon: Settings,
  },
]

const getPermissionIcon = (permission: string) => {
  if (permission === "Yes" || permission === "All" || permission.includes("All")) {
    return <CheckCircle className="h-4 w-4 text-emerald-400" />
  } else if (permission === "N/A") {
    return <XCircle className="h-4 w-4 text-red-400" />
  } else {
    return <Minus className="h-4 w-4 text-yellow-400" />
  }
}

const getPermissionColor = (permission: string) => {
  if (permission === "Yes" || permission === "All" || permission.includes("All")) {
    return "text-emerald-400"
  } else if (permission === "N/A") {
    return "text-red-400"
  } else {
    return "text-yellow-400"
  }
}

export default function UserRolesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold font-mono tracking-wider text-emerald-400 mb-2">
              USER ROLES & ACCESS CONTROL
            </h1>
            <p className="text-neutral-400 font-mono text-sm tracking-wide">
              Role-Based Access Control (RBAC) matrix and permission management
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="font-mono tracking-wider border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 bg-transparent"
            >
              <Edit className="h-4 w-4 mr-2" />
              EDIT ROLES
            </Button>
            <Button
              variant="outline"
              className="font-mono tracking-wider border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              EXPORT MATRIX
            </Button>
          </div>
        </div>
      </div>

      {/* User Roles Overview */}
      <Card className="bg-neutral-900 border-neutral-800 mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-mono tracking-wider text-emerald-400 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            USER ROLES & ACCESS LEVELS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {USER_ROLES.map((role) => {
              const IconComponent = role.icon
              return (
                <div key={role.role} className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${role.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-lg tracking-wider text-white">
                          {role.role.toUpperCase()}
                        </h3>
                        <Badge
                          variant="outline"
                          className="font-mono text-xs tracking-wider border-neutral-600 text-neutral-400"
                        >
                          {role.count} ACTIVE USERS
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed">{role.permissions}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* RBAC Matrix */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-xl font-mono tracking-wider text-emerald-400 flex items-center gap-2">
            <Settings className="h-5 w-5" />
            RBAC MATRIX (EXCERPT)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-4 px-4 font-mono font-bold tracking-wider text-emerald-400">MODULE</th>
                  <th className="text-center py-4 px-4 font-mono font-bold tracking-wider text-blue-400">BUYER</th>
                  <th className="text-center py-4 px-4 font-mono font-bold tracking-wider text-orange-400">SELLER</th>
                  <th className="text-center py-4 px-4 font-mono font-bold tracking-wider text-purple-400">BROKER</th>
                  <th className="text-center py-4 px-4 font-mono font-bold tracking-wider text-emerald-400">ADMIN</th>
                </tr>
              </thead>
              <tbody>
                {RBAC_MATRIX.map((row, index) => {
                  const IconComponent = row.icon
                  return (
                    <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-4 w-4 text-neutral-400" />
                          <span className="font-mono tracking-wider text-white">{row.module}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.buyer)}
                          <span className={`font-mono text-sm tracking-wider ${getPermissionColor(row.buyer)}`}>
                            {row.buyer}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.seller)}
                          <span className={`font-mono text-sm tracking-wider ${getPermissionColor(row.seller)}`}>
                            {row.seller}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.broker)}
                          <span className={`font-mono text-sm tracking-wider ${getPermissionColor(row.broker)}`}>
                            {row.broker}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.admin)}
                          <span className={`font-mono text-sm tracking-wider ${getPermissionColor(row.admin)}`}>
                            {row.admin}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <CheckCircle className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="font-mono font-bold tracking-wider text-emerald-400">FULL ACCESS</h3>
            </div>
            <p className="text-neutral-300 font-mono text-sm">
              Complete permissions for all platform functions and data access.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Minus className="h-5 w-5 text-yellow-400" />
              </div>
              <h3 className="font-mono font-bold tracking-wider text-yellow-400">LIMITED ACCESS</h3>
            </div>
            <p className="text-neutral-300 font-mono text-sm">
              Restricted permissions based on user role and business requirements.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <XCircle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="font-mono font-bold tracking-wider text-red-400">NO ACCESS</h3>
            </div>
            <p className="text-neutral-300 font-mono text-sm">
              Function not available or applicable for this user role.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
