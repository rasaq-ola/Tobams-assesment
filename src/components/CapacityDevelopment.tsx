import Image from "next/image";
import BulletItem from "@/components/BulletItem";

const items = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function CapacityDevelopment() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-gray-50"
      aria-labelledby="capacity-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content — left on desktop */}
          <div className="order-2 md:order-1">
            <h2
              id="capacity-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Capacity Development
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed to
              foster your development and success:
            </p>
            <ul className="flex flex-col gap-2" aria-label="Capacity development benefits">
              {items.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 md:order-2">
            <Image
              src="/images/CapacityDevelopment.jpg"
              alt="Workshop session with presenter showing charts to participants"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
