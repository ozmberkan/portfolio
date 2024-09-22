import React from "react";
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

const Theme = () => {
  const { theme } = useSelector((store) => store.theme);

  const dispatch = useDispatch();

  return (
    <Menu>
      <MenuButton className="text-black font-bold text-[13px] gap-x-1 flex items-center bg-[#ECECEC] px-2 py-1 rounded-xl">
        Tema Seç
        <FaAngleDown />
      </MenuButton>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className="mt-5 bg-mainBg border border-mainBoxBg text-mainWhiteText rounded-xl px-2 py-2 flex flex-col gap-y-2"
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
