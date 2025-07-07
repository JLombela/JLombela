import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date utilities
export function formatDate(date: string | Date, format: "short" | "long" | "datetime" = "short") {
  const d = new Date(date)

  switch (format) {
    case "short":
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    case "long":
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    case "datetime":
      return d.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    default:
      return d.toLocaleDateString()
  }
}

// Currency utilities
export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// File size utilities
export function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

// Status utilities
export function getStatusColor(status: string) {
  const statusColors = {
    // Deal statuses
    draft: "bg-neutral-500/20 text-neutral-300",
    pop_verified: "bg-emerald-500/20 text-emerald-500",
    pof_verified: "bg-emerald-600/20 text-emerald-400",
    contracts_signed: "bg-blue-500/20 text-blue-400",
    in_transit: "bg-yellow-500/20 text-yellow-400",
    delivered: "bg-emerald-400/20 text-emerald-300",
    completed: "bg-white/20 text-white",
    cancelled: "bg-red-500/20 text-red-500",

    // KYC statuses
    pending_review: "bg-yellow-500/20 text-yellow-400",
    approved: "bg-emerald-500/20 text-emerald-500",
    rejected: "bg-red-500/20 text-red-500",
    requires_documents: "bg-red-500/20 text-red-500",
    in_verification: "bg-blue-500/20 text-blue-400",

    // Document statuses
    active: "bg-emerald-500/20 text-emerald-500",
    expired: "bg-red-500/20 text-red-500",
    expiring_soon: "bg-yellow-500/20 text-yellow-400",
    pending_review: "bg-blue-500/20 text-blue-400",

    // Commission statuses
    calculated: "bg-blue-500/20 text-blue-400",
    pending: "bg-yellow-500/20 text-yellow-400",
    paid: "bg-emerald-500/20 text-emerald-500",
    overdue: "bg-red-500/20 text-red-500",

    // User statuses
    active: "bg-emerald-500/20 text-emerald-500",
    suspended: "bg-red-500/20 text-red-500",
    pending: "bg-yellow-500/20 text-yellow-400",
  }

  return statusColors[status] || "bg-neutral-500/20 text-neutral-300"
}

// Validation utilities
export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string) {
  const phoneRegex = /^\+?[\d\s\-$$$$]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10
}

// Text utilities
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export function capitalizeFirst(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatStatusText(status: string) {
  return status.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
}

// Array utilities
export function groupBy<T>(array: T[], key: keyof T) {
  return array.reduce(
    (groups, item) => {
      const group = item[key] as string
      groups[group] = groups[group] || []
      groups[group].push(item)
      return groups
    },
    {} as Record<string, T[]>,
  )
}

// Debounce utility
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Local storage utilities
export function getFromStorage(key: string) {
  if (typeof window === "undefined") return null
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error("Error reading from localStorage:", error)
    return null
  }
}

export function setToStorage(key: string, value: any) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error("Error writing to localStorage:", error)
  }
}

export function removeFromStorage(key: string) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error("Error removing from localStorage:", error)
  }
}
