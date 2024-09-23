import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { db } from "~/firebase/firebase";
import { setProjects } from "~/redux/slices/projectsSlice";
import ProjectBox from "~/components/Projects/ProjectBox";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Projects = () => {
  const projectsRef = collection(db, "projects");
  const [snapshot, loading, error] = useCollection(projectsRef);
  const dispatch = useDispatch();

  const data = snapshot?.docs?.map((project) => ({
    id: project.id,
    ...project.data(),
  }));

  useEffect(() => {
    if (data && !loading) {
      dispatch(setProjects(data));
    }
  }, [data, loading, dispatch]);

  return (
    <div className="w-full h-5/6 p-12 grid sm:grid-cols-3 grid-cols-1 gap-5">
      {loading
        ? Array(7)
            .fill(0)
            .map((_, idx) => (
              <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton key={idx} height={170} />
              </SkeletonTheme>
            ))
        : data?.map((project) => (
            <ProjectBox key={project.id} project={project} />
          ))}
    </div>
  );
};

export default Projects;
