import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

//This is Login Page Root only and 404 page Root use for Outlet Component
const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
