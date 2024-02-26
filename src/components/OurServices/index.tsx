import Cards from "../Cards";
import industrial from "../../images/industrial.svg";
import comercial from "../../images/comercial.svg";
import redential from "../../images/redential.svg";

const OurServices = () => {
  return (
    <div className="bg-[#f8f8f8] w-full h-screen">
      <div className="flex justify-between mx-20 h-[35%] items-center">
        <h1 className="text-5xl font-semibold text-[#252627]">
          Our Excellent <br /> Services
        </h1>
        <p className="text-[#c4c4c4] text-lg">
          Check out our best service you can possibly orders in building <br />{" "}
          your company and don't forget to ask via our email or our <br />{" "}
          customer service if you are interested in using our services
        </p>
      </div>
      <div className="flex justify-center items-center gap-20 ">
        <Cards
          image={industrial}
          title="Industrial"
          description="Industrial development is our main  
          line of business. We do Factory
          Construction, Warehouse and others"
        />
        <Cards
          image={comercial}
          title="Commercial"
          description="Our experience building in the
          Commercial field includes Showrooms,
          Supermalls and Office Buildings"
        />
        <Cards
          image={redential}
          title="Resedential"
          description="Residential development is the
          beginning that has shaped us to this
          day. Our development includes
          Houses & Apartments"
        />
      </div>
    </div>
  );
};

export default OurServices;
