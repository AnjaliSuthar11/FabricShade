"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      {/* Title + Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Lighting That Transforms Spaces
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A Lamp Shade is an ornamental fixture that covers the lightbulb on a
          lamp to diffuse the light it emits. Round, Drum, Square, Rectangle are
          some popular forms of Lamp Shades.
        </p>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Big Image */}
        <div className="flex justify-center">
          <Image
            src="/DE-13.jpg" // replace with your big lamp image
            alt="Big Lamp"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Two Small Images */}
        <div className="flex flex-col gap-6">
          <Image
            src="/1.jpg" // replace with your image
            alt="Lamp Small 1"
            width={400}
            height={200}
            className="rounded-xl shadow-md object-cover"
          />
          <Image
            src="/DE-39.jpg" // replace with your image
            alt="Lamp Small 2"
            width={400}
            height={200}
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
