export default function Loading() {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <div className="h-6 w-40 bg-slate-200 rounded mb-4 animate-pulse" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-md border border-slate-200 p-4">
            <div className="h-4 w-3/4 bg-slate-200 rounded mb-2 animate-pulse" />
            <div className="h-3 w-1/2 bg-slate-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </main>
  );
}

