"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { FaCalendarAlt, FaExternalLinkAlt, FaNewspaper } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

type CommerceKeys = "Admission" | "Placement" | "Events" | "Syllabus";
type ScienceKeys = "Admission" | "Labs" | "Research" | "Syllabus";

type Tab = "commerce" | "science";

const data: Record<Tab, Record<string, string>> = {
  commerce: {
    Admission: "Commerce Admission involves filling out the form online and uploading the required documents.",
    Placement: "Top companies visit for Commerce placements like Deloitte, EY, and HDFC Bank.",
    Events: "Commerce fest 'BizMania' happens every year with 20+ intercollegiate events.",
    Syllabus: "Commerce syllabus includes Accountancy, Business Studies, and Economics.",
  },
  science: {
    Admission: "Science stream requires a minimum percentage in 10th standard for eligibility.",
    Labs: "Science stream has Physics, Chemistry, Biology, and Computer labs with modern equipment.",
    Research: "Students engage in mini-research projects under faculty mentorship every semester.",
    Syllabus: "Science syllabus includes Physics, Chemistry, Biology/Math, and Computer Science.",
  },
};

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState<Tab>("commerce");
  const [selectedButton, setSelectedButton] = useState<CommerceKeys | ScienceKeys>("Admission");

  const buttons = Object.keys(data[activeTab]) as (CommerceKeys | ScienceKeys)[];

  return (
    <div>
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
                <span className="text-red-600">PUC</span>{' '}
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
      <section className="px-4 py-16 md:py-24 bg-white">
  {/* Tabs */}
  <div className="flex flex-wrap justify-center gap-6 mb-12">
    {["commerce", "science"].map((tab) => (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab as Tab);
          setSelectedButton("Admission");
        }}
        className={`px-6 py-2 rounded-xl font-semibold text-lg transition-colors duration-200 ${
          activeTab === tab
            ? "bg-black text-white shadow-lg"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>

  {/* Main Grid */}
  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 max-w-6xl mx-auto w-full">
    {/* Side Buttons */}
    <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setSelectedButton(btn)}
          className={`min-w-[140px] md:min-w-0 flex justify-between items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium text-base ${
            selectedButton === btn
              ? "bg-gray-900 text-white shadow-md"
              : "bg-gray-800 text-white/70 hover:bg-gray-700"
          }`}
        >
          <span>{btn}</span>
          <span className="ml-2 text-sm">&gt;</span>
        </button>
      ))}
    </div>

    {/* Main Content */}
    <div className="bg-gray-900 text-white rounded-xl p-6 md:p-8 shadow-lg min-h-[200px] flex items-center">
      <p className="text-lg leading-relaxed">{data[activeTab][selectedButton]}</p>
    </div>
  </div>
</section>

    <Footer />
    </div>
  );
}
