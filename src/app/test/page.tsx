"use client";
import React, { use, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TestHome from "../../components/testPage/TestHome";
import Link from "next/link";
import QuestionPage from "../../components/testPage/questionPage";
import { testList } from "@/contents/testList";
import { TestContent } from "@/interface/questionInterface";
import FinalPage from "../../components/testPage/finalPage";

const TestForm = () => {
  const params = useSearchParams();
  const testType = params.get("title") || "defaultTestType";
  const [answers, setAnswers] = useState<string[]>([]);

  const [pageNum, setPageNum] = useState(0);
  const testContent: TestContent | undefined = testList.find(
    (test) => test.key === testType
  );

  if (!testContent) {
    return <div>테스트 내용을 찾을 수 없습니다.</div>;
  }

  const testQContent = testContent.questionContent;
  const testLength = testQContent.length;

  let questionContent = testQContent[pageNum - 1];

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-[450px] h-full">
      <Link href="/">
        <header className="text-3xl font-bold text-customBlue w-fit bold py-5 h-16">
          에브리 멍멍
        </header>
      </Link>
      {pageNum === 0 && (
        <TestHome
          testType={testType}
          testContent={testContent}
          pageNum={pageNum}
          setPageNum={setPageNum}
          setAnswers={setAnswers}
        />
      )}
      {pageNum >= 1 && pageNum < testLength + 1 && (
        <QuestionPage
          testLength={testLength}
          pageNum={pageNum}
          questionContent={questionContent}
          setPageNum={setPageNum}
          setAnswers={setAnswers}
        ></QuestionPage>
      )}

      {pageNum === testLength + 1 && (
        <FinalPage answers={answers} setAnswers={setAnswers} type={testType} />
      )}
    </div>
  );
};
export default TestForm;
