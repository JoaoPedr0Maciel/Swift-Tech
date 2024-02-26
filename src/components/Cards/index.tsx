type CardsProps = {
  image: string;
  title: string;
  description: string;
};
const Cards = ({ image, title, description }: CardsProps) => {
  return (
    <div className="w-[300px] h-[200px] ">
      <div className="flex justify-center items-center gap-5">
        <div>
          <img className="w-[300px]" src={image} alt="" />
          <p className="text-2xl text-[#252627] font-semibold mt-5">{title}</p>
          <p className="text-[#c4c4c4] text-base mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
