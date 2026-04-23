import Image from "next/image";
import BulletItem from "@/components/BulletItem";
import LearnMoreLink from "@/components/LearnMoreLink";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Enterpreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagementSystem() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24"
      style={ { backgroundColor: "#5712441A" } }
      aria-labelledby="lms-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden aspect-[4/3]">
            <Image
              src="/images/management.jpg"
              alt="Students collaborating in a modern learning environment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2
              id="lms-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Learning Management System
            </h2>
            <div
            className="p-6 rounded-xl mb-6"
            style={{ backgroundColor: "#690a4e1a" }}>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 p-8 rounded-lg" 
           >
              TG Academy is a hub of knowledge and skills-building resources designed
              to empower tech talents on their learning journey. From technical courses
              covering the latest programming languages to soft skills training in
              leadership, effective communication and project management, TG Academy
              offers a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can enhance
              their skills and stay ahead in today&apos;s competitive tech landscape.
            </p>
            <p className="text-sm font-semibold text-gray-800 mb-3">
              Some of our courses include:
            </p>
            <ul className="grid grid-cols-3 gap-y-2 gap-x-6 mb-6" aria-label="Course list">
              {courses.map((course) => (
                <BulletItem key={course} text={course} />
              ))}
            </ul></div>
            <LearnMoreLink variant='dark' />
            
          </div>
        </div>
      </div>
    </section>
  );
}
