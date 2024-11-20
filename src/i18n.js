import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      heroTitle: "Front End Developer / React Developer",
      discoverText: "Discover my projects.",
      discoverButton: "Discover",
      about: `As a Front End developer & designer, we bring digital projects to
          life. I graduated from Dokuz Eylül University 'Labor Economics and
          Industrial Relations' department in 2024 and I have been actively
          involved in software for 1.5 years. I live in Izmir and every day I
          improve and become more proficient in technologies such as React,
          TailwindCSS, Figma and Photoshop. With my pixel-perfect design ethos,
          great attention is paid to detail in both making and design. I emerge
          from the strength of teams and the addition of strong communication
          components. I am progressing towards specialization by deepening in
          the field of reaction. Even though I do not have professional
          experience in a software industry yet, I am constantly developing
          projects and updating these projects regularly.`,
    },
  },
  tr: {
    translation: {
      heroTitle: "Front End Geliştiricisi / React Geliştiricisi",
      discoverText: "Projelerimi keşfedin.",
      discoverButton: "Keşfet",
      about: `Ben bir Ön Uç Geliştirici & Tasarımcı olarak dijital projelere hayat veriyorum. 2024 yılında Dokuz Eylül Üniversitesi ‘Çalışma Ekonomisi ve Endüstri İlişkileri’ bölümünden mezun oldum ve 1.5 yıldır yazılım dünyasında aktif olarak yer alıyorum. İzmir’de yaşıyorum ve her geçen gün kendimi daha da geliştirerek React, TailwindCSS, Figma, Photoshop gibi teknolojilerde yetkinleşiyorum. Pixel-perfect tasarım anlayışım ile çalışmayı seviyor, hem kodlama hem de tasarım konusunda detaylara büyük önem veriyorum. Takım çalışmasına yatkınım ve güçlü iletişim becerilerimle katkıda bulunuyorum. React konusunda derinleşerek uzmanlaşma yolunda ilerliyorum. Henüz bir yazılım sektöründe profesyonel deneyimim olmasa da, sürekli kendimi eğiterek projeler geliştiriyorum ve bu projeleri düzenli olarak güncelliyorum.`,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
