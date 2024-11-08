import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const DashboardTitle = ({ title, children }) => {
  return (
    <div className="flex justify-between items-center space-x-2 p-4 bg-yellow-100 rounded-lg mb-5">
      <h1 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
        {" "}
        <IoMdArrowForward className="text-blue-500 text-2xl" /> {title}
      </h1>
      {children}
    </div>
  );
};

export default DashboardTitle;
