"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, FileText, Clock, CheckCircle } from "lucide-react"

export default function UserDashboardPage() {
  return (
    <div className="p-6 space-y-6 px-0 py-0">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground tracking-wider font-mono">USER DASHBOARD</h1>
        <p className="text-muted-foreground font-mono">
          Manage your profile, documents, and track your application status.
        </p>
      </div>

      {/* User Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">PROFILE STATUS</p>
                <p className="text-2xl font-bold text-axalio-green font-mono">ACTIVE</p>
              </div>
              <User className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">DOCUMENTS</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">3/5</p>
              </div>
              <FileText className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">PENDING TASKS</p>
                <p className="text-2xl font-bold text-yellow-500 font-mono">2</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">COMPLETED</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">8</p>
              </div>
              <CheckCircle className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">QUICK ACTIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">UPLOAD DOCUMENTS</div>
                <div className="text-xs text-muted-foreground mt-1">Complete your profile verification</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">UPDATE PROFILE</div>
                <div className="text-xs text-muted-foreground mt-1">Modify your personal information</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">VIEW APPLICATIONS</div>
                <div className="text-xs text-muted-foreground mt-1">Check status of submitted applications</div>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">RECENT ACTIVITY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              <div className="text-xs border-l-2 border-axalio-green pl-3 hover:bg-accent p-2 rounded transition-colors">
                <div className="text-muted-foreground font-mono">2 hours ago</div>
                <div className="text-foreground">
                  Document uploaded: <span className="text-axalio-green font-mono">Business License</span>
                </div>
              </div>
              <div className="text-xs border-l-2 border-axalio-green pl-3 hover:bg-accent p-2 rounded transition-colors">
                <div className="text-muted-foreground font-mono">1 day ago</div>
                <div className="text-foreground">
                  Profile updated: <span className="text-axalio-green font-mono">Contact Information</span>
                </div>
              </div>
              <div className="text-xs border-l-2 border-axalio-green pl-3 hover:bg-accent p-2 rounded transition-colors">
                <div className="text-muted-foreground font-mono">3 days ago</div>
                <div className="text-foreground">
                  Application submitted: <span className="text-axalio-green font-mono">KYC Verification</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
