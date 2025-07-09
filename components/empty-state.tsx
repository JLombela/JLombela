"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileX, Search, Plus, Database } from "lucide-react"

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function EmptyState({ icon, title, description, action, className = "" }: EmptyStateProps) {
  return (
    <Card className={`bg-card border-border ${className}`}>
      <CardContent className="flex flex-col items-center justify-center py-12 px-6 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          {icon || <FileX className="h-8 w-8 text-muted-foreground" />}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground font-mono tracking-wider">{title}</h3>
        <p className="mb-6 text-sm text-muted-foreground max-w-sm">{description}</p>
        {action && (
          <Button
            onClick={action.onClick}
            className="bg-axalio-green hover:bg-axalio-green/90 text-black font-mono tracking-wider"
          >
            {action.label}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

// Specialized empty state components
export function EmptyTableState({
  title = "NO DATA AVAILABLE",
  description = "There are no records to display at this time.",
  onRefresh,
}: {
  title?: string
  description?: string
  onRefresh?: () => void
}) {
  return (
    <EmptyState
      icon={<Database className="h-8 w-8 text-muted-foreground" />}
      title={title}
      description={description}
      action={
        onRefresh
          ? {
              label: "REFRESH",
              onClick: onRefresh,
            }
          : undefined
      }
    />
  )
}

export function EmptySearchState({
  searchTerm,
  onClear,
}: {
  searchTerm: string
  onClear?: () => void
}) {
  return (
    <EmptyState
      icon={<Search className="h-8 w-8 text-muted-foreground" />}
      title="NO RESULTS FOUND"
      description={`No results found for "${searchTerm}". Try adjusting your search criteria.`}
      action={
        onClear
          ? {
              label: "CLEAR SEARCH",
              onClick: onClear,
            }
          : undefined
      }
    />
  )
}

export function EmptyCreateState({
  title,
  description,
  onCreate,
  createLabel = "CREATE NEW",
}: {
  title: string
  description: string
  onCreate: () => void
  createLabel?: string
}) {
  return (
    <EmptyState
      icon={<Plus className="h-8 w-8 text-muted-foreground" />}
      title={title}
      description={description}
      action={{
        label: createLabel,
        onClick: onCreate,
      }}
    />
  )
}
