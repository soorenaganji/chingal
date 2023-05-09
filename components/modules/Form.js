// HOOKS
import { useState } from "react";
// ICONS
import { FaUserAstronaut } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
// HELPER FUNCTIONS
import { ageToDate, calcAge } from "@/helper/helper";
const Form = ({ formOpener, data, postData, cancelOrDelete, isOnEdit }) => {
  // STATES
  const [avatar, setAvatar] = useState(isOnEdit ? data.avatar : null);
  const [newUserData, setNewUserData] = useState(
    isOnEdit
      ? data
      : {
          name: "",
          dateOfBirth : "",
          avatar,
          phoneNumber: "",
          country: "",
          city: "",
          street: "",
          email: "",
          zipcode: "",
          company: "",
        }
  );
  const [userAge , setUserAge] = useState(calcAge(newUserData.dateOfBirth))
  // EVENT HANDLERS
  const imageHandler = ({ target: { files } }) => {
    files && setAvatar(URL.createObjectURL(files[0]));
    files && setNewUserData({ ...newUserData, avatar: files[0] });
  };
  const inputChangeHandler = (e ) => {
    const { value } = e.target;
    setNewUserData({ ...newUserData, [e.target.name]: value });
    if(e.target.name === "dateOfBirth") {
      DOBChangeHandler(e)
    }
  };
  const DOBChangeHandler = ({ target : {value} }) => {
   setUserAge(value)
   setNewUserData({...newUserData , dateOfBirth : ageToDate(value)})
  
  };

  return (
    <div
      className={`w-full z-20 dark:text-white  ${
        isOnEdit ? "" : "absolute"
      } `}
    >
      <div className="  w-[540px] h-[878px] bg-[#FBFDFE] dark:bg-[#020B1F] mx-auto mt-8 rounded-3xl  p-8 border border-[#DCE9FC] dark:border-[#182040] shadow-lg mb-16 dark:shadow-[#182040]  ">
        <div className=" w-full h-16  text-xl border-b flex items-center justify-start border-slate-300 ">
          {data ? (
            ""
          ) : (
            <button
              className="ml-6 outline-none"
              onClick={() => formOpener(false)}
            >
              <GrFormClose className="text-4xl dark:text-white dark:bg-white/50 rounded-xl " />
            </button>
          )}
          <h3> {isOnEdit ? `ویرایش کاربر` : "کاربر جدید"}</h3>
        </div>
        <div>
          <div>
            <div className="mt-4 flex justify-center items-center w-32 h-32 mx-auto rounded-full border-2 border-[#0559FD] p-2">
              <div className=" text-center w-full h-full ">
                <div
                  className="flex w-full h-full text-gray-600"
                  onClick={() => document.querySelector(".input-image").click()}
                >
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md w-full h-full"
                  >
                    {!!avatar ? (
                      <img
                        src={avatar}
                        className="w-full h-full rounded-full"
                      />
                    ) : (
                      <FaUserAstronaut className="text-7xl text-[#022467] dark:text-[#ABC8FD] text-center w-full h-full rounded-full " />
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
          <div className="mt-12 flex items-center justify-center flex-col gap-6 p-4 ">
            <div className="w-full flex items-center justify-between  ">
              <div className="">
                <label className="text-slate-600">نام کاربر</label>
                <br />
                <input
                  value={newUserData.name}
                  onChange={inputChangeHandler}
                  name="name"
                  type="text"
                  placeholder="نام کاربر را وارد کنید"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none  "
                />
              </div>
              <div className="" >
                <label className="text-slate-600">سن</label>
                <br />
                <input
                  value={userAge}
                  onChange={inputChangeHandler}
                  name="dateOfBirth"
                  type="number"
                  placeholder="سن کاربر را وارد کنید"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none "
                />
              </div>{" "}
            </div>
            <div className="w-full flex items-center justify-between  ">
              <div>
                <label className="text-slate-600">ایمیل کاربر</label>
                <br />
                <input
                  value={newUserData.email}
                  onChange={inputChangeHandler}
                  name="email"
                  type="text"
                  placeholder="ایمیل کاربر را وارد کنید"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none "
                />
              </div>
              <div>
                <label className="text-slate-600">شماره تلفن</label>
                <br />
                <input
                  value={newUserData.phoneNumber}
                  onChange={inputChangeHandler}
                  name="phoneNumber"
                  type="text"
                  placeholder="شماره تلفن کاربر را وارد کنید"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none "
                />
              </div>{" "}
            </div>
            <div className="w-full flex items-center justify-between  ">
              <div>
                <label className="text-slate-600"> کشور</label>
                <br />
                <input
                  value={newUserData.country}
                  onChange={inputChangeHandler}
                  name="country"
                  type="text"
                  placeholder="کشور"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none  w-20"
                />
              </div>
              <div>
                <label className="text-slate-600"> شهر</label>
                <br />
                <input
                  value={newUserData.city}
                  onChange={inputChangeHandler}
                  name="city"
                  type="text"
                  placeholder="شهر"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none  w-20"
                />
              </div>
              <div>
                <label className="text-slate-600">خیابان</label>
                <br />
                <input
                  value={newUserData.street}
                  onChange={inputChangeHandler}
                  name="street"
                  type="text"
                  placeholder="خیابان"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none   w-20"
                />
              </div>{" "}
              <div>
                <label className="text-slate-600">کد پستی</label>
                <br />
                <input
                  value={newUserData.zipcode}
                  onChange={inputChangeHandler}
                  name="zipcode"
                  type="text"
                  placeholder="کد پستی"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none   w-20"
                />
              </div>{" "}
            </div>
            <div className="w-full flex items-center justify-between  ">
              <div className="w-full">
                <label className="text-slate-600">شرکت </label>
                <br />
                <input
                  value={newUserData.company}
                  onChange={inputChangeHandler}
                  name="company"
                  type="text"
                  placeholder="شرکت کاربر خودرا وارد کنید"
                  className="bg-transparent  border border-slate-300 p-4 rounded-xl outline-none  w-full "
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-between mt-8 flex-row-reverse ">
              <button
                className="w-40 h-14 text-lg rounded-lg bg-[#0559FD] text-white shadow-lg shadow-[#0558fd80]"
                onClick={() => postData(newUserData , setNewUserData)}
              >
                تایید
              </button>
              <button
                className={
                  isOnEdit
                    ? "w-40 h-14 text-lg rounded-lg bg-[#FF3231] shadow-lg shadow-[#ff3131a4] text-white "
                    : "w-40 h-14 text-lg rounded-lg border text-[#0559fd] border-[#0559FD] "
                }
                onClick={() => cancelOrDelete(setNewUserData)}
              >
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
