import AdminLayout from "~/layouts/AdminLayout";
import Dashboard from "~/pages/Admin/Dashboard";

export const AdminRoutes = {
  path: "/",
  element: <AdminLayout />,
  children: [{ path: "dashboard", element: <Dashboard /> }],
};
