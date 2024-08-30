"use client";
import { QuestionPageProps } from "@/interface/questionInterface";
import Image from "next/image";
import { useEffect, useState } from "react";

import { IoArrowBack } from "react-icons/io5";

const QuestionPage: React.FC<QuestionPageProps> = ({
  testLength,
  pageNum,
  questionContent,
  setPageNum,
  setAnswers,
}) => {
  const icons = [];
  //진행도를 나타내는 발자국
  for (let i = 0; i < testLength; i++) {
    const iconSrc =
      i < pageNum ? "/icons/footprint_blue.svg" : "/icons/footprint_gray.svg";
    icons.push(
      <Image key={i} src={iconSrc} alt="progress icon" width={20} height={20} />
    );
  }

  //뒤로가기 함수
  const backPage = () => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers.pop();
      return newAnswers;
    });
    setPageNum((prev) => prev - 1);
  };

  //답안 고르는 함수
  const selectAnswer = (selectedAnswer: string) => {
    setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    setPageNum((prev) => prev + 1);
  };

  //pageNum이 바뀔때마다 pageNum-1을 인덱스로 questionContent의 img를 가지고 옴
  const [imgSrc, setImgSrc] = useState<string>("");
  useEffect(() => {}, [pageNum]);

  return (
    <div className="bg-cottonBlue w-full flex flex-col items-center p-4 justify-around h-full">
      <div className="flex gap-1 justify-center w-full h-8">{icons}</div>
      <p className="text-lg font-bold m-2 text-center">
        {questionContent.title}
      </p>
      <Image
        src={`/test/${questionContent.img}`}
        alt={questionContent.title}
        width={300}
        height={200}
        className="max-w-full h-auto"
      />
      <div className="flex flex-col gap-2 my-5 w-full items-center">
        {questionContent.questionList.map((answer) => {
          return (
            <button
              key={answer.type}
              className="bg-white text-[#0077B6] py-2 px-4 text-center rounded-full my-1 w-11/12 max-w-md hover:bg-[#0077B6] hover:text-white active:bg-[#0077B6] active:text-white focus:bg-[#0077B6] focus:text-white"
              onClick={() => selectAnswer(answer.type)}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
      <div className="flex content-center items-center gap-5 flex-col">
        <button onClick={() => backPage()}>
          <IoArrowBack size={20} />
        </button>
        <button onClick={() => setPageNum((prev) => 0)}>
          <Image
            src={"/icons/home.svg"}
            alt={"홈으로"}
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
};
export default QuestionPage;
