import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { aboutText, socialMedia } from "~/data/data";

const About = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className="w-full sm:h-3/4 h-[70%] text-center sm:text-left rounded-b-[30px] p-6 sm:p-12 flex gap-y-1 flex-col sm:justify-between ">
      <p className="font-poppins font-bold sm:text-[25px] text-xs text-mainWhiteText leading-normal">
        {aboutText}
      </p>

      <div className="flex  sm:justify-start justify-center gap-4 sm:mt-8 mt-2">
        {socialMedia.map((item) => (
          <Link
            to={item.to}
            target="_blank"
            className={`text-mainWhiteText  transition-colors duration-200 sm:text-3xl text-xl
              
              ${theme === "orange" ? "hover:text-mainOrange" : null}
              ${theme === "blue" ? "hover:text-mainBlue" : null}
              ${theme === "green" ? "hover:text-mainGreen" : null}
              ${theme === "pink" ? "hover:text-mainPink" : null}

              `}
          >
            <item.icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
