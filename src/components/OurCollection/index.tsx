import varanda from "../../assets/varanda.png";
import tower from "../../assets/tower.png";
import windows from "../../assets/windows.png";
import vintage from "../../assets/vintage.png";

const OurCollection = () => {
  return (
    <div id="portfolio" className="min-h-full px-14 py-12 bg-[#f8f8f8]">
      <h1 className="text-5xl max-lg:text-3xl font-semibold text-[#252627] text-center lg:text-left">
        Our collection. <br />
        Best projects
      </h1>

      <div className="grid gap-3 mx-auto justify-items-center justify-center grid-cols-2 lg:grid-cols-4 lg-gap-0 mt-16 lg:mt-32">
        <img src={varanda} alt="" />
        <img src={tower} alt="" />
        <img src={windows} alt="" />
        <img src={vintage} alt="" />
      </div>
    </div>
  );
};

export default OurCollection;
