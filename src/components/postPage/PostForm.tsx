"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import Image from "next/image";
import { PostProps } from "@/interface/questionInterface";
import { postList } from "@/contents/postList";

const PostPageForm: React.FC<PostProps> = ({ postId }) => {
  const postContent = postList.find((post) => post.key === postId);
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div className="w-full md:max-w-3xl md:mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 overflow-hidden relative rounded-full">
          <Image
            src={`/images/post/${postContent?.img}`}
            alt=""
            width={24}
            height={24}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <span>Neeko</span>
      </div>
      <div>
        <p className="text-xl my-2.5">{postContent?.title}</p>
        <p className="mb-2.5 text-gray-400">작성일자 : {postContent?.Date}</p>
      </div>
      <div className="w-[700px] h-[500px] overflow-hidden relative ">
        <Image
          src={`/images/post/${postContent?.img}`}
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
    </div>
  );
};

export default PostPageForm;
