import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";
const values = [
    "Supporting a learning environment that motivates students to excel in gaining knowledge.",
    "Establishing meaningful relationships with students, families, teachers, administrators, & community partners.",
    "Holding our values of Integrity with honesty & responsibility.",
    "Taking institutional responsibility for student learning, ethical behavior, & compliance with mandates, policies, & procedures.",
    "Challenging ourselves to come up with unique & innovative ideas.",
    "We are committed to providing excellent educational service.",
];

export default function VisionSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
            {/* Left: Image */}
            <div className="md:w-1/2 w-full">
                <Image
                   src="/aboutpage/mission_image.jpg" // Change to your actual image path
                    width={600}
                    height={400}
                    alt="Classroom"
                    className="rounded-tr-[150px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] shadow-lg"
                />
            </div>

            {/* Right: Values Content */}
            <div className="md:w-1/2 w-full md:pl-12 mt-6 md:mt-0">
                <h2 className="text-3xl font-bold text-blue-900">Our Values</h2>
                <ul className="mt-4 space-y-3">
                    {values.map((value, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                            {/* <FaCheckCircle className="text-green-500 mr-3 mt-1" /> ✅ Checkmark Icon */}
                            ✅
                            {" " + value}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
