import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";

const Layout = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <section className="w-full sm:h-screen h-full  flex justify-center items-center sm:px-[80px] sm:py-[80px] p-6 ">
      <div
        className="bg-zinc-700 bg-clip-padding backdrop-filter backdrop-blur-2xl border border-zinc-600/25 bg-opacity-20 
  w-full h-full rounded-[30px] flex flex-col justify-between"
      >
        <Header />
        <Outlet />
      </div>
      <div
        className={`sm:w-[300px] sm:h-[300px] w-[150px] h-[150px] rounded-full absolute sm:left-28  -z-10 transition-all duration-500

  ${theme === "orange" ? "bg-mainOrange blur-xl shadow-orangeShadow" : null}
  ${theme === "blue" ? "bg-mainBlue blur-xl shadow-blueShadow" : null}
  ${theme === "green" ? "bg-mainGreen blur-xl shadow-greenShadow" : null}
  ${theme === "pink" ? "bg-mainPink blur-xl shadow-pinkShadow" : null}

  `}
      ></div>
    </section>
  );
};

export default Layout;
