"use client";
import { useEffect, useState } from "react";
import jobs from "@/data/jobs.json";

type Job = typeof jobs[number];
import Link from "next/link";
import { getBookmarks } from "@/utils/bookmarks";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function FavoritesPage() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    setIds(getBookmarks());
  }, []);

  const items = (jobs as Job[]).filter((j) => ids.includes(j.id));

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold mb-4">Saved Jobs</h1>
      {items.length === 0 ? (
        <p className="text-slate-600">No saved jobs yet.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((job) => (
            <li key={job.id} className="rounded-md border border-slate-200 p-4">
              <div className="font-medium"><Link href={`/jobs/${job.id}`}>{job.title}</Link></div>
              <div className="text-sm text-slate-600">{job.organization} · {job.campus} · {job.region}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

