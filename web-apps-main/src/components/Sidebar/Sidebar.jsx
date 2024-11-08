// Sidebar.js
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
import { CiLogout } from "react-icons/ci";
import "./Sidebar.css";
import MenuLink from "./MenuLink/MenuLink";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../Hook/UseAxioSecure";
import MenuItems from "./MenuItems";

const Sidebar = ({ isCollapsed }) => {
  const { logOut, setUser } = useContext(AuthContext);
  const location = useLocation();
  console.log("location", location);
  const navigate = useNavigate();
  const [permissionData, setPermissionData] = useState([]);
  const axiosSecure = UseAxiosSecure();
  // const UserRole = "Front Desk Officer"; // add later
  const user = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser == "undefined" || storedUser == null
      ? null
      : JSON.parse(storedUser);
  };
  console.log("user sidebar", user());

  const UserRole = user()?.role; // add later
  // const UserRole = "Coffee Shop Staff"; // add later
  // const UserRole = "Operation Manager"; // add later

  console.log("MenuItems", MenuItems);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User logged out successfully");
        // Swal.fire({
        //   icon: "success",
        //   title: "Logout Successful",
        //   text: "You have successfully logged out.",
        // }).then(() => {});

        setUser(null);
        navigate("/", { replace: true });
        // location.reload();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Logout failed. Please try again later.",
        });
        console.error(error);
      });
  };

  const isActiveLink = (pathName, currentPath) => {
    const splitPath = currentPath.split("/")[2];
    console.log("splitPath", splitPath, pathName, currentPath);
    if (pathName === splitPath) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className={`sidebar border-r border-gray-400 border-dashed h-dvh overflow-auto p-4 poppins text-[#737373] ${
        isCollapsed ? "w-[80px]" : "w-[270px]"
      } bg-white shadow-lg transition-all duration-300`}
    >
      <div className="flex flex-col items-center mb-6">
        {!isCollapsed && (
          <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />
        )}
      </div>

      {/* Menu */}
      <nav className="text-base font-normal">
        <ul>
          {MenuItems(UserRole)?.length > 1
            ? MenuItems(UserRole).map((cat) => (
                <li key={cat.title} className="mb-2">
                  <div className="collapse focus:border bg-gray-50 p-1 pt-3 hover:shadow rounded-xl">
                    <input
                      type="checkbox"
                      id={`collapse-${cat.title}`}
                      className="hidden"
                    />
                    <label
                      htmlFor={`collapse-${cat.title}`}
                      className="font-medium flex items-center gap-2 cursor-pointer pl-4"
                    >
                      {!isCollapsed && cat.icon}
                      {!isCollapsed && cat.title}
                    </label>
                    <div className="collapse-content px-1 pt-2">
                      {cat.list &&
                        cat.list.map((item) => (
                          <MenuLink
                            item={item}
                            key={item.title}
                            location={location}
                            isCollapsed={isCollapsed}
                          />
                        ))}
                    </div>
                  </div>
                </li>
              ))
            : MenuItems(UserRole).map((cat) => (
                <li key={cat.title} className="mb-2">
                  <div className=" px-1 pt-2">
                    {cat.list &&
                      cat.list.map((item) => (
                        <Link
                          key={item.title}
                          to={"/dashboard/" + item.path}
                          className={`flex items-center text-[24px] gap-2 p-2 rounded-lg transition-colors mb-3 ${
                            isActiveLink(item.path, location.pathname)
                              ? "bg-[#eba21c] text-white shadow"
                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          <span className="text-2xl">{item.icon}</span>
                          {/* {item.icon} */}
                          {!isCollapsed && <span>{item.title}</span>}
                        </Link>
                      ))}
                  </div>
                </li>
              ))}
        </ul>
      </nav>

      {/* Logout part */}
      <div className="mt-auto">
        <button
          onClick={handleLogOut}
          className="w-full p-3 flex items-center justify-center gap-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          <CiLogout size={24} />
          {!isCollapsed && <span>Log Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
