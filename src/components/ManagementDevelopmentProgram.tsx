"use client";

import { useState } from "react";
import Image from "next/image";

const accordionItems = [
  {
    id: "leadership",
    label: "Enhanced Leadership Skills",
    content:
      "Develop executive presence, strategic thinking, and the ability to inspire and guide high-performing teams through complex challenges.",
  },
  {
    id: "engagement",
    label: "Improved Employee Engagement",
    content:
      "Learn frameworks to boost team motivation, reduce turnover, and create a culture where people feel valued and committed to shared goals.",
  },
  {
    id: "culture",
    label: "Organisational Culture",
    content:
      "Build and sustain a strong organisational culture that attracts top talent, drives innovation, and aligns with your company's core values.",
  },
  {
    id: "growth",
    label: "Sustainable Growth",
    content:
      "Equip your leaders with the tools to drive long-term business growth through effective decision-making, resource optimisation, and stakeholder management.",
  },
];

export default function ManagementDevelopmentProgram() {
  const [openId, setOpenId] = useState<string | null>("leadership");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-[#2d0a30]"
      aria-labelledby="mdp-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/ManagementDevelopment.jpg"
              alt="Management team in a collaborative leadership development session"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2
              id="mdp-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Management Development Program
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate leaders with the high-performance skills
              they need to thrive.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Our program includes workshops, seminars, coaching sessions, online
              courses, and experiential learning opportunities designed to improve
              leadership skills, strategic thinking, communication, and other essential
              managerial competencies for corporate organisations.
            </p>

            {/* Accordion */}
            <div className="flex flex-col gap-3" role="list">
              {accordionItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="rounded-lg overflow-hidden" role="listitem">
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`accordion-body-${item.id}`}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg ${
                        isOpen
                          ? "bg-[#5a1260] text-white"
                          : "bg-[#3d1040] text-gray-200 hover:bg-[#4a1250]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span aria-hidden="true">
                          <svg className="w-4 h-4 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13 2L4.09 12.97H11L10 22L19.91 11H13L13 2Z" />
                          </svg>
                        </span>
                        {item.label}
                      </div>
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div
                        id={`accordion-body-${item.id}`}
                        className="bg-[#3d1040] px-4 pb-4 pt-2 text-sm text-gray-300 leading-relaxed"
                      >
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
