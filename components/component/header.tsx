"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <header className="border-b border-[rgba(255,255,255,0.1)] px-4 py-4 md:px-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
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
          <div>
            <h4
              className="cursor-pointer text-sm font-medium hover:text-[rgb(132,189,0)]"
              onClick={() => setShowContacts(!showContacts)}
            >
              Contact Us
            </h4>
            {showContacts && (
              <div className="absolute top-10 z-10 mt-2 w-[400px] rounded-md bg-[rgb(12,35,64)] py-2 shadow-lg">
                <div className="grid gap-2 px-4 py-3">
                  <div className="grid gap-4">
                    <div>
                      <h5 className="text-sm font-medium">National Phone</h5>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="tel:13 11 48"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">General Enquiries</h5>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="mailto:info@programmedhealthprofessionals.com.au"
                      >
                        info@programmedhealthprofessionals.com.au
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Payroll Enquiries</h5>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="mailto:payroll@programmedhealthprofessionals.com.au"
                      >
                        payroll@programmedhealthprofessionals.com.au
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">
                        Registration Enquiries
                      </h5>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="registration@programmedhealthprofessionals.com.au"
                      >
                        registration@programmedhealthprofessionals.com.au
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Work Enquiries</h5>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="work@programmedhealthprofessionals.com.au"
                      >
                        work@programmedhealthprofessionals.com.au
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 border-t border-[rgba(255,255,255,0.1)] px-4 py-3">
                  <h5 className="text-sm font-medium">Locations</h5>
                  <div className="grid gap-2">
                    <div>
                      <h6 className="text-sm font-medium">Victoria</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        Level 32, Tower 2, 727 Collins Street Melbourne VIC,
                        3008
                      </p>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="tel:13 11 48"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">Western Australia</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        47 Burswood Road Burswood WA, 6100
                      </p>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="tel:13 11 48"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">South Australia</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        115 Sherriff Street Underdale SA, 5032
                      </p>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">Queensland</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        Level 3, 200 Creek Street Spring Hill QLD, 4000
                      </p>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="tel:131095"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">New South Wales</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        Level 1, Building 2B, 2 Lord Street Botany NSW, 2019
                      </p>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="tel:131095"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">New South Wales</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        Level 6, 111 Phillip Street Parramatta NSW, 2150
                      </p>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="tel:131095"
                      >
                        13 10 95
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
