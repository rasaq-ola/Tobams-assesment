import Image from "next/image";
import BulletItem from "@/components/BulletItem";

const items = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export default function PersonalisedTraining() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-white"
      aria-labelledby="personalised-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/PersonalisedTraining.jpg"
              alt="Individual professional training session with two participants"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2
              id="personalised-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Personalised Individual Training
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Begin a journey of lifelong learning and professional development with
              Tobams Group&apos;s diverse range of training programs for individuals.
              From technical skills mastery to soft skills enhancement, our courses
              cover a wide spectrum of topics to meet the evolving needs of
              today&apos;s professionals.
            </p>
            <ul className="flex flex-col gap-2" aria-label="Individual training topics">
              {items.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
