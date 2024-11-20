import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Sidebar from "~/components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <Sidebar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default AdminLayout;
