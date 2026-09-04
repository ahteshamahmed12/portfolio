/**
 * Skeleton placeholder that mirrors the ProjectCard layout while data loads.
 * Uses a shimmer sweep (see `.skeleton` in globals.css) and respects
 * prefers-reduced-motion automatically via the shared media query.
 */
export function ProjectCardSkeleton() {
  return (
    <div
      className="project-card flex flex-col overflow-hidden rounded-2xl"
      aria-hidden="true"
    >
      {/* Art / header */}
      <div className="flex h-44 items-start justify-between bg-white/[0.02] p-5">
        <div className="skeleton h-3 w-8 rounded" />
        <div className="skeleton h-12 w-12 rounded-xl" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="skeleton mb-3 h-3 w-24 rounded" />
        <div className="skeleton mb-3 h-6 w-3/4 rounded" />
        <div className="space-y-2">
          <div className="skeleton h-3 w-full rounded" />
          <div className="skeleton h-3 w-full rounded" />
          <div className="skeleton h-3 w-2/3 rounded" />
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <div className="skeleton h-6 w-16 rounded-full" />
          <div className="skeleton h-6 w-20 rounded-full" />
          <div className="skeleton h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}
