import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbHome } from "react-icons/tb";
const Sidebar = () => {
  const { projects } = useSelector((state) => state.projects);

  const navigate = useNavigate();

  const exit = () => {
    try {
      localStorage.removeItem("adminUserForBerkan");
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full px-3 py-4 overflow-y-auto bg-transparent lg:min-w-52 min-h-screen flex flex-col  border-r dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <Link
            to="/admin/projects"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-100  group"
          >
            <MdOutlineSpaceDashboard />
            <span className="lg:flex hidden ms-3 whitespace-nowrap">
              Projeler
            </span>
            <span className="lg:inline-flex hidden items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium bg-[#202020] text-white rounded-full ">
              {projects?.allProjects?.length}
            </span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-neutral-100  group"
          >
            <TbHome />
            <span className="lg:flex hidden ms-3 whitespace-nowrap">
              Anasayfa'ya Dön
            </span>
          </Link>
        </li>
        <li className="mt-5 pt-3 border-t">
          <button
            onClick={exit}
            className="flex items-center p-2 text-red-900 rounded-lg  hover:bg-red-100  group"
          >
            <TbHome />
            <span className="lg:flex hidden ms-3 whitespace-nowrap">
              Çıkış Yap
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
