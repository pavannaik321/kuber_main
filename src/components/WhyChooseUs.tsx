"use client";

import Image from "next/image";

const features = [
  {
    title: "Elegance",
    description: "Expertly curated CBSE curriculum program",
    color: "bg-red-700",
    img: "/whychooseus/Elegance.png",
  },
  {
    title: "Efficiency",
    description: "Optimized school for everyday learning",
    color: "bg-orange-500",
    img: "/whychooseus/Efficiency.png",
  },
  {
    title: "Expertise",
    description: "Skilled teacher professional community",
    color: "bg-green-800",
    img: "/whychooseus/Expertise.png",
  },
  {
    title: "Enthusiasm",
    description: "Engaging systems for motivated learning",
    color: "bg-red-600",
    img: "/whychooseus/Enthusiasm.jpg",
  },
  {
    title: "Excellence",
    description: "Students achieve captivating success",
    color: "bg-blue-800",
    img: "/whychooseus/Excellence.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-4 sm:px-10 text-center bg-white">
      {/* Title Section */}
      <h3 className="text-orange-500 text-sm font-bold uppercase tracking-wide">Why Choose Us</h3>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Why Choose Delhi World School?</h2>
      <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-3xl mx-auto">
        Discover Our Unique 5E Concept: Elegance, Efficiency, Expertise, Enthusiasm, Excellence.
      </p>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg text-white ${feature.color} flex flex-col items-center transition-all transform hover:scale-105`}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-dashed border-white mb-4">
              <Image src={feature.img} alt={feature.title} width={50} height={50} />
            </div>
            <h4 className="font-bold text-xl">{feature.title}</h4>
            <p className="text-sm sm:text-base mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
