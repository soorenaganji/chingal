// HELPER FUNCTIONS
import { calcAge } from "@/helper/helper";
const User = ({ user, index }) => {
// NAVIGATING THE USER TO THE EDIT PAGE
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
      onClick={() => navigateUser(user.id)}
    >
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {user.name ? user.name : "وارد نشده"}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {calcAge(user.dateOfBirth)}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {user.phoneNumber ? user.phoneNumber : "وارد نشده"}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {user.email ? user.email : "وارد نشده"}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {user.city} , {user.street} , {user.zipcode}{" "}
      </td>
      <td className="px-4 py-6 border border-slate-300 dark:border-slate-700 ">
        {user.company
          ? user.company
            ? user.company
            : "وارد نشده"
          : "وارد نشده"}
      </td>
    </tr>
  );
};

export default User;
