import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#474747] to-[#222222] h-[15rem] w-full max-sm:py-6 px-14 py-12 flex justify-between">
      <div className="max-sm:hidden">
        <p className="text-md text-white font-semibold lg:text-2xl">
          Swift Construction
        </p>
        <p className="text-sm font-normal text-[#c4c4c4] w-[260px]">
          is a Swift Construction company based in Jakarta. More than 25 years
          of experience in building and carving out Indonesia's development.
        </p>
        <div className="grid grid-cols-4 w-[180px] mt-5">
          <div className="bg-[#222c32] w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full">
            <FaGoogle className="text-[#e9f3f9]" />
          </div>
          <div className="bg-[#222c32] w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full">
            <FaTwitter className="text-[#e9f3f9]" />
          </div>
          <div className="bg-[#222c32] w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full">
            <FaInstagram className="text-[#e9f3f9]" />
          </div>
          <div className="bg-[#222c32] w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-full">
            <FaLinkedin className="text-[#e9f3f9]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 max-sm:gap-8">
        <div className="flex flex-col gap-2 text-white">
          <h1 className="text-white font-bold text-xl">Company</h1>
          <a className="font-extralight">About</a>
          <a className="font-extralight">How it Works</a>
          <a className="font-extralight">Term</a>
          <a className="font-extralight">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h1 className="text-white font-bold text-xl">More</h1>
          <a className="font-extralight">Documetation</a>
          <a className="font-extralight">License</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
