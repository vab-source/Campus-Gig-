export default function Community() {
  return (
    <section className="w-full py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Connect with Community
      </h2>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <a
            href="https://whatsapp.com/channel/0029Vb4wh0a6mYPDqGT9bY1T"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-50"
          >
            Whatsapp
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/thecampusgig?igsh=bmFjZWFtaHR6Ym9i"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-50"
          >
            Instagram
          </a>
        </li>
      </ul>
    </section>
  );
}

