import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      className="py-16 md:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3d0a3f] rounded-2xl py-12 px-6 md:px-12 text-center">
          <p className="text-pink-200 text-sm font-medium mb-3 italic">
            Want to accelerate professional growth and development at your organisation? <br />See how we can help.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-[#3d0a3f] font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
          >
          Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
