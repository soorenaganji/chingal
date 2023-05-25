
import { useState } from "react";
import BaseInput from "../base/BaseInput";

import { ageToDate, calculateAge, validteAvatarExists } from "@/helper/helper";

import { SlUserFollow } from "react-icons/sl";
import { MdClose } from "react-icons/md";
const Form = ({
  formOpener,
  data,
  postData,
  cancelOrDelete,
  isOnEdit,
  className,
}) => {

  const [avatar, setAvatar] = useState(data.avatar);
  const [newUserData, setNewUserData] = useState(data);
  const [userAge, setUserAge] = useState(calculateAge(newUserData.dateOfBirth));

  const imageHandler = ({ target: { files } }) => {
    files && setAvatar(URL.createObjectURL(files[0]));
    files && setNewUserData({ ...newUserData, avatar: files[0] });
  };
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setNewUserData({ ...newUserData, [e.target.name]: value });
  };
  const DOBChangeHandler = ({ target: { value } }) => {
    setUserAge(value);
    setNewUserData({ ...newUserData, dateOfBirth: ageToDate(value) });
  };

  return (
    <div className={className + " w-full z-20 dark:text-white h-full"}>
      <div className="  w-[540px] h-[860px] bg-[#FBFDFE] dark:bg-[#020B1F] mx-auto mt-8 rounded-3xl  p-8  border border-[#DCE9FC] dark:border-[#182040] shadow-lg mb-16 dark:shadow-[#182040]  ">
        <div className=" w-full h-16  text-xl border-b flex items-center justify-start border-slate-300 ">
          {!isOnEdit && (
            <button
              className="ml-6 outline-none text-4xl text-slate-800 dark:text-slate-300 "
              onClick={() => formOpener(false)}>
              <MdClose className="" />
            </button>
          )}
          <h3> {isOnEdit ? `ویرایش کاربر` : "کاربر جدید"}</h3>
        </div>
        <div>
          <div>
            <div className="mt-8 flex justify-center items-center w-32 h-32 mx-auto rounded-full border-2 border-[#0559FD] ">
              <div className=" text-center w-full h-full ">
                <div
                  className="flex w-full h-full text-gray-600"
                  onClick={() =>
                    document.querySelector(".input-image").click()
                  }>
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md w-full h-full">
                    {validteAvatarExists(avatar) ? (
                      <img
                        src={avatar}
                        className="w-full h-full rounded-full"
                      />
                    ) : (
                      <SlUserFollow className=" text-[#022467] dark:text-[#ABC8FD] text-center w-full h-full p-6 " />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      className="input-image hidden"
                      onChange={imageHandler}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col gap-6 p-4 ">
            <div className="gap-[24px] flex items-center justify-between  ">
              <div className="">
                <BaseInput
                  name={"name"}
                  placeholder={" نام کاربر را وارد نمایید"}
                  value={newUserData.name}
                  eventHandler={inputChangeHandler}
                  label={" نام"}
                />
              </div>
              <div className="">
                <BaseInput
                  name={"age"}
                  placeholder={" سن کاربر را وارد نمایید"}
                  value={userAge}
                  eventHandler={DOBChangeHandler}
                  label={" سن"}
                  type={"number"}
                />
              </div>{" "}
            </div>
            <div className="gap-[24px] flex items-center justify-between  ">
              <div>
                <BaseInput
                  name={"email"}
                  placeholder={"ایمیل کاربر را وارد نمایید"}
                  value={newUserData.email}
                  eventHandler={inputChangeHandler}
                  label={"ایمیل"}
                  type={"email"}
                />
              </div>
              <div>
                <BaseInput
                  name={"phoneNumber"}
                  placeholder={"شماره تلفن کاربرتلفن را وارد نمایید"}
                  value={newUserData.phoneNumber}
                  eventHandler={inputChangeHandler}
                  label={"شماره تلفن"}
                />
              </div>{" "}
            </div>
            <div className="gap-6 flex items-center justify-between  ">
              <div>
                <BaseInput
                  name={"country"}
                  placeholder={"کشور"}
                  value={newUserData.country}
                  eventHandler={inputChangeHandler}
                  label={"کشور"}
                />
              </div>
              <div>
                <BaseInput
                  name={"city"}
                  placeholder={"شهر"}
                  value={newUserData.city}
                  eventHandler={inputChangeHandler}
                  label={"شهر"}
                />
              </div>
              <div>
                <BaseInput
                  name={"street"}
                  placeholder={"خیابان"}
                  value={newUserData.street}
                  eventHandler={inputChangeHandler}
                  label={"خیابان"}
                />
              </div>{" "}
              <div>
                <BaseInput
                  name={"zipcode"}
                  placeholder={"کدپستی"}
                  value={newUserData.zipcode}
                  eventHandler={inputChangeHandler}
                  label={"کدپستی"}
                />
              </div>{" "}
            </div>
            <div className="w-full flex items-center justify-between  ">
              <div className="w-full">
                <BaseInput
                  name={"company"}
                  placeholder={"شرکت کاربر را وارد نمایید"}
                  value={newUserData.company}
                  eventHandler={inputChangeHandler}
                  label={"شرکت"}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between mt-8 gap-6 flex-row-reverse ">
              <button
                className="w-full h-14 text-lg rounded-lg bg-[#0559FD] text-white shadow-lg shadow-[#0558fd80]"
                onClick={() => postData(newUserData,setNewUserData)}>
                تایید
              </button>
              <button
                className={
                  isOnEdit
                    ? "w-full h-14 text-lg rounded-lg bg-[#FF3231] shadow-lg text-white "
                    : "w-full h-14 text-lg rounded-lg border text-[#0559fd] border-[#0559FD] "
                }
                onClick={() => cancelOrDelete(setNewUserData)}>
                {isOnEdit ? "حذف" : "لغو"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
