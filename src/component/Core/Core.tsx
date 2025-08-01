const Core = () => {
  const features = [
    {
      icon: "/assets/images/ownership.png",
      title: "True Ownership",
      description:
        "Players own their assets, including AI-powered virtual horses and NFTs",
    },
    {
      icon: "/assets/images/skill-based.png",
      title: "Skill-Based Contests",
      description:
        "Engage in competitive gaming experiences that reward strategy over chance",
    },
    {
      icon: "/assets/images/economy.png",
      title: "Tokenized Economy",
      description:
        "The IGG Token ($IGGT) fuels transactions, governance, and participation",
    },
    {
      icon: "/assets/images/global.png",
      title: "Global Accessibility",
      description:
        "Available across multiple platforms with integration into real-world wagering markets",
    },
  ];

  return (
    <section className="bg-black text-white lg:py-12 xl:py-16">
      <div className="container mx-auto p-6 sm:p-4 lg:px-20 xl:px-40 text-start">
        <h1 className="text-[24px] md:text-4xl font-bold pt-6 sm:pt-8 mb-4 sm:mb-4 md:mb-4 xl:mb-6">
          Core Features of IGG
        </h1>
        <p className="text-white-300 text-[14px] md:text-lg ">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1b1b1b] to-black rounded-xl p-6 text-center min-h-[250px] flex flex-col justify-between"
            >
              <div className="w-14 h-14 mx-auto -mt-14 flex items-center justify-center rounded-full bg-yellow-400">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-white text-lg font-semibold  mt-2">
                {feature.title}
              </h3>
              <p className="text-[#9B9B99] text-sm mb-6 px-4">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-yellow-400 justify-center font-medium inline-flex items-center hover:underline"
              >
                Learn More <span className="flex justify-center items-center">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Core;
