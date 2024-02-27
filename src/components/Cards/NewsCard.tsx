type NewCardProps = {
  image: string;
  day: string;
  month: string;
  shortDescription: string;
  description: string;
};
const NewsCard = ({
  image,
  day,
  month,
  shortDescription,
  description,
}: NewCardProps) => {
  return (
    <div className="mt-5 w-[250px]  gap-10">
      <img src={image} alt="" className="lg:w-[400px]" />
      <div className="flex items-center justify-center gap-5 ">
        <div className="flex flex-col justify-center items-center ">
          <p className="font-bold text-lg">{day}</p>
          <p className="font-semibold text-[0.8rem]">{month}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">{shortDescription}</p>
        </div>
      </div>
      <p className="mt-5 text-[#919191]">
        {description}{" "}
        <span className="text-[#0A72AD] font-semibold">Read more</span>
      </p>
    </div>
  );
};

export default NewsCard;
