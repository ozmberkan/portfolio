import { redirect } from "react-router-dom";

export const roleLoader = async () => {
  const user = JSON.parse(localStorage.getItem("adminUserForBerkan"));

  if (!user) {
    return redirect("/");
  }

  return null;
};
