const BaseInput = ({ label, value, name, eventHandler, type, placeholder }) => {
  return (
    <>
      <label className="text-slate-600">{label}</label>
      <br />
      <input
        value={value}
        onChange={eventHandler}
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-transparent  border border-slate-300 dark:border-slate-700 p-4 rounded-xl outline-none w-full mt-2  "
      />
    </>
  );
};

export default BaseInput;
