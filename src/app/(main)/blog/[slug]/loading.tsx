export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32 pb-20">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto animate-pulse">
        {/* Back button skeleton */}
        <div className="w-40 h-9 rounded-full bg-muted/50 mb-10" />

        {/* Category badge */}
        <div className="w-24 h-7 rounded-full bg-muted/50 mb-5" />

        {/* Title */}
        <div className="space-y-3 mb-6">
          <div className="w-full h-10 rounded-lg bg-muted/60" />
          <div className="w-4/5 h-10 rounded-lg bg-muted/60" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 mb-8">
          <div className="w-full h-5 rounded bg-muted/40" />
          <div className="w-3/4 h-5 rounded bg-muted/40" />
        </div>

        {/* Divider */}
        <div className="h-px bg-muted/30 mb-6" />

        {/* Meta info */}
        <div className="flex items-center gap-5 mb-14">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-muted/50" />
            <div className="w-28 h-4 rounded bg-muted/50" />
          </div>
          <div className="w-24 h-4 rounded bg-muted/40" />
          <div className="w-20 h-4 rounded bg-muted/40" />
        </div>
      </div>

      {/* Cover image skeleton */}
      <div className="container px-4 md:px-6 max-w-4xl mx-auto mb-16">
        <div className="aspect-[21/9] rounded-3xl bg-muted/40" />
      </div>

      {/* Content skeleton */}
      <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`h-4 rounded bg-muted/30 ${i % 3 === 0 ? 'w-full' : i % 3 === 1 ? 'w-5/6' : 'w-4/5'}`} />
        ))}
        <div className="h-8 my-2" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i + 8} className={`h-4 rounded bg-muted/30 ${i % 2 === 0 ? 'w-full' : 'w-3/4'}`} />
        ))}
      </div>
    </div>
  );
}
