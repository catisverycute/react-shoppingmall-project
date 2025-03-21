import { Link } from "react-router-dom";
import { MENUS } from "../../constants/constants";
import sun from "../../public/svg/sun.svg";
import moon from "../../public/svg/moon.svg";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../constants/atoms";
import Search from "../common/Search";

const Nav: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const cartValue = useRecoilValue(cartState);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const totalQuantity = (cartValue || []).reduce(
    (total, idx) => total + (idx.quantity || 0),
    0
  );

  return (
    <div className="fixed top-0 left-0 z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content ">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <label
          htmlFor="side-menu"
          className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto"
        ></label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link
            to="/"
            className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
          >
            React Shop
          </Link>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2 ">
          {Object.entries(MENUS).map(([key, value]) =>
            key === "HOME" ? null : (
              <Link
                to={`/${key.toLowerCase()}`}
                className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
                key={key}
              >
                {value}
              </Link>
            )
          )}
        </div>
        <div className="flex items-center px-2">
          <label className="swap swap-rotate mr-2 sm:mr-4">
            <input
              type="checkbox"
              className="js-theme"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            {theme === "light" ? (
              <img src={moon} alt="다크모드변경" className="w-7 h-7" />
            ) : (
              <img src={sun} alt="라이트모드변경" className="w-7 h-7" />
            )}
          </label>
          <Search />
          <Link to="/cart" className="btn btn-ghost w-10  sm:w-12 ml-1">
            <span className="relative">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z"
                    fill={theme === "dark" ? "#FFFFFF" : "#0F0F0F"}
                  ></path>
                </g>
              </svg>
              <span className="inline-flex items-center justify-center absolute -top-5 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 translate-y-1/2">
                {totalQuantity}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
