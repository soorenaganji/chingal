import Image from "next/image";
import { Inter } from "next/font/google";
import Home from "@/components/templates/Home";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

export default function index({data , setDarkMode}) {
  console.log(data)
  return (
    <>
      <main>
        <Home data={data} setDarkMode={setDarkMode} />
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const res = await axios.get(`${process.env.BASE_URL}/users`)
  const data = res.data
  return{
    props : {
       data
    }
  }
}
