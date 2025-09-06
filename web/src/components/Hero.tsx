import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Find Your Dream Campus Job
      </h1>
      <p className="text-slate-600 max-w-2xl mx-auto mb-8">
        Real-time listings for students. Discover on-campus and nearby part-time roles that fit your schedule.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          href="/jobs"
          className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
        >
          Browse Jobs
        </Link>
        <a
          href="https://whatsapp.com/channel/0029Vb4wh0a6mYPDqGT9bY1T"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 hover:bg-slate-50"
        >
          Join WhatsApp
        </a>
      </div>
    </section>
  );
}

