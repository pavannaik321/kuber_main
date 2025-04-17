import { FaMapMarkerAlt, FaHistory, FaSchool } from "react-icons/fa";

export default function HistorySection() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-900 text-center">Historical & Geographical Perspectives</h2>
        <div className="mt-8 bg-white shadow-xl rounded-lg p-8 md:p-12">
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <div className="flex items-start">
              <FaHistory className="text-blue-700 text-2xl mr-3 mt-1" />
              <p>
                It is praise-worthy to mention that the people of Ankola participated in the Civil Disobedience Movement, 
                with over 1500 activists involved, leading to arrests as part of Indias freedom struggle.
              </p>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-green-600 text-2xl mr-3 mt-1" />
              <p>
                The school is located at Poojageri, Ankola, amidst picturesque hillocks of the Western Ghats, 
                running parallel to the Arabian Sea Coast. Surrounded by paddy fields, natural beaches, 
                and native mango plantations Kari Ishaad, the area is well connected with air, rail, and roadways, 
                accessible from Hubli and Goa.
              </p>
            </div>
            <div className="flex items-start">
              <FaSchool className="text-yellow-500 text-2xl mr-3 mt-1" />
              <p>
                Himalaya School was established in 2015 in commemoration of Late Shri R. N. Nayak. It is managed by 
                the Himalaya Educational Trust (HET) under the guidance of Shri Mayur R. Nayak as the Chairman 
                and Shri G. R. Nayak as its Founder Principal.
              </p>
            </div>
            <div className="flex items-start">
              <FaSchool className="text-purple-600 text-2xl mr-3 mt-1" />
              <p>
                The school (Class I to X) has been affiliated with the Central Board of Secondary Education (CBSE), 
                New Delhi, since the Academic Year 2018, governed under the leadership of Mrs. Savita Kanoji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
