"use client"
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Typewriter } from 'react-simple-typewriter';
import { FaCalendarAlt, FaExternalLinkAlt, FaNewspaper,FaCheckCircle } from 'react-icons/fa';


const benefits = [
  {
    title: 'Holistic Development',
    description: 'Fostering physical, intellectual, and social growth through a balanced approach.',
  },
  {
    title: 'Modern Education',
    description: 'Equipping students with contemporary skills to stay ahead in a fast-evolving world.',
  },
  {
    title: 'Life Skills Empowerment',
    description: 'Encouraging empathy and awareness through rich curricular and co-curricular activities.',
  },
  {
    title: 'Value-Based Learning',
    description: 'Instilling moral and ethical foundations as envisioned by our Constitution.',
  },
  {
    title: 'Inclusive & Environmental Focus',
    description: 'Offering equal opportunity and integrating eco-conscious practices in education.',
  },
  {
    title: 'Co-Scholastic Excellence',
    description: 'Promoting arts, health, and sports as vital components of a student’s journey.',
  },
];


export default function WhyHimalaya() {

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-gradient-to-b from-[#d8e4ee] to-white text-gray-900 pb-6">

            <div className="max-w-7xl mx-auto px-6 flex justify-end">
            <Header />
            </div>
          <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
                      {/* Logo & School Name */}
              <div className="flex flex-col justify-between">
                <img src="/school_logo.png" alt="School Logo" className="h-15" />
                {/* <span className="text-lg font-bold text-green-900">DELHI WORLD SCHOOL</span> */}
              </div>
         
         <div>
      
            {/* Portal links */}
            <div className="flex justify-center items-center gap-6 text-[#1a3c5a] font-semibold text-base py-4">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaCalendarAlt /> <span>Admission Updates</span>
              </div>
              <div className="border-l border-gray-400 h-6" />
              <div className="flex items-center gap-2 cursor-pointer">
                <FaNewspaper /> <span>Latest News</span>
              </div>
              <div className="border-l border-gray-400 h-6" />
              <div className="flex items-center gap-2 cursor-pointer">
                <FaExternalLinkAlt /> <span>MBM IUMS Portal</span>
              </div>
            </div>
      
            {/* Logo + Welcome text */}
            <div className="text-end">
              <h1 className="text-5xl font-bold">
                <span className="text-red-600">HIMALAYA</span>{' '}
                <span className="text-[#1e2a39]">INFORMATION</span>
              </h1>
              <p className="text-xl mt-2 font-semibold text-[#1e2a39]">
                WELCOME TO{' '}
                <span className="text-red-600">
                  <Typewriter
                    words={['LEGACY', 'FUTURE', 'HIMALAYA COLLEGE']}
                    loop={true}
                    cursor
                    cursorStyle=""
                    typeSpeed={100}
                    deleteSpeed={80}
                    delaySpeed={2000}
                  />
                </span>
              </p>
            </div>
          </div>
          </main>
      </div>
      <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3c5a]">Why Himalaya?</h2>
        <p className="text-lg mt-4 text-gray-600 max-w-3xl mx-auto">
          Discover what makes Himalaya College a truly exceptional place for growth, learning, and leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#f8fafc] rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
          >
            <FaCheckCircle className="text-green-500 text-2xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-[#1e2a39]">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      <Footer />
    </div>
  );
}
