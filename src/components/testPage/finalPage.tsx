import { FinalPageProps, TestResult } from "@/interface/questionInterface";
import { calculate } from "@/utils/test/main";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FinalPage: React.FC<FinalPageProps> = ({ answers, type, setPageNum }) => {
  const [result, setResult] = useState<TestResult>({});

  useEffect(() => {
    const resultObj = calculate(answers, type);
    setResult(resultObj);
    console.log(resultObj);
  }, [answers]);

  return (
    <div className="bg-cottonBlue w-full flex flex-col items-center p-4 justify-around h-full">
      <p className="text-lg font-bold m-2 text-center">{result?.title}</p>
      <Image
        src={`/test/${result?.img}`}
        alt={result?.title}
        width={300}
        height={200}
        className="max-w-full h-auto"
      />
      <button
        className="bg-[#0077B6] text-white py-2 px-4 text-xl my-6 mx-auto text-center rounded-full"
        onClick={() => setPageNum(0)}
      >
        다시하기
      </button>
      <Link href="/">
        <button>홈으로</button>
      </Link>
    </div>
  );
};
export default FinalPage;
