export interface QuestionPageProps {
  testLength: number;
  pageNum: number;
  questionContent: questionContent;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface AnserProps {
  type: string;
  text: string;
}
export interface questionContent {
  questionId: string;
  title: string;
  questionList: AnserProps[];
}
export interface FooterRank {
  rank: number;
  img: string;
  title: string;
  desc: string;
}
export interface TestContent {
  liked: number;
  key: string;
  title: string;
  img: string;
  desc: string;
  path: string;
  footerTitle: string;
  questionContent: questionContent[];
  footerRank: FooterRank[];
}
export interface TestHomeProps {
  testType: string;
  testContent: TestContent;
  pageNum: number;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface FinalPageProps {
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  type: string;
}
export interface PopularTestProps {
  pageType: string;
}
export interface PostListPageProps {
  pageType: string;
}
