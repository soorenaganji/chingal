import { isEnglish } from "@/funcs/funcs";
import Form from "../modules/Form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../layout/Header";
import axios from 'axios'
import User from "../modules/User";
const Home = ({ data, setDarkMode }) => {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searched, setSearched] = useState("");
  const formOpener = () => {
    setIsFormOpen(true);
  };
  const searchedUsers = [];
  data.map((user) => {
    if (isEnglish(user.name)) {
      if (user.name.toLowerCase().includes(searched)) {
        searchedUsers.push(user);
      } else {
        return;
      }
    } else if (user.name.includes(searched)) {
      searchedUsers.push(user);
    } else {
      return;
    }
  });
  const postData = async (newUserData , setNewUserData) => {
    const res = await axios.post(
      `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users`,
      newUserData
    );
    setNewUserData({
      name: "",
      avatar: "",
      phoneNumber: "",
      email: "",
      country: "",
      city: "",
      street: "",
      zipcode: "",
      dateOfBirth: "",
    });
    setIsFormOpen(false);
  };
  const cancel = (setNewUserData) => {
    setNewUserData({
      name: "",
      avatar : "",
      phoneNumber: "",
      country: "",
      city: "",
      email: "",
      street: "",
      zipcode: "",
      dateOfBirth: "",
    });
    setIsFormOpen(false);
  };
  return (
    <>
      {isFormOpen && (
        <Form
          formOpener={setIsFormOpen}
          data={null}
          postData={postData}
          cancelOrDelete={cancel}
        />
      )}
      <div
        className={`w-full h-full ${isFormOpen && "blur-lg"} dark:text-white `}
      >
        <Header
          setSearched={setSearched}
          setDarkMode={setDarkMode}
          searched={searched}
          isInHome={true}
        />

        <div className="w-screen  p-16 ">
          <div className="w-full h-[56px] flex items-center justify-between ">
            <div className="flex items-center justify-center gap-3">
              <IoIosArrowBack className="text-4xl" />
              <p>لیست کاربران</p>
            </div>
            <button
              className="w-24 h-12 bg-[#0559FD] text-white rounded-xl hover:shadow-xl hover:shadow-[#0558fd8d] transition-all duration-300 "
              onClick={formOpener}
            >
              کاربر جدید
            </button>
          </div>
          <div className="w-full rounded-xl  mt-16 border dark:border-slate-700 overflow-hidden ">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className=" rounded-tr-xl text-center bg-[#0559FD] text-white ">
                    نام کاربر
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700 ">
                    سن
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700 ">
                    شماره تلفن
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700 ">
                    ایمیل
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700 ">
                    آدرس
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700 ">
                    شرکت
                  </th>
                </tr>
              </thead>
              <tbody className="text-center ">
                {searchedUsers.length ? (
                  searchedUsers.map((user, index) => (
                    <User user={user} index={index} key={user.id} />
                  ))
                ) : (
                  <p className="text-center py-4 mx-auto">
                    چیزی برای نشان دادن نیست :)
                  </p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
