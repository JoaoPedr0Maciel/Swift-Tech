type CardsProps = {
  image: string;
  title: string;
  description: string;
};

const Cards = ({ image, title, description }: CardsProps) => {
  return (
    <div>
      <img className="w-[300px] block mx-auto" src={image} alt="" />
      <p className="text-2xl text-[#252627] font-semibold mt-5 text-center">
        {title}
      </p>
      <p className="text-[#919191] text-sm mt-5 text-center">{description}</p>
    </div>
  );
};

export default Cards;
