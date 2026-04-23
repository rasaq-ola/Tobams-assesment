"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Anna Reed",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote:
      "Tobams Group is an amazing partner. They understood our vision and created a website that truly represents our brand. I highly recommend their Web/Mobile Design service.",
  },
  {
    id: 2,
    name: "Sofia Owens",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    quote:
      "Their TG Academy Chartered Marketing courses gave our team the frameworks to drive real business results. The instructors were incredibly knowledgeable and engaging.",
  },
  {
    id: 3,
    name: "Christina Mwangi",
    role: "Business Analyst",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80",
    quote:
      "Tobams Group has been essential as our go-to company. Their teams work tremendously well with high performance. Their work is top notch and the results speak for themselves.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[currentIndex];

  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Testimonials
        </h2>

        {/* Desktop: show all three */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} profile photo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{t.quote}</p>
            </article>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <article className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src={current.avatar}
                  alt={`${current.name} profile photo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">{current.name}</p>
                <p className="text-xs text-gray-500">{current.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{current.quote}</p>
          </article>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d0a3f]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d0a3f]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
