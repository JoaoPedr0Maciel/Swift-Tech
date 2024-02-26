const InfoClient = () => {
  return (
    <div className="flex justify-between items-center gap-12 mt-6 w-full h-[5rem]">
      <div className="flex gap-12 h-[5rem]">
        <div>
          <p className="text-white font-bold text-3xl">
            300<span className="text-[#2387c0] font-extrabold">+</span>
          </p>
          <p className="text-[#c4c4c4] font-medium ">
            Happy <br /> Client
          </p>
        </div>
        <div>
          <p className="text-white font-bold text-3xl">
            900<span className="text-[#2387c0] font-extrabold">+</span>
          </p>
          <p className="text-[#c4c4c4] font-medium ">
            Amazing <br /> Projects
          </p>
        </div>
        <div>
          <p className="text-white font-bold text-3xl">
            20<span className="text-[#2387c0] font-extrabold">+</span>
          </p>
          <p className="text-[#c4c4c4] font-medium ">
            Awards <br /> Winning
          </p>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-[#60BBEE]  to-[#013756] w-[500px] h-[120px] flex gap-5 justify-start pl-10 items-center  ">
        <div className="text-white font-bold">
          <p className="text-lg">
            <span className="text-2xl">25</span>{" "}
            <span className="font-extralight">years</span> <br />
            Opereted
          </p>
        </div>
        <div className="text-white font-light text-left">
          <p>
            As a trusted general project that has been <br /> operating for 25
            years, our commitment is <br /> always to prioritize our client
            satisfaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoClient;
