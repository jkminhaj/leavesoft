import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import Header from './../../components/Header/header';
import Sidebar from "./../../components/Sidebar/Sidebar";
import { ChevronRight } from "lucide-react";
import ToggleSidebarBtn from "../../components/Sidebar/ToggleSidebarBtn/ToggleSidebarBtn";

const Root_Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar isCollapsed={isCollapsed} />
      {/* <Header/> */}
      <div className="p-8  bg-slate-50 h-dvh overflow-auto relative">
        <ToggleSidebarBtn
          setIsCollapsed={setIsCollapsed}
          isCollapsed={isCollapsed}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Root_Dashboard;
