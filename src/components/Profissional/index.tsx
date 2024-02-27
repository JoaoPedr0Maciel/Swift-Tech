import woman from "../../assets/woman.svg";
import edificio from "../../assets/edificio.webp";
import { FaLongArrowAltRight } from "react-icons/fa";

const Profissional = () => {
  return (
    <div className="px-4 py-12 min-h-full grid gap-16 lg:grid-cols-2 lg:items-center">
      <div className="relative max-w-max mx-auto">
        <img src={edificio} className="w-[380px]" alt="edificio" />
        <div className="bg-gradient-to-b from-[#474747] to-[#222222] px-5 py-6 max-w-56 absolute bottom-0 left-0 right-0 mx-auto translate-y-8 lg:top-0 lg:bottom-auto lg:left-auto lg:translate-y-[35%] text-center lg:translate-x-16 lg:mx-0">
          <img src={woman} className="mx-auto block mb-4" alt="" />
          <h2 className="font-semibold text-base text-white mb-1.5">
            Dianne Russell
          </h2>
          <p className="text-sm text-[#c1c1c1]">
            More than 20 years of experience in the field architecture and has
            worked on project up to 100+
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl mb-4 text-[#242527]">
          Meet and talk with our best architecture
        </h1>
        <p className="text-base font-medium text-[#919191] mb-6">
          All our teams are professional and competent in their fields and will
          help you realize your dream building with the excellent result.
        </p>
        <div className="flex items-center gap-x-3">
          <button className=" bg-[#0A72AD] text-white font-medium py-6 flex justify-center items-center h-[3.5rem] w-[12rem] max-sm:h-[2rem] max-sm:w-[8rem] max-sm:text-sm">
            See All Team
          </button>
          <button className="font-semibold flex items-center gap-x-2">
            How it works <FaLongArrowAltRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profissional;
