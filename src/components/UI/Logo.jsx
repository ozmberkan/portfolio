import { BiCode, BiCodeAlt } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="px-4 py-2 rounded-md  flex items-center  ">
      <span className="text-neutral-600">
        <BiCode size={18} />
      </span>
      <a
        href="#about"
        className="font-inter text-sm font-semibold tracking-tighter text-neutral-700 "
      >
        Berkan Özmen
      </a>
      <span className="text-neutral-600">
        <BiCodeAlt size={18} />
      </span>
    </div>
  );
};

export default Logo;
