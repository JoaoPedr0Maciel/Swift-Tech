import Cards from "../Cards";
import industrial from "../../images/industrial.svg";
import comercial from "../../images/comercial.svg";
import redential from "../../images/redential.svg";

// flex justify-center items-center gap-20 mx-14 max-lg:flex-wrap

const OurServices = () => {
  return (
    <div id="services" className="bg-[#f8f8f8] w-full min-h-screen px-4 py-12">
      <div className="flex justify-between max-lg:text-center max-lg:flex-col py-6 space-y-9 lg:space-y-0 lg:py-14 mx-14 items-center ">
        <h1 className="text-5xl max-lg:text-3xl font-semibold text-[#252627]">
          Our Excellent <br /> Services
        </h1>
        <p className="text-[#919191] text-lg sm:max-w-[500px] lg:max-w-none max-lg:text-sm">
          Check out our best service you can possibly orders in building{" "}
          <br className="hidden lg:block" /> your company and don't forget to
          ask via our email or our <br className="hidden lg:block" /> customer
          service if you are interested in using our services
        </p>
      </div>
      <ul className="grid gap-6 max-w-md mx-auto md:grid-cols-2 md:max-w-2xl lg:max-w-none lg:grid-cols-3">
        <li>
          <Cards
            image={industrial}
            title="Industrial"
            description="Industrial development is our main  
          line of business. We do Factory
          Construction, Warehouse and others"
          />
        </li>
        <li>
          <Cards
            image={comercial}
            title="Commercial"
            description="Our experience building in the
          Commercial field includes Showrooms,
          Supermalls and Office Buildings"
          />
        </li>
        <li>
          <Cards
            image={redential}
            title="Resedential"
            description="Residential development is the
          beginning that has shaped us to this
          day. Our development includes
          Houses & Apartments"
          />
        </li>
      </ul>
    </div>
  );
};

export default OurServices;
