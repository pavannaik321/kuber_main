'use client';

import { Play } from 'lucide-react';

export default function OurStorySection() {
  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <div className="mb-4">
            {/* <span className="text-sm uppercase tracking-widest relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-6 before:bg-gradient-to-b from-red-500 to-red-800"></span> */}
            Our Story
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your Vision Our Expertise Your Success Get Noticed Generate <br />
            <span className="text-red-500">Success SkyRocket.</span>
          </h2>

          {/* Blog cards */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10">
            <div className="relative rounded-lg overflow-hidden">
              <img src="/aboutus/chairman.jpg" alt="blog1" className="w-200 h-40 object-cover" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Chairman</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img src="/aboutus/principal.jpg" alt="blog2" className="w-200 h-40 object-cover" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Principal</span>
                {/* <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Trends</span> */}
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img src="/aboutus/chairman.jpg" alt="blog2" className="w-200 h-40 object-cover" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Chairman</span>
                {/* <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Trends</span> */}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img src="/aboutus/chairman.jpg" alt="team" className="w-full h-auto object-cover" />
          </div>

          {/* Paragraph */}
          <p className="text-gray-300 mb-8">
            Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi nullam. 
            Molestie nunc non blandit massa enim nec. Felis bibendum ut tristique et 
            egestas quis ipsum suspendisse ultrices. Eros in cursus turpis massa tincidunt dui.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 text-center text-white font-semibold mb-8">
            <div>
              <p className="text-2xl">10+</p>
              <p className="text-sm text-gray-400">Our Branches</p>
            </div>
            <div>
              <p className="text-2xl">300+</p>
              <p className="text-sm text-gray-400">Our Faculty</p>
            </div>
            <div>
              <p className="text-2xl">3200+</p>
              <p className="text-sm text-gray-400">Our Students</p>
            </div>
            <div>
              <p className="text-2xl">30+</p>
              <p className="text-sm text-gray-400">Our Experience Years</p>
            </div>
          </div>

          {/* Avatars + Play Button */}
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <img src="/school_logo1.png" className="bg-white w-10 h-10 rounded-full border-2 border-white object-contain" />
              <img src="/logos/school_logo.png" className="bg-white w-10 h-10 rounded-full border-2 border-white object-contain" />
              <img src="/logos/logo_main.png" className="bg-white w-10 h-10 rounded-full border-2 border-white object-contain" />


            </div>
            <button className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition">
              <Play size={18} />
              WATCH INTRO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
