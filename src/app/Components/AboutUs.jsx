"use client";

import Image from "next/image";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <>
    <div className="max-w-5xl mx-auto px-4 pt-28">
      {/* Page Title */}
      <h2 className="text-3xl font-bold border-b-2 border-pink-500 inline-block pb-1 mb-6">
        About
      </h2>

      {/* Feature Image */}
      <div className="w-full mb-8">
        <Image
          src="/img/bg/fsbrand.jpg"
          alt="Fabricshade India Brand"
          width={1200}
          height={500}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Intro Quote */}
      <div className="mb-8">
        <h4 className="text-pink-500 text-xl font-semibold">We Love Lights!</h4>
        <h6 className="text-amber-400 text-center text-base italic mt-2">
          “Light, God's eldest daughter, is a principal beauty in a building.”
        </h6>
        <p className="text-right text-orange-700 text-sm mt-2">
          — Thomas Fuller, *The Holy State and the Profane State*
        </p>
      </div>

      {/* Company Intro */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>And we think the same.</p>

        <p>
          At <span className="text-orange-700 font-semibold">Fabricshade India</span>, we believe
          that lighting should exceed functionality and transform your spaces into magnificent,
          inspiring settings — lights that energize and enhance your life.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-10 space-y-4">
        <h5 className="text-pink-500 text-xl font-semibold">
          Our Mission Statement
        </h5>
        <p>
          We understand that light always follows the path of the beautiful. Hence, at{" "}
          <span className="text-orange-700 font-semibold">Fabricshade India</span>, we are
          committed to helping customers live brighter and love lights as much as we do.
        </p>
        <p>
          We facilitate this mission by offering an assorted range of lighting solutions,
          professional service, and expert guidance.
        </p>
      </div>

      {/* What is Fabricshade India */}
      <div className="mt-10 space-y-4">
        <h5 className="text-pink-500 text-xl font-semibold">
          What is Fabricshade India?
        </h5>
        <p>
          Formed in 2006,{" "}
          <span className="text-orange-700 font-semibold">Fabricshade India</span> is a renowned
          manufacturer and supplier of lamp shades. Our distinct range of lighting products is
          sold through an active network of dealer outlets across India.
        </p>
        <p>
          We bring you an unparalleled variety of stylish lamp shades, unique finishes, fresh colors,
          and unmatched quality.
        </p>
        <div>
          Our products are widely used in:
          <ul className="list-disc list-inside mt-2">
            <li>Hotels</li>
            <li>Resorts</li>
            <li>Clubs</li>
            <li>And much more</li>
          </ul>
        </div>
      </div>

      {/* What is a Lamp Shade */}
      <div className="mt-10 space-y-4 pb-10">
        <h5 className="text-pink-500 text-xl font-semibold">
          What is a Lamp Shade?
        </h5>
        <p>
          A lamp shade is an ornamental fixture that covers the light bulb on a lamp to diffuse the
          light it emits.
        </p>
        <p>
          Common lamp shade shapes include <strong>Round</strong>, <strong>Drum</strong>,
          <strong>Square</strong>, and <strong>Rectangle</strong>.
        </p>
      </div>
    </div>
      <Footer/>
     
     </>
  );
}
