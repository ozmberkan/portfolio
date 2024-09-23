import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectBox = ({ project }) => {
  const { theme } = useSelector((store) => store.theme);
  return (
    <div className="border border-zinc-600/30 rounded-xl flex sm:flex-row flex-col bg-mainBoxBg">
      <img
        src={project.image}
        className="sm:max-w-52 w-full object-cover sm:rounded-l-xl rounded-t-xl"
      />
      <div className="w-full h-full font-poppins text-mainWhiteText flex flex-col gap-y-2 justify-start items-start p-4">
        <span>{project.title}</span>
        <p className="text-xs">{project.description.slice(0, 170)}...</p>
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
