"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, FileText, Clock, CheckCircle } from "lucide-react"

export default function UserDashboardPage() {
  return (
    <div className="p-6 space-y-6 font-mono px-0 py-0">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white font-mono tracking-wider">USER DASHBOARD</h1>
        <p className="text-neutral-400 font-mono">Manage your profile, documents, and track your application status.</p>
      </div>

      {/* User Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">PROFILE STATUS</p>
                <p className="text-2xl font-bold text-emerald-500 font-mono">ACTIVE</p>
              </div>
              <User className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">DOCUMENTS</p>
                <p className="text-2xl font-bold text-white font-mono">3/5</p>
              </div>
              <FileText className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">PENDING TASKS</p>
                <p className="text-2xl font-bold text-yellow-500 font-mono">2</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-400 tracking-wider">COMPLETED</p>
                <p className="text-2xl font-bold text-white font-mono">8</p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">QUICK ACTIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors">
                <div className="text-sm text-white font-mono tracking-wider">UPLOAD DOCUMENTS</div>
                <div className="text-xs text-neutral-400 mt-1">Complete your profile verification</div>
              </button>
              <button className="w-full text-left p-3 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors">
                <div className="text-sm text-white font-mono tracking-wider">UPDATE PROFILE</div>
                <div className="text-xs text-neutral-400 mt-1">Modify your personal information</div>
              </button>
              <button className="w-full text-left p-3 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors">
                <div className="text-sm text-white font-mono tracking-wider">VIEW APPLICATIONS</div>
                <div className="text-xs text-neutral-400 mt-1">Check status of submitted applications</div>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-neutral-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-300 tracking-wider">RECENT ACTIVITY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              <div className="text-xs border-l-2 border-emerald-500 pl-3 hover:bg-neutral-800 p-2 rounded transition-colors">
                <div className="text-neutral-500 font-mono">2 hours ago</div>
                <div className="text-white">
                  Document uploaded: <span className="text-emerald-500 font-mono">Business License</span>
                </div>
              </div>
              <div className="text-xs border-l-2 border-emerald-500 pl-3 hover:bg-neutral-800 p-2 rounded transition-colors">
                <div className="text-neutral-500 font-mono">1 day ago</div>
                <div className="text-white">
                  Profile updated: <span className="text-emerald-500 font-mono">Contact Information</span>
                </div>
              </div>
              <div className="text-xs border-l-2 border-emerald-500 pl-3 hover:bg-neutral-800 p-2 rounded transition-colors">
                <div className="text-neutral-500 font-mono">3 days ago</div>
                <div className="text-white">
                  Application submitted: <span className="text-emerald-500 font-mono">KYC Verification</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
