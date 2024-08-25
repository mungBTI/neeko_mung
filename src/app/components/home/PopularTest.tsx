import { testList } from "@/contents/testList";
import Image from "next/image";
import Link from "next/link";

const PopularTest = () => {
  const topTest = testList.slice(0, 3);
  return (
    <div className="flex flex-col">
      <p className="text-xl p-2">인기 테스트</p>
      <div className="flex">
        {topTest.map((test) => {
          return (
            <Link href={test.path} key={test.key}>
              <div className="rounded-lg overflow-hidden border-2 border-[#90E0EF] m-1 h-[200px] w-[240px]">
                <div className="w-[240px] h-[120px] overflow-hidden flex items-center justify-center">
                  <Image
                    src={`/images/test/${test.img}`}
                    alt={test.title}
                    width={240}
                    height={120}
                    objectFit="cover"
                  />
                </div>
                <h2 className="bold p-2 pb-0 mb-1">{test.title}</h2>
                <p className="p-2 pt-0 text-sm">{test.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default PopularTest;
