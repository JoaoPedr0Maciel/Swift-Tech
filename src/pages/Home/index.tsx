import Companys from "../../components/Companys";
import Header from "../../components/Header";
import InfoClient from "../../components/InfoClient";
import OurServices from "../../components/OurServices";

export const Home = () => {
  return (
    <div className=" w-full h-screen">
      <Header />
      <div className="mt-4 flex justify-between items-center ml-20">
        <div className="flex justify-between w-full">
          <div className=" w-full">
            <div>
              <h1 className="text-7xl font-medium text-white">
                We provide <br />
                Architectural desing <br />
                and Construction
              </h1>
              <p className="text-[#c4c4c4] mt-6 font-medium text-lg">
                More than 100 building and housing projects that we have built.{" "}
                <br />
                The building owner chose us over other contractors in Jakarta,{" "}
                <br />
                because our work is different
              </p>
              <button className=" bg-gradient-to-r from-[#60BBEE] to-[#0A72AD] text-white font-medium mt-6 h-[3.5rem] w-[12rem]">
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
    </div>
  );
};
