import Link from "next/link";
import Image from "next/image";

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
const titleClass = 'text-sm md:text-xs font-semibold text-white uppercase tracking-widest mb-4';

export default function Footer() {
  return (
    <footer className="bg-[#0f0a14] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <Link href="/" aria-label="Tobams Group home">
                <Image
                  src="/images/Logo.png"
                  alt="Tobams Group Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </Link>

              {/* Text */}
              <p className="text-sm md:text-xs text-gray-400 leading-relaxed max-w-sm">
                Tobams Group is an innovative consultancy firm reshaping the future
                of tech talent development in Africa, specialising in talent
                acquisition, internships and skill development with a global perspective.
              </p>

              {/* Socials */}
              <div className="flex gap-3 mt-2">
                ...
              </div>
            </div>
          </div>

          {/* What We Do mini nav */}
          <div>
            <p className="text-sm md:text-xs font-semibold text-white uppercase tracking-widest mb-3">
              What We Do
            </p>
            <ul className="flex flex-col gap-1.5">
              {whatWeDoLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          {/* Company */}
          <div>
            <p className={`${titleClass} mb-4`}>
              Company
            </p>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm md:text-xs text-gray-500 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <p className="text-sm md:text-xs font-semibold text-white uppercase tracking-widest mb-4">
              Solution
            </p>
            <ul className="flex flex-col gap-2">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
     
          <div className="mt-12 bg-[#1a1220] rounded-lg p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Registered Offices */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
        
        <div>
          <p className={titleClass + " mb-2"}>United Kingdom</p>
          <p className="text-sm md:text-xs text-gray-400">
            07451196 (Registered by Company House)<br />
            Vine Cottages, 215 North Street, Romford, Essex,<br />
            United Kingdom, RM1 4QA
          </p>
        </div>

        <div>
          <p className={titleClass + " mb-2"}>Nigeria</p>
          <p className="text-sm md:text-xs text-gray-400">
            RC 1048722 (Registered by the Corporate Affairs Commission)<br />
            4, Mbau Close, Angwa-Rimi
          </p>
        </div>

      </div>

      {/* Contact Info */}
      <div>
        <p className={titleClass + " mb-3"}>Contact Information</p>

        <div className="flex flex-col gap-3 text-sm md:text-xs text-gray-400">
          <p>📧 theteam@tobamsgroup.com</p>
          <p>📞 +447886600748</p>
        </div>
      </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a1a30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            Copyright ⓒ Tobams Group, 2024. All rights reserved.
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
      </div>
    </footer>
  );
}
