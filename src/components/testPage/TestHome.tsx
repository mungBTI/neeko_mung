"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { testList } from "@/contents/testList";
import { GoShareAndroid } from "react-icons/go";
import { TestHomeProps } from "@/interface/questionInterface";

const TestHome: React.FC<TestHomeProps> = ({
  testType,
  testContent,
  pageNum,
  setPageNum,
  setAnswers,
}) => {
  useEffect(() => {
    setAnswers([]);
  }, []);

  const [shareCount, setShareCount] = useState(0);
  return (
    <div className="bg-cottonBlue w-full flex flex-col items-center p-4 justify-around h-full">
      <div id="article_body" className="flex flex-col">
        <div>
          <div className="text-center text-3xl mb-4">{testContent.title}</div>
          <Image
            src={`/images/test/${testContent?.img}`}
            alt={`${testContent?.key}`}
            width={400}
            height={300}
          ></Image>
        </div>
        <div className="text-center text-xl my-7">{testContent.desc}</div>
        <button
          className="bg-[#0077B6] text-white py-2 px-4 text-xl my-6 mx-auto text-center rounded-full"
          onClick={() => setPageNum((prev) => prev + 1)}
        >
          테스트 시작하기
        </button>
        {/* <span className="text-sm my-2 mx-auto">참여자 수</span> */}
      </div>
      <div className="flex content-center gap-2 mb-2">
        테스트 공유하기
        <GoShareAndroid size={20} />
        {/* {shareCount} */}
      </div>
    </div>
  );
};
export default TestHome;
