// COMPONENTS
import Home from "@/components/templates/Home";
// PACKAGES
import axios from "axios";


export default function index({data , setDarkMode}) {
  return (
    <>
      <main className="w-full overflow-hidden">
        <Home data={data} setDarkMode={setDarkMode} />
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const res = await axios.get(`https://63c2988fe3abfa59bdaf89f6.mockapi.io/users`)
  const {data} = res
  return{
    props : {
       data
    }
  }
}
