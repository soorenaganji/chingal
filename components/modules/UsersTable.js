import User from "./User";

const cells = [
  {
    title: "نام کاربر",
    class: "rounded-tr-xl text-center bg-[#0559FD] text-white font-normal",
  },
  {
    title: "سن",
    class:
      "border rounded-xl text-center dark:border-slate-700 text-slate-800 dark:text-slate-300 font-normal",
  },
  {
    title: "شماره تلفن",
    class:
      "border rounded-xl text-center dark:border-slate-700 text-slate-800 dark:text-slate-300 font-normal",
  },
  {
    title: "ایمیل",
    class:
      "border rounded-xl text-center dark:border-slate-700 text-slate-800 dark:text-slate-300 font-normal",
  },
  {
    title: "آدرس",
    class:
      "border rounded-xl text-center dark:border-slate-700 text-slate-800 dark:text-slate-300 font-normal",
  },
  {
    title: "شرکت",
    class:
      "border rounded-xl text-center dark:border-slate-700 text-slate-800 dark:text-slate-300 font-normal",
  },
];

const UsersTable = ({ searchedUsers }) => {
  const listUsersInTable = () => {
    return searchedUsers.length ? (
      searchedUsers.map((user, index) => (
        <User user={user} index={index} key={user.id} />
      ))
    ) : (
      <p className="text-center py-4 mx-auto">چیزی برای نشان دادن نیست</p>
    );
  };

  return (
    <section>
      <table className="w-full">
        <thead className="">
          <tr className="">
            {cells.map((cell) => (
              <th className={cell.class} key={cell.title}>
                {cell.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center  overflow-scroll ">
          {listUsersInTable()}
        </tbody>
      </table>
    </section>
  );
};

export default UsersTable;
