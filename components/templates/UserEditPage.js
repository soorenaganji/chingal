import Header from "@/components/layout/Header";
import Link from "next/link";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import Form from "@/components/modules/Form";
const UserEditPage = ({data , setDarkMode , id}) => {
    const postEditedData = async (newUserData) => {
      const userData = await axios.get(
        `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${router.query.userId}`
      );
      if (userData == newUserData) {
        return;
      } else {
        const res = await axios.put(
          `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${router.query.userId}`,
          newUserData
        );
  
        const { data } = res;
        console.log(data);
      }
      router.push("/");
    };
    const deleteData = async () => {
      const doesUserExist = await axios.get(
        `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${router.query.userId}`
      );
      if (doesUserExist.status == 404) {
        return;
      } else {
        const res = await axios.delete(
          `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${router.query.userId}`
        );
        router.push("/");
      }
    };
    return (
      <div className="w-screen dark:text-white ">
        <Header setDarkMode={setDarkMode} searched={""} isInHome={false} />
  
        <div className="w-full h-full p-16">
          <div className="w-full h-[56px] flex items-center justify-between ">
            <div className="flex items-center justify-center gap-3">
              <IoIosArrowBack className="text-4xl" />
              <Link href={"/"}>لیست کاربران</Link>
              <IoIosArrowBack className="text-4xl" />
              <p> ویرایش کاربر شماره {data.id} </p>
            </div>
          </div>
          <Form data={data} formOpener={null} postData={postEditedData} cancelOrDelete={deleteData} isOnEdit={true} />
        </div>
      </div>
    );
}

export default UserEditPage;