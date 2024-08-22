"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./header";
import Footer from "./footer";
import { track } from "@vercel/analytics";

export default function Landing() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col justify-center bg-[rgb(12,35,64)] text-white">
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="flex items-center justify-between space-x-6">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="flex space-x-2 lg:space-x-0">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                Australia's largest nursing and healthcare staffing agency
              </h1>
              <img
                src="/landing.jpg"
                alt="Nurse"
                width={100}
                height={100}
                className="rounded-lg lg:hidden"
                style={{ aspectRatio: "700/900", objectFit: "cover" }}
              />
            </div>
            <p className="text-lg text-[rgba(255,255,255,0.8)] md:text-xl">
              Programmed Health Professionals is a leading provider of
              healthcare staffing solutions in Australia. We have jobs available
              for registered nurses, enrolled nurses, and personal services
              workers across the country. Join our team and get started today.
            </p>

            <p className="text-lg text-[rgba(255,255,255,0.8)] md:text-xl">
              If you a <strong>certified</strong> registered nurse, enrolled
              nurse, or personal services worker looking for work now. Tap below
              to apply. Our team will be in touch right away.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button
                onClick={() => {
                  track("Applynow");
                }}
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-medium text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
              >
                <Link
                  target="_blank"
                  href="https://php.fasttrack360.com.au/FastTrack.Web.Questionnaire/(S(fuzpugirjne1siuiax1e5yi4))/Questionnaire.page?Type=SbJobOrder&Reference=200000488&Source=Seek"
                  prefetch={false}
                >
                  Apply Now
                </Link>
              </Button>

              <Button
                onClick={() => {
                  track("Call");
                }}
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-medium text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
              >
                <Link href="tel:131195" prefetch={false}>
                  Call 13 11 95
                </Link>
              </Button>
              <Link
                href="/learn-more"
                className="font-medium text-[rgb(132,189,0)] hover:underline"
                prefetch={false}
              >
                Find out more
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/landing.jpg"
              alt="Nurse"
              width={300}
              height={300}
              className="hidden rounded-lg lg:block"
              style={{ aspectRatio: "700/900", objectFit: "cover" }}
            />
          </div>
        </div>
      </main>
      <section className="flex w-full justify-center bg-[rgba(255,255,255,0.05)] py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Choose Programmed Health Professionals?
            </h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              We are committed to providing the best healthcare staffing
              solutions in Australia. Our team of experts works tirelessly to
              match the right healthcare professionals with the right
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Wide Range of Opportunities
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We have jobs available for registered nurses, enrolled nurses,
                and personal services workers across Australia.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <ClipboardIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Streamlined Onboarding</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Our efficient onboarding process ensures you can start your new
                role quickly and seamlessly.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <WalletIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Competitive Rates</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer competitive rates and excellent benefits to ensure our
                healthcare professionals are well-compensated.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Financial Benefits
            </h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              At Programmed Health Professionals, we offer a range of financial
              benefits to support our healthcare professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <WalletIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Weekly Pay</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer weekly pay to ensure our healthcare professionals have
                a consistent and reliable income.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <DollarSignIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Best Rates</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide the best rates in the industry to ensure our
                healthcare professionals are well-compensated for their hard
                work.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Excellent Benefits</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                In addition to competitive rates, we offer a range of excellent
                benefits to support our healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center bg-[rgba(255,255,255,0.05)] py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Benefits of Working with Us
            </h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              At Programmed Health Professionals, we are committed to supporting
              our healthcare professionals every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <CalendarIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer flexible scheduling options to accommodate your needs
                and preferences.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Career Development</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide ongoing training and support to help you grow your
                skills and advance your career.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <ClipboardIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Personalised Support</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Our dedicated team is here to support you every step of the way,
                from onboarding to placement and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Safety and Compliance
            </h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              At Programmed Health Professionals, we prioritize the safety and
              compliance of our healthcare professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <ShieldIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Rigorous Screening</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We conduct thorough background checks and verifications to
                ensure the safety and compliance of our healthcare
                professionals.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <ClipboardCheckIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Ongoing Compliance</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We continuously monitor and maintain the compliance of our
                healthcare professionals to ensure they meet all regulatory
                requirements.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <AmbulanceIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Comprehensive Training</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide comprehensive training to our healthcare
                professionals to ensure they are equipped with the necessary
                skills and knowledge to work safely and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center bg-[rgba(255,255,255,0.05)] py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Education and Training
            </h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              At Programmed Health Professionals, we are committed to the
              ongoing education and training of our healthcare professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BookIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Continuing Education</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide access to a wide range of continuing education
                opportunities to help our healthcare professionals stay
                up-to-date with the latest industry trends and best practices.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <GraduationCapIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Professional Development
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer comprehensive professional development programs to help
                our healthcare professionals advance their careers and achieve
                their goals.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <ClipboardListIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Specialized Training</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide specialized training programs to ensure our
                healthcare professionals are equipped with the latest skills and
                knowledge to excel in their roles.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function AmbulanceIcon(props: { className: string }) {
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
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function BookIcon(props: { className: string }) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BriefcaseIcon(props: { className: string }) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props: { className: string }) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClipboardCheckIcon(props: { className: string }) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function ClipboardIcon(props: { className: string }) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function ClipboardListIcon(props: { className: string }) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function GraduationCapIcon(props: { className: string }) {
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
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function HospitalIcon(props: { className: string }) {
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
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

function ShieldIcon(props: { className: string }) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function WalletIcon(props: { className: string }) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function DollarSignIcon(props: { className: string }) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
