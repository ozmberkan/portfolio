import { useSelector } from "react-redux";
import { homeText } from "~/data/data";
import Typewriter from "typewriter-effect";

const Home = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div
      className={`w-full sm:h-3/4 h-[65%]
        transition-all duration-500 shadow-innerShadow
    ${theme === "orange" ? "bg-orange" : null}
    ${theme === "blue" ? "bg-blue" : null}
    ${theme === "green" ? "bg-green" : null}
    ${theme === "pink" ? "bg-pink" : null}
    
    bg-no-repeat bg-cover bg-center rounded-b-[30px] sm:p-12 p-6 flex flex-col`}
    >
      <h1 className="font-jersey sm:text-[90px] text-[30px] text-mainWhiteText leading-tight">
        <Typewriter
          options={{
            strings: [
              "Muhammed Berkan Özmen",
              "Front End Developer",
              "React Developer",
              "Next.JS",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="font-poppins font-semibold sm:text-[30px] text-sm text-mainWhiteText sm:leading-tight">
        {homeText}
      </p>
    </div>
  );
};

export default Home;
