"use client";

import { FaFacebookF, FaGithub, FaTwitter, FaDribbble, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#314863] text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white">About Us</h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            “Where dreams take wings and turn into reality”, the Himalaya School zone is an ideal destination for the gamut of educational activities ranging from schools to specialized centers for the specific needs of learners.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaGithub, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaDribbble, link: "#" },
              { icon: FaPinterestP, link: "#" }
            ].map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} className="p-3 border-2 border-amber-50 rounded-lg hover:bg-green-600 transition">
                <Icon className="text-white text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-xl font-bold text-white">Information Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            {["Home", "About Us", "Administration", "Admission", "Exams and Results", "Contact"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-green-300 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold text-white">Contact Details</h3>
          <p className="mt-3 text-gray-300">himalayacollegeankola@gmail.com</p>
          <p className="mt-2 text-gray-300">Poojageri, Ankola, Uttara Kannada - 581314, Karnataka, India</p>
          <p className="mt-2 text-gray-300">08388-295633</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-300 text-sm border-t border-green-700 pt-6">
        &copy; {new Date().getFullYear()} Himalaya School. All Rights Reserved.
      </div>
    </footer>
  );
}
