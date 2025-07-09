import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function UserRolesLoading() {
  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-96 bg-neutral-800" />
          <Skeleton className="h-4 w-64 bg-neutral-800" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32 bg-neutral-800" />
          <Skeleton className="h-10 w-36 bg-neutral-800" />
        </div>
      </div>

      {/* User Roles Cards Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-64 bg-neutral-800" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="bg-neutral-900 border-neutral-800">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 bg-neutral-700" />
                    <Skeleton className="h-5 w-16 bg-neutral-700" />
                  </div>
                  <Skeleton className="h-5 w-16 bg-neutral-700" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full bg-neutral-700 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24 bg-neutral-700" />
                  <div className="space-y-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-3 w-full bg-neutral-700" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* RBAC Matrix Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-48 bg-neutral-800" />
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Table Header */}
                <div className="flex border-b border-neutral-800">
                  <div className="flex-1 p-4 bg-neutral-800">
                    <Skeleton className="h-4 w-16 bg-neutral-700" />
                  </div>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex-1 p-4 text-center">
                      <Skeleton className="h-4 w-16 bg-neutral-700 mx-auto" />
                    </div>
                  ))}
                </div>
                {/* Table Rows */}
                {Array.from({ length: 5 }).map((_, rowIndex) => (
                  <div key={rowIndex} className="flex border-b border-neutral-800">
                    <div className="flex-1 p-4 bg-neutral-800/50">
                      <Skeleton className="h-4 w-32 bg-neutral-700" />
                    </div>
                    {Array.from({ length: 4 }).map((_, colIndex) => (
                      <div key={colIndex} className="flex-1 p-4 text-center">
                        <Skeleton className="h-4 w-12 bg-neutral-700 mx-auto" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Legend Skeleton */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader>
          <Skeleton className="h-5 w-40 bg-neutral-700" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 bg-neutral-700" />
                <Skeleton className="h-4 w-24 bg-neutral-700" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
