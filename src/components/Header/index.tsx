import { IoIosMenu } from "react-icons/io";
import MenuMobile from "../MenuMobile";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-24 flex   justify-end items-center">
      <div className="ml-14 w-full">
        <IoIosMenu
          onClick={() => setOpen(true)}
          className="text-white text-2xl hidden max-sm:flex max-lg:flex"
        />
        <MenuMobile setOpen={setOpen} open={open} />
      </div>
      <nav className="flex w-[85%] h-[50%] max-lg:hidden justify-center items-center mx-20">
        <div className="text-[#c4c4c4] text-lg font-normal font-poppins flex gap-8 cursor-pointer items-center ">
          <a className="font-bold  text-white rounded-xl bg-[#616161] w-[5rem] h-[2.5rem]  flex justify-center items-center">
            Home
          </a>
          <a
            href="#services"
            className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[5rem] h-[2.5rem] flex justify-center items-center"
          >
            Services
          </a>
          <a
            href="#team"
            className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[8rem] h-[2.5rem] flex justify-center items-center"
          >
            Find a Team
          </a>
          <a
            href="#about"
            className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[8rem] h-[2.5rem] flex justify-center items-center"
          >
            About Us
          </a>
          <a
            href="#difference"
            className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[5rem] h-[2.5rem] flex justify-center items-center"
          >
            Our Difference
          </a>
          <a
            href="#portifo"
            className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[5rem] h-[2.5rem] flex justify-center items-center"
          >
            Portfolio
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
