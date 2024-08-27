"use client";
import PopularTest from "./home/PopularTest";
import PostListPage from "./home/RecentTop";
import { useSearchParams } from "next/navigation";
import Ready from "./setting/Ready";

const HomeMainBox = () => {
  const params = useSearchParams();
  const pageType = params.get("type") || "home";

  return (
    <div>
      {pageType === "home" && (
        <div className="flex flex-col gap-4">
          <PopularTest pageType={pageType}></PopularTest>
          <PostListPage pageType={pageType}></PostListPage>
        </div>
      )}
      {pageType === "test" && <PopularTest pageType={pageType}></PopularTest>}
      {pageType === "posting" && (
        <PostListPage pageType={pageType}></PostListPage>
      )}
      {pageType === "board" && <Ready></Ready>}
    </div>
  );
};

export default HomeMainBox;
