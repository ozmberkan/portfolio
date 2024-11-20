import React, { useState } from "react";
import ProjectModal from "~/components/UI/Models/ProjectModal";

const Projects = () => {
  const [projectModal, setProjectModal] = useState(false);

  return (
    <>
      {projectModal && <ProjectModal setProjectModal={setProjectModal} />}
      <div className=" w-full flex-grow min-h-screen p-2">
        <div className="w-full  flex justify-end items-center">
          <button
            onClick={() => setProjectModal(true)}
            className="text-sm font-inter px-4 py-1 text-white bg-[#202020] rounded-md"
          >
            Proje Oluştur
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
