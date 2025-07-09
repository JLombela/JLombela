import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const regions = [
  { name: "AMERICAS", value: "$89.2M", change: "+12.5%" },
  { name: "EUROPE", value: "$156.8M", change: "+18.3%" },
  { name: "ASIA-PACIFIC", value: "$78.7M", change: "+9.8%" },
]

export function GlobalTradingNetwork() {
  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <CardTitle className="font-mono text-foreground tracking-wider">GLOBAL TRADING NETWORK</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative h-72 w-full rounded-lg bg-muted flex items-center justify-center p-4">
          <img
            src="/placeholder.svg?height=288&width=600"
            alt="Global trading map placeholder"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute top-4 right-4 bg-background/50 p-3 rounded-md border border-border backdrop-blur-sm">
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-foreground">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                SELLERS
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="h-2 w-2 rounded-full bg-axalio-green" />
                BUYERS
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <div className="h-px w-3 bg-axalio-green/70" />
                ROUTES
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {regions.map((r) => (
            <div key={r.name} className="bg-muted p-4 rounded-lg">
              <p className="font-mono text-xs text-muted-foreground tracking-widest">{r.name}</p>
              <p className="font-mono text-2xl font-bold text-foreground mt-1">{r.value}</p>
              <p className="font-mono text-sm text-axalio-green">{r.change}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
