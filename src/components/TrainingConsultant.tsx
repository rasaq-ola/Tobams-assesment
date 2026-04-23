import LearnMoreLink from "@/components/LearnMoreLink";

const cards = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they reveal the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognised certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultant() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-gray-50"
      aria-labelledby="consultant-heading"
    >
      <div className="bg-[#5712441A] py-10">
      <div className="p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
          Training The Consultant
        </p>
        <h2
          id="consultant-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
        >
          Maximise Your Potential as a Certified Trainer
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10 max-w-3xl">
          With the help of our Business Analysis Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in a
          thorough curriculum, and hone your training methods through interactive
          workshops. Participating in our program will enable you to gain expertise
          in Business Analysis while also developing the abilities to mentor and
          encourage others in their career advancement.
        </p>

        {/* Cards grid */}
        <div className="bg-[#3d0a3f] p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10  rounded-2xl">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 text-white "
            >
              <h3 className="text-white font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-white-600 leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <LearnMoreLink variant="dark" />
      </div></div>
    </section>
  );
}
