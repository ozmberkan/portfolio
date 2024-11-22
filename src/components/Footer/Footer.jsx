import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto w-full py-6 border-t flex justify-between items-center px-12 ">
      <Link
        to="https://github.com/ozmberkan"
        className="transform hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out hover:text-[#202020]"
      >
        <BiLogoGithub size={26} />
      </Link>
      <span className="font-inter text-sm ">
        &copy; 2024 -{" "}
        <Link
          className="font-semibold text-neutral-700 hover:text-[#202020] "
          to="https://github.com/ozmberkan"
        >
          Berkan Özmen
        </Link>
      </span>
    </div>
  );
};

export default Footer;
