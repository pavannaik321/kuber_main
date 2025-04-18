"use client"
import React from 'react'

export default function Ourteam() {
  return (
    <section className="bg-black py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Kuber HO Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team Member Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
            <img
              src="/aboutus/chairman.jpg"
              alt="Team Member"
              className="w-28 h-28 object-cover rounded-full mx-auto shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Ramesh Kumar</h3>
            <p className="text-gray-500">Chief Operating Officer</p>
            <p className="text-sm text-center text-gray-500 mt-1">
              Discover cutting-edge healthcare services and compassionate care at R.N Nayak Hospital. Your well-being is our priority.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
            <img
              src="/aboutus/chairman.jpg"
              alt="Team Member"
              className="w-28 h-28 object-cover rounded-full mx-auto shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Priya Mehta</h3>
            <p className="text-gray-500">Head of Finance</p>
            <p className="text-sm text-center text-gray-500 mt-1">
              Discover cutting-edge healthcare services and compassionate care at R.N Nayak Hospital. Your well-being is our priority.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
            <img
              src="/aboutus/chairman.jpg"
              alt="Team Member"
              className="w-28 h-28 object-cover rounded-full mx-auto shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Anil Sharma</h3>
            <p className="text-gray-500">HR & Admin Lead</p>
            <p className="text-sm text-center text-gray-500 mt-1">
              Discover cutting-edge healthcare services and compassionate care at R.N Nayak Hospital. Your well-being is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
