
import { useRouter } from "next/router";

import { calculateAge, validateParametters } from "@/helper/helper";

const User = ({ user, index }) => {
  const router = useRouter();
  const navigateUser = (id) => {
    router.push(`/edit/${id}`);
  };
  return (
    <tr
      className={
        index % 2
          ? "cursor-pointer"
          : "bg-[#DCE9FC] dark:bg-[#182040] cursor-pointer overflow-hidden"
      }
      onClick={() => navigateUser(user.id)}>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 w-32 ">
        {validateParametters(user.name)}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {validateParametters(calculateAge(user.dateOfBirth))}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {validateParametters(user.phoneNumber)}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {validateParametters(user.email)}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {validateParametters(user.country)} , {validateParametters(user.city)} ,{" "}
        {validateParametters(user.street)} , {validateParametters(user.zipcode)}{" "}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {validateParametters(user.company)}
      </td>
    </tr>
  );
};

export default User;
