import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Form from "@/components/modules/Form";

import { deleteUser, updateUser, getUser } from "@/api/api";

import { IoIosArrowBack } from "react-icons/io";

const EditPage = () => {
  const router = useRouter();
  const isIdLoaded = router.query.userId ? true : false;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (router.query.userId) {
      getData();
    }
  }, [router]);

  const getData = async () => {
    const id = router.query.userId;
    const data = await getUser(id);
    setUserData(data);
  };
  const updateUserAndNavigate = (newUserData) => {
    updateUser(newUserData).then(router.push("/"));
  };
  const validateUserAndDeleteAndNavigate = () => {
    const id = router.query.userId;
    if (isIdLoaded) {
      deleteUser(id).then(router.push("/"));
    }
  };

  if (userData) {
    return (
      <div className="w-screen dark:text-white ">
        <Header searched={""} isInHome={false} />

        <div className="w-full h-full p-16">
          <div className="w-full h-[56px] flex items-center justify-between ">
            <div className="flex items-center justify-center gap-3">
              <IoIosArrowBack className="text-4xl" />
              <Link href={"/"}>لیست کاربران</Link>
              <IoIosArrowBack className="text-4xl" />
              <p> ویرایش کاربر شماره {userData.id} </p>
            </div>
          </div>
          <Form
            data={userData}
            formOpener={null}
            postData={updateUserAndNavigate}
            cancelOrDelete={validateUserAndDeleteAndNavigate}
            isOnEdit={true}
          />
        </div>
      </div>
    );
  }
};

export default EditPage;
