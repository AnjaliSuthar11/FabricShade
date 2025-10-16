"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";


// const slides = [
//   {
//     id: 1,
//     title: "New Arrivals",
//     description: "Discover the latest trends in fashion at unbeatable prices.",
//     img: "/5.jpg",
//     button: "Shop Now",
//   },
//   {
//     id: 2,
//     title: "Summer Collection",
//     description: "Stay cool and stylish with our summer picks.",
//     img: "/3.jpg",
//     button: "Explore",
//   },
//   {
//     id: 3,
//     title: "Exclusive Deals",
//     description: "Get up to 50% off on selected items. Limited time offer!",
//     img: "/Hotel-Room-Dbl-1.jpg",
//     button: "Grab Deals",
//   },
// ];

const slides = [
  {
    id: 1,
    title: "New Arrivals",
    description: "Discover the latest trends in fashion at unbeatable prices.",
    img: "/5.jpg",
    button: "Shop Now",
  },
  {
    id: 2,
    title: "Summer Collection",
    description: "Stay cool and stylish with our summer picks.",
    img: "/3.jpg",
    button: "Explore",
  },
  {
    id: 3,
    title: "Exclusive Deals",
    description: "Get up to 50% off on selected items. Limited time offer!",
    img: "/Hotel-Room-Dbl-1.jpg",
    button: "Grab Deals",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      {/* Slider */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
           
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                {slide.description}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition">
                {slide.button}
              </button>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 transition"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ✅ Cards Section (normal flow but overlapping slider) */}
      <div className="-mt-20 relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition shadow-gray-700">
            <Image
  src="/DE-1.jpg"
  alt="Cylinder"
  width={300}
  height={250}
  className="w-full h-48 object-contain"
/>

            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">Cylinder</h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition shadow-gray-700">
            <Image
              src="/DE-46.jpg"
              alt="Half"
              width={300}
  height={250}
  className="w-full h-48 object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">Half</h3>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition shadow-gray-700">
            <Image
              src="/DE-37.jpg"
              alt="Pendant"
              width={300}
  height={250}
  className="w-full h-48 object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">Pendant</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
