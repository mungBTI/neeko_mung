"use client";
import PopularTest from "./home/PopularTest";
import PostListPage from "./home/RecentTop";
import { useSearchParams } from "next/navigation";
import Ready from "./setting/Ready";
import PostPageForm from "./postPage/PostForm";
import Insider from "./home/Insider";

const HomeMainBox = () => {
  const params = useSearchParams();
  const pageType = params.get("type") || "home";
  const postId = params.get("postId");
  const postIdNumber = Number(postId);

  return (
    <div>
      {postId ? (
        <PostPageForm postId={postIdNumber} />
      ) : (
        <>
          {pageType === "home" && (
            <div className="flex flex-col gap-4">
              <PopularTest pageType={pageType} />
              <PostListPage pageType={pageType} />
            </div>
          )}
          {pageType === "test" && <PopularTest pageType={pageType} />}
          {pageType === "posting" && <PostListPage pageType={pageType} />}
          {pageType === "board" && <Insider />}
        </>
      )}
    </div>
  );
};

export default HomeMainBox;
