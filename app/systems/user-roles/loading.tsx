export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-neutral-800 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-neutral-800 rounded w-1/2"></div>
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <div className="h-6 bg-neutral-800 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-neutral-800 rounded w-full mb-2"></div>
              <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
            </div>
          ))}
        </div>

        {/* Table skeleton */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <div className="h-6 bg-neutral-800 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-4 bg-neutral-800 rounded flex-1"></div>
                <div className="h-4 bg-neutral-800 rounded w-16"></div>
                <div className="h-4 bg-neutral-800 rounded w-16"></div>
                <div className="h-4 bg-neutral-800 rounded w-16"></div>
                <div className="h-4 bg-neutral-800 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
