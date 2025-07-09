"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <CardTitle className="text-xl">Application Error</CardTitle>
          <CardDescription>Something went wrong with the application. Please try again.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error.digest && (
            <div className="rounded-md bg-muted p-3">
              <p className="text-sm font-mono text-muted-foreground">Error ID: {error.digest}</p>
            </div>
          )}
          <div className="flex gap-2">
            <Button onClick={reset} variant="outline" className="flex-1 bg-transparent">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button onClick={() => (window.location.href = "/dashboard")} className="flex-1">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
