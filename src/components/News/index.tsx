import NewsCard from "../Cards/NewsCard";
import tinta from "../../assets/Tinta.png";
import loja from "../../assets/loja.png";
import casa from "../../assets/casa.png";

const News = () => {
  return (
    <div className="min-h-full py-8 px-14 bg-[#ffffff]">
      <h1 className="text-5xl max-lg:text-3xl font-semibold text-[#252627] text-center lg:text-left">
        News & Update
      </h1>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        <NewsCard
          image={tinta}
          day="12"
          month="Jan"
          shortDescription="Elements of Content in Epoxy Paint"
          description="Epoxy paint and epoxy floor
          contractor. Have you heard the two
          terms? And what does that have to
          do with the construction of existing
          buildings? Epoxy itself is included in
          the type of resin... "
        />
        <NewsCard
          image={loja}
          day="12"
          month="Jan"
          shortDescription="5 Right Steps in Warehouse Planning and Construction"
          description="Planning the construction of a
          warehouse for both industrial,
          personal and other goods storage
          must be done carefully. 
          When the planning is done properly,
          the construction is... "
        />
        <NewsCard
          image={casa}
          day="12"
          month="Jan"
          shortDescription="The Right Solution to Build a Sturdy Type 45 House"
          description="Having a solid home is certainly
          everyone's dream. How not, the
          house is a place where the residents
          can rest and take shelter from the
          bad weather... "
        />
      </div>
    </div>
  );
};

export default News;
