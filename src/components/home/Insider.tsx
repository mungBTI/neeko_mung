"use client";
import { newsList } from "@/contents/newsList";
import Image from "next/image";
import Link from "next/link";

const Insider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
      {newsList.map((news) => {
        const currentDate = new Date();
        const [year, month, day] = news.endDate.split(".").map(Number);
        const formattedEndDate = new Date(2000 + year, month - 1, day);

        // news.endDate와 현재 날짜 비교
        const isExpired = currentDate > formattedEndDate;
        return (
          <Link
            key={news.key}
            href={{
              pathname: "/news",
              query: { newsId: news.key },
            }}
            className="relative"
          >
            <article className="rounded-lg overflow-hidden m-1 h-[450px] w-full md:w-[240px] p-2">
              <div className="w-full md:w-[240px] h-[280px] overflow-hidden flex items-center justify-center">
                <Image
                  src={`/images/news/${news.img}`}
                  alt={news.title}
                  width={240}
                  height={120}
                  objectFit="cover"
                />
              </div>
              <p className="text-[1.4rem] font-extrabold my-2">{news.title}</p>
              <p>
                일시 : {news.startDate}-{news.endDate}
              </p>
              <p className="my-1">주최 : {news.from}</p>
              <p>{news.desc}</p>
              {isExpired && (
                <div className="rounded-lg absolute inset-0 bg-gray-500 opacity-50 flex items-center justify-center text-white">
                  종료됨
                </div>
              )}
            </article>
          </Link>
        );
      })}
    </div>
  );
};
export default Insider;
