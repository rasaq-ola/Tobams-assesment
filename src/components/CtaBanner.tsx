import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      className="py-16 md:py-20 bg-[#3d0a3f]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-pink-200 text-sm font-medium mb-3 italic">
          Don&apos;t just dream it—let&apos;s build it! Click now and start your project
          with Tobams Group. Your journey to digital excellence begins here.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-white text-[#3d0a3f] font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
