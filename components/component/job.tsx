"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./header";
import Footer from "./footer";
import { track } from "@vercel/analytics";

export default function Jobs() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-[rgb(12,35,64)] text-white">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center md:px-6 md:py-24 lg:py-32">
        <div className="flex items-center justify-between space-x-6">
          <div className="max-w-2xl space-y-6 text-left">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Jobs Opportunities with Our Nursing Agency 
            </h1>
            <p className="text-lg text-[rgba(255,255,255,0.8)] md:text-xl">
              At Programmed Health Professionals, we offer a wide variety of rewarding nursing jobs and 
              healthcare positions across Australia. Whether you're an experienced Registered Nurse (RN), 
              Specialist Nurse, Midwife, Technician, or Support Worker, we have roles that suit your skills and 
              preferences. 
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-bold text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
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
              <Button
                onClick={() => {
                  track("Call");
                }}
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-bold text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
              >
                <Link href="tel:131195" prefetch={false}>
                  Call 13 11 95
                </Link>
              </Button>
              <Link
                href="/learn-more"
                className="font-bold text-[rgb(132,189,0)] hover:underline"
                prefetch={false}
              >
                Find out more
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/jobs.jpg"
              alt="Nurse"
              width={300}
              height={300}
              className="hidden rounded-lg md:block"
              style={{ aspectRatio: "700/900", objectFit: "cover" }}
            />
          </div>
        </div>
      </main>
      <section className="flex w-full justify-center bg-[rgba(255,255,255,0.05)] py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Find Your Next Healthcare Job with Programmed Health Professionals</h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              We work with leading healthcare facilities across multiple sectors, including hospitals, aged care 
              homes, community care and industrial sites. This means you can find healthcare jobs that fit your 
              qualifications, experience, and lifestyle, whether you’re looking for temporary or contract position. 

              Explore opportunities that match your specialty, whether it's in acute care, aged care, community 
              services, or home care. With our flexible job offerings, you have the freedom to work when and 
              where it suits you best. 
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
              <Button
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-bold text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
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
              <Button
                onClick={() => {
                  track("Call");
                }}
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-bold text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
              >
                <Link href="tel:131195" prefetch={false}>
                  Call 13 11 95
                </Link>
              </Button>
          </div>

