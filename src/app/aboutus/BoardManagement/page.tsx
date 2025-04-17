"use client"
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Typewriter } from 'react-simple-typewriter';
import { FaCalendarAlt, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';


export default function BoardManagement() {

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
                <span className="text-red-600">BOARD</span>{' '}
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
      <section className="bg-[#f9fafb] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Founders Message
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We are all very proud that Himalaya College has completed seven academic years and enriched the lives and lifestyle of thousands of students and staff.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I congratulate our principal <span className="font-medium text-gray-900">Mr. M.I. Mahale</span> and his team of committed staff members for their commitment towards value-based quality teaching and unstinted efforts put in to ensure that each student is given equal care and attention in the college.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md">
            <img
              src="/aboutus/chairman.jpg" // Replace with your actual path or import
              alt="Chairman of Himalaya College"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
      <section className="bg-[#f9fafb] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           {/* Image */}
           <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md">
            <img
              src="/aboutus/chairman.jpg" // Replace with your actual path or import
              alt="Chairman of Himalaya College"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Principals Message
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We are all very proud that Himalaya College has completed seven academic years and enriched the lives and lifestyle of thousands of students and staff.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I congratulate our principal <span className="font-medium text-gray-900">Mr. M.I. Mahale</span> and his team of committed staff members for their commitment towards value-based quality teaching and unstinted efforts put in to ensure that each student is given equal care and attention in the college.
          </p>
        </div>

     
      </div>
    </section>

      <Footer />
    </div>
  );
}
