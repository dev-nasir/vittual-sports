import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="absolute z-20 flex justify-between items-center px-8 py-8 w-full">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="h-2 sm:h-4 md:h-4"
        />

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static top-full left-0 w-full  md:w-auto bg-[#a9a9a93d] md:bg-transparent ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-8`}
        >
          <a
            href="#"
            className="block md:inline-block text-white hover:text-yellow-300 transition p-4"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline-block text-white hover:text-yellow-300 transition p-4"
          >
            About
          </a>
          <a
            href="#"
            className="block md:inline-block text-white hover:text-yellow-300 transition p-4"
          >
            Services
          </a>
          <a
            href="#"
            className="block md:inline-block text-white hover:text-yellow-300 transition p-4"
          >
            Contact
          </a>
        </nav>
      </header>

      <div className="relative w-full bg-black">
        {/* Background Image */}
        <img
          src="/src/assets/images/background.png"
          alt="Background"
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="container mx-auto px-6 xl:px-6 md:pt-10 lg:pt-40 xl:pt-40">
          <section>
            <div className="relative flex flex-col items-center justify-center h-full text-center px-4 pt-20 xl:pt-40">
              <h1 className="text-yellow-400 text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                AI POWERED
              </h1>
              <h2 className="text-white text-[24px] md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                VIRTUAL SPORTS
              </h2>
            </div>

            <div className="flex justify-between items-center flex-col sm:flex-col md:flex-col lg:flex-row px-2 sm:px-2 md:px-2 sm:mt-4 xl:mt-6 ">
              <p className="mt-2 xl:mt-4 max-w-md text-sm md:text-base text-white lg:w-[34%] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              {/* CTA Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href="#"
                  className="bg-transparent text-white border-2 border-white py-2 px-6 hover:bg-yellow-400 hover:text-black flex items-center gap-2 transition duration-300 ease-in-out"
                >
                  Join The Whitelist
                  <MdOutlineArrowOutward size={20} />
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* Coin Image */}
        <div className="relative z-10 ">
          <img
            src="/src/assets/images/banner.png"
            alt="Coin Image"
            className="w-full object-contain lg:-mt-46 xl:-mt-46"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
