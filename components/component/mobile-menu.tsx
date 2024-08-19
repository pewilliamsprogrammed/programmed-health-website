"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute left-3 top-6 z-10 flex flex-col bg-[rgb(12,35,64)] sm:hidden">
      <Menu onClick={() => setOpen(!open)} />
      {open && (
        <nav className="fixed top-14 flex flex-col space-y-4 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgb(12,35,64)] px-3 py-2">
          <Link
            href="/"
            className="pt-2 text-sm font-medium hover:text-[rgb(132,189,0)]"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-[rgb(132,189,0)]"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/jobs"
            className="text-sm font-medium hover:text-[rgb(132,189,0)]"
            prefetch={false}
          >
            Jobs
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-[rgb(132,189,0)]"
            prefetch={false}
          >
            Contact us
          </Link>
        </nav>
      )}
    </div>
  );
}
