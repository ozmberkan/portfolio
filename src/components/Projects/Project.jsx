import React from "react";
import { Link } from "react-router-dom";
import goalBoard from "~/assets/images/goalboard.png";
import { IoIosArrowForward } from "react-icons/io";

const Project = () => {
  return (
    <div className="container max-w-5xl mx-auto  flex w-full py-6 ">
      <div className="w-1/2 p-5 flex justify-between items-start flex-col font-inter">
        <span className="text-sm font-semibold text-neutral-400">
          JULY 2020
        </span>
        <h1 className="text-xl font-bold text-neutral-700">goalBoard</h1>
        <p>Manage your projects quickly</p>
        <p>
          goalBoard is a goal-oriented project management application where
          teams can set and track goals and manage projects. With real-time
          updates and comment features, it facilitates team collaboration and
          helps complete projects on time.
        </p>
        <Link
          to="#"
          className="font-semibold flex items-center gap-x-1 hover:text-[#202020] "
        >
          Visit website <IoIosArrowForward />{" "}
        </Link>
      </div>
      <div className="w-1/2  flex justify-center items-center">
        <img src={goalBoard} className="w-[800px] " />
      </div>
    </div>
  );
};

export default Project;
