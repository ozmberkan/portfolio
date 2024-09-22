import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";

const Home = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div
      className={`w-full h-2/3 
        transition-all duration-500 shadow-innerShadow
    ${theme === "orange" ? "bg-orange" : null}
    ${theme === "blue" ? "bg-blue" : null}
    ${theme === "green" ? "bg-green" : null}
    ${theme === "pink" ? "bg-pink" : null}
    
    bg-no-repeat bg-cover bg-center rounded-b-[30px] p-12 flex flex-col`}
    >
      <h1 className="font-jersey text-[90px] text-mainWhiteText leading-tight">
        <Typewriter
          options={{
            strings: ["Front End Developer", "React Developer", "Next.JS"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="font-poppins font-bold text-[25px] text-mainWhiteText leading-tight">
        Tutkulu bir Front-End Geliştirici olarak, en son web teknolojilerini
        kullanarak duyarlı ve kullanıcı dostu arayüzler geliştiriyorum. React ve
        Next.js üzerinde uzmanlaşarak, kullanıcıların sorunsuz deneyimler
        yaşadığı dinamik ve etkileşimli web uygulamaları oluşturuyorum. Modern
        web siteleri geliştirmek ya da özel çözümler üretmek olsun, her zaman
        kaliteli kod, sezgisel tasarımlar ve ölçeklenebilir çözümler sunmaya
        odaklanıyorum. Fikirlerinizi hayata geçirmek ve dijital varlığınızı
        yenilikçi ve modern web geliştirme ile güçlendirmek için birlikte
        çalışalım.
      </p>
    </div>
  );
};

export default Home;