{/*           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">Sydney</h3>
              </div>
              <h3 className="text-xl font-semibold">Enrolled Nurses</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Enrolled nurses wanted for casual work at major public and
                private hospitals throughout Sydney. Apply now for immediate
                start.
              </p>
              <ApplyNow />
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">Melbourne</h3>
              </div>
              <h3 className="text-xl font-semibold">Registered Nurses</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Registered nurses required for a variety of casual positions
                across Melbourne and the surrounding suburbs. Apply now for
                immediate start.
              </p>
              <ApplyNow />
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">Adelaide</h3>
              </div>
              <h3 className="text-xl font-semibold">Personal Care Workers</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Multiple positions exist for carers in private homes across
                Adelaide and the surrounding area. We have numerous clients
                looking for carers to assist with daily living activities. Apply
                now for immediate start.
              </p>
              <ApplyNow />
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">Perth</h3>
              </div>
              <h3 className="text-xl font-semibold">
                Personal Services Workers
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Personal services workers wanted for casual work in Perth. We
                have a range of positions available for immediate start. Apply
                now to secure your spot. .
              </p>
              <ApplyNow />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">Perth</h3>
              </div>
              <p className="text-[rgba(255,255,255,0.8)]">
                Registered and enrolled nurses required for very busy public
                demand. Pick your own days and hours, best rates in the
                industry. Apply now for immediate start.
              </p>
              <ApplyNow />
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">Brisbane</h3>
              </div>
              <h3 className="text-xl font-semibold">
                Registered Nurses Wanted
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Registered nurses wanted for casual work in Perth, Sydney,
                Melbourne, Adelaide, and Brisbane. Apply now for immediate
                start.
              </p>
              <ApplyNow />
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">
                  Northern Territory (remote)
                </h3>
              </div>
              <h3 className="text-xl font-semibold">
                Registered Nurse - Remote
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Registered nurse required to work in remote Northern Territory.
                Provide vaccinations and ongoing community health support in
                Australia most remote areas. Apply now for immediate start.
              </p>
              <ApplyNow />
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <div className="flex items-center space-x-2">
                <HospitalIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
                <h3 className="text-xl font-semibold">
                  Far North Queensland (remote)
                </h3>
              </div>

              <h3 className="text-xl font-semibold">
                Registered Nurse - Remote
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Based in Cairns you will travel to the most Northern parts of
                regional Australia as a community care nurse. This is a
                challenging but rewarding role. Apply now for immediate start.
              </p>
              <ApplyNow />
            </div>
          </div> */}
        </div>
      </section>
      <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Why Choose Programmed Health Professionals for Your Healthcare Career?
            </h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              We are committed to providing the best healthcare staffing
              solutions in Australia. Our team of experts works tirelessly to
              match the right healthcare professionals with the right
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Extensive Job Opportunities
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We provide healthcare jobs across Australia, including metropolitan, regional, and remote areas. Our network of healthcare clients offers a wide range of nursing and healthcare opportunities in diverse clinical environments, from hospitals to community care. 
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <ClipboardIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Flexible Work Arrangements</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We understand the importance of work-life balance. Programmed Health Professionals offers flexible shifts and rosters that fit your lifestyle. Whether you prefer casual work or are looking for long-term roles, we have options that suit your schedule. 
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <WalletIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Competitive Pay and Benefits</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer competitive pay rates for all roles, with additional benefits such as allowances for night shifts, weekends, and public holidays. You'll also have access to ongoing professional development and training opportunities to help you advance your healthcare career. 
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">
                Support Every Step of the Way
              </h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                At Programmed Health Professionals, we provide ongoing support for our healthcare staff. From the recruitment process to placement, our team will help you find the right job, ensure compliance, and provide continued support throughout your employment. You’ll have access to comprehensive induction, training, and a dedicated support team to help you succeed. 
              </p>
           </div>
          </div>
        </div>
      </section>
{/*       <section className="flex w-full justify-center bg-[rgba(255,255,255,0.05)] py-12 md:py-24 lg:py-32">
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
      </section> */}
      <section className="flex w-full justify-center bg-[rgba(255,255,255,0.05)] py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Nursing and Support Jobs We Offer 
            </h2>
{/*             <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
            </p> */}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Registered and Specialist Nurse Jobs</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Explore nursing opportunities in various specialties, including acute care, aged care, community care, mental health, and more. 
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Midwife Jobs</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Find rewarding midwifery positions in hospital settings and community care, supporting mothers and newborns with the highest quality care. 
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Technician Jobs</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                We offer a range of technician roles in healthcare settings, from medical laboratory technicians to radiology and other specialist healthcare technicians. 
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[rgba(255,255,255,0.1)] p-6">
              <BriefcaseIcon className="h-8 w-8 text-[rgb(132,189,0)]" />
              <h3 className="text-xl font-semibold">Support Worker Jobs</h3>
              <p className="text-[rgba(255,255,255,0.8)]">
                Join our network of support workers who assist patients in hospitals, aged care facilities, and home care settings, providing essential care and assistance. 
              </p>
            </div>
          </div>
        </div>
      </section>
{/*       <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
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
      </section> */}
      <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Apply for Jobs with Programmed Health Professionals </h2>
            <p className="mx-auto max-w-3xl text-[rgba(255,255,255,0.8)]">
              Whether you're looking for a casual healthcare role or the next step in your career, Programmed Health Professionals has the job for you. With our extensive range of opportunities and a dedicated team to support you, you’ll find the right job faster.  
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
              <Button
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-bold text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
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
              <Button
                onClick={() => {
                  track("Call");
                }}
                className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-bold text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
              >
                <Link href="tel:131195" prefetch={false}>
                  Call 13 11 95
                </Link>
              </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
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

function ApplyNow() {
  return (
    <Button
      className="rounded-md bg-[rgb(132,189,0)] px-8 py-3 font-medium text-[rgb(12,35,64)] hover:bg-[rgb(106,152,0)]"
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
  );
}
