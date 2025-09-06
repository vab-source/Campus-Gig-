"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = parts.map((p, idx) => ({
    href: "/" + parts.slice(0, idx + 1).join("/"),
    label: decodeURIComponent(p).replace(/-/g, " "),
  }));
  if (crumbs.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-4">
      <ol className="flex items-center gap-2 flex-wrap">
        <li><Link className="hover:underline" href="/">Home</Link></li>
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            <span>/</span>
            {i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:underline capitalize">{c.label}</Link>
            ) : (
              <span className="capitalize text-slate-800">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

