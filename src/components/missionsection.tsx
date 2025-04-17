import Image from "next/image";

const missionPoints = [
    "Empowering students with knowledge, skills, and values to excel in life.",
    "Creating a supportive and inclusive learning environment.",
    "Encouraging creativity, curiosity, and lifelong learning.",
    "Instilling a strong sense of responsibility, leadership, and integrity.",
    "Bridging academic excellence with practical real-world applications.",
    "Building a community that nurtures collaboration, respect, and diversity."
];

export default function MissionSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 mt-4 md:px-16 py-12">
                        {/* Right: Mission Content */}
                        <div className="md:w-1/2 w-full md:pr-12 mt-6 md:mt-0">
                <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                    Our mission is to **provide a holistic learning experience** that empowers students to reach their full potential. 
                    We strive to create an environment that fosters **academic excellence, personal growth, and social responsibility**.
                </p>
                <ul className="mt-6 space-y-3">
                    {missionPoints.map((point, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                            ✅ <span className="ml-2">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Left: Image */}
            <div className="md:w-1/2 w-full">
                <Image
                    src="/aboutpage/mission_image.jpg" // Change to your actual image path
                    width={600}
                    height={400}
                    alt="Classroom"
                    className="rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[150px] shadow-xl"
                />
            </div>


        </section>
    );
}
