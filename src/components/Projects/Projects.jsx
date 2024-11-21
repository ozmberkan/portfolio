import React from "react";
import Project from "./Project";
import { useSelector } from "react-redux";

const Projects = () => {
  const { projects } = useSelector((state) => state.projects);

  return (
    <div
      id="projects"
      className="w-full flex flex-col gap-5 p-5 border-t divide-y"
    >
      {projects.allProjects?.map((project, i) => {
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
