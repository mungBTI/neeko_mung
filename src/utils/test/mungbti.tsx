export const calculateMbti = (answers: string[]): string => {
  const counts: { [key: string]: number } = {
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    F: 0,
    T: 0,
    P: 0,
    J: 0,
  };

  answers.forEach((answer) => {
    if (counts.hasOwnProperty(answer)) {
      counts[answer]++;
    }
  });

  const mbti = `${counts.E > counts.I ? "E" : "I"}${
    counts.N > counts.S ? "N" : "S"
  }${counts.F > counts.T ? "F" : "T"}${counts.J > counts.P ? "J" : "P"}`;

  return mbti;
};
