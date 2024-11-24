import { motion } from "framer-motion";
import Logo from "../UI/Logo";
import Turkish from "~/assets/turkiye.svg";
import English from "~/assets/england.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "~/redux/slices/languageSlice";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { language } = useSelector((state) => state.language);
  const { i18n } = useTranslation();

  const { user } = useSelector((state) => state.user);

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
      className="w-full h-15 flex justify-between items-center p-3 gap-x-3 "
    >
      <div className="w-44">
        {language === "en" ? (
          <button onClick={() => changeLanguage("tr")}>
            <img src={Turkish} className="w-6 rounded-full h-6 object-cover" />
          </button>
        ) : (
          <button onClick={() => changeLanguage("en")}>
            <img src={English} className="w-6 rounded-full h-6 object-cover" />
          </button>
        )}
      </div>
      <Logo />

      {!user && <div className="w-44 h-6"></div>}
      {user && (
        <Link
          to="/admin/projects"
          className="w-44  py-2 rounded-md bg-[#202020] font-inter lg:text-sm text-xs text-white flex justify-center items-center"
        >
          Admin Paneli
        </Link>
      )}
    </motion.div>
  );
};

export default Navbar;
