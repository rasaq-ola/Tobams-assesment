import Image from "next/image";
import BulletItem from "@/components/BulletItem";

const items = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export default function CorporateTrainings() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-gray-50"
      aria-labelledby="corporate-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content — left on desktop */}
          <div className="order-2 md:order-1">
            <h2
              id="corporate-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Corporate Trainings
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team to
              deliver tailored learning experiences that align with your company&apos;s
              goals and values.
            </p>
            <ul className="flex flex-col gap-2" aria-label="Corporate training topics">
              {items.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>

          {/* Image — right on desktop */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 md:order-2">
            <Image
              src="/images/CorporateTraining.jpg"
              alt="Corporate training session with presenter and team around a table"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
