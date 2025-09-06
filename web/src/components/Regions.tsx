import Link from "next/link";

const regions = [
  { key: "English Countries", href: "/jobs?region=English%20Countries" },
  { key: "European Union", href: "/jobs?region=European%20Union" },
  { key: "Asia Pacific", href: "/jobs?region=Asia%20Pacific" },
];

export default function Regions() {
  return (
    <section className="w-full py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Find your Suitable Destination
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {regions.map((r) => (
          <Link
            key={r.key}
            href={r.href}
            className="rounded-lg border border-slate-200 p-6 hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-1">{r.key}</h3>
            <p className="text-sm text-slate-600">Explore jobs in {r.key}.</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

