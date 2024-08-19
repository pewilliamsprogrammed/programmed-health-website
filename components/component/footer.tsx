import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] px-4 py-6 md:px-6">
      <div className="container flex flex-col space-y-2 xl:flex-row xl:items-center xl:justify-between xl:space-y-0">
        <p className="text-sm text-[rgba(255,255,255,0.6)]">
          &copy; 2024 Programmed Health Professionals. All rights reserved.
        </p>

        <div className="flex flex-col xl:flex-row">
          <p className="text-sm text-[rgba(255,255,255,0.8)]">
            Address: 47 Burswood Road Burswood WA, 6100
          </p>
          <Link
            className="text-sm text-[rgba(255,255,255,0.8)] hover:text-[rgb(132,189,0)]"
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
