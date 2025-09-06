import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 grid gap-4 sm:grid-cols-3">
        <div>
          <div className="font-semibold text-slate-800 mb-2">Campus Gig</div>
          <p>Helping students find on-campus jobs worldwide.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-800 mb-2">Explore</div>
          <ul className="space-y-1">
            <li><Link className="hover:underline" href="/jobs">Jobs</Link></li>
            <li><Link className="hover:underline" href="/services">Services</Link></li>
            <li><Link className="hover:underline" href="/about-us">About</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-800 mb-2">Community</div>
          <ul className="space-y-1">
            <li><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://whatsapp.com/channel/0029Vb4wh0a6mYPDqGT9bY1T">WhatsApp</a></li>
            <li><a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thecampusgig?igsh=bmFjZWFtaHR6Ym9i">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-slate-500">© {new Date().getFullYear()} Campus Gig. All rights reserved.</div>
    </footer>
  );
}

