"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <header className="flex justify-center border-b border-[rgba(255,255,255,0.1)] px-4 py-4 md:px-6">
      <div className="container flex items-center justify-between">
        <div className="static flex items-center space-x-2">
          <MobileMenu />
          <Link
            href="#"
            className="flex items-center gap-2 pl-5 sm:p-0"
            prefetch={false}
          >
            <Image src="/favicon.png" alt="logo" width={35} height={35} />
            <h1 className="invisible hidden text-xl font-medium italic lg:visible lg:block">
              Programmed Health Professionals
            </h1>
          </Link>
        </div>
        <nav className="hidden items-center gap-4 sm:flex">
          <Link
            href="/"
            className="text-sm font-medium hover:text-[rgb(132,189,0)]"
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
            Contact
          </Link>
        </nav>
        <Button
          // variant="solid"
          className="rounded-md bg-[rgb(132,189,0)] px-6 py-2 font-medium text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
        >
          <Link
            target="_blank"
            href="https://php.fasttrack360.com.au/FastTrack.Web.Questionnaire/(S(fuzpugirjne1siuiax1e5yi4))/Questionnaire.page?Type=SbJobOrder&Reference=200000488&Source=Seek"
            prefetch={false}
          >
            Apply Now
          </Link>
        </Button>
      </div>
    </header>
  );
}
