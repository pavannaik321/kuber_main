import Image from 'next/image'

const categories = [
    {
      label: 'Financial Services',
      icon: '/entity/img1.png',
      description:
        'Dwaraka Souharda Sahakari Niyamita Ankola - Experience financial solutions tailored to your needs for integrity and expertise.',
    },
    {
      label: 'Health Care',
      icon: '/entity/img1.png',
      description:
        'R.N Nayak Hospital - Discover cutting-edge healthcare services and compassionate care at R.N Nayak Hospital. Your well-being is our priority.',
    },
    {
      label: 'Education',
      icon: '/entity/img1.png',
      description:
        'Himalaya Education Trust - Join a community dedicated to education, knowledge, and academic excellence.',
    },
    {
      label: 'Media & Publication',
      icon: '/entity/img1.png',
      description:
        'Janamadhyama - Stay informed with Janamadhyama. Our platform brings you the latest news and media updates.',
    },
    {
      label: 'Logistics',
      icon: '/entity/img1.png',
      description:
        'Kuber Logistics - Optimize your logistics and supply chain with seamless transportation and distribution solutions.',
    },
    {
      label: 'Construction',
      icon: '/entity/img1.png',
      description:
        'Kuber Construction - Creating structures that stand as testaments to quality, innovation, and functionality.',
    },
    {
      label: 'Sea Food',
      icon: '/entity/img1.png',
      description:
        'Our focus is on sourcing high-quality seafood from sustainable fisheries. From fresh catches to processed products.',
    },
    {
      label: 'Mines & Minerals',
      icon: '/entity/img1.png',
      description:
        'We commit to ethical practices, environmental stewardship, and responsible mineral exploration.',
    },
  ]

export default function CategoryGrid() {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-12 px-4">
    <div className="text-center mb-10 max-w-2xl">
      <h2 className="text-3xl font-bold text-white mb-2">Our Corporate Ecosystem</h2>
      <p className="text-white text-lg">
        Interconnected business thriving together, empowering mutual success.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
      {categories.map(({ label, icon, description }, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center transition hover:scale-105"
        >
          <div className="w-16 h-16 mb-4">
            <Image
              src={icon}
              alt={label}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <p className="text-center font-semibold text-lg text-black leading-snug">
            {label}
          </p>
          <p className="text-sm text-center text-gray-600 mt-1">{description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
