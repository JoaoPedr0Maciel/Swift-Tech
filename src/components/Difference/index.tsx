import { BsBagCheckFill, BsStopwatch } from "react-icons/bs";
import Diferent from "../Cards/Diferent";
import { MdOutlineSell } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Profissional from "../Profissional";

const Difference = () => {
  return (
    <div className="min-h-screen w-full bg-white px-14 py-12">
      <div className="flex justify-between py-6 gap-5 max-sm:flex-wrap max-sm:justify-center  max-md:flex-wrap max-md:justify-center max-md:text-center max-lg:flex max-lg:items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ">
        <h1 className="text-5xl max-lg:text-3xl font-semibold text-[#252627] max-sm:text-center">
          What Make Us <br /> Different?
        </h1>
        <p className="text-[#919191] text-lg sm:max-w-[500px]  max-lg:text-sm max-md:gap-16 max-sm:text-center ">
          Check out our best service you can possibly orders in building <br />{" "}
          your company and don't forget to ask via our email or our
          <br />
          customer service if you are interested in using our services
        </p>
      </div>

      <div className="mt-28 flex flex-wrap justify-center gap-8">
        <Diferent
          icon={<BsBagCheckFill className="text-white text-xl" />}
          title="Experienced"
          description="Our experience of 25 years of
          building and making
          achievements in the world
          of development"
        />
        <Diferent
          icon={<MdOutlineSell className="text-white text-xl" />}
          title="competitive price"
          description="The prices we offer you are
          very competitive without
          reducing the quality of the
          company's work in the
          slightest"
        />
        <Diferent
          icon={<BsStopwatch className="text-white text-xl" />}
          title="On Time"
          description="We prioritize the quality of
          our work and finish it on time"
        />
        <Diferent
          icon={<IoShieldCheckmarkOutline className="text-white text-xl" />}
          title="Best Materials"
          description="The material determines the
          building itself so we
          recommend that you use
          the best & quality materials
          in its class."
        />
      </div>
      <div className="flex justify-center items-center">
        <Profissional />
      </div>
    </div>
  );
};

export default Difference;
