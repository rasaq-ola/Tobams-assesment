import Image from "next/image";
import LearnMoreLink from "@/components/LearnMoreLink";

const features = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-white"
      aria-labelledby="transformation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pink card container */}
        <div className="bg-[#fce8ea] rounded-3xl p-6 sm:p-8 lg:p-12">
          {/* Top label */}
          <p className="text-sm font-semibold text-[#2a3eb1] italic mb-1">
            Learning With Our CEO:
          </p>
          <h2
            id="transformation-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold italic text-[#1a1a1a] mb-4"
          >
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
            Transformation Hub with Jite Newton is a flagship webinar series curated
            by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and
            leadership capabilities, this exclusive event offers invaluable insights
            and strategies for personal and professional growth. Whether you&apos;re
            seeking to advance your career or enhance your leadership skills, the
            Transformation Hub provides a transformative learning experience to unlock
            your full potential and drive success in your endeavours.
          </p>

          {/* Two-col: image + features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Dr. Jite Newton, CEO of Tobams Group, speaking at the Transformation Hub webinar"
                fill
                className="object-cover"
              />
            </div>

            {/* Feature grid + button */}
            <div>
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
                aria-label="Transformation Hub topics"
              >
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                  >
                    <span aria-hidden="true" className="shrink-0">
                      <svg
                        className="w-4 h-4 text-[#3d0a3f]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13 2L4.09 12.97H11L10 22L19.91 11H13L13 2Z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <LearnMoreLink variant="dark" label="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
