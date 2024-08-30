import { setFootprint } from "./footprint";
import { calculateMbti } from "./mungbti";

export interface TestResult {
  [key: string]: any;
}

export const calculate = (answers: string[], type: string): TestResult => {
  let result: TestResult = {};

  if (type === "mungbti") {
    // result = calculateMbti(answers);
  } else if (type === "footprintTest") {
    result = setFootprint(answers);
  }
  return result;
};
