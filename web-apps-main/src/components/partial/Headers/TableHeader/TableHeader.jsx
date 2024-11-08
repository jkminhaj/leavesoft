import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
function TableHeader({
  setIsShowRegister,
  totalItems,
  setResetFields,
  isMember = true,
  isReset = true,
  title = "All members",
}) {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500); // Reset after animation
  };
  return (
    <div className="flex items-center justify-between">
      {isMember && (
        <b>
          <span className="font-medium text-xl" id="MemberStatus">
            {title}
          </span>
        </b>
      )}
      {!isMember && (
        <button
          id="btnAddMember"
          type="button"
          className="btn btn-xs btn-neutral rounded-full"
          data-toggle="modal"
          data-target="#MemberCreateModal"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      )}

      <div className="flex gap-5 mb-3">
        {isReset && (
          <div
            className="flex gap-3 cursor-pointer items-center hover:bg-yellow-700 hover:text-white py-2 px-4 rounded-xl  border hover:border-transparent  text-gray-700  border-yellow-400 transition duration-300"
            onClick={() => {
              handleClick();
              setResetFields((prevValue) => (prevValue += 1));
            }}
          >
            <button
              id="btnAddMember"
              type="button"
              className="font-semibold"
              data-toggle="modal"
              data-target="#MemberCreateModal"
            >
              Reset Fields
            </button>

            <VscDebugRestart
              className={`transform transition-transform duration-500 ${
                isRotating ? "rotate-[360deg]" : ""
              }`}
              style={{
                transform: isRotating ? "rotate(-360deg)" : "rotate(0)",
              }}
            />
          </div>
        )}

        {isMember && (
          <div className="space-x-4">
            <div className="flex gap-3 cursor-pointer  items-center bg-yellow-500 text-white py-2 px-4 rounded-xl shadow hover:bg-transparent hover:bg-yellow-600 hover:border border hover:border-gray-300 hover:shadow-none transition duration-300">
              <button
                id="btnAddMember"
                type="button"
                className="font-semibold"
                data-toggle="modal"
                data-target="#MemberCreateModal"
                onClick={() => setIsShowRegister(true)}
              >
                Register Member
              </button>

              <IoPersonAdd />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TableHeader;
