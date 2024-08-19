import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 md:px-6 py-6 border-t border-[rgba(255,255,255,0.1)]">
      <div className="container flex items-center justify-between">
        <p className="text-sm text-[rgba(255,255,255,0.6)]">
          &copy; 2024 Programmed Health Professionals. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <p className="text-[rgba(255,255,255,0.8)] text-sm">
            Address: 47 Burswood Road Burswood WA, 6100
          </p>
          <Link
            className="text-[rgba(255,255,255,0.8)] text-sm hover:text-[rgb(132,189,0)]"
            href="tel:13 11 48"
          >
            Telephone: 13 10 95
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            target="_blank"
            href="https://programmed.com.au/wp-content/uploads/2022/10/Privacy-Policy.pdf"
            className="text-sm font-medium hover:text-[rgb(132,189,0)]"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[rgb(132,189,0)]"
            prefetch={false}
          >
            Back to top
          </Link>
        </nav>
      </div>
    </footer>
  );
}
