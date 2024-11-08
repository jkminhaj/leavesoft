import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link } from "react-router-dom";
import moment from "moment";
import InvoiceRow from "./InvoiceRow/InvoiceRow";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import UseAxiosSecure from "../../../../Hook/UseAxioSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { TbMessageDots } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import SMSModal from "../../SendSMS/SMSModal";

function TableRow({
  data,
  setIsShowEditMember,
  setIsShowNote,
  setUserId,
  isShowManagePackageBtn = false,
  setIsShowAddPackage,
  isAddPackageBtn = false,
  invoiceData,
  setIsDeleteMember,
  setIsDeleteInvoice,
  isSMSModalOpen = false,
  setSMSModalOpen = false,
  contactNumber = "",
  setContactNumber = "",
  branch = "",
  setbranch = "",
  userId = "",
  setIsShowPrint,
  setPrintData,
  setPrintType,
  printData,
  handleGetPrintData,
}) {
  const axiosSecure = UseAxiosSecure();

  const handleMemberDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure you want to delete this member?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axiosSecure.delete(`/users/delete/${id}`);
            if (res.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
              });
              setIsDeleteMember((prev) => !prev);
              setIsDeleteInvoice((prev) => !prev);
            } else if (res.status === 201) {
              Swal.fire({
                title: "Deleted with some issues!",
                text: "User and invoice deleted, but door access data not found.",
                icon: "info",
              });
            } else if (res.status === 202) {
              Swal.fire({
                title: "Deleted with some issues!",
                text: "User deleted, but invoice and door access data not found.",
                icon: "info",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: res.data.message || "Failed to delete the member.",
                icon: "error",
              });
            }
          } catch (error) {
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the member.",
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: "Cancelled",
            text: "The member was not deleted.",
            icon: "info",
          });
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to delete the member.",
        icon: "error",
      });
      console.error("Error during member deletion", error);
    }
  };

  return (
    <>
      <tr className="border-b bg-white">
        <td className="w-full  lg:w-auto ">
          <div className="relative">
            <div className="">
              <div className="relative w-20 h-20">
                <img
                  className="h-full rounded-full w-full object-cover object-center bg-white"
                  src={
                    data?.photourl
                      ? data.photourl
                      : "https://multigympremium.com/uploads/nophoto.png"
                  }
                  alt={`Photo of ${data?.full_name || "Unknown"}`}
                />
                <div className="absolute -right-1 bottom-0">
                  {new Date() >= new Date(data?.expiredate) ? (
                    <div className="text-white rounded-full max-w-min text-xl p-1 bg-red-500 shadow">
                      <RxCross2 />
                    </div>
                  ) : (
                    <div className="text-white rounded-full max-w-min text-xl p-1 bg-green-500 shadow">
                      <MdDone />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              onClick={() => setIsShowNote(true)}
              className="flex  bg-neutral-800 cursor-pointer transition-all duration-700  gap-1 max-w-min px-1 -ml-2 py-1 rounded-lg text-white"
            >
              <p className="text-xs">Note</p>
              <div className="flex rounded-md  items-center">
                <span className=" flex items-center gap-2 cursor-pointer">
                  <LuPencilLine className=" text-xs" />
                </span>
              </div>
            </div>
          </div>
        </td>

        <td className="text-left space-y-1">
          <h3 className="text-lg font-semibold">Name</h3>
          <h3 className="text-lg font-semibold">{data?.full_name}</h3>

          <p>{data?.notes}</p>
        </td>
        <td className="text-left space-y-1">
          <h3 className="text-lg font-semibold">Member Id</h3>
          <h5 className="text-md">({data?.member_id}) </h5>
        </td>
        <td className="text-left space-y-1">
          <h3 className="text-lg font-semibold">Gender - Blood Group</h3>
          <h5 className="text-md">
            {" "}
            {data.gender} - ({data?.blood_group})
          </h5>
        </td>

        <td className="font-semibold">
          <h5>Contact No</h5>
          <h5>{data?.contact_no}</h5>
          <div
            className="flex  cursor-pointer max-w-max mt-2  transition-all duration-800 bg-white hover:text-white hover:bg-neutral-800 gap-2 items-center px-2 py-[3px] rounded-lg border"
            onClick={() => {
              setSMSModalOpen(true);
              setContactNumber(data?.contact_no);
              setbranch(data?.branch);
            }}
          >
            <p>Send SMS</p>
            <div className="flex rounded-md  items-center border-bottom-1">
              <span className=" flex items-center gap-2 cursor-pointer">
                <TbMessageDots className="text-lg" />
              </span>
            </div>
          </div>
        </td>

        <td className="font-semibold">
          <h5>Card No</h5>
          <h5>{data?.card_no} </h5>
          {data?.Locker_id ? <h5>Locker : YES</h5> : null}
        </td>

        <td className="font-semibold">
          <h5>Expire Date</h5>
          <h5>{data?.expiredate}</h5>
        </td>

        <td className=" flex pt-8 flex-row-reverse justify-end text-left   items-center">
          {isShowManagePackageBtn && (
            <Link
              to={`/dashboard/add_package/${data._id}`}
              className="p-2 text-center hover:bg-slate-700 hover:text-white rounded-lg"
            >
              <MdOutlineManageAccounts className="text-3xl  rounded-lg transition duration-300  " />
            </Link>
          )}
          {isAddPackageBtn ? (
            <button
              className="btn btn-neutral flex items-center  gap-2 cursor-pointer text-white"
              onClick={() => {
                setIsShowAddPackage(true);
                setUserId(data._id);
              }}
            >
              <FaRegEdit />
              <span className="hover:underline">Add Package</span>
            </button>
          ) : (
            <button
              className="cursor-pointer text-3xl p-2 rounded-lg transition duration-300 hover:bg-slate-700 hover:text-white "
              onClick={() => {
                setIsShowEditMember(true);
                setUserId(data._id);
              }}
            >
              <FiEdit className="" />
            </button>
          )}
        </td>
        <td className="font-semibold">
          <button
            className="flex  hover:text-red-500  transition-all duration-500 items-center gap-3 text-gray-600 flex-row-reverse text-3xl hover:bg-red-200 p-2 rounded-lg -mt-4"
            onClick={() => handleMemberDelete(data._id)}
          >
            <AiOutlineDelete className="" />
          </button>
        </td>
      </tr>

      {isAddPackageBtn && (
        <InvoiceRow
          invoiceData={invoiceData}
          data={data}
          setIsShowNote={setIsShowNote}
          setIsDeleteInvoice={setIsDeleteInvoice}
          setIsDeleteMember={setIsDeleteMember}
          userId={userId}
          setIsShowPrint={setIsShowPrint}
          setPrintData={setPrintData}
          setPrintType={setPrintType}
          printData={printData}
          handleGetPrintData={handleGetPrintData}
        />
      )}

      {/* Render SMS Modal */}
      {/* <SMSModal
        isOpen={isSMSModalOpen}
        onClose={() => setSMSModalOpen(false)}
        contactNumber={contactNumber}
        userbranch={branch}
      /> */}
    </>
  );
}

export default TableRow;
