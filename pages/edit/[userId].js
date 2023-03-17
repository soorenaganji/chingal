import EditPage from "@/components/templates/UserEditPage";
import axios from "axios";
import { useRouter } from "next/router";
const UserEditPage = ({ data, setDarkMode }) => {
  const router = useRouter();
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
  if (router.query.userId) {
    return (
      <main>
        <EditPage data={data} setDarkMode={setDarkMode} postEditedData={postEditedData} deleteData={deleteData} />
      </main>
    );
  }
};
export async function getStaticPaths() {
  const res = await axios.get(
    `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users`
  );
  const data = res.data;
  let params = [];
  for (let i = 0; i < (await data.length); i++) {
    params.push({ params: { userId: (i + 1).toString() } });
  }
  return {
    paths: params,
    fallback: true,
  };
}

export async function getStaticProps(context) {
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
