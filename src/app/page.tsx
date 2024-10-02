import { navList, siteTitle } from "@/contents/siteInformation";
import Image from "next/image";
import HomeMainBox from "../components/HomeMainBox";
import Navbar from "../components/home/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="mt-12 flex flex-col items-center h-full px-4 sm:px-0 w-full">
        <Link href="/">
          <div className="text-2xl sm:text-3xl font-bold text-customBlue w-fit">
            {siteTitle}
          </div>
        </Link>
        <div className="flex justify-center items-center border-2 border-customBlue rounded-full w-full sm:w-120 h-10 p-1 mt-4">
          <input
            type="search"
            placeholder="강아지 입양..."
            className="text-base sm:text-lg w-full sm:w-100 border-none outline-none"
          />
          <Image
            src={"/icons/glasses.svg"}
            width={24}
            height={24}
            alt="glasses"
          />
        </div>
        {/* <Navbar /> */}
        <HomeMainBox />
      </div>
    </main>
  );
}
