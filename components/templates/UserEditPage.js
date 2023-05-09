// COMPONENTS
import Header from "@/components/layout/Header";
import Form from "@/components/modules/Form";
// BUILT-IN PACKAGES
import Link from "next/link";
// ICONS
import { IoIosArrowBack } from "react-icons/io";
const EditPage = ({data , setDarkMode , postEditedData , deleteData}) => {
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

export default EditPage;