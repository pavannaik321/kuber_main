'use client';

import { useState } from 'react';

export default function AdmissionForm() {
  type CourseType = 'PUC' | 'BCA';

  
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    course: CourseType;
    class: string;
    dob: string;
    gender: string;
    contact: string;
    alternateContact: string;
    address: string;
  }>({
    firstName: '',
    lastName: '',
    course: 'PUC',
    class: '',
    dob: '',
    gender: '',
    contact: '',
    alternateContact: '',
    address: '',
  });
  

  const classOptions: Record<CourseType, string[]> = {
    PUC: [
      'PUC I Commerce',
      'PUC II Commerce',
      'PUC I Science',
      'PUC II Science',
    ],
    BCA: ['BCA I', 'BCA II', 'BCA III'],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
  
    if (name === 'course') {
      setFormData({
        ...formData,
        course: value as CourseType, // 👈 assert the type here
        class: '',
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  return (
    <div className="min-h-[80vh] w-full bg-[#314863] text-white py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8 tracking-wide">
        Admission Form
      </h1>

      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-medium">Select Course *</label>
            <div className="relative mt-1">
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="appearance-none w-full p-2 pr-10 border rounded-md bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#314863]"
              >
                <option value="PUC">PUC</option>
                <option value="BCA">BCA</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium">Select Class *</label>
            <div className="relative mt-1">
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="appearance-none w-full p-2 pr-10 border rounded-md bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#314863]"
              >
                <option value="">Select Class</option>
                {classOptions[formData.course].map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium">Gender *</label>
            <div className="mt-2 flex gap-4">
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center text-sm">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium">Contact No. *</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Alternate Contact */}
          <div>
            <label className="block text-sm font-medium">Alternate Contact No. *</label>
            <input
              type="text"
              name="alternateContact"
              value={formData.alternateContact}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md text-sm"
              rows={3}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="w-full md:w-1/2 bg-[#314863] text-white font-medium py-2.5 px-5 rounded-md hover:bg-[#25384d] transition-all duration-200 text-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
