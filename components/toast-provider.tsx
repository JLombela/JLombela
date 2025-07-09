"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export type ToastType = "success" | "error" | "warning" | "info"

export interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => void
  removeToast: (id: string) => void
  clearToasts: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }

    setToasts((prev) => [...prev, newToast])

    // Auto remove toast after duration
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id)
      }, toast.duration || 5000)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const clearToasts = useCallback(() => {
    setToasts([])
  }, [])

  const getToastIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-axalio-green" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getToastStyles = (type: ToastType) => {
    switch (type) {
      case "success":
        return "border-axalio-green/20 bg-axalio-green/5"
      case "error":
        return "border-red-500/20 bg-red-500/5"
      case "warning":
        return "border-yellow-500/20 bg-yellow-500/5"
      case "info":
        return "border-blue-500/20 bg-blue-500/5"
    }
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map((toast) => (
          <Card
            key={toast.id}
            className={`p-4 shadow-lg border ${getToastStyles(toast.type)} animate-in slide-in-from-right-full`}
          >
            <div className="flex items-start gap-3">
              {getToastIcon(toast.type)}
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-semibold text-foreground font-mono">{toast.title}</h4>
                {toast.description && <p className="text-xs text-muted-foreground">{toast.description}</p>}
                {toast.action && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={toast.action.onClick}
                    className="mt-2 h-7 text-xs font-mono bg-transparent"
                  >
                    {toast.action.label}
                  </Button>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeToast(toast.id)}
                className="h-6 w-6 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

// Convenience functions for common toast types
export const toast = {
  success: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext)
    if (context) {
      context.addToast({ type: "success", title, description, ...options })
    }
  },
  error: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext)
    if (context) {
      context.addToast({ type: "error", title, description, ...options })
    }
  },
  warning: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext)
    if (context) {
      context.addToast({ type: "warning", title, description, ...options })
    }
  },
  info: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext)
    if (context) {
      context.addToast({ type: "info", title, description, ...options })
    }
  },
}
