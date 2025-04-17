"use client"
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Typewriter } from 'react-simple-typewriter';
import { FaCalendarAlt, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';


export default function VisionMission() {

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
                <span className="text-[#1e2a39]">VISSION</span>{' '}
                <span className="text-red-600">& MISSION</span>
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
      <section className="bg-gradient-to-b from-[#fdfdfd] to-[#f1f5f9] py-20 px-6 md:px-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Vision */}
        <div className="bg-[#314863] rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Vision</h3>
          <p className="text-white leading-relaxed text-lg">
            “A college is a place where everyone has opportunities to learn – students, teachers, staff, parents, administrators, etc. – and where learning is valued, where the cultivation of wisdom and reflection is encouraged, and where questioning and curiosity rule the day and where laughter and mistakes go hand in hand . . .
            and where we bring the outside in, where we draw on experts from around the world, and where we encourage self-directed learning . . . thoughtful technology integration is seamless . . . and is about solving real-world problems”.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#314863] rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-white mb-4">Mission</h3>
          <p className="text-white leading-relaxed text-lg">
            “Our college is committed to achieve the brand equity in the district with the distinct Academic Excellence under the high quality learning environment to develop the total personality of our students and make them to be an asset to our motherland and Ankola in particular. Our mission to provide individualized education through promoting thoughts on spiritual, moral, social, emotional, physical, intellectual development of each child, enabling them to contribute their best to the society and nation to build up their character on constructive lines to bring out behavioural modification and individual transformation”.
          </p>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}
