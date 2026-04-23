import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-transparent text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Professional training session with team members collaborating"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-300 mb-4">
              What we do
            </p>
          
          <h1
            id="hero-heading"
            className="text-[56px] font-bold leading-[130%] text-center"
            style={{ fontFamily: "Nunito" }}
          >
            Training and Development
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today&apos;s ever-evolving landscape.
          </p>
          <Link
            href="#"
            className="inline-flex justify-content items-center gap-2 bg-[#3d0a3f] hover:bg-[#5a1260] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
