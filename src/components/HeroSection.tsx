'use client';

export default function HeroSection() {
  return (
    <section className="w-full bg-cover bg-center flex flex-col md:flex-row items-center gap-40 px-10 py-32">
      {/* Left Text */}
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to <br />
          <span className="text-black">Kuber Enterprises</span>
        </h1>
        <p className="text-lg text-gray-800 mt-6">
          At Kuber Enterprises, we are more than an organization – we are a
          dynamic force driving innovation, excellence, and positive change
          across diverse sectors.
        </p>
        <button className="mt-8 px-6 py-3 bg-black text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">
          About Kuber Group
        </button>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 gap-8 mt-10 md:mt-0 md:ml-10">
        <img
          src="/logos/logo_main.png"
          alt="Company 1"
          className="relative right-30 w-38 h-38 object-contain rounded-full shadow-lg shadow-black/40"
        />
        <img
          src="/logos/school_logo.png"
          alt="Company 2"
          className="w-38 p-2 h-38 object-contain rounded-full shadow-lg shadow-black/40"
        />
        <img
          src="/logos/school_logo.png"
          alt="Company 3"
          className="p-2 w-38 h-38 object-contain rounded-full shadow-lg shadow-black/40"
        />
        <img
          src="/logos/logo_main.png"
          alt="Company 4"
          className="relative left-30 w-38 h-38 object-contain rounded-full shadow-lg shadow-black/40"
        />
      </div>
    </section>
  );
}
