import { useState, type SetStateAction } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Token = () => {
  // State to track the active link/tab
  const [activeLink, setActiveLink] = useState("token");

  // Link data for tabs
  const links = [
    {
      id: "token",
      label: "$IGGTToken",
      content:
        "Token content goes Here.Here you can find information about how to buy the  Invincible GG has developed a groundbreaking patented platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. With $30 million Here you can find information about how to buy the  Invincible GG has developed a groundbreaking patented platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. With $30 million in funding and a successful beta launch, Invincible GG is poised to redefine the gaming industry in funding and a successful beta launch, Invincible GG is poised to redefine the gaming industry.",
    },
    {
      id: "buy",
      label: "How To Buy",
      content:
        "Here you can find information about how to buy the  Invincible GG has developed a groundbreaking patented Here you can find information about how to buy the  Invincible GG has developed a groundbreaking patented platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. With $30 million in funding and a successful beta launch, Invincible GG is poised to redefine the gaming industry platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. With $30 million in funding and a successful beta launch, Invincible GG is poised to redefine the gaming industry..",
    },
    {
      id: "tokenomics",
      label: "Tokenomics",
      content:
        "This tab shows the tokenomics breakdown of the token Invincible GG has developed a groundbreaking patented platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. With $30 million in funding and a successful beta launch, Invincible GG is poised to redefine the gaming Here you can find information about how to buy the  Invincible GG has developed a groundbreaking patented platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. With $30 million in funding and a successful beta launch, Invincible GG is poised to redefine the gaming industry industry..",
    },
    {
      id: "whitelist",
      label: "Whitelist",
      content:
        "Whitelist information goes here Invincible GG has developed a groundbreaking patented platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. Here you can find information about how to buy the  Invincible GG has developed a groundbreaking patented platform that revolutionizes mobile skill gaming and live virtual sport content for legal wagering in regulated markets. With $30 million in funding and a successful beta launch, Invincible GG is poised to redefine the gaming industry With $30 million in funding and a successful beta launch, Invincible GG is poised to redefine the gaming industry..",
    },
  ];

  // Function to handle tab click
  const handleLinkClick = (linkId: SetStateAction<string>) => {
    setActiveLink(linkId);
  };

  return (
    <section className="bg-black xl:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-betwedxen items-center flex-col sm:flex-col md:flex-col lg:flex-row md:gap-8 lg:gap-20 xl:gap-40">
          {/* Left Side Links (Tabs) */}
          <div className="flex flex-row sm:flex-row md:flex-row lg:flex-col gap-4 md:gap-6 xl:gap-8 space-y-4 text-[14px] sm:text-[28px] md:text-3xl lg:text-[28px] xl:text-[32px] mt-30">
            {links.map(({ id, label }) => (
              <a
                key={id}
                onClick={() => handleLinkClick(id)}
                className={`text-white transition mb-20 ${
                  activeLink === id
                    ? "border-b-2 border-yellow-300"
                    : "hover:border-b-2 hover:border-yellow-300"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right Side (Content) */}
          <div className="border-1 bg-gray-950 border-white rounded-[30px] max-sm:max-w-[100%] p-10">
            <h2 className="text-yellow-300 text-[18px] sm:text-[28px] md:text-3xl lg:text-[28px] xl:text-[32px] mb-4">
              Invincible GG: A Gaming Technology Powerhouse
            </h2>

            <p className="text-white mb-4 text-start max-w-4xl mx-auto">
              {links.find((link) => link.id === activeLink)?.content}
            </p>

            {/* Explore More Button */}
            <div className="mt-6 flex justify-end">
              <a
                href="#"
                className="bg-transparent text-white border-1 border-white py-2 px-6 hover:bg-yellow-400 hover:text-black flex items-center gap-2"
              >
                Explore More <MdOutlineArrowOutward size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
