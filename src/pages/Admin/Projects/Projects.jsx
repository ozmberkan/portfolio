import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ProjectModal from "~/components/UI/Models/ProjectModal";
import { getAllMyProjects } from "~/redux/slices/projectsSlice";

const Projects = () => {
  const [projectModal, setProjectModal] = useState(false);
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllMyProjects());
  }, []);

  const deleteProject = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/project/delete/${id}`
      );
      toast.success("Proje başarıyla silindi!");
      dispatch(getAllMyProjects());
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("Proje bulunamadı.");
      } else {
        toast.error("Bir hata oluştu.");
      }
      console.error(error);
    }
  };

  return (
    <>
      {projectModal && <ProjectModal setProjectModal={setProjectModal} />}
      <div className=" w-full font-inter flex-grow min-h-screen p-2">
        <div className="w-full flex justify-end items-center">
          <button
            onClick={() => setProjectModal(true)}
            className="text-sm font-inter px-4 py-1 text-white bg-[#202020] rounded-md"
          >
            Proje Oluştur
          </button>
        </div>
        <div className=" p-2 mt-2 flex justify-start items-start flex-col gap-2">
          <h1 className="text-black text-2xl font-semibold">Projeler</h1>
          <div className="grid grid-cols-3">
            {projects.allProjects?.map((project) => (
              <div
                key={project._id}
                className="flex flex-col gap-2 border bg-white p-4 rounded-xl "
              >
                <img
                  className="w-full h-20 rounded-md object-cover"
                  src={project.projectImage}
                />
                <div className="font-bold">{project.projectTitle}</div>
                <span className="text-sm text-zinc-600">{project._id}</span>
                <span className="text-sm text-zinc-600">
                  {project.projectDescription}
                </span>
                <span className="text-sm text-zinc-600">
                  {project.projectLink}
                </span>
                <span className="text-sm text-zinc-600">
                  {project.projectGithubLink}
                </span>
                <span className="text-sm text-zinc-600">
                  {project.projectResponsive}
                </span>
                <span className="text-sm text-zinc-600">
                  {project.projectTechnology}
                </span>
                <span className="text-sm text-zinc-600">
                  {project.projectStyleTechnology}
                </span>
                <span className="text-sm text-zinc-600">
                  {dayjs(project.createdAt).format("LLL")}
                </span>
                <div className="w-full flex justify-center items-center gap-5">
                  <button className="text-sm w-full font-inter px-4 py-1 text-white bg-[#202020] rounded-md">
                    Düzenle
                  </button>
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="text-sm w-full font-inter px-4 py-1 text-white bg-red-600 rounded-md"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
