import React, { useEffect } from "react";
import Project from "./Project";
import { useSelector } from "react-redux";
import { tailChase } from "ldrs";

const Projects = () => {
  const { projects, status } = useSelector((state) => state.projects);
  tailChase.register();

  return (
    <div
      id="projects"
      className="w-full flex flex-col gap-5 p-5 border-t divide-y"
    >
      {status === "loading" && (
        <div className="w-full flex justify-center items-center">
          <l-tail-chase size="40" speed="1.75" color="black" />
        </div>
      )}
      {status === "success" &&
        projects.allProjects?.map((project, i) => {
          const isOdd = i % 2 === 0;
          return (
            <div key={project._id}>
              <Project project={project} isOdd={isOdd} />
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
