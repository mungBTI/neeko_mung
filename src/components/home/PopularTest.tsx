import { testList } from "@/contents/testList";
import { PopularTestProps } from "@/interface/questionInterface";
import Image from "next/image";
import Link from "next/link";

const PopularTest: React.FC<PopularTestProps> = ({ pageType }) => {
  const testPack =
    pageType === "home"
      ? testList.sort((a, b) => b.liked - a.liked).slice(0, 3)
      : testList;
  return (
    <div className="flex flex-col">
      <p className="text-lg sm:text-xl p-2">인기 테스트</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {testPack.map((test) => {
          return (
            <Link href={test.path} key={test.key}>
              <div className="rounded-lg overflow-hidden border-2 border-[#90E0EF] m-1 h-[200px] w-full sm:w-[200px] md:w-[240px]">
                <div className="w-full h-[120px] overflow-hidden flex items-center justify-center">
                  <Image
                    src={`/images/test/${test.img}`}
                    alt={test.title}
                    width={240}
                    height={120}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <h2 className="font-bold p-2 pb-0 mb-1 text-base sm:text-lg">
                  {test.title}
                </h2>
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
