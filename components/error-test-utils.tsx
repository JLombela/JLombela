"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/toast-provider"
import { AlertTriangle, Bug, Zap, Database, Network } from "lucide-react"

// Component that throws an error when clicked
function ErrorTrigger({ type }: { type: string }) {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error(`Test ${type} error: This is a simulated error for testing purposes`)
  }

  return (
    <Button variant="destructive" onClick={() => setShouldError(true)} className="w-full">
      <Bug className="w-4 h-4 mr-2" />
      Trigger {type} Error
    </Button>
  )
}

// Async error simulation
function AsyncErrorTrigger() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const simulateAsyncError = async () => {
    setLoading(true)
    try {
      // Simulate API call that fails
      await new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Network request failed")), 2000)
      })
    } catch (error) {
      toast({
        type: "error",
        title: "Network Error",
        description: "Failed to fetch data from server",
        action: {
          label: "Retry",
          onClick: () => simulateAsyncError(),
        },
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button variant="outline" onClick={simulateAsyncError} disabled={loading} className="w-full bg-transparent">
      <Network className="w-4 h-4 mr-2" />
      {loading ? "Loading..." : "Simulate Network Error"}
    </Button>
  )
}

// Component that simulates various data states
function DataStateSimulator() {
  const { toast } = useToast()
  const [dataState, setDataState] = useState<"loading" | "empty" | "error" | "success">("success")

  const simulateState = (state: typeof dataState) => {
    setDataState("loading")
    setTimeout(() => {
      setDataState(state)
      if (state === "error") {
        toast({
          type: "error",
          title: "Data Loading Failed",
          description: "Unable to load the requested data",
        })
      }
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Button size="sm" onClick={() => simulateState("empty")}>
          Empty State
        </Button>
        <Button size="sm" onClick={() => simulateState("error")}>
          Error State
        </Button>
        <Button size="sm" onClick={() => simulateState("success")}>
          Success State
        </Button>
      </div>

      <div className="min-h-[200px] border rounded-lg p-4">
        {dataState === "loading" && (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-axalio-green"></div>
          </div>
        )}

        {dataState === "empty" && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Database className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
            <p className="text-muted-foreground">This is how empty states will appear</p>
          </div>
        )}

        {dataState === "error" && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Error Loading Data</h3>
            <p className="text-muted-foreground">This is how error states will appear</p>
          </div>
        )}

        {dataState === "success" && (
          <div className="space-y-2">
            <h3 className="font-semibold">Sample Data</h3>
            <p className="text-muted-foreground">This represents successfully loaded content</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Toast notification tester
function ToastTester() {
  const { toast } = useToast()

  const testToasts = [
    {
      type: "success" as const,
      title: "Success!",
      description: "Operation completed successfully",
    },
    {
      type: "error" as const,
      title: "Error occurred",
      description: "Something went wrong with your request",
    },
    {
      type: "warning" as const,
      title: "Warning",
      description: "Please review your input before proceeding",
    },
    {
      type: "info" as const,
      title: "Information",
      description: "Here's some helpful information",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-2">
      {testToasts.map((toastConfig) => (
        <Button
          key={toastConfig.type}
          variant="outline"
          size="sm"
          onClick={() => toast(toastConfig)}
          className="capitalize"
        >
          {toastConfig.type} Toast
        </Button>
      ))}
    </div>
  )
}

// Main error testing dashboard
export function ErrorTestDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-mono tracking-wider">ERROR HANDLING TEST DASHBOARD</h1>
        <p className="text-muted-foreground font-mono">Test all error scenarios and edge cases</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Component Error Testing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono">
              <Bug className="w-5 h-5" />
              Component Errors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ErrorTrigger type="Render" />
            <ErrorTrigger type="State" />
            <ErrorTrigger type="Props" />
          </CardContent>
        </Card>

        {/* Async Error Testing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono">
              <Network className="w-5 h-5" />
              Async Errors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <AsyncErrorTrigger />
            <Button
              variant="outline"
              onClick={() => {
                // Simulate timeout error
                setTimeout(() => {
                  throw new Error("Timeout error")
                }, 1000)
              }}
              className="w-full"
            >
              <Zap className="w-4 h-4 mr-2" />
              Timeout Error
            </Button>
          </CardContent>
        </Card>

        {/* Toast Testing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono">
              <AlertTriangle className="w-5 h-5" />
              Toast Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ToastTester />
          </CardContent>
        </Card>

        {/* Data State Testing */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-mono">
              <Database className="w-5 h-5" />
              Data State Simulation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DataStateSimulator />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-mono">Testing Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Component Error Testing:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Click "Trigger Render Error" to test ErrorBoundary</li>
                <li>• Check that fallback UI appears correctly</li>
                <li>• Test "Try Again" and "Go Home" buttons</li>
                <li>• Verify error logging in console</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Network Error Testing:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Click "Simulate Network Error" for async errors</li>
                <li>• Check toast notifications appear</li>
                <li>• Test retry functionality</li>
                <li>• Verify loading states work correctly</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Badge variant="outline" className="mr-2">
              Pro Tip:
            </Badge>
            <span className="text-sm text-muted-foreground">
              Open browser DevTools to see detailed error logging and check console for error boundaries
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
