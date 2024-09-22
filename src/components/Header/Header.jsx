import { Link } from "react-router-dom";
import { rightTab } from "~/data/data";
import Theme from "./Dropdown/Theme";
import { useSelector } from "react-redux";

const Header = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className="h-[80px] flex justify-between items-center px-[30px]">
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
      <nav className="flex justify-start items-center gap-x-[18px]">
        {rightTab.map((tab) => (
          <Link
            key={tab.id}
            to={tab.to}
            className="text-mainWhiteText font-bold text-[13px] "
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
