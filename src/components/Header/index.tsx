const Header = () => {
  return (
    <div className="w-full h-24 flex flex-wrap justify-center items-center">
      <nav className="flex w-[85%] h-[50%] justify-center items-center mx-20">
        <div className="text-[#c4c4c4] text-lg font-normal font-poppins flex gap-8 cursor-pointer items-center ">
          <a className="font-bold text-white rounded-xl bg-[#616161] w-[5rem] h-[2.5rem]  flex justify-center items-center">
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
