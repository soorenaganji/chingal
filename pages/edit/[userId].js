// COMPONENTS
import EditPage from "@/components/templates/UserEditPage";
// PACKAGES
import axios from "axios";
// HOOKS
import { useRouter } from "next/router";
const UserEditPage = ({ data, setDarkMode }) => {
  // HOOK CALL
  const router = useRouter();

  console.log("start")
  console.log(router.query.userId)
  // TO PREVENT ERRORS DUE TO DELAY
  const isIdLoaded = router.query.userId ? true : false
  // ASYNC FUNCTIONS
  const postEditedData = async (newUserData) => {
    if(isIdLoaded){
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
    }} 
    router.push("/");
  };
  const deleteData = async () => {
    if(isIdLoaded){
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
  if (isIdLoaded) {
    return (
      <main>
        <EditPage data={data} setDarkMode={setDarkMode} postEditedData={postEditedData} deleteData={deleteData} />
      </main>
    );
  }
};
// TO GET ONE SPECEFIC USER DATA
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
