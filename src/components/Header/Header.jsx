import { Link } from "react-router-dom";
import { rightTab } from "~/data/data";
import { useSelector } from "react-redux";
import Theme from "./Dropdown/Theme";

const Header = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className="sm:h-[80px] flex sm:flex-row flex-col justify-between items-center sm:px-[30px] px-5 sm:py-0 py-5">
      <Link
        to="/"
        className={`text-[25px] font-nicomoji  transition-all duration-500
        
        ${theme === "orange" ? "text-mainOrange" : null}
        ${theme === "blue" ? "text-mainBlue" : null}
        ${theme === "green" ? "text-mainGreen" : null}
        ${theme === "pink" ? "text-mainPink" : null}
        `}
      >
        ozmberkan.
      </Link>
      <nav className="flex justify-start items-center gap-x-[18px] sm:flex-row flex-col-reverse gap-y-2 sm:mt-0 mt-5">
        {rightTab.map((tab) => (
          <Link
            key={tab.id}
            to={tab.to}
            className="text-mainWhiteText font-semibold text-sm hover:text-zinc-500 sm:bg-none bg-mainBg w-full flex justify-center items-center px-5 py-1.5 rounded-md transition-all duration-500"
          >
            {tab.label}
          </Link>
        ))}
        <Theme />
      </nav>
    </div>
  );
};

export default Header;
