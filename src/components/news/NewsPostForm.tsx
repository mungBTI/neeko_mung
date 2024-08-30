"use client";
import { newsList } from "@/contents/newsList";
import { NewsPostFormProps } from "@/interface/questionInterface";
import { useEffect, useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";

const NewsPostForm: React.FC<NewsPostFormProps> = ({ newsId }) => {
  let newsContent = newsList.find((news) => news.key === newsId);

  const parseDate = (dateString: string | undefined) => {
    if (!dateString) return new Date(); // 기본값으로 현재 날짜 반환
    const [year, month, day] = dateString.split(".").map(Number);
    return new Date(year + 2000, month - 1, day); // 2000을 더해 4자리 연도로 변환
  };
  const [startDate, setStartDate] = useState<Date>(
    parseDate(newsContent?.startDate)
  );
  const [endDate, setEndDate] = useState<Date>(parseDate(newsContent?.endDate));

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      if (startDate && endDate && date >= startDate && date <= endDate) {
        return "highlight";
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col lg:flex-row gap-10 m-4 lg:m-8 w-full">
        <section className="border border-[#0077b6] p-4 rounded-lg flex flex-col justify-center items-center w-full lg:w-1/2">
          <div className="w-full h-[300px] lg:w-[300px] lg:h-[400px] overflow-hidden relative rounded-l">
            <Image
              src={`/images/news/${newsContent?.img}`}
              alt=""
              width={400}
              height={500}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="rounded-lg"
            />
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <Calendar
              value={startDate}
              locale="ko"
              tileClassName={tileClassName}
              defaultView="month"
              prev2Label={null} // 이전 해 버튼 숨김
              next2Label={null} // 다음 해 버튼 숨김
              prevLabel={null} // 이전 달 버튼 숨김
              nextLabel={null} // 다음 달 버튼 숨김
            />
          </div>
        </section>
        <section className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col p-4 pt-0">
            <p className="text-xl my-2.5">{newsContent?.title}</p>
            <table className="w-full">
              <tbody>
                <tr className="news-table-tr">
                  <td className="title">장소</td>
                  <td>{newsContent?.location}</td>
                </tr>
                <tr className="news-table-tr">
                  <td className="title">위치</td>
                  <td>{newsContent?.position}</td>
                </tr>
                <tr className="news-table-tr">
                  <td className="title">일정</td>
                  <td>
                    {newsContent?.startDate} ~ {newsContent?.endDate}
                  </td>
                </tr>
                <tr className="news-table-tr">
                  <td className="title">운영 시간</td>
                  <td> {newsContent?.time}</td>
                </tr>
                <tr className="news-table-tr">
                  <td className="title">상세</td>
                  <td> {newsContent?.desc}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex gap-4 flex-col w-full justify-center items-center my-5">
              <button className="w-full bg-[#0077B6] p-2 px-4 rounded-xl text-white hover:bg-[#005f8a] hover:text-gray-200 active:bg-[#004a6e] active:text-gray-300 focus:bg-[#006494] focus:text-gray-100">
                행사 신청하러 가기
              </button>
              <button className="w-full bg-[#0077B6] p-2 px-4 rounded-xl text-white hover:bg-[#005f8a] hover:text-gray-200 active:bg-[#004a6e] active:text-gray-300 focus:bg-[#006494] focus:text-gray-100">
                행사 상세 홈페이지 바로 가기
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default NewsPostForm;
