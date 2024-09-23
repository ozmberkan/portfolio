import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "~/redux/slices/themeSlice";
import { BsStars } from "react-icons/bs";
import { Fragment } from "react";

const Theme = () => {
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

  return (
    <Menu>
      <MenuButton className="text-mainWhiteText font-semibold text-sm hover:text-zinc-500 sm:bg-none bg-mainBg  gap-x-1 flex justify-center items-center px-5 py-1.5 rounded-md transition-all duration-500 whitespace-nowrap">
        <BsStars size={18} />
        TEMA SEÇ
        <FaAngleDown />
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className="mt-1 bg-mainBg outline-none  text-mainWhiteText rounded-xl p-2 flex flex-col gap-y-2"
        >
          <MenuItem>
            <button
              onClick={() => dispatch(setTheme("orange"))}
              className=" data-[focus]:bg-mainBoxBg  rounded-md w-full py-1.5 flex justify-start items-center px-5 gap-x-3"
            >
              <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-mainOrange to-orange-700"></span>
              Turuncu
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className=" data-[focus]:bg-mainBoxBg  rounded-md w-full py-1.5 flex justify-start items-center px-5 gap-x-3"
              onClick={() => dispatch(setTheme("blue"))}
            >
              <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-mainBlue to-blue-700"></span>
              Mavi
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className=" data-[focus]:bg-mainBoxBg  rounded-md w-full py-1.5 flex justify-start items-center px-5 gap-x-3"
              onClick={() => dispatch(setTheme("green"))}
            >
              <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-mainGreen to-green-700"></span>
              Yeşil
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className=" data-[focus]:bg-mainBoxBg  rounded-md w-full py-1.5 flex justify-start items-center px-5 gap-x-3"
              onClick={() => dispatch(setTheme("pink"))}
            >
              <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-mainPink to-pink-700"></span>
              Pembe
            </button>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Theme;
