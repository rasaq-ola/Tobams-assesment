import Link from "next/link";

const whatWeDoLinks = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
];

const companyLinks = [
  "About",
  "Projects",
  "Our Founder",
  "Contact Us",
  "Blog",
  "FAQ",
  "Testimonials",
];

const solutionLinks = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0a14] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#3d0a3f] flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">TG</span>
              </div>
              <span className="font-bold text-white text-sm leading-tight">
                TOBAMS<br />GROUP
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-5">
              Tobams Group is an innovative consultancy firm reshaping the future
              of tech talent development in Africa, specialising in talent
              acquisition, internships and skill development with a global perspective.
            </p>

            {/* What We Do mini nav */}
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-3">
              What We Do
            </p>
            <ul className="flex flex-col gap-1.5">
              {whatWeDoLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6" aria-label="Social media links">
              {["LinkedIn", "Instagram", "Twitter / X"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  aria-label={`Tobams Group on ${social}`}
                  className="w-8 h-8 rounded-full bg-[#2a1a30] flex items-center justify-center hover:bg-[#3d0a3f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <svg className="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Solution
            </p>
            <ul className="flex flex-col gap-2">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Contact Information
            </p>
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:info@tobamsgroup.com"
                className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@tobamsgroup.com
              </a>
              <a
                href="tel:+447885037148"
                className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus-visible:underline"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +447885037148
              </a>
            </div>

            {/* Registered Office */}
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-3">
              Registered Office
            </p>
            <address className="text-xs text-gray-400 not-italic leading-relaxed mb-4">
              Unit 5 (B) Registered by Company House,<br />
              Villa Cottages, 215 North Street, Romford,<br />
              Essex, United Kingdom, RM1 4QA
            </address>

            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-2">
              Nigeria
            </p>
            <address className="text-xs text-gray-400 not-italic leading-relaxed">
              No. 3048722 (Registered by the Corporate<br />
              Affairs Commission), 4 Near Street, Angwa-Rimi
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a1a30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            Proudly by Tobams Group 2024. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex gap-4">
              {["Privacy Policy", "Cookies Policy", "Terms and Conditions"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-xs text-gray-500 hover:text-gray-300 transition-colors focus:outline-none focus-visible:underline"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
