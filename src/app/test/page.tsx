"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const TestForm = () => {
  const params = useSearchParams();

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[450px]">
      <header className="text-3xl font-bold text-customBlue w-fit bold pt-5 pb-5">
        에브리 멍멍
      </header>
      <div className="bg-cottonBlue w-full flex flex-col items-center p-4">
        <Image src={""} alt={""}></Image>
        <button>테스트 시작하기</button>
        <span>참여자 수</span>
        <div>테스트 공유하기</div>
        <div>
          <p>가장 많은 강아지 유형</p>
        </div>
      </div>
      <p>현재 테스트 타입: {params}</p>
    </div>
  );
};
export default TestForm;
