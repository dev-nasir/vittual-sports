const Revolution = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-0 lg:px-10 sm:pt-4 xl:pt-20">
        <div className="flex flex-wrap flex-col md:flex-col  lg:flex-row lg: lg:flex-nowrap  sm:flex-start md:flex-start xl:justify-center xl:items-center">
          <div className="flex-1 mb-8 lg:mb-0">
            <h1 className="text-white text-[22px] md:text-5xl xl:text-[64px] font-bold mb-8">
              Join the IGG Revolution
            </h1>
            <p className="mt-4 max-w-md text-sm md:text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
            <div className="flex items-center gap-6 mt-6 flex-wrap">
              <img
                src="../../../src/assets/images/fab-1.png"
                alt="coin"
                className="w-12 h-12 md:w-14 md:h-14 object-cover"
              />
              <img
                src="../../../src/assets/images/facebook.png"
                alt="facebook"
                className="w-12 h-12 md:w-14 md:h-14 object-cover"
              />
              <img
                src="../../../src/assets/images/instagram.png"
                alt="instagram"
                className="w-12 h-12 md:w-14 md:h-14 object-cover"
              />
            </div>
          </div>

          <div className="flex-1 mb-12 lg:mb-0">
            <img
              src="../../../src/assets/images/coin_04 1.png"
              alt="coin"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;
