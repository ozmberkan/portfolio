import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";

const Layout = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <section className="w-full h-screen flex justify-center items-center px-[80px] py-[80px] ">
      <div
        className="bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 
  w-full h-full rounded-[30px] flex flex-col justify-between"
      >
        <Header />
        <Outlet />
      </div>
      <div
        className={`w-[300px] h-[300px] rounded-full absolute left-28 -z-10 transition-all duration-500

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
