"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import { track } from "@vercel/analytics";

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <header className="flex justify-center border-b border-[rgba(255,255,255,0.1)] px-4 py-4 md:px-6">
      <div className="container flex items-center justify-between">
        <div className="static flex items-center space-x-2">
          <MobileMenu />
          <Link
            href="/"
            className="flex items-center gap-2 pl-5 sm:p-0"
            prefetch={false}
          >
            <Image
              className="text-xl font-medium italic sm:invisible sm:hidden"
              src="/favicon.png"
              alt="logo"
              width={35}
              height={35}
            />
            {/* <Image
              className="invisible hidden text-xl font-medium italic md:visible md:block lg:invisible lg:hidden"
              src="/Corporate Horizontal_Rev.png"
              alt="logo"
              width={220}
              height={60}
            /> */}
            <Image
              className="invisible hidden text-xl font-medium italic sm:visible sm:block"
              src="/RGB_Programmed_Health_Professionals_REV.png"
              alt="logo"
              width={220}
              height={60}
            />

            {/* <h1 className="invisible hidden text-xl font-medium italic lg:visible lg:block">
              Programmed Health Professionals
            </h1>
            <h1 className="text-xl font-medium italic lg:invisible lg:hidden">
              Programmed
            </h1> */}
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
          className="rounded-md bg-[rgb(132,189,0)] px-6 py-2 font-bold text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
          onClick={() => {
            track("Applynow");
          }}
        >
          <Link
            target="_blank"
            href="https://php.fasttrack360.com.au/FastTrack.Web.CandidateRegistration/CandidateRegistration.Page?RegistrationPageId=14"
            prefetch={false}
          >
            Apply Now
          </Link>
        </Button>
      </div>
    </header>
  );
}
