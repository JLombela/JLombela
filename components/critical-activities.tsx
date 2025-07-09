import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Info } from "lucide-react"

const activities = [
  { icon: CheckCircle, text: "High-value gold deal completed: $2.8M", time: "15 min ago", color: "text-axalio-green" },
  {
    icon: AlertTriangle,
    text: "KYC verification required for new seller",
    time: "32 min ago",
    color: "text-yellow-400",
  },
  { icon: Info, text: "Payment gateway maintenance scheduled", time: "1 hour ago", color: "text-blue-400" },
  { icon: CheckCircle, text: "Monthly compliance report generated", time: "2 hours ago", color: "text-axalio-green" },
]

export function CriticalActivities() {
  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <CardTitle className="font-mono text-foreground tracking-wider">CRITICAL ACTIVITIES</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-3 bg-muted rounded-lg">
              <activity.icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${activity.color}`} />
              <div>
                <p className="font-mono text-sm text-foreground">{activity.text}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm text-muted-foreground">SYSTEM STATUS</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-axalio-green animate-pulse" />
              <span className="font-mono text-sm font-medium text-axalio-green">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
