import AuthLayout from "~/layouts/AuthLayout";
import Login from "~/pages/Auth/Login";

export const AuthRoutes = {
  path: "/admin",
  element: <AuthLayout />,
  children: [{ path: "login", element: <Login /> }],
};
