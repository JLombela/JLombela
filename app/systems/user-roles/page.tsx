"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, TrendingUp, Shield, Settings, Download, Check, Minus, X } from "lucide-react"

export default function UserRolesPage() {
  // User role data
  const userRoles = [
    {
      role: "Buyer",
      description: "View matched deals, upload PoF, sign contracts",
      permissions: ["View matched deals", "Upload PoF documents", "Sign contracts", "Manage own profile"],
      activeUsers: 23,
      color: "bg-blue-600",
      icon: Target,
    },
    {
      role: "Seller",
      description: "Submit gold offers, upload PoP, sign contracts",
      permissions: ["Submit gold offers", "Upload PoP documents", "Sign contracts", "Manage own profile"],
      activeUsers: 18,
      color: "bg-emerald-600",
      icon: TrendingUp,
    },
    {
      role: "Broker",
      description: "View introduced deals and commissions only",
      permissions: ["View introduced deals", "View commissions", "Manage own profile", "Generate reports"],
      activeUsers: 12,
      color: "bg-yellow-600",
      icon: Users,
    },
    {
      role: "Admin",
      description: "Full platform control including onboarding, deal management, compliance, and reporting",
      permissions: [
        "Full platform control",
        "User onboarding",
        "Deal management",
        "Compliance oversight",
        "Generate all reports",
        "Manage all profiles",
      ],
      activeUsers: 5,
      color: "bg-red-600",
      icon: Shield,
    },
  ]

  // RBAC Matrix data
  const rbacMatrix = [
    {
      module: "View Own Profile",
      buyer: "full",
      seller: "full",
      broker: "full",
      admin: "all",
    },
    {
      module: "Manage KYC/KYB Docs",
      buyer: "full",
      seller: "full",
      broker: "full",
      admin: "all",
      adminNote: "(Approve/Reject)",
    },
    {
      module: "View Deals",
      buyer: "own",
      seller: "own",
      broker: "introduced",
      admin: "all",
    },
    {
      module: "Contracts",
      buyer: "sign",
      seller: "sign",
      broker: "view",
      admin: "generate",
      adminNote: "/Sign",
    },
    {
      module: "Commission Reports",
      buyer: "none",
      seller: "view",
      broker: "view",
      admin: "process",
    },
  ]

  const getPermissionIcon = (permission: string) => {
    switch (permission) {
      case "full":
      case "all":
      case "sign":
      case "view":
      case "own":
      case "introduced":
      case "generate":
      case "process":
        return <Check className="w-4 h-4 text-emerald-500" />
      case "none":
        return <X className="w-4 h-4 text-red-500" />
      default:
        return <Minus className="w-4 h-4 text-yellow-500" />
    }
  }

  const getPermissionText = (permission: string, note?: string) => {
    const baseText =
      permission === "full"
        ? "Yes"
        : permission === "all"
          ? "All"
          : permission === "none"
            ? "N/A"
            : permission.charAt(0).toUpperCase() + permission.slice(1)

    return note ? `${baseText} ${note}` : baseText
  }

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen px-0 py-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-white font-mono tracking-wider text-2xl">USER ROLES & ACCESS CONTROL</h1>
          <p className="text-neutral-400 font-mono text-sm mt-1">
            Role-based access control matrix and permission management
          </p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-emerald-600 hover:bg-emerald-700 font-mono tracking-wider text-black">
            <Settings className="w-4 h-4 mr-2" />
            EDIT ROLES
          </Button>
          <Button variant="outline" className="border-neutral-600 text-white font-mono tracking-wider bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            EXPORT MATRIX
          </Button>
        </div>
      </div>

      {/* User Roles Overview */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-mono tracking-wider">ACCESS LEVELS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userRoles.map((role) => (
            <Card key={role.role} className="bg-neutral-900 border-neutral-800">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <role.icon className="w-5 h-5 text-emerald-500" />
                    <CardTitle className="text-lg font-mono text-white tracking-wider">{role.role}</CardTitle>
                  </div>
                  <Badge className={`${role.color} text-white font-mono text-xs`}>{role.activeUsers} users</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-300 font-mono mb-4">{role.description}</p>
                <div className="space-y-2">
                  <p className="text-xs text-neutral-400 font-mono tracking-wider">KEY PERMISSIONS:</p>
                  <ul className="space-y-1">
                    {role.permissions.slice(0, 3).map((permission, index) => (
                      <li key={index} className="text-xs text-neutral-300 font-mono flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* RBAC Matrix */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white font-mono tracking-wider">RBAC MATRIX</h2>
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left p-4 text-sm font-mono text-white tracking-wider bg-neutral-800">MODULE</th>
                    <th className="text-center p-4 text-sm font-mono text-white tracking-wider bg-blue-900/20">
                      BUYER
                    </th>
                    <th className="text-center p-4 text-sm font-mono text-white tracking-wider bg-emerald-900/20">
                      SELLER
                    </th>
                    <th className="text-center p-4 text-sm font-mono text-white tracking-wider bg-yellow-900/20">
                      BROKER
                    </th>
                    <th className="text-center p-4 text-sm font-mono text-white tracking-wider bg-red-900/20">ADMIN</th>
                  </tr>
                </thead>
                <tbody>
                  {rbacMatrix.map((row, index) => (
                    <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                      <td className="p-4 text-sm font-mono text-white bg-neutral-800/50">{row.module}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.buyer)}
                          <span className="text-sm font-mono text-white">{getPermissionText(row.buyer)}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.seller)}
                          <span className="text-sm font-mono text-white">{getPermissionText(row.seller)}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.broker)}
                          <span className="text-sm font-mono text-white">{getPermissionText(row.broker)}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getPermissionIcon(row.admin)}
                          <span className="text-sm font-mono text-white">
                            {getPermissionText(row.admin, row.adminNote)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Permission Legend */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-lg font-mono text-white tracking-wider">PERMISSION LEGEND</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-mono text-white">Full Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-mono text-white">Limited Access</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-500" />
              <span className="text-sm font-mono text-white">No Access</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
