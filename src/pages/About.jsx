import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
  FaMailchimp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const About = () => {
  return (
    <div className="w-full h-3/4  rounded-b-[30px] p-12 flex flex-col justify-between">
      <p className="font-poppins font-bold text-[25px] text-mainWhiteText leading-normal">
        Ben bir Ön Uç Geliştirici & Tasarımcı olarak dijital projelere hayat
        veriyorum. 2024 yılında Dokuz Eylül Üniversitesi ‘Çalışma Ekonomisi ve
        Endüstri İlişkileri’ bölümünden mezun oldum ve 1.5 yıldır yazılım
        dünyasında aktif olarak yer alıyorum. İzmir’de yaşıyorum ve her geçen
        gün kendimi daha da geliştirerek React, TailwindCSS, Figma, Photoshop
        gibi teknolojilerde yetkinleşiyorum. <br /> <br /> Pixel-perfect tasarım
        anlayışım ile çalışmayı seviyor, hem kodlama hem de tasarım konusunda
        detaylara büyük önem veriyorum. Takım çalışmasına yatkınım ve güçlü
        iletişim becerilerimle katkıda bulunuyorum. React konusunda derinleşerek
        uzmanlaşma yolunda ilerliyorum. Henüz bir yazılım sektöründe profesyonel
        deneyimim olmasa da, sürekli kendimi eğiterek projeler geliştiriyorum ve
        bu projeleri düzenli olarak güncelliyorum.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="https://linkedin.com/in/berkanozm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mainWhiteText hover:text-blue-500 transition-colors duration-200"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/ozmberkan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mainWhiteText hover:text-gray-500 transition-colors duration-200"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://twitter.com/berkannozm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mainWhiteText hover:text-blue-400 transition-colors duration-200"
        >
          <FaTwitterSquare size={30} />
        </a>
        <a
          href="mailto:ozmberkan@gmal.com"
          className="text-mainWhiteText hover:text-red-400 transition-colors duration-200"
        >
          <IoMdMail size={30} />
        </a>
      </div>
    </div>
  );
};

export default About;
