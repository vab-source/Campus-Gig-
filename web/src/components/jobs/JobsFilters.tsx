"use client";
import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import campusesData from "@/data/campuses.json";
import jobs from "@/data/jobs.json";

type Job = typeof jobs[number];
type Campus = { id: string; name: string; region: string };
const campuses = campusesData as Campus[];

type Option = { value: string; label: string };

function useOptions() {
  const regions = useMemo(() => {
    const set = new Set<string>();
    campuses.forEach((c) => set.add(c.region));
    return Array.from(set).sort().map((r) => ({ value: r, label: r }));
  }, []);
  const byRegion = useMemo(() => {
    const map = new Map<string, Option[]>();
    campuses.forEach((c) => {
      const arr = map.get(c.region) || [];
      arr.push({ value: c.name, label: c.name });
      map.set(c.region, arr);
    });
    map.forEach((arr) => arr.sort((a,b)=>a.label.localeCompare(b.label)));
    return map;
  }, []);
  const types = useMemo(() => {
    const set = new Set<string>();
    (jobs as Job[]).forEach((j) => set.add(j.type));
    return Array.from(set).sort().map((t) => ({ value: t, label: t }));
  }, []);
  return { regions, byRegion, types };
}

export default function JobsFilters() {
  const { regions, byRegion, types } = useOptions();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const region = searchParams.get("region") || "";
  const campus = searchParams.get("campus") || "";
  const type = searchParams.get("type") || "";
  const q = searchParams.get("q") || "";

  function setParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value.length) params.set(key, value);
    else params.delete(key);
    // Reset campus if region changes
    if (key === "region") params.delete("campus");
    router.push(pathname + "?" + params.toString());
  }

  function clearAll() {
    router.push(pathname);
  }

  const campusOptions = region ? (byRegion.get(region) || []) : [];

  return (
    <form className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6" onSubmit={(e)=>e.preventDefault()}>
      <Input
        placeholder="Search title or organization"
        defaultValue={q}
        onChange={(e)=> setParam("q", e.currentTarget.value || null)}
      />
      <Select value={region} onChange={(e)=> setParam("region", e.currentTarget.value || null)}>
        <option value="">All regions</option>
        {regions.map((o)=> (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </Select>
      <Select value={campus} onChange={(e)=> setParam("campus", e.currentTarget.value || null)} disabled={!region}>
        <option value="">{region ? "All campuses" : "Select region first"}</option>
        {campusOptions.map((o)=> (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </Select>
      <div className="flex items-center gap-2">
        <Select value={type} onChange={(e)=> setParam("type", e.currentTarget.value || null)}>
          <option value="">All types</option>
          {types.map((o)=> (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </Select>
        <Button type="button" className="whitespace-nowrap" onClick={clearAll}>Clear</Button>
      </div>
    </form>
  );
}

