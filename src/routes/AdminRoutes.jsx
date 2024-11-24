import AdminLayout from "~/layouts/AdminLayout";
import { roleLoader } from "~/loader/roleLoader";
import Projects from "~/pages/Admin/Projects/Projects";

export const AdminRoutes = {
  path: "/",
  element: <AdminLayout />,
  children: [
    {
      path: "/admin/projects",
      element: <Projects />,
      loader: () => roleLoader(),
    },
  ],
};
