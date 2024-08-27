import { navList, siteTitle } from "@/contents/siteInformation";
import Image from "next/image";
import HomeMainBox from "../components/HomeMainBox";
import Navbar from "../components/home/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="mt-12 flex flex-col items-center h-full">
        <Link href="/">
          <div className="text-3xl font-bold text-customBlue w-fit bold">
            {siteTitle}
          </div>
        </Link>
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
        <Navbar></Navbar>
        <HomeMainBox></HomeMainBox>
      </div>
    </main>
  );
}
