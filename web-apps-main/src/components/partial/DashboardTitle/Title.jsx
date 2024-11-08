import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const DashboardTitle = ({ title }) => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg">
      <IoMdArrowForward  className="text-blue-500 text-2xl" />
      <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
    </div>
  );
};

export default DashboardTitle;
