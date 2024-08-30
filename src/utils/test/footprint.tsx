import { testResult } from "@/contents/testList";

export const setFootprint = (answers: string[]) => {
  const resultList = testResult.filter(
    (result) => result.testKey === "footprintTest"
  );
  const result = resultList[0].result.filter(
    (result) => result.key === answers[0]
  );

  return result[0];
};
