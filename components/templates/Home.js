// COMPONENTS
import Form from "../modules/Form";
import Header from "../layout/Header";
import User from "../modules/User";
// HOOKS
import { useState } from "react";
// PACKAGES
import axios from 'axios'
// ICONS
import { IoIosArrowBack } from "react-icons/io";
// HELPER FUNCTIONS
import { filterBySearchedPhrase, resetFormData } from "@/helper/helper";
const Home = ({ data, setDarkMode }) => {
  // STATES
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchedPhrase, setSearchedPhrase] = useState("");
  const formOpener = () => {
    setIsFormOpen(true);
  };
  const searchedUsers = filterBySearchedPhrase(data , searchedPhrase)
  const listUsersInTable = () => {
   return searchedUsers.length ? (
      searchedUsers.map((user, index) => (
        <User user={user} index={index} key={user.id} />
      ))
    ) : (
      <p className="text-center py-4 mx-auto">
        چیزی برای نشان دادن نیست
      </p>
    )
  }
  // FORM MODAL FUNCTIONS
  const postData = async (newUserData , setNewUserData) => {
    const res = await axios.post(
      `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users`,
      newUserData
    );
    resetFormData(setNewUserData)
    setIsFormOpen(false);
  };
  const cancel = (setNewUserData) => {
    resetFormData(setNewUserData)
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
        className={`w-full h-full ${isFormOpen && "blur-lg"} dark:text-white overflow-hidden `}
      >
        <Header
          setSearchedPhrase={setSearchedPhrase}
          setDarkMode={setDarkMode}
          searchedPhrase={searchedPhrase}
          isInHome={true}
        />

        <div className="overflow-hidden  pt-[50px] px-[48px]  ">
          <div className="w-full h-[56px] flex items-center justify-between ">
            <div className="flex items-center justify-center gap-3">
              <IoIosArrowBack className="text-4xl" />
              <p>لیست کاربران</p>
            </div>
            <button
              className="w-[128px] h-[56px] bg-[#0559FD] text-white rounded-2xl hover:shadow-xl hover:shadow-[#0558fd8d] transition-all duration-300 text-lg "
              onClick={formOpener}
            >
              کاربر جدید
            </button>
          </div>
          <div className=" rounded-xl  mt-8 border dark:border-slate-700  max-h-[64vh] overflow-x-hidden">
            <table className="w-full overflow-scroll">
              <thead>
                <tr className="">
                  <th className=" rounded-tr-xl text-center bg-[#0559FD] text-white  font-normal  ">
                    نام کاربر
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700  text-slate-800 dark:text-slate-300  font-normal  ">
                    سن
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700  text-slate-800 dark:text-slate-300  font-normal  ">
                    شماره تلفن
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700  text-slate-800 dark:text-slate-300  font-normal  ">
                    ایمیل
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700  text-slate-800 dark:text-slate-300  font-normal  ">
                    آدرس
                  </th>
                  <th className="border rounded-xl text-center dark:border-slate-700  text-slate-800 dark:text-slate-300  font-normal ">
                    شرکت
                  </th>
                </tr>
              </thead>
              <tbody className="text-center ">
                {listUsersInTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
