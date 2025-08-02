import { useState } from "react";
import backgroundImage from "/assets/images/footer-bg.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Email submitted:", email);
      // Handle email submission here
      setEmail("");
    }
  };

  return (
    <footer className="bg-black text-white ">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container  mx-auto px-6 sm:px-6 md:px-0 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:p-4 justify-between items-center ">
            {/* Left Section - Join Our List */}
            <div className="lg:col-span-1 mt-10">
              <h2 className="text-[22px] font-bold xl:mb-4">Join Our List</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>

              {/* Email Signup */}
              <div className="relative mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors "
                />
                <button
                  onClick={handleSubmit}
                  className="absolute right-1 top-1 bottom-1 cursor-pointer px-8 py-3 text-center bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors "
                >
                  Join Now
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 mt-6 flex-wrap">
                <img
                  src="/assets/images/fab-1.png"
                  alt="coin"
                  className="w-12 h-12 md:w-14 md:h-14 object-cover"
                />
                <img
                  src="/assets/images/facebook.png"
                  alt="facebook"
                  className="w-12 h-12 md:w-14 md:h-14 object-cover"
                />
                <img
                  src="/assets/images/instagram.png"
                  alt="instagram"
                  className="w-12 h-12 md:w-14 md:h-14 object-cover"
                />
              </div>
            </div>

            {/* Right Section - Links */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {/* About Column */}
              <div>
                <h3 className="text-xl font-semibold mb-6">About</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      IGG Token
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Copyright</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Legal Disclaimers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Company Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 