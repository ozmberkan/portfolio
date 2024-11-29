import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      heroTitle: "Front End Developer React Developer",
      discoverText: "Discover my projects.",
      discoverButton: "Discover",
      about: `As a Front-End Developer and Designer, I bring digital projects to life with a blend of technical skills and creative vision. I graduated in 2024 from Dokuz Eylül University with a degree in Labor Economics and Industrial Relations, and I have been actively engaged in software development for 1.5 years. Based in Izmir, I continually refine my expertise in technologies such as React, TailwindCSS, Figma, and Photoshop.
With a passion for pixel-perfect designs, I approach both development and design with meticulous attention to detail. I thrive on teamwork and strong communication, which I consider essential components of success. Currently, I am focused on deepening my knowledge in React and moving towards specialization in this field. Although I do not yet have professional experience in the software industry, I consistently develop and update personal projects to enhance my skills and stay current.`,
    },
  },
  tr: {
    translation: {
      heroTitle: "Front End Geliştiricisi React Geliştiricisi",
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
