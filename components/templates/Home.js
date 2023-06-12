import { useState, useEffect } from "react";

import Form from "../modules/Form";
import Header from "../layout/Header";
import UsersTable from "../modules/UsersTable";
import { createUser, getAllUsers } from "@/api/api";

import { filterBySearchedPhrase, resetFormData } from "@/helper/helper";

import { IoIosArrowBack } from "react-icons/io";

const Home = () => {
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchedPhrase, setSearchedPhrase] = useState("");
  const [usersData, setUsersData] = useState([]);
  
  const searchedUsers = filterBySearchedPhrase(usersData, searchedPhrase);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getAllUsers();
    setUsersData(data);
  };
  const createUserAndReinitializeForm = (newUserData, setNewUserData) => {
    createUser(newUserData)
      .then(resetFormData(setNewUserData))
      .then(setIsFormOpen(false))
      .then(setTimeout(getData , 500))
  };

  const formOpener = () => {
    setIsFormOpen(true);
  };
  const cancel = (setNewUserData) => {
    resetFormData(setNewUserData);
    setIsFormOpen(false);
  };

  const initialFormData = {
    name: "",
    dateOfBirth: "",
    avatar: "",
    phoneNumber: "",
    country: "",
    city: "",
    street: "",
    email: "",
    zipcode: "",
    company: "",
  };

  return (
    <div className="w-full h-full min-h-[100vh] dark:text-white">
      {isFormOpen && (
        <Form
          className="absolute"
          formOpener={setIsFormOpen}
          data={initialFormData}
          postData={createUserAndReinitializeForm}
          cancelOrDelete={cancel}
        />
      )}
      <div className={` ${isFormOpen && "blur-lg h-[900px]"} `}>
        <Header
          setSearchedPhrase={setSearchedPhrase}
          searchedPhrase={searchedPhrase}
          isInHome={true}
        />

        <div className="  pt-[50px] px-[48px]  ">
          <div className="w-full h-[56px] flex items-center justify-between ">
            <div className="flex items-center justify-center gap-3">
              <IoIosArrowBack className="text-4xl" />
              <p>لیست کاربران</p>
            </div>
            <button
              className="w-[128px] h-[56px] bg-[#0559FD] text-white rounded-2xl hover:shadow-xl hover:shadow-[#0558fd8d] transition-all duration-300 text-lg "
              onClick={formOpener}>
              کاربر جدید
            </button>
          </div>
          <div className=" rounded-xl  mt-8 border dark:border-slate-700  max-h-[64vh] overflow-x-hidden ">
            <UsersTable searchedUsers={searchedUsers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
