import UserEditPage from "@/components/templates/UserEditPage";
import axios from "axios";
import { useRouter } from "next/router";
const userEditPage = ({ data, setDarkMode }) => {
  const router = useRouter();
  if (router.query.userId) {
    return (
      <main>
        <UserEditPage data={data} setDarkMode={setDarkMode} router={router} id={router.query.userId} />
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

export default userEditPage;
