"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Campus Gig
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "hover:text-blue-600 " + (pathname === item.href ? "text-blue-600 font-medium" : "text-slate-700")
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

