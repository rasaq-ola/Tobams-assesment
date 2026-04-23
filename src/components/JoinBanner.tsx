import Link from "next/link";

export default function JoinBanner() {
  return (
    <section
      className="py-14 md:py-16 bg-[#1a1a2e]"
      aria-labelledby="join-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gray-400 text-sm mb-1">
            Ready to be part of something extraordinary?
          </p>
          <h2
            id="join-heading"
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
          >
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Link
          href="#"
          className="shrink-0 inline-flex items-center gap-2 bg-[#3d0a3f] hover:bg-[#5a1260] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
