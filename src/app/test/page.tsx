"use client";
import React, { use, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TestHome from "../components/testPage/TestHome";
import Link from "next/link";

const TestForm = () => {
  const params = useSearchParams();
  const testType = params.get("title") || "defaultTestType";

  const [pageNum, setPageNum] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[450px] h-full">
      <Link href="/">
        <header className="text-3xl font-bold text-customBlue w-fit bold pt-5 pb-5">
          에브리 멍멍
        </header>
      </Link>
      <TestHome testType={testType} pageNum={pageNum} setPageNum={setPageNum} />
    </div>
  );
};
export default TestForm;
