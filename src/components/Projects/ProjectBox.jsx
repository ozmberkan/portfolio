import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectBox = ({ project }) => {
  const { theme } = useSelector((store) => store.theme);
  return (
    <div className="border border-zinc-600/30 rounded-xl flex bg-mainBoxBg">
      <img src={project.image} className="w-52 object-cover rounded-l-xl" />
      <div className="w-full h-full font-poppins text-mainWhiteText flex flex-col justify-start items-start p-4">
        <span>{project.title}</span>
        <p className="text-xs">{project.description.slice(0, 180)}...</p>
        <Link
          to={`/projects/${project.id}`}
          className={`mt-auto w-full flex justify-center items-center py-1 rounded-sm text-mainWhiteText 
            ${theme === "orange" ? "bg-mainOrange" : null}
            ${theme === "blue" ? "bg-mainBlue" : null}
            ${theme === "green" ? "bg-mainGreen" : null}
            ${theme === "pink" ? "bg-mainPink" : null}
            `}
        >
          Detay
        </Link>
      </div>
    </div>
  );
};

export default ProjectBox;
