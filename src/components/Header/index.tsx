import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full h-24 flex   justify-end items-center">
      <div className="ml-14 w-full">
        <IoIosMenu className="text-white text-2xl" />
      </div>
      <nav className="flex w-[85%] h-[50%] max-lg:hidden justify-center items-center mx-20">
        <div className="text-[#c4c4c4] text-lg font-normal font-poppins flex gap-8 cursor-pointer items-center ">
          <a className="font-bold  text-white rounded-xl bg-[#616161] w-[5rem] h-[2.5rem]  flex justify-center items-center">
            Home
          </a>
          <a className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[5rem] h-[2.5rem] flex justify-center items-center">
            Services
          </a>
          <a className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[8rem] h-[2.5rem] flex justify-center items-center">
            Find a Team
          </a>
          <a className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[8rem] h-[2.5rem] flex justify-center items-center">
            About Us
          </a>
          <a className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[5rem] h-[2.5rem] flex justify-center items-center">
            Articles
          </a>
          <a className="hover:bg-[#616161] hover:text-white hover:rounded-xl w-[5rem] h-[2.5rem] flex justify-center items-center">
            Portfolio
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
