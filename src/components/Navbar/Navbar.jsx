import { motion } from "framer-motion";
import Logo from "../UI/Logo";
import Turkish from "~/assets/turkiye.svg";
import English from "~/assets/england.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "~/redux/slices/languageSlice";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { language } = useSelector((state) => state.language);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng === "tr" ? "tr" : "en"));
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-15 flex justify-between items-center p-3 "
    >
      {language === "en" ? (
        <button onClick={() => changeLanguage("tr")}>
          <img src={Turkish} className="w-6 rounded-full h-6 object-cover" />
        </button>
      ) : (
        <button onClick={() => changeLanguage("en")}>
          <img src={English} className="w-6 rounded-full h-6 object-cover" />
        </button>
      )}
      <Logo />

      <div className="w-6 h-6"></div>
    </motion.div>
  );
};

export default Navbar;
