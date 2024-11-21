import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeRoutes } from "./routes/HomeRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMyProjects } from "./redux/slices/projectsSlice";

const App = () => {
  const router = createBrowserRouter([HomeRoutes, AuthRoutes, AdminRoutes], {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  });

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
