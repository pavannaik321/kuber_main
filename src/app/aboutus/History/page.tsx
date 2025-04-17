"use client"
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Typewriter } from 'react-simple-typewriter';
import { FaCalendarAlt, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';


export default function History() {

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
                <span className="text-red-600">HISTORY</span>{' '}
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
      <div className="relative w-full h-auto min-h-screen bg-black overflow-hidden">

      {/* Background Video */}
<video
  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/aboutus/himalayacollege.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

{/* Overlay */}
<div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 text-white text-center px-4 z-10 backdrop-blur-sm">


        <p className="text-xs md:text-sm tracking-widest">Himalaya College</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 leading-snug sm:leading-tight drop-shadow-lg">

        About The College <br className="hidden sm:block" /> COLLEGE AT A GLANCE
        </h1>

        {/* Button */}
        <a
          href="#quote"
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 sm:px-6 sm:py-3 rounded-lg transition-all text-sm sm:text-base"
        >
          Contact Us →
        </a>
      </div>
    </div>
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-16">
  {/* Overlay Heading */}
  <div className="max-w-5xl mx-auto text-center mb-12">
  <p className="text-sm tracking-widest uppercase text-red-500 mb-2">Our Journey</p>
  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
    Shaping Minds, Building Futures
  </h2>
  <p className="text-lg mt-4 text-gray-300">
    A legacy of excellence, innovation, and transformation in education.
  </p>
</div>


  {/* Content Section */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Image or Illustration */}
    <div className="w-full">
      <img
        src="/aboutus/DSC.jpg" // Replace with an actual image in your public folder
        alt="Campus View"
        className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
      />
    </div>

    {/* Right Content */}
    <div>
      <p className="text-lg text-gray-200 leading-relaxed">
        Himalaya College is more than just an institution—it’s a hub of innovation, aspiration, and transformation. The campus thrives as a vibrant ecosystem nurturing the minds of tomorrow, fostering excellence in academics, creativity, and leadership.
      </p>

      <p className="mt-4 text-gray-400">
        From early learning centers to advanced degrees, the college zone is structured to support every learner’s journey. Our commitment to inclusivity, modern facilities, and faculty excellence ensures students are prepared for global opportunities.
      </p>

      <ul className="mt-6 space-y-2 text-gray-300">
        <li className="flex items-center gap-2">
          🎓 Comprehensive Academic Programs from Primary to Postgraduate
        </li>
        <li className="flex items-center gap-2">
          🏫 State-of-the-art Campus with Smart Classrooms & Labs
        </li>
        <li className="flex items-center gap-2">
          🌐 Emphasis on Digital Learning and Global Exposure
        </li>
        <li className="flex items-center gap-2">
          💡 A Nurturing Environment for Innovation and Startups
        </li>
      </ul>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
