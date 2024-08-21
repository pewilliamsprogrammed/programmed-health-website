"use client";

import Header from "./header";
import Link from "next/link";
import Footer from "./footer";
import { useState } from "react";

export default function ContactUs() {
  const [showVic, setShowVic] = useState(false);
  const [showWA, setShowWA] = useState(false);
  const [showSA, setShowSA] = useState(false);
  const [showQLD, setShowQLD] = useState(false);
  const [showNSW1, setShowNSW1] = useState(false);
  const [showNSW2, setShowNSW2] = useState(false);

  return (
    <div className="flex min-h-[100dvh] w-full flex-col justify-center bg-[rgb(12,35,64)] text-white">
      <Header />
      <main className="flex-1 px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-[rgba(255,255,255,0.8)] md:text-xl">
              Get in touch with our team for more information.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 justify-center gap-8 pt-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Addresses</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div onClick={() => setShowVic(!showVic)}>
                      <MapPinIcon className="mt-1 cursor-pointer text-[rgb(132,189,0)]" />
                    </div>
                    <div>
                      <h6 className="font-medium">Victoria</h6>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Level 32, Tower 2, 727 Collins Street
                      </p>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Melbourne VIC, 3008
                      </p>
                      {showVic && (
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.6993939961794!2d144.9474350768447!3d-37.820509534425334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a77a88989%3A0x14c270a449cedf97!2sLevel%2032%2C%20Tower%202%2F727%20Collins%20St%2C%20Docklands%20VIC%203008!5e0!3m2!1sen!2sau!4v1724047495098!5m2!1sen!2sau"
                          width="300"
                          height="300"
                          className="rounded-lg border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div onClick={() => setShowWA(!showWA)}>
                      <MapPinIcon className="mt-1 cursor-pointer text-[rgb(132,189,0)]" />
                    </div>
                    <div>
                      <h6 className="font-medium">Western Australia</h6>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        47 Burswood Road
                      </p>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Burswood WA, 6100
                      </p>
                      {showWA && (
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.7543639245164!2d115.88658198941343!3d-31.967559956094227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb0cf0f53e71%3A0x64858ab6ff92a706!2s47%20Burswood%20Rd%2C%20Burswood%20WA%206100!5e0!3m2!1sen!2sau!4v1724048140916!5m2!1sen!2sau"
                          width="300"
                          height="300"
                          className="rounded-lg border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div onClick={() => setShowSA(!showSA)}>
                      <MapPinIcon className="mt-1 cursor-pointer text-[rgb(132,189,0)]" />
                    </div>
                    <div>
                      <h6 className="font-medium">South Australia</h6>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        115 Sherriff Street
                      </p>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Underdale SA, 5032
                      </p>
                      {showSA && (
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.6324522296936!2d138.54842777673414!3d-34.91567217404184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c5bf2cd1280f%3A0x2f531ebaadb6d123!2s115%20Sherriff%20St%2C%20Underdale%20SA%205032!5e0!3m2!1sen!2sau!4v1724048204130!5m2!1sen!2sau"
                          width="300"
                          height="300"
                          className="rounded-lg border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div onClick={() => setShowQLD(!showQLD)}>
                      <MapPinIcon className="mt-1 cursor-pointer text-[rgb(132,189,0)]" />
                    </div>
                    <div>
                      <h6 className="font-medium">Queensland</h6>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Level 3, 200 Creek Street
                      </p>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Spring Hill QLD, 4000
                      </p>
                      {showQLD && (
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.1768482340713!2d153.0218210884971!3d-27.463753155391444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159f7feadc519%3A0xec4617535dd14d27!2s200%20Creek%20St%2C%20Spring%20Hill%20QLD%204000!5e0!3m2!1sen!2sau!4v1724048252385!5m2!1sen!2sau"
                          width="300"
                          height="300"
                          className="rounded-lg border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      )}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div onClick={() => setShowNSW1(!showNSW1)}>
                      <MapPinIcon className="mt-1 cursor-pointer text-[rgb(132,189,0)]" />
                    </div>
                    <div>
                      <h6 className="font-medium">New South Wales</h6>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Level 1, Building 2B, 2 Lord Street
                      </p>
                      <p className="text-[rgba(255,255,255,0.8)]">
                        Botany NSW, 2019
                      </p>
                      {showNSW1 && (
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0479226494404!2d151.19310047669816!3d-33.939895522746575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b11a4e367831%3A0x1e0d1b6c83413204!2sLevel%201%2C%20Building%202B%2F2%20Lord%20St%2C%20Botany%20NSW%202019!5e0!3m2!1sen!2sau!4v1724048309015!5m2!1sen!2sau"
                          width="300"
                          height="300"
                          className="rounded-lg border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div onClick={() => setShowNSW2(!showNSW2)}>
                    <MapPinIcon className="mt-1 cursor-pointer text-[rgb(132,189,0)]" />
                  </div>
                  <div>
                    <h6 className="font-medium">New South Wales</h6>
                    <p className="text-[rgba(255,255,255,0.8)]">
                      Level 6, 111 Phillip Street
                    </p>
                    <p className="text-[rgba(255,255,255,0.8)]">
                      Parramatta NSW, 2150
                    </p>
                    {showNSW2 && (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9411278726275!2d151.00655287669375!3d-33.81383231621575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a31975296d65%3A0x83d25d00a36d500c!2sLevel%206%2F111%20Phillip%20St%2C%20Parramatta%20NSW%202150!5e0!3m2!1sen!2sau!4v1724048352999!5m2!1sen!2sau"
                        width="300"
                        height="300"
                        className="rounded-lg border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Phone</h3>
              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-1 text-[rgb(132,189,0)]" />
                <div>
                  <h5 className="font-medium">National Phone</h5>
                  <Link
                    className="text-[rgba(255,255,255,0.8)]"
                    href="tel:13 11 48"
                  >
                    13 10 95
                  </Link>
                </div>
              </div>

              <h3 className="text-xl font-semibold">Emails</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-4">
                  <MailIcon className="mt-1 text-[rgb(132,189,0)]" />
                  <div>
                    <h5 className="font-medium">General Enquiries</h5>
                    <Link
                      className="text-[rgba(255,255,255,0.8)]"
                      href="mailto:health.professionals@programmed.com.au"
                    >
                      health.professionals@programmed.com.au
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="mt-1 text-[rgb(132,189,0)]" />
                  <div>
                    <h5 className="font-medium">Payroll Enquiries</h5>
                    <Link
                      className="text-[rgba(255,255,255,0.8)]"
                      href="mailto:php.payroll@programmed.com.au"
                    >
                      php.payroll@programmed.com.au
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="mt-1 text-[rgb(132,189,0)]" />
                  <div>
                    <h5 className="font-medium">Registration Enquiries</h5>
                    <Link
                      className="text-[rgba(255,255,255,0.8)]"
                      href="registration@programmedhealthprofessionals.com.au"
                    >
                      registration@programmed.com.au
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="mt-1 text-[rgb(132,189,0)]" />
                  <div>
                    <h5 className="font-medium">Work Enquiries</h5>
                    <Link
                      className="text-[rgba(255,255,255,0.8)]"
                      href="work@programmedhealthprofessionals.com.au"
                    >
                      work@programmed.com.au
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function MailIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
