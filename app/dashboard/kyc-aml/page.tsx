"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function KYCAMLDashboardPage() {
  return (
    <div className="p-6 space-y-6 px-0 py-0">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground font-mono tracking-wider">KYC/AML DASHBOARD</h1>
        <p className="text-muted-foreground font-mono">
          Monitor compliance status, review applications, and manage risk assessments.
        </p>
      </div>

      {/* KYC/AML Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">PENDING REVIEWS</p>
                <p className="text-2xl font-bold text-yellow-500 font-mono">18</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">APPROVED TODAY</p>
                <p className="text-2xl font-bold text-axalio-green font-mono">7</p>
              </div>
              <CheckCircle className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">HIGH RISK ALERTS</p>
                <p className="text-2xl font-bold text-red-500 font-mono">3</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">COMPLIANCE RATE</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">96%</p>
              </div>
              <Shield className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Review Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">REVIEW QUEUE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  company: "Golden Mining Co.",
                  type: "KYC",
                  risk: "low",
                  submitted: "2 hours ago",
                  priority: "normal",
                },
                {
                  company: "Silver Corp Ltd.",
                  type: "AML",
                  risk: "medium",
                  submitted: "4 hours ago",
                  priority: "high",
                },
                { company: "Copper Industries", type: "KYC", risk: "high", submitted: "1 day ago", priority: "urgent" },
                { company: "Platinum Group", type: "KYB", risk: "low", submitted: "2 days ago", priority: "normal" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent rounded">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.priority === "urgent"
                          ? "bg-red-500"
                          : item.priority === "high"
                            ? "bg-yellow-500"
                            : "bg-axalio-green"
                      }`}
                    ></div>
                    <div>
                      <div className="text-sm text-accent-foreground">{item.company}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.type} Review • {item.submitted}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-mono uppercase tracking-wider ${
                        item.risk === "high"
                          ? "text-red-500"
                          : item.risk === "medium"
                            ? "text-yellow-500"
                            : "text-axalio-green"
                      }`}
                    >
                      {item.risk} RISK
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.priority}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4 bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">
              COMPLIANCE ACTIONS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">REVIEW APPLICATIONS</div>
                <div className="text-xs text-muted-foreground mt-1">Process pending KYC/AML</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">RISK ASSESSMENT</div>
                <div className="text-xs text-muted-foreground mt-1">Evaluate client risk profiles</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">COMPLIANCE REPORTS</div>
                <div className="text-xs text-muted-foreground mt-1">Generate regulatory reports</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">AUDIT TRAIL</div>
                <div className="text-xs text-muted-foreground mt-1">View compliance history</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Alerts */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">RECENT RISK ALERTS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                alert: "Suspicious transaction pattern detected",
                entity: "Copper Industries",
                severity: "high",
                time: "30 min ago",
              },
              {
                alert: "Document verification failed",
                entity: "New Mining Corp",
                severity: "medium",
                time: "2 hours ago",
              },
              {
                alert: "PEP match found in screening",
                entity: "Global Traders Ltd",
                severity: "high",
                time: "4 hours ago",
              },
            ].map((alert, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-accent rounded border-l-4 border-red-500"
              >
                <div>
                  <div className="text-sm text-accent-foreground">{alert.alert}</div>
                  <div className="text-xs text-muted-foreground">
                    {alert.entity} • {alert.time}
                  </div>
                </div>
                <div
                  className={`text-xs uppercase tracking-wider font-mono ${
                    alert.severity === "high" ? "text-red-500" : "text-yellow-500"
                  }`}
                >
                  {alert.severity}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
