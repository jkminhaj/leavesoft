import { FaAngleRight } from "react-icons/fa6";
import React from "react";

function ToggleSidebarBtn({ isCollapsed, setIsCollapsed }) {
  return (
    <div className="absolute -left-4 z-50 top-8">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="rounded-lg pr-2 py-2 pl-6 bg-white  hover:bg-gray-300 text-gray-500 border border-gray-300 transition-colors"
      >
        <FaAngleRight
          className={`transform transition-transform text-[1rem] ${
            isCollapsed ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}

export default ToggleSidebarBtn;
