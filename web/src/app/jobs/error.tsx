"use client";
export default function Error({ error }: { error: Error }) {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
      <p className="text-slate-600">{error.message || "Please try again later."}</p>
    </main>
  );
}

