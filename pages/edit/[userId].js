import EditPage from "@/components/templates/UserEditPage";
import axios from "axios";
import { useRouter } from "next/router";
const UserEditPage = ({ data, setDarkMode }) => {
  const router = useRouter();
  const postEditedData = async (newUserData) => {

    if(router.query.userId){
          const userData = await axios.get(
      `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${router.query.userId}`
    );
    if (userData == newUserData) {
      return;
    } else {
      const res = await axios.put(
        `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${router.query.userId}`,
        newUserData
      )  
      console.log(await res)
    }} 
    router.push("/");
  };
  const deleteData = async () => {
    if(router.query.userId){
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
    }}
  };
  if (router.query.userId) {
    return (
      <main>
        <EditPage data={data} setDarkMode={setDarkMode} postEditedData={postEditedData} deleteData={deleteData} />
      </main>
    );
  }
};
export async function getServerSideProps(context) {
  const {
    params: { userId },
  } = context;
  const res = await axios.get(
    `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${userId}`
  );
  const data = res.data;

  if (res.status !== 200)
    return {
      404: true,
    };
  return {
    props: {
      data,
    },
  };
}

export default UserEditPage;
