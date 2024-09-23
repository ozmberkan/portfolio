import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { socialMedia } from "~/data/data";

const About = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div className="w-full sm:h-3/4 h-[70%] text-center sm:text-left rounded-b-[30px] p-6 sm:p-12 flex gap-y-1 flex-col sm:justify-between ">
      <p className="font-poppins font-bold sm:text-[25px] text-xs text-mainWhiteText leading-normal">
        Ben bir Ön Uç Geliştirici & Tasarımcı olarak dijital projelere hayat
        veriyorum. 2024 yılında Dokuz Eylül Üniversitesi ‘Çalışma Ekonomisi ve
        Endüstri İlişkileri’ bölümünden mezun oldum ve 1.5 yıldır yazılım
        dünyasında aktif olarak yer alıyorum. İzmir’de yaşıyorum ve her geçen
        gün kendimi daha da geliştirerek React, TailwindCSS, Figma, Photoshop
        gibi teknolojilerde yetkinleşiyorum. Pixel-perfect tasarım anlayışım ile
        çalışmayı seviyor, hem kodlama hem de tasarım konusunda detaylara büyük
        önem veriyorum. Takım çalışmasına yatkınım ve güçlü iletişim
        becerilerimle katkıda bulunuyorum. React konusunda derinleşerek
        uzmanlaşma yolunda ilerliyorum. Henüz bir yazılım sektöründe profesyonel
        deneyimim olmasa da, sürekli kendimi eğiterek projeler geliştiriyorum ve
        bu projeleri düzenli olarak güncelliyorum.
      </p>

      <div className="flex  sm:justify-start justify-center gap-4 sm:mt-8 mt-2">
        {socialMedia.map((item) => (
          <Link
            to={item.to}
            target="_blank"
            className={`text-mainWhiteText  transition-colors duration-200 sm:text-3xl text-xl
              
              ${theme === "orange" ? "hover:text-mainOrange" : null}
              ${theme === "blue" ? "hover:text-mainBlue" : null}
              ${theme === "green" ? "hover:text-mainGreen" : null}
              ${theme === "pink" ? "hover:text-mainPink" : null}

              `}
          >
            <item.icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
