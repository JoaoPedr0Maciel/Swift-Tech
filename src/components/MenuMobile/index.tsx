import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

type MenuMobileProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuMobile = ({ open, setOpen }: MenuMobileProps) => {
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  const close = () => setOpen(false);
  return (
    <nav
      className={`${
        open === false ? "hidden" : "flex"
      } absolute font-bold w-full min-h-screen top-0 bottom-0 right-0 left-0 z-[5] flex items-center gap-5 justify-center flex-col bg-gray-800/30 backdrop-blur-sm`}
    >
      <IoIosClose
        onClick={close}
        className="text-5xl text-white absolute top-[1rem] right-[1rem] "
      />
      <a
        href="#home"
        className=" text-white  flex justify-center items-center hover:duration-300 hover:scale-125"
        onClick={close}
      >
        Home
      </a>
      <a
        href="#services"
        className=" text-white flex justify-center items-center hover:duration-300 hover:scale-125"
        onClick={close}
      >
        Services
      </a>
      <a
        href="#team"
        className=" text-white flex justify-center items-center hover:duration-300 hover:scale-125"
        onClick={close}
      >
        Find a Team
      </a>
      <a
        href="#about"
        className=" text-white flex justify-center items-center hover:duration-300 hover:scale-125"
        onClick={close}
      >
        About Us
      </a>
      <a
        className=" text-white flex justify-center items-center hover:duration-300 hover:scale-125"
        onClick={close}
        href="#difference"
      >
        Our Difference
      </a>
      <a
        href="#portfolio"
        className=" text-white flex justify-center items-center hover:duration-300 hover:scale-125"
        onClick={close}
      >
        Portfolio
      </a>
    </nav>
  );
};

export default MenuMobile;
