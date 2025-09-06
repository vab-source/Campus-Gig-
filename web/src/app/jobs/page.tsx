type Job = {
  id: string;
  title: string;
  organization: string;
  campus: string;
  campusId: string;
  region: string;
  type: string;
  hours: string;
  payRange: string;
  applyUrl: string;
  postedAt: string;
  tags: string[];
};

import jobData from "@/data/jobs.json";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JobsFilters from "@/components/jobs/JobsFilters";
import Link from "next/link";

function groupBy<T, K extends string | number>(arr: T[], key: (t: T) => K) {
  return arr.reduce((acc, item) => {
    const k = key(item);
    (acc[k] ||= []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

export default function JobsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const jobs = jobData as Job[];
  const region = typeof searchParams?.region === "string" ? searchParams?.region : undefined;
  const campus = typeof searchParams?.campus === "string" ? searchParams?.campus : undefined;
  const type = typeof searchParams?.type === "string" ? searchParams?.type : undefined;
  const q = typeof searchParams?.q === "string" ? searchParams?.q : undefined;

  let filtered = jobs;
  if (region) filtered = filtered.filter((j) => j.region === region);
  if (campus) filtered = filtered.filter((j) => j.campus === campus);
  if (type) filtered = filtered.filter((j) => j.type === type);
  if (q) {
    const v = q.toLowerCase();
    filtered = filtered.filter((j) => (
      j.title.toLowerCase().includes(v) || j.organization.toLowerCase().includes(v)
    ));
  }

  const byRegion = groupBy(filtered, (j) => j.region);

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold mb-4">Jobs</h1>
      <JobsFilters />

      {Object.entries(byRegion).map(([regionKey, items]) => {
        const byCampus = groupBy(items, (j) => j.campus);
        return (
          <section key={regionKey} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{regionKey}</h2>
            <div className="space-y-6">
              {Object.entries(byCampus).map(([campusName, list]) => (
                <div key={campusName}>
                  <h3 className="text-lg font-semibold mb-2">{campusName}</h3>
                  <ul className="space-y-2">
                    {list.map((job) => (
                      <li
                        key={job.id}
                        className="rounded-md border border-slate-200 p-4 flex items-center justify-between"
                      >
                        <div>
                          <div className="font-medium"><Link href={`/jobs/${job.id}`}>{job.title}</Link></div>
                          <div className="text-sm text-slate-600">
                            {job.organization} - {job.type} · {job.hours} · {job.payRange}
                          </div>
                        </div>
                        <a
                          className="text-blue-600 hover:underline"
                          href={job.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {Object.keys(byRegion).length === 0 && (
        <p className="text-slate-600">No jobs found for the selected filters.</p>
      )}
    </main>
  );
}

