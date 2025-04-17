'use client'
import React from 'react'

export default function VCDesk() {
  const sections = [
    {
      name: 'Prof. Ajay Kumar Sharma',
      title: "Hon'ble Vice Chancellor",
      university: 'MBM University',
      location: 'Jodhpur, Rajasthan',
      image: '/aboutus/principal.jpg',
      message: `At MBM University, we strive to keep the quality of our academics, research and innovation at priority to keep up with the pace of the technological advancement.`,
    },
    {
      name: 'Prof. Ajay Kumar Sharma',
      title: "Hon'ble Vice Chancellor",
      university: 'MBM University',
      location: 'Jodhpur, Rajasthan',
      image: '/aboutus/chairman.jpg',
      message: `At MBM University, we strive to keep the quality of our academics, research and innovation at priority to keep up with the pace of the technological advancement.`,
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-[#2f3b4e]">From </span>
        <span className="text-red-600">Vice Chancellor&apos;s </span>
        <span className="text-[#2f3b4e]">Desk...</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={sec.image}
              alt={sec.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-[#2f3b4e] mb-6 shadow-md"
            />
            <h3 className="text-xl font-bold text-red-600">{sec.name}</h3>
            <p className="text-[#2f3b4e] font-medium">{sec.title}</p>
            <p className="text-[#2f3b4e]">{sec.university}</p>
            <p className="text-[#2f3b4e] mb-4">{sec.location}</p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {sec.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
