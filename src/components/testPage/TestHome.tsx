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
        <Image
          src={`/images/test/${testContent?.img}`}
          alt={`${testContent?.key}`}
          width={400}
          height={300}
        ></Image>
        <button
          className="bg-[#0077B6] text-white py-2 px-4 text-xl my-8 mx-auto text-center rounded-full mb-2"
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
      {testContent?.footerRank?.length > 0 && (
        <div className="bg-white w-full flex flex-col p-4 rounded-lg">
          <p className="mb-2">{testContent?.footerTitle}</p>
          {testContent?.footerRank?.map((rank) => {
            return (
              <div key={rank.rank} className="flex gap-2 items-center m-1">
                <p className="mr-4 w-12">{rank.rank}위</p>
                <Image
                  src={`/test/mungbti/${rank.img}`}
                  alt={rank.title}
                  width={100}
                  height={100}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                    width: "20%",
                    height: "5rem",
                    marginRight: "1rem",
                  }}
                ></Image>
                <div className="flex flex-col justify-center w-full ">
                  <p className="text-center">{rank.title}</p>
                  <p className="text-center">{rank.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default TestHome;
