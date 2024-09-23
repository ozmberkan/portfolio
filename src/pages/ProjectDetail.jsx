import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  FaCode,
  FaPaintBrush,
  FaMobile,
  FaLink,
  FaGithub,
} from "react-icons/fa";

const ProjectDetail = () => {
  const { projects } = useSelector((store) => store.projects);
  const { id } = useParams();

  console.log(projects);

  const detailedProject = projects.find(
    (project) => String(project.id) === String(id)
  );

  return (
    <div className="h-2/3 w-full flex justify-start items-start gap-x-5 p-5 font-poppins sm:flex-row flex-col gap-y-4">
      <img
        src={detailedProject.image}
        className="sm:w-1/2 w-full sm:h-full object-cover rounded-xl"
      />
      <div className="flex  flex-col gap-y-5 text-center sm:text-left sm:justify-start justify-center items-center sm:items-start  sm:h-full">
        <h1 className="sm:text-3xl text-lg font-bold flex gap-x-2 sm:items-end text-mainWhiteText/80 ">
          {detailedProject.title}
          <span className="text-sm">{detailedProject.version}</span>
        </h1>
        <p className="sm:text-xl text-sm text-mainWhiteText ">
          {detailedProject.description}
        </p>

        <div className="flex gap-x-4 sm:flex-row flex-col gap-y-4">
          <div className=" px-4 py-1 rounded-md text-sm border border-zinc-700 bg-mainBoxBg flex items-center gap-x-2 text-mainWhiteText">
            <span className="p-2 rounded-md border-mainBoxBorder border bg-mainBg ">
              <FaCode />
            </span>
            {detailedProject.technology}
          </div>

          <div className=" px-4 py-1 rounded-md text-sm border border-zinc-700 bg-mainBoxBg flex items-center gap-x-2 text-mainWhiteText">
            <span className="p-2 rounded-md border-mainBoxBorder border bg-mainBg ">
              <FaPaintBrush />
            </span>
            {detailedProject.styleTech}
          </div>

          <div className=" px-4 py-1 rounded-md text-sm border border-zinc-700 bg-mainBoxBg flex items-center gap-x-2 text-mainWhiteText">
            <span className="p-2 rounded-md border-mainBoxBorder border bg-mainBg ">
              <FaMobile />
            </span>
            {detailedProject.responsive === "true"
              ? "Duyarlı"
              : "Duyarlı Değil"}
          </div>
        </div>
        <div className="flex gap-x-4">
          <Link
            to={detailedProject.link}
            className=" px-4 py-1 rounded-md text-sm border border-zinc-700 bg-mainBoxBg flex items-center gap-x-2 text-mainWhiteText"
          >
            <span className="p-2 rounded-md border-mainBoxBorder border bg-mainBg ">
              <FaLink />
            </span>
            Demo
          </Link>

          <Link
            to={detailedProject.githubLink}
            className=" px-4 py-1 rounded-md text-sm border border-zinc-700 bg-mainBoxBg flex items-center gap-x-2 text-mainWhiteText"
          >
            <span className="p-2 rounded-md border-mainBoxBorder border bg-mainBg ">
              <FaGithub />
            </span>
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
