import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { projectInputs } from "~/data/data";
import { getAllMyProjects } from "~/redux/slices/projectsSlice";

const EditModal = ({ setIsEditMode, selectedProject }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      projectTitle: selectedProject.projectTitle,
      projectDescription: selectedProject.projectDescription,
      projectImage: selectedProject.projectImage,
      projectLink: selectedProject.projectLink,
      projectGithubLink: selectedProject.projectGithubLink,
      projectVersion: selectedProject.projectVersion,
      projectResponsive: selectedProject.projectResponsive,
      projectTechnology: selectedProject.projectTechnology,
      projectStyleTechnology: selectedProject.projectStyleTechnology,
    },
  });
  const dispatch = useDispatch();

  const updateProjectHandle = async (data) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/project/update/${selectedProject._id}`,
        data
      );
      setIsEditMode(false);
      dispatch(getAllMyProjects());
      toast.success("Proje başarıyla oluşturuldu.");
    } catch (error) {
      toast.error(
        "Hata oluştu: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Proje Oluştur</h2>
          <button
            onClick={() => setProjectModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit(updateProjectHandle)}
          className=" grid grid-cols-2 gap-3"
        >
          {projectInputs.map((input, i) => (
            <div key={i} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {input.label}
              </label>
              <input
                type={input.type}
                {...register(input.name, { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <input type="file" {...register("projectImage")} />

          <div className="flex justify-end col-span-2">
            <button
              type="button"
              onClick={() => setIsEditMode(false)}
              className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("root-modal")
  );
};

export default EditModal;
