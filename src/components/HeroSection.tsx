'use client';

export default function HeroSection() {
  return (
<section
  className="w-full bg-cover bg-center flex items-center"
  // style={{
  //   backgroundImage: `
  //     linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0)),
  //     url('/aboutus/chairman.jpg') /* Replace with your actual image path */
  //   `,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  // }}
>
  <div className="max-w-2xl py-32 px-10">
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
</section>

  );
}
