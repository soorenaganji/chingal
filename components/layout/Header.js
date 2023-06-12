import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

import SearchBar from "../base/SearchBar";

import logo from "@/public/chingal-logo 1.png";

import { TbMoonFilled } from "react-icons/tb";
import { FiSun } from "react-icons/fi";

import AppContext from "@/context/AppContext";
const Header = ({ searchedPhrase, setSearchedPhrase, isInHome }) => {
  // EVENT HANDLERS
  const searchHandler = (e) => {
    const phrase = e.target.value;
    setSearchedPhrase(phrase);
  };
  const context = useContext(AppContext);
  const switchToLightMode = () => {
    context.setDarkMode(false);
  };
  const switchToDarkMode = () => {
    context.setDarkMode(true);
  };
  return (
    <>
      <div className="w-full px-12 flex items-center justify-between h-[128px] py-6 border-b-2 dark:border-slate-700 bg-[#FBFDFE] dark:bg-[#020B1F] overflow-hidden ">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>

        <div className="flex items-center justify-center gap-8 flex-row-reverse overflow-hidden ">
          <div className="flex items-center justify-between bg-gradient-to-tr dark:from-[#020B1F] dark:to-[#0C132C] dark:border-slate-900 from-[#FBFDFE] to-[#DCE9FC] via-[#F3F8FC] border-[1px] rounded-2xl w-[104px] h-[56px] p-1 gap-1 ">
            <button
              className=" flex items-center justify-center rounded-xl w-10 h-10  bg-[#0559FD] dark:bg-transparent shadow-lg  dark:shadow-none  shadow-[#0558fd96] "
              onClick={switchToLightMode}>
              <FiSun className="text-2xl text-white dark:text-slate-500 " />
            </button>

            <button
              className=" flex items-center justify-center rounded-xl w-10 h-10 dark:bg-[#0559fd] dark:shadow-lg dark:shadow-[#0558fd96]  "
              onClick={switchToDarkMode}>
              <TbMoonFilled className="text-2xl text-slate-700 dark:text-white " />
            </button>
          </div>

          <div
            className={`flex items-center justify-center flex-row-reverse ${
              isInHome ? "" : "hidden"
            }  `}>
            <SearchBar
              searchHandler={searchHandler}
              searchedPhrase={searchedPhrase}
            />

            <div className="relative right-[40px] z-30">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.5 20.6687C4.85 20.6687 0.25 16.0687 0.25 10.4187C0.25 4.7687 4.85 0.168701 10.5 0.168701C16.15 0.168701 20.75 4.7687 20.75 10.4187C20.75 16.0687 16.15 20.6687 10.5 20.6687ZM10.5 1.6687C5.67 1.6687 1.75 5.5987 1.75 10.4187C1.75 15.2387 5.67 19.1687 10.5 19.1687C15.33 19.1687 19.25 15.2387 19.25 10.4187C19.25 5.5987 15.33 1.6687 10.5 1.6687Z"
                  fill="#7E848E"
                />
                <path
                  d="M21 21.6687C20.81 21.6687 20.62 21.5987 20.47 21.4487L18.47 19.4487C18.18 19.1587 18.18 18.6787 18.47 18.3887C18.76 18.0987 19.24 18.0987 19.53 18.3887L21.53 20.3887C21.82 20.6787 21.82 21.1587 21.53 21.4487C21.38 21.5987 21.19 21.6687 21 21.6687Z"
                  fill="#7E848E"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
