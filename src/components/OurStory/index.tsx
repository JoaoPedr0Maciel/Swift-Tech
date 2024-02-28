import predio from "../../assets/Predio.png";

const OurStory = () => {
  return (
    <div
      id="about"
      className="min-h-full py-8 bg-[#f8f8f8] grid justify-items-center justify-center px-14  lg:grid-cols-2 lg:items-center"
    >
      <div className=" flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-5xl max-lg:text-3xl font-semibold text-[#252627] text-center lg:text-left">
          Our Story, Who we are
        </h1>
        <p className="text-[#919191] leading-8 text-lg sm:max-w-[500px] lg:max-w-none max-lg:text-sm text-center lg:text-left">
          Established in 1992, PT. Wahana Cipta operates as a General
          Contracting company with a footprint that we have planted throughout
          Indonesia. Initially, we focused on construction in the field of
          residential housing development in Jakarta. As the company grows, now
          we are present as a reliable...
        </p>
        <button className=" bg-[#0A72AD] text-white mb-3 font-medium shadow-md shadow-[#0A72AD] mt-4 h-[3.5rem] w-[10rem] max-sm:h-[2rem] max-sm:w-[8rem] max-sm:text-sm">
          See More
        </button>
      </div>
      <div className="">
        <img src={predio} className="lg:w-[400px]" alt="" />
      </div>
    </div>
  );
};

export default OurStory;
