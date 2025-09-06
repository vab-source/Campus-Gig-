export default function Services() {
  const items = [
    {
      title: "Local Job Search Assistance",
      desc:
        "Curated on-campus and nearby openings tailored to your university and location.",
    },
    {
      title: "Resume Coverage",
      desc:
        "Expert resume and cover letter reviews. Practice mock interviews with feedback (aim for TA/RA too).",
    },
    {
      title: "Exclusive Job Alerts",
      desc:
        "Personalized alerts by location, job type, and hours—straight to your inbox.",
    },
  ];
  return (
    <section className="w-full py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Our Personalized Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {items.map((s) => (
          <div key={s.title} className="rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

