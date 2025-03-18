import { JSX, useState } from "react";
import Drawer from "./Drawer";

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="검색"
        value={inputValue}
        onChange={handleChange}
        className="fixed left-0 top-4 z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input focus:bg-gray-300 dark:focus:bg-gray-700 focus:outline-none rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white sm:transform-none transition-all js-searchInput"
      />
      <Drawer inputValue={inputValue} />
    </div>
  );
};

export default Search;
