import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto w-full py-6 border-t flex justify-end items-center px-12">
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
