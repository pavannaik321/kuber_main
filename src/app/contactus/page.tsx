"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Typewriter } from 'react-simple-typewriter';
import { FaCalendarAlt, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  details: string;
}

export default function Contactus() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Submitted:', formData);
      setSuccess(true);
      setLoading(false);
    }, 1000);
  };

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
                <span className="text-red-600">CONTACT</span>{' '}
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
      {/* <Header /> */}
      <main className="flex-grow container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Need Help? Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let us give you more details about the Himalaya School of Education. Please fill out the form below.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
              />
            </div>
            <textarea
              id="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Give us more details..."
              className="w-full p-3  border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-800 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#243b58] hover:bg-[#243b58] text-white font-semibold py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
          </form>

          {/* Embedded Map */}
          <div className="w-full h-full min-h-[400px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.324082649119!2d74.30061357384251!3d14.637535876173827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe867b81789deb%3A0x7ee114fcbe3c944f!2sHimalaya%20College%2C%20Ankola!5e0!3m2!1sen!2sin!4v1744698602729!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
