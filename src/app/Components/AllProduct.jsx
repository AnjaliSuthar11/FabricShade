'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const lampsByShape = {
  Ceiling: [
    '/lampshade/ceiling/DE-43.jpg',
    '/lampshade/ceiling/DE-44.jpg',
  ],
  Conical: [
    '/lampshade/conical/DE-7.jpg',
    '/lampshade/conical/DE-8.jpg',
    '/lampshade/conical/DE-9.jpg',
    '/lampshade/conical/DE-10.jpg',
    '/lampshade/conical/DE-11.jpg',
    '/lampshade/conical/DE-12.jpg',
    '/lampshade/conical/DE-13.jpg',
  ],
  Cylinder: [
    '/lampshade/cylinder/DE-1.jpg',
    '/lampshade/cylinder/DE-2.jpg',
    '/lampshade/cylinder/DE-3.jpg',
    '/lampshade/cylinder/DE-4.jpg',
    '/lampshade/cylinder/DE-5.jpg',
    '/lampshade/cylinder/DE-6.jpg',
  ],
  Square: [
    '/lampshade/square/DE-28.jpg',
    '/lampshade/square/DE-29.jpg',
    '/lampshade/square/DE-30.jpg',
  ],
  Half: [
    '/lampshade/half/DE-45.jpg',
    '/lampshade/half/DE-46.jpg',
    '/lampshade/half/DE-47.jpg',
  ],
  Oval: ['/lampshade/oval/DE-26.jpg'],
  Pendant: [
    '/lampshade/pendant/DE-37.jpg',
    '/lampshade/pendant/DE-38.jpg',
    '/lampshade/pendant/DE-39.jpg',
    '/lampshade/pendant/DE-40.jpg',
    '/lampshade/pendant/DE-41.jpg',
    '/lampshade/pendant/DE-42.jpg',
  ],
  Rectangle: ['/lampshade/rectangle/DE-34.jpg'],
  Pleated: [
    '/lampshade/pleated/DE-19.jpg',
    '/lampshade/pleated/DE-20.jpg',
    '/lampshade/pleated/DE-21.jpg',
    '/lampshade/pleated/DE-22.jpg',
    '/lampshade/pleated/DE-23.jpg',
    '/lampshade/pleated/DE-24.jpg',
  ],
};

const allLamps = Object.entries(lampsByShape).flatMap(([shape, paths]) =>
  paths.map((src, index) => ({
    src,
    shape,
    name: `${shape} Lamp ${index + 1}`,
  }))
);

const shapeOptions = Object.keys(lampsByShape);

export default function AllProduct() {
  const [selectedShape, setSelectedShape] = useState('All');

  const filteredLamps =
    selectedShape === 'All'
      ? allLamps
      : allLamps.filter((lamp) => lamp.shape === selectedShape);

  return (
    <div className="pt-28">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-6">
        <h1 className="text-3xl font-semibold text-center mb-5">
          Lamp Gallery
        </h1>

        {/* Shape Filters (Centered) */}
       <div className="flex flex-row flex-wrap gap-2 md:gap-5 py-5 md:justify-center  ">
  {['All', ...shapeOptions].map((shape) => (
    <button
      key={shape}
      onClick={() => setSelectedShape(shape)}
      className={`rounded-2xl px-3  py-2 border transition text-sm sm:text-base md:text-lg  ${
        selectedShape === shape
          ? 'bg-[#009bf1] text-white border-[#009bf1]'
          : 'border-gray-400 text-gray-700'
      }`}
    >
      {shape}
    </button>
  ))}
</div>
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLamps.map((lamp, index) => (
            <div
              key={index}
              className="relative w-full h-64 border rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              <Image
                src={lamp.src}
                alt={lamp.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                priority={index < 4} // Optimize above-the-fold images
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center">
                {lamp.name}
              </div>
            </div>
          ))}
        </div>

        {filteredLamps.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            No lamps match the selected shape.
          </p>
        )}
      </div>
    </div>
  );
}
