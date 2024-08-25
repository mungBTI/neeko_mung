import PopularTest from "./home/PopularTest";
import RecentTop from "./home/RecentTop";

const HomeMainBox = () => {
  return (
    <div className="flex flex-col gap-4">
      <PopularTest></PopularTest>
      <RecentTop></RecentTop>
    </div>
  );
};

export default HomeMainBox;
