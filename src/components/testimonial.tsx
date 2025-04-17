'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anjali Sharma',
      role: 'B.Tech Student',
      content:
        "The faculty and facilities here are top-notch! The environment encourages innovation and learning. I'm proud to be a part of this institution.",
      image: '/students/student1.jpeg',
    },
    {
      name: 'Rahul Verma',
      role: 'MBA Graduate',
      content:
        'This college helped me unlock my true potential. The support I received from the career team was incredible. Highly recommend!',
      image: '/students/student1.jpeg',
    },
    {
      name: 'Sneha Patil',
      role: 'Engineering Alumna',
      content:
        'From vibrant campus life to challenging academics, my time here was transformative. The best decision I ever made.',
      image: '/students/student1.jpeg',
    },
  ];

  return (
    <section className="bg-white text-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
        <span className="text-slate-800">What Our</span>
        <span className="text-red-600"> Students Say </span>
        <span className="text-slate-800">Say</span>
      </h2>
        <p className="text-black mb-12 text-lg">
          Hear from our students about their experience on campus
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#314863] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
              />
              <p className="italic text-sm mb-4">{t.content}</p>
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <span className="text-sm text-white">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
