import { collection } from "firebase/firestore";
import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import ProjectBox from "~/components/Projects/ProjectBox";
import { db } from "~/firebase/firebase";
import { setProjects } from "~/redux/slices/projectsSlice";

const Projects = () => {
  const projectsRef = collection(db, "projects");
  const [snapshot] = useCollection(projectsRef);
  const dispatch = useDispatch();

  const data = snapshot?.docs?.map((project) => ({
    id: project.id,
    ...project.data(),
  }));

  useEffect(() => {
    dispatch(setProjects(data));
  }, [data]);

  return (
    <div className="w-full h-5/6 p-12 grid grid-cols-3 gap-5">
      {data?.map((project) => (
        <ProjectBox key={project.id} project={project} />
      ))}
      <span className="text-mainWhiteText text-sm font-poppins">...</span>
    </div>
  );
};

export default Projects;
