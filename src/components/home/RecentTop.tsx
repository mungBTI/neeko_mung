import { postList } from "@/contents/postList";
import { PostListPageProps } from "@/interface/questionInterface";
import Image from "next/image";
const PostListPage: React.FC<PostListPageProps> = ({ pageType }) => {
  const postBundle = pageType === "posting" ? postList : postList.slice(0, 3);
  return (
    <div className="flex flex-col">
      {pageType === "posting" ? (
        <p className="text-xl p-2">💡알아두면 쏠쏠한 양육 꿀팁 모음💡</p>
      ) : (
        <p className="text-xl p-2">💡알아두면 쏠쏠한 양육 꿀팁💡</p>
      )}
      <div className="flex flex-col gap-2">
        {postBundle.map((post) => {
          return (
            <article
              className="flex width-[49rem] justify-center height-[12rem] items-center"
              key={post.key}
            >
              <div className="w-[250px] h-[180px] overflow-hidden flex items-center justify-center rounded-lg">
                <Image
                  src={`/images/post/${post.img}`}
                  alt={post.title}
                  width={250}
                  height={1800}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="p-2 w-[27rem] ml-5 flex flex-col gap-1">
                <p className="bold text-lg">{post.title}</p>
                <p className="">{post.desc}</p>
                <span className="text-xs text-[#7E7E7E]">{post.Date}</span>
                <p>
                  {post.tag.map((tag) => {
                    return (
                      <span key={tag} className="text-s mr-1">
                        #{tag}
                      </span>
                    );
                  })}
                </p>
                <p>예상 소요시간 : {post.time}분</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default PostListPage;
