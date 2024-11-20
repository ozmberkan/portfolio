import React from "react";
import FadeIn from "text-fade-in";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-[400px] flex justify-center items-center flex-col ">
      <FadeIn className="text-[50px] font-gilroy text-neutral-800 tracking-tighter">
        {t("heroTitle")}
      </FadeIn>
      <FadeIn className="text-[50px] font-gilroy text-neutral-600">
        {t("discoverText")}
      </FadeIn>
      <a
        href="#projects"
        className="bg-[#202020] px-12 font-bold transition-all duration-500 py-2 text-neutral-200 mt-5 rounded-full font-inter border-2 border-neutral-700 hover:border-[#202020] hover:border-2 hover:text-neutral-700 hover:bg-transparent"
      >
        {t("discoverButton")}
      </a>
    </div>
  );
};

export default Hero;
