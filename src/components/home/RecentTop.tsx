import { postList } from "@/contents/postList";
import { PostListPageProps } from "@/interface/questionInterface";
import Image from "next/image";
import Link from "next/link";
const PostListPage: React.FC<PostListPageProps> = ({ pageType }) => {
  const postBundle = pageType === "posting" ? postList : postList.slice(0, 3);
  return (
    <div className="flex flex-col">
      {pageType === "posting" ? (
        <p className="text-lg sm:text-xl p-2">
          💡알아두면 쏠쏠한 양육 꿀팁 모음💡
        </p>
      ) : (
        <p className="text-lg sm:text-xl p-2">💡알아두면 쏠쏠한 양육 꿀팁💡</p>
      )}
      <div className="flex flex-col gap-2">
        {postBundle.map((post) => {
          return (
            <Link key={post.key} href={post.path}>
              <article className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 sm:gap-0 p-2 sm:p-0">
                <div className="w-full sm:w-[250px] h-[180px] overflow-hidden flex items-center justify-center rounded-lg">
                  <Image
                    src={`/images/post/${post.img}`}
                    alt={post.title}
                    width={250}
                    height={180}
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="p-2 w-full sm:w-[27rem] flex flex-col gap-1">
                  <p className="font-bold text-base sm:text-lg">{post.title}</p>
                  <p className="text-sm sm:text-base">{post.desc}</p>
                  <span className="text-xs text-[#7E7E7E]">{post.Date}</span>
                  <p>
                    {post.tag.map((tag) => {
                      return (
                        <span key={tag} className="text-xs sm:text-s mr-1">
                          #{tag}
                        </span>
                      );
                    })}
                  </p>
                  <p className="text-sm sm:text-base">
                    예상 소요시간 : {post.time}분
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default PostListPage;
