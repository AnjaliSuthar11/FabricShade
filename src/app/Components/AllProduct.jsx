'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const lampsByShape = {
  Ceiling: [
    '/Lampshade/ceiling/DE-43.jpg',
    '/Lampshade/ceiling/DE-44.jpg',
  ],
  Conical: [
    '/Lampshade/conical/DE-7.jpg',
    '/Lampshade/conical/DE-8.jpg',
    '/Lampshade/conical/DE-9.jpg',
    '/Lampshade/conical/DE-10.jpg',
    '/Lampshade/conical/DE-11.jpg',
    '/Lampshade/conical/DE-12.jpg',
    '/Lampshade/conical/DE-13.jpg',
  ],
  Cylinder: [
    '/Lampshade/cylinder/DE-1.jpg',
    '/Lampshade/cylinder/DE-2.jpg',
    '/Lampshade/cylinder/DE-3.jpg',
    '/Lampshade/cylinder/DE-4.jpg',
    '/Lampshade/cylinder/DE-5.jpg',
    '/Lampshade/cylinder/DE-6.jpg',
  ],
  Square: [
    '/Lampshade/square/DE-28.jpg',
    '/Lampshade/square/DE-29.jpg',
    '/Lampshade/square/DE-30.jpg',
  ],
  Half: [
    '/Lampshade/half/DE-45.jpg',
    '/Lampshade/half/DE-46.jpg',
    '/Lampshade/half/DE-47.jpg',
  ],
  Oval: ['/Lampshade/oval/DE-26.jpg'],
  Pendant: [
    '/Lampshade/pendant/DE-37.jpg',
    '/Lampshade/pendant/DE-38.jpg',
    '/Lampshade/pendant/DE-39.jpg',
    '/Lampshade/pendant/DE-40.jpg',
    '/Lampshade/pendant/DE-41.jpg',
    '/Lampshade/pendant/DE-42.jpg',
  ],
  Rectangle: ['/Lampshade/rectangle/DE-34.jpg'],
  Pleated: [
    '/Lampshade/pleated/DE-19.jpg',
    '/Lampshade/pleated/DE-20.jpg',
    '/Lampshade/pleated/DE-21.jpg',
    '/Lampshade/pleated/DE-22.jpg',
    '/Lampshade/pleated/DE-23.jpg',
    '/Lampshade/pleated/DE-24.jpg',
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
    <div className="pt-32">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-10">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Lamp Gallery
        </h1>

        {/* Shape Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['All', ...shapeOptions].map((shape) => (
            <button
              key={shape}
              onClick={() => setSelectedShape(shape)}
              className={`px-4 py-2 rounded-full border transition ${
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                sizes="(max-width: 768px) 100vw, 33vw"
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
