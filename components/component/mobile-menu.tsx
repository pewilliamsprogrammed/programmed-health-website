"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [showContacts, setShowContacts] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed left-3 top-6 z-10 flex flex-col bg-[rgb(12,35,64)] sm:hidden">
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
          <div>
            <h4
              className="cursor-pointer text-sm font-medium hover:text-[rgb(132,189,0)]"
              onClick={() => setShowContacts(!showContacts)}
            >
              Contact Us
            </h4>
            {showContacts && (
              <div className="absolute left-24 top-32 z-10 mt-2 w-[300px] rounded-md border border-[rgba(255,255,255,0.1)] bg-[rgb(12,35,64)] py-2 shadow-lg">
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
                        href="mailto:info@programmed.com.au"
                      >
                        info@programmed.com.au
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Payroll Enquiries</h5>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="mailto:payroll@programmedhealthprofessionals.com.au"
                      >
                        payroll@programmed.com.au
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
                        registration@programmed.com.au
                      </Link>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Work Enquiries</h5>
                      <Link
                        className="text-sm text-[rgba(255,255,255,0.8)]"
                        href="work@programmedhealthprofessionals.com.au"
                      >
                        work@programmedhealth.com.au
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
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">Western Australia</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        47 Burswood Road Burswood WA, 6100
                      </p>
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
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">New South Wales</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        Level 1, Building 2B, 2 Lord Street Botany NSW, 2019
                      </p>
                    </div>
                    <div>
                      <h6 className="text-sm font-medium">New South Wales</h6>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">
                        Level 6, 111 Phillip Street Parramatta NSW, 2150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
