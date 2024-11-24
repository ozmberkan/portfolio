import React from "react";
import FadeIn from "text-fade-in";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:h-[400px] lg:py-0 py-6  text-center flex justify-center items-center flex-col ">
      <FadeIn className="lg:text-[50px] text-[40px] font-gilroy text-neutral-800 tracking-tighter">
        {t("heroTitle")}
      </FadeIn>
      <FadeIn className="lg:text-[50px] text-[20px] font-gilroy text-neutral-600">
        {t("discoverText")}
      </FadeIn>

      <div class="uk-panel uk-panel-box uk-text-center mt-5">
        <a
          href="#projects"
          class="uk-button uk-button-large font-inter font-semibold"
        >
          {" "}
          {t("discoverButton")}
        </a>
      </div>
    </div>
  );
};

export default Hero;
