import Companys from "../../components/Companys";
import Difference from "../../components/Difference";
import Header from "../../components/Header";
import InfoClient from "../../components/InfoClient";
import News from "../../components/News";
import OurServices from "../../components/OurServices";
import OurStory from "../../components/OurStory";

export const Home = () => {
  return (
    <div className=" w-full h-screen">
      <Header />
      <div className="mt-4 flex flex-wrap justify-between items-center mx-14">
        <div className="flex justify-between w-full">
          <div className=" w-full">
            <div>
              <h1 className="text-7xl max-sm:text-3xl max-lg:text-5xl font-medium text-white">
                We provide <br />
                Architectural desing <br />
                and Construction
              </h1>
              <p className="text-[#c4c4c4] mt-6 font-medium max-sm:text-sm text-lg">
                More than 100 building and housing projects that we have built.{" "}
                <br />
                The building owner chose us over other contractors in Jakarta,{" "}
                <br />
                because our work is different
              </p>
              <button className=" bg-gradient-to-r from-[#60BBEE] to-[#0A72AD] text-white font-medium mt-6 h-[3.5rem] w-[12rem] max-sm:h-[2rem] max-sm:w-[8rem] max-sm:text-sm">
                Discovery More
              </button>
              <div className="">
                <InfoClient />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Companys />
      <OurServices />
      <Difference />
      <OurStory />
      <News />
    </div>
  );
};
