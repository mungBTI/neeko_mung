import { navList, siteTitle } from "@/contents/siteInformation";
import Image from "next/image";
import HomeMainBox from "./components/HomeMainBox";

export default function Home() {
  return (
    <main>
      <div className="mt-12 flex flex-col items-center">
        <div className="text-3xl font-bold text-customBlue w-fit bold">
          {siteTitle}
        </div>
        <div className="flex justify-center items-center border-2 border-customBlue rounded-full w-120 h-10 p-1 content-center mt-4">
          <input
            type="search"
            placeholder="강아지 입양..."
            className="text-lg w-100 border-none outline-none"
          />
          <Image
            src={"/icons/glasses.svg"}
            width={24}
            height={24}
            alt="glasses"
          ></Image>
        </div>
        <nav className="flex mt-4 gap-4">
          {navList.map((navElement) => {
            return (
              <div
                key={navElement.key}
                className="flex flex-col items-center group"
              >
                <button className="border border-gray-200 shadow-md p-1 rounded-lg mb-1 group-hover:shadow-lg group-hover:border-gray-300">
                  <Image
                    src={`/icons/${navElement.icon}`}
                    alt={navElement.name}
                    width={30}
                    height={30}
                  />
                </button>
                <label className="relative text-sm group-hover:bold group-hover:text-customBlue">
                  {navElement.name}
                  <Image
                    src="/icons/footprint.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                    className="absolute right-[17px] bottom-[4px] z-[-1] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-300"
                  />
                </label>
              </div>
            );
          })}
        </nav>
        <HomeMainBox></HomeMainBox>
      </div>
    </main>
  );
}
