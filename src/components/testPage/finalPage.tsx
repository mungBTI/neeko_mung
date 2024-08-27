import { FinalPageProps } from "@/interface/questionInterface";
import { calculate } from "@/utils/test/mungbti";
import Link from "next/link";
import { useEffect, useState } from "react";

const FinalPage: React.FC<FinalPageProps> = ({ answers, setAnswers, type }) => {
  const [result, setResult] = useState<string>("");
  useEffect(() => {
    setResult(calculate(answers, type));
  }, [answers]);

  return (
    <div>
      <h1>{result}</h1>
      <Link href={"/"}>
        <button>다시하기</button>
      </Link>
    </div>
  );
};
export default FinalPage;
