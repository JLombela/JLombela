"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, TrendingUp, DollarSign, Users } from "lucide-react"

export default function BrokerDashboardPage() {
  return (
    <div className="p-6 space-y-6 px-0 py-0">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground font-mono tracking-wider">BROKER DASHBOARD</h1>
        <p className="text-muted-foreground font-mono">
          Manage client relationships, track commissions, and monitor deal flow.
        </p>
      </div>

      {/* Broker Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">ACTIVE DEALS</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">23</p>
              </div>
              <Handshake className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">COMMISSION EARNED</p>
                <p className="text-2xl font-bold text-axalio-green font-mono">$85K</p>
              </div>
              <DollarSign className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">SUCCESS RATE</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">92%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">ACTIVE CLIENTS</p>
                <p className="text-2xl font-bold text-card-foreground font-mono">67</p>
              </div>
              <Users className="w-8 h-8 text-axalio-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deal Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-8 bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">
              COMMISSION PIPELINE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { deal: "DEAL-2025-047", client: "Golden Mining Co.", commission: "$12,500", status: "pending" },
                { deal: "DEAL-2025-046", client: "Silver Corp Ltd.", commission: "$8,750", status: "approved" },
                { deal: "DEAL-2025-045", client: "Copper Industries", commission: "$15,200", status: "paid" },
                { deal: "DEAL-2025-044", client: "Platinum Group", commission: "$22,100", status: "paid" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent rounded">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.status === "paid"
                          ? "bg-axalio-green"
                          : item.status === "approved"
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                      }`}
                    ></div>
                    <div>
                      <div className="text-sm text-accent-foreground font-mono">{item.deal}</div>
                      <div className="text-xs text-muted-foreground">{item.client}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-axalio-green font-mono">{item.commission}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4 bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-card-foreground tracking-wider">BROKER ACTIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">CREATE NEW DEAL</div>
                <div className="text-xs text-muted-foreground mt-1">Start a new transaction</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">CLIENT MANAGEMENT</div>
                <div className="text-xs text-muted-foreground mt-1">Manage client relationships</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">COMMISSION REPORTS</div>
                <div className="text-xs text-muted-foreground mt-1">View earnings analytics</div>
              </button>
              <button className="w-full text-left p-3 bg-accent rounded hover:bg-accent/80 transition-colors">
                <div className="text-sm text-accent-foreground font-mono tracking-wider">DEAL PIPELINE</div>
                <div className="text-xs text-muted-foreground mt-1">Track active negotiations</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
