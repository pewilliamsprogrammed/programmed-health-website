"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <header className="px-4 md:px-6 py-4 border-b border-[rgba(255,255,255,0.1)]">
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/favicon.png" alt="logo" width={35} height={35} />
          <h1 className="text-xl font-medium italic">
            Programmed Health Professionals
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
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
              className="text-sm font-medium hover:text-[rgb(132,189,0)] cursor-pointer"
              onClick={() => setShowContacts(!showContacts)}
            >
              Contact Us
            </h4>
            {showContacts && (
              <div className="absolute top-10 z-10 bg-[rgb(12,35,64)] rounded-md shadow-lg w-[400px] mt-2 py-2">
                <div className="grid gap-2 px-4 py-3">
                  <div className="grid gap-4">
                    <div>
                      <h5 className="text-sm font-medium">National Phone</h5>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="tel:13 11 48"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">General Enquiries</h5>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="mailto:info@programmedhealthprofessionals.com.au"
                      >
                        info@programmedhealthprofessionals.com.au
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Payroll Enquiries</h5>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
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
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="registration@programmedhealthprofessionals.com.au"
                      >
                        registration@programmedhealthprofessionals.com.au
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Work Enquiries</h5>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="work@programmedhealthprofessionals.com.au"
                      >
                        work@programmedhealthprofessionals.com.au
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.1)] grid gap-4 px-4 py-3">
                  <h5 className="text-sm font-medium">Locations</h5>
                  <div className="grid gap-2">
                    <div>
                      <h6 className="text-sm font-medium">Victoria</h6>
                      <p className="text-[rgba(255,255,255,0.8)] text-sm">
                        Level 32, Tower 2, 727 Collins Street Melbourne VIC,
                        3008
                      </p>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="tel:13 11 48"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">Western Australia</h6>
                      <p className="text-[rgba(255,255,255,0.8)] text-sm">
                        47 Burswood Road Burswood WA, 6100
                      </p>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="tel:13 11 48"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">South Australia</h6>
                      <p className="text-[rgba(255,255,255,0.8)] text-sm">
                        115 Sherriff Street Underdale SA, 5032
                      </p>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">Queensland</h6>
                      <p className="text-[rgba(255,255,255,0.8)] text-sm">
                        Level 3, 200 Creek Street Spring Hill QLD, 4000
                      </p>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="tel:131095"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">New South Wales</h6>
                      <p className="text-[rgba(255,255,255,0.8)] text-sm">
                        Level 1, Building 2B, 2 Lord Street Botany NSW, 2019
                      </p>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
                        href="tel:131095"
                      >
                        13 10 95
                      </Link>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">New South Wales</h6>
                      <p className="text-[rgba(255,255,255,0.8)] text-sm">
                        Level 6, 111 Phillip Street Parramatta NSW, 2150
                      </p>
                      <Link
                        className="text-[rgba(255,255,255,0.8)] text-sm"
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
          className="bg-[rgb(132,189,0)] text-[rgb(12,35,64)] font-medium px-6 py-2 rounded-md hover:bg-[rgb(106,152,0)]"
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
