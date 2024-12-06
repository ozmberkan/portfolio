import React from "react";
import { Link } from "react-router-dom";
import goalBoard from "~/assets/images/goalboard.png";
import { IoIosArrowForward } from "react-icons/io";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/tr";

dayjs.extend(localizedFormat);
dayjs.locale("tr");

const Project = ({ project, isOdd }) => {
  const formattedDate = dayjs(project.createdAt)
    .format("MMMM YYYY")
    .toUpperCase();

  return (
    <div
      className={`container lg:max-w-5xl mx-auto justify-center items-center lg:justify-start gap-x-7 lg:items-start flex w-full py-6  ${
        isOdd ? "lg:flex-row-reverse flex-col-reverse" : "lg:flex-row flex-col"
      }`}
    >
      <div className="lg:w-1/2 p-5 flex lg:justify-between justify-start lg:items-start items-center flex-col gap-5 font-inter">
        <span className="text-sm font-semibold text-neutral-400">
          {formattedDate}
        </span>
        <h1 className="text-xl font-bold text-neutral-700">
          {project.projectTitle}
        </h1>
        <p className="lg:text-left text-center">{project.projectDescription}</p>
        <div className="w-full flex items-center lg:justify-start justify-center gap-x-2">
          <p className="text-sm px-4 py-1 rounded-full bg-[#202020] text-white">
            {project.projectTechnology}
          </p>
          <p className="text-sm px-4 py-1 rounded-full bg-[#202020] text-white">
            {project.projectStyleTechnology}
          </p>
        </div>
        <div className="flex items-center lg:justify-between  justify-center w-full gap-x-2">
          <Link
            to={project.projectLink}
            target="_blank"
            className="font-semibold flex items-center gap-x-1 hover:text-[#555]"
          >
            Ziyaret et <IoIosArrowForward />
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center">
        <img src={project.projectImage} className="w-[800px]" />
      </div>
    </div>
  );
};

export default Project;
