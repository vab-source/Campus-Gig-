"use client";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (!name || !email || !message) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setOk(true);
    (e.currentTarget as HTMLFormElement).reset();
  }
  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="text-slate-700 mb-6">Have questions? Reach out anytime.</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input name="name" placeholder="Your name" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input type="email" name="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5} placeholder="How can we help?" />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send"}</Button>
          {ok && <span className="text-sm text-green-700">Sent! Well get back soon.</span>}
        </div>
      </form>
      <div className="mt-8 text-slate-700">
        <div className="font-medium mb-1">Community</div>
        <ul className="space-y-2">
          <li>
            WhatsApp channel: {" "}
            <a className="text-blue-600 hover:underline" href="https://whatsapp.com/channel/0029Vb4wh0a6mYPDqGT9bY1T" target="_blank" rel="noopener noreferrer">Join here</a>
          </li>
          <li>
            Instagram: {" "}
            <a className="text-blue-600 hover:underline" href="https://www.instagram.com/thecampusgig?igsh=bmFjZWFtaHR6Ym9i" target="_blank" rel="noopener noreferrer">@thecampusgig</a>
          </li>
        </ul>
      </div>
    </main>
  );
}

