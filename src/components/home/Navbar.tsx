import { navList } from "@/contents/siteInformation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex mt-4 gap-4">
      {navList.map((navElement) => {
        return (
          <Link
            href={{
              pathname: "/",
              query: { type: navElement.query },
            }}
            key={navElement.key}
          >
            <div className="flex flex-col items-center group">
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
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
