import { TbSunLow, TbMoonFilled } from "react-icons/tb";
import logo from "@/public/chingal-logo 1.png";
import Image from "next/image";
import Link from "next/link";
import { HiMagnifyingGlass } from 'react-icons/hi'
const Header = ({ searched, setSearched, setDarkMode , isInHome }) => {
  const searcher = (e) => {
    const phrase = e.target.value.toLowerCase();
    setSearched(phrase);
    console.log("searched phrase");
  };
  return (
    <div>
      <div className="w-full px-16 flex items-center justify-between h-[110px] py-6 border-b-2 dark:border-slate-700 bg-[#FBFDFE] dark:bg-[#020B1F] ">
        <Link href={"/"} >
          <Image src={logo} alt="logo" />
        </Link>
        <div className="flex items-center justify-center gap-8 flex-row-reverse ">
          <div className="flex items-center justify-between bg-gradient-to-tr dark:from-[#020B1F] dark:to-[#0C132C] dark:border-slate-700 from-[#FBFDFE] to-[#DCE9FC] via-[#F3F8FC] border-[1px] rounded-xl w-[104px] h-[56px] p-1 gap-1 ">
            <button
              className=" flex items-center justify-center rounded-lg w-10 h-10  bg-[#0559FD] dark:bg-transparent shadow-lg  dark:shadow-none  shadow-[#0558fd96] "
              onClick={() => {
                setDarkMode(false)
                localStorage.setItem("isDarkMode" , "false")
              } }
            >
              <TbSunLow className="text-2xl text-white " />
            </button>
            <button
              className=" flex items-center justify-center rounded-lg w-10 h-10 dark:bg-[#0559fd] dark:shadow-lg dark:shadow-[#0558fd96]  "
              onClick={() => {
                setDarkMode(true)
                localStorage.setItem("isDarkMode" , "true")
              } }
            >
              <TbMoonFilled className="text-2xl text-black dark:text-white " />
            </button>
          </div>
          <input
            type="search"
            className={`w-[512px] h-[56px] rounded-xl bg-gradient-to-tr  from-[#FBFDFE] to-[#DCE9FC] via-[#F3F8FC] p-4 outline-none border dark:from-[#020B1F] dark:to-[#0C132C] dark:border-slate-700 ${isInHome ? "" : "hidden"} `}
            placeholder={` جستجو کنید `}
            value={searched}
            onChange={searcher}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
