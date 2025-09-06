export default function ContactPage() {
  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="text-slate-700 mb-4">Have questions? Reach out anytime.</p>
      <ul className="text-slate-700 space-y-2">
        <li>
          WhatsApp channel: {" "}
          <a className="text-blue-600 hover:underline" href="https://whatsapp.com/channel/0029Vb4wh0a6mYPDqGT9bY1T" target="_blank" rel="noopener noreferrer">
            Join here
          </a>
        </li>
        <li>
          Instagram: {" "}
          <a className="text-blue-600 hover:underline" href="https://www.instagram.com/thecampusgig?igsh=bmFjZWFtaHR6Ym9i" target="_blank" rel="noopener noreferrer">
            @thecampusgig
          </a>
        </li>
      </ul>
    </main>
  );
}

