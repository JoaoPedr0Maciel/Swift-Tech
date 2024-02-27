import { BsBagCheckFill } from "react-icons/bs";

type DiferentProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const Diferent = ({ icon, title, description }: DiferentProps) => {
  return (
    <div>
      <div className="max-w-[280px]">
        <div className="bg-blue-200 rounded-full flex justify-center items-center h-[4rem] w-[4rem]">
          <div className="bg-blue-400 rounded-full flex justify-center items-center h-[3rem] w-[3rem]">
            {icon}
          </div>
        </div>

        <h2 className="font-semibold mt-3 text-lg">{title}</h2>
        <p className="mt-3 text-[#919191] leading-10">{description}</p>
      </div>
    </div>
  );
};

export default Diferent;
