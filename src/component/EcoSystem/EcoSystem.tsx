import { MdOutlineArrowOutward } from "react-icons/md";

const EcoSystem = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto md:px-30 lg:px-40 xl:px-40 ">
        <div className="flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center  text-center">
            <h1 className="text-white text-[22px] md:text-[38px]  lg:text-[48px] xl:text-[48px] font-medium ">
              Powering the IGG Ecosystem
            </h1>
            <p className="text-white text-[14px] md:text-[16px] xl:text-[18px] font-light pt-4 xl:px-30">
              IGGT is the backbone of IGG’s economy, used for transactions,
              governance, and exclusive access.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-10 sm:pt-10 lg:pt-20 xl:pt-20">
          <button className="bg-transparent cursor-pointer text-white border-2 border-white py-2 px-6 text-[18px] hover:bg-yellow-400 hover:text-black flex items-center gap-2">
            Explore Now <MdOutlineArrowOutward size={20} />
          </button>
        </div>
      </div>
      <div className="relative w-full  bg-black ">
        {/* Background Image */}
        <img
          src="/src/assets/images/ecosystem.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default EcoSystem;
