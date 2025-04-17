import Image from "next/image";

export default function HomePresident() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Chairman Image (Adjusted Size) */}
        <div className="md:w-1/3 w-full flex justify-center">
          <Image
            src="/aboutus/president.jpg" // Update this with your actual image path
            width={350} // Adjusted size for better balance
            height={350}
            alt="Chairman"
            className="rounded-[20px] md:rounded-[30px] shadow-lg"
          />
        </div>

        {/* Right: Chairman's Message */}
        <div className="md:w-2/3 w-full text-center md:text-left">
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our child-centric approach encourages curiosity and critical thinking to bring out 
            students’ best. With excellent faculty and diverse programs, we provide opportunities 
            to discover talents and become compassionate leaders. I envision Delhi World School 
            emerging as a leading light by shaping socially responsible citizens focused on 
            academics, character, and values to make a positive difference. I invite you to explore 
            our school and realize your child’s infinite potential.
          </p>

          {/* Signature Section */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-black">Regards,</p>
            <p className="text-2xl font-bold text-green-600">Dr. Nallapati Venkateswara Rao</p>
            <p className="text-green-800 font-bold">Founder & Chairman</p>
          </div>
        </div>
      </div>
    </section>
  );
}
