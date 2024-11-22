import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="min-h-screen flex justify-center items-center w-full p-5"
    >
      <div className="w-full lg:h-[500px] drop-shadow-2xl rounded-xl bg-gradient-to-r from-[#202020] to-[#353535] ring-2 ring-offset-2 ring-[#202020] flex justify-center items-center p-6 lg:px-32">
        <p className="text-center text-white font-inter lg:text-2xl text-sm font-semibold">
          {t("about")}
        </p>
      </div>
    </div>
  );
};

export default About;
