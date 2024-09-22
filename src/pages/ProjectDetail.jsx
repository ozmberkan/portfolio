import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projects } = useSelector((store) => store.projects);
  const { id } = useParams();

  // ID'lerin aynı formatta olup olmadığını kontrol etmek
  const detailedProject = projects.find(
    (project) => String(project.id) === String(id)
  );

  if (!detailedProject) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="h-auto w-full p-10 flex flex-col items-center font-poppins">
      {/* Proje Görseli */}
      <div className="w-full md:w-2/3 lg:w-1/2 h-64 mb-6">
        <img
          src={detailedProject.image}
          alt={detailedProject.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Proje Başlığı */}
      <h2 className="text-4xl  text-mainWhiteText mb-4 font-jersey ">
        {detailedProject.title} - {detailedProject.version}
      </h2>

      {/* Proje Açıklaması */}
      <p className="text-lg text-mainWhiteText text-center mb-8 px-4 md:px-0">
        {detailedProject.description}
      </p>

      {/* Proje Detay Bilgileri */}
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center gap-4">
        {/* Proje Önceki Versiyon */}
        <div className="flex justify-between w-full">
          <span className="text-mainWhiteText">Previous Version:</span>
          <span className="text-mainWhiteText font-medium">
            {detailedProject.prevVersion}
          </span>
        </div>

        {/* Proje Teknolojileri */}
        <div className="flex flex-wrap justify-center w-full">
          <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full m-1">
            {detailedProject.technology}
          </span>
          <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full m-1">
            {detailedProject.styleTech}
          </span>
        </div>

        {/* Responsive Durumu */}
        <div className="flex justify-between w-full">
          <span className="text-mainWhiteText">Responsive:</span>
          <span className="text-mainWhiteText font-medium">
            {detailedProject.responsive === "true" ? "Yes" : "No"}
          </span>
        </div>

        {/* Proje Linkleri (GitHub ve Canlı Demo) */}
        {detailedProject.githubLink && (
          <div className="w-full mt-6 flex justify-center gap-4">
            <a
              href={detailedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>
            <a
              href={detailedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
