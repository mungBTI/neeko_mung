import { FinalPageProps, TestResult } from "@/interface/questionInterface";
import { calculate } from "@/utils/test/main";
import Link from "next/link";
import { useEffect, useState } from "react";

const FinalPage: React.FC<FinalPageProps> = ({ answers, type, setPageNum }) => {
  const [result, setResult] = useState<TestResult>({});

  useEffect(() => {
    const resultObj = calculate(answers, type);
    setResult(resultObj);
  }, [answers]);

  return (
    <div className="bg-cottonBlue w-full flex flex-col items-center p-4 justify-around h-full">
      <p className="text-lg font-bold m-2 text-center">{result?.title}</p>

      <button onClick={() => setPageNum(0)}>다시하기</button>
      <Link href="/">
        <button>홈으로</button>
      </Link>
    </div>
  );
};
export default FinalPage;
