"use client"

import React from "react"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return (
        <div className="flex items-center justify-center min-h-[400px] p-4">
          <Card className="w-full max-w-md bg-card border-border">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <CardTitle className="text-lg font-semibold text-foreground font-mono">SYSTEM ERROR DETECTED</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  An unexpected error occurred while processing your request.
                </p>
                {this.state.error && (
                  <details className="text-xs text-muted-foreground bg-muted p-2 rounded font-mono">
                    <summary className="cursor-pointer mb-2">Error Details</summary>
                    <pre className="whitespace-pre-wrap">{this.state.error.message}</pre>
                  </details>
                )}
              </div>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={this.resetError}
                  className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  TRY AGAIN
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/")}
                  className="border-border text-muted-foreground hover:bg-accent font-mono"
                >
                  <Home className="w-4 h-4 mr-2" />
                  GO HOME
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}

// HOC for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>,
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  return WrappedComponent
}
