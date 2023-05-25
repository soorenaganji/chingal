const SearchBar = ({ searchedPhrase, searchHandler }) => {
  return (
    <input
      type="search"
      className={`w-[512px] h-[56px] rounded-2xl bg-gradient-to-tr  from-[#FBFDFE] to-[#DCE9FC] via-[#F3F8FC] pr-12 p-4 outline-none border dark:from-[#020B1F] dark:to-[#0C132C] dark:border-slate-900 z-10 `}
      placeholder={` جستجو کنید `}
      value={searchedPhrase}
      onChange={searchHandler}
    />
  );
};

export default SearchBar;
