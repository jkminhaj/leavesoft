import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashboardTitle from "../../../components/partial/DashboardTitle/Title";
import Modal from "./Modal"; // Adjust the import path accordingly
import { FaEdit, FaTrash } from "react-icons/fa";
import UseAxiosSecure from "../../../Hook/UseAxioSecure";
import { GoPlus } from "react-icons/go";
import { TfiSearch } from "react-icons/tfi";
import { IoCloseOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

import Pagination from "../../../components/pagination";
import { HeartIcon, PlusIcon } from "lucide-react";
import Mpagination from "../../../components library/Mpagination";
import { toFormData } from "axios";
import MtableLoading from "../../../components library/MtableLoading";
import Mtitle from "/src/components library/Mtitle";
const MemberPackage = ({ isFilter = true }) => {
  const branch = "shia";
  const axiosSecure = UseAxiosSecure();
  const [packages, setPackages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editPackageId, setEditPackageId] = useState(null);

  const [isAmountManuallyChanged, setIsAmountManuallyChanged] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    schedule: "",
    duration: "",
    gender: "",
    admissionFee: 0,
    packageFee: 0,
    amount: 0,
    branch: branch,
    status: "active",
  });

  useEffect(() => {
    axiosSecure
      .get(`/package/${branch}/get-all/`)
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the packages!", error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading after data is fetched
      });
  }, []);

  function closeModal() {
    setIsOpen(false);
    setIsEditing(false);
    setFormData({
      name: "",
      schedule: "",
      duration: "",
      gender: "",
      admissionFee: 0,
      packageFee: 0,
      amount: 0,
      branch: branch,
      status: "active",
    });
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "admissionFee" || name === "packageFee" || name === "amount"
        ? parseFloat(value) || 0
        : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });

    if (
      (name === "admissionFee" || name === "packageFee") &&
      !isAmountManuallyChanged
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: parsedValue,
        amount:
          parseFloat(prevFormData.packageFee) +
          parseFloat(prevFormData.admissionFee),
      }));
    }
  };

  const formatSchedule = (schedule) => {
    switch (schedule) {
      case "00.00-23.59":
        return "24/7";
      case "07.00-15.00":
        return "Morning Shift";
      case "15.00-23.00":
        return "Evening Shift";
      default:
        return schedule;
    }
  };

  const formatDuration = (duration) => {
    if (duration === "1500") return "Lifetime";
    if (duration === 365 || duration === 366) return "1 year";

    const years = Math.floor(duration / 365);
    duration %= 365;
    const months = Math.floor(duration / 30);
    duration %= 30;
    const weeks = Math.floor(duration / 7);
    const days = duration % 7;

    let formattedDuration = "";

    if (years > 0) {
      formattedDuration += `${years} year${years > 1 ? "s" : ""} `;
    }
    if (months > 0) {
      formattedDuration += `${months} month${months > 1 ? "s" : ""} `;
    }
    if (weeks > 0) {
      formattedDuration += `${weeks} week${weeks > 1 ? "s" : ""} `;
    }
    if (days > 0) {
      formattedDuration += `${days} day${days > 1 ? "s" : ""}`;
    }

    return formattedDuration.trim();
  };

  const handleAmountChange = (e) => {
    setIsAmountManuallyChanged(true);
    const amount = parseFloat(e.target.value) || 0;
    setFormData({
      ...formData,
      amount: amount,
    });
  };

  const formatFee = (fee) => {
    return fee === 0 ? "Full Free" : fee;
  };

  useEffect(() => {
    if (!isAmountManuallyChanged) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        amount:
          parseFloat(prevFormData.packageFee) +
          parseFloat(prevFormData.admissionFee),
      }));
    }
  }, [formData.packageFee, formData.admissionFee]);

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.schedule ||
      !formData.duration ||
      !formData.gender
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsLoading(true);
    const axiosMethod = isEditing ? axiosSecure.put : axiosSecure.post;
    const url = isEditing ? `/package/put/${editPackageId}` : "/package/post";

    const { _id, ...payload } = formData;

    console.log("Submitting formData:", payload);

    axiosMethod(url, payload)
      .then((response) => {
        if (isEditing) {
          setPackages(
            packages.map((pkg) =>
              pkg._id === editPackageId ? response.data : pkg
            )
          );
        } else {
          setPackages([...packages, response.data]);
        }
        closeModal();
        Swal.fire({
          title: "Success!",
          text: `Package ${isEditing ? "updated" : "added"} successfully!`,
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(
          `There was an error ${isEditing ? "updating" : "adding"
          } the package!`,
          error
        );

        if (error.response) {
          console.error("Error response:", error.response);
          Swal.fire({
            title: "Error!",
            text: `Error: ${error.response.data.message ||
              "An error occurred while processing your request."
              }`,
            icon: "error",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "There was an error updating the package!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleEdit = (id) => {
    axiosSecure
      .get(`/package/get-id/${id}`)
      .then((response) => {
        setFormData(response.data);
        setIsEditing(true);
        setEditPackageId(id);
        openModal();
      })
      .catch((error) => {
        console.error("There was an error fetching the package data!", error);
      });
  };

  const handleRemove = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fda93c11",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/package/delete/${id}`);
        const res = await axiosSecure.get(`/package/${branch}/get-all/`);
        setPackages(res.data);
        // setCount(res.data.length);
        Swal.fire("Deleted!", "Your package has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting package :", error);
        Swal.fire(
          "Error!",
          "There was an error deleting the package.",
          "error"
        );
      }
    }
  };

  // const { paginatedData, paginationControls, handleItemsPerPage, itemsPerPage } = Pagination({ totalData: packages });
  const { paginatedData, paginationControls, rowsPerPageAndTotal } =
    Mpagination({ totalData: packages });
  return (
    <div className="p-4">
      {/* <LoadingSpinner isLoading={isLoading} /> Add the loading spinner */}
      {/* <DashboardTitle title="Member Package" /> */}

      {isFilter && (
        <Mtitle title="Packages" rightcontent={
          <div className="flex justify-between">
            <div className="flex justify-end gap-4 items-center">
              {/* search bar */}
              <div className="w-64 border shadow-sm py-2 px-3 bg-white  rounded-xl">
                <div className="flex items-center gap-2">
                  <TfiSearch className="text-2xl font-bold text-gray-500" />
                  <input
                    type="text"
                    className="outline-none  w-full "
                    placeholder="Search package"
                  />
                </div>
              </div>
              {/* add new button */}
              <div className="flex gap-2 cursor-pointer items-center bg-yellow-500 text-white py-2 px-4 rounded-xl shadow hover:bg-yellow-600 transition duration-300">
                <button onClick={openModal} className="font-semibold">
                  Add New
                </button>
                <GoPlus className="text-xl text-white" />
              </div>
            </div>
          </div>
        }></Mtitle>

      )}

      {rowsPerPageAndTotal}

      <div className="overflow-x-auto border shadow-sm rounded-xl p-4 mt-5">
        <table className="table w-full">
          <thead className="bg-yellow-500">
            <tr className="text-sm  font-medium  text-white text-left">
              <td className="p-3 rounded-l-xl">Name</td>
              <td className="p-3">Schedule</td>
              <td className="p-3">Duration</td>
              <td className="p-3">Gender</td>
              <td className="p-3">Admission Fee</td>
              <td className="p-3">Package Fee</td>
              <td className="p-3">Amount</td>
              <td className="p-3">Status</td>
              <td className="p-3 rounded-r-xl">Action</td>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((pkg, index) => (
              <tr key={index} className="hover:bg-slate-100 hover:rounded-xl">
                <td className="px-4 py-3">{pkg.name}</td>
                <td className="px-4 py-3">{formatSchedule(pkg.schedule)}</td>
                <td className="px-4 py-3">{formatDuration(pkg.duration)}</td>
                <td className="px-4 py-3 first-letter:uppercase lowercase">
                  {pkg.gender}
                </td>
                <td className="px-4 py-3">{pkg.admissionFee}</td>
                <td className="px-4 py-3">{pkg.packageFee}</td>
                <td className="px-4 py-3">{formatFee(pkg.amount)}</td>
                <td className="px-4 text-left py-3">
                  <div className="flex justify-start items-center gap-1">
                    <GoDotFill
                      className={`text-xs ${pkg.status === "inactive"
                          ? "text-[#f70000e0]"
                          : "text-green-500"
                        }`}
                    />
                    <span className="first-letter:uppercase">{pkg.status}</span>
                  </div>
                </td>
                <td className="flex gap-3 text-base">
                  <button
                    onClick={() => handleEdit(pkg._id)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <FiEdit3 />
                  </button>
                  <button
                    onClick={() => handleRemove(pkg._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MtableLoading data={packages}></MtableLoading>
        {paginationControls}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium leading-6 text-gray-900">
            {isEditing ? "Edit Package" : "Add New Package"}
          </h3>
          <div className="flex justify-end">
            <button onClick={closeModal} className=" transition duration-300">
              <IoCloseOutline className="text-xl text-gray-400" />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Fill in the details for the {isEditing ? "editing" : "new"} package.
          </p>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl  w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Schedule
                </label>
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl  w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Schedule</option>
                  <option value="00.00-23.59">24 hours</option>
                  <option value="07.00-15.00">
                    Morning Shift (7 am to 3 pm)
                  </option>
                  <option value="15.00-23.00">
                    Evening Shift (3 pm to 11 pm)
                  </option>
                  <option value="00.00-23.59">Staff 24 hours</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl  w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Duration</option>
                  <option value="1">1 day</option>
                  <option value="3">3 days</option>
                  <option value="7">1 week</option>
                  <option value="14">2 weeks</option>
                  <option value="21">3 weeks</option>
                  <option value="30">1 month</option>
                  <option value="60">2 months</option>
                  <option value="90">3 months</option>
                  <option value="120">4 months</option>
                  <option value="150">5 months</option>
                  <option value="180">6 months</option>
                  <option value="270">9 months</option>
                  <option value="365">1 year</option>
                  <option value="395">13 months</option>
                  <option value="455">15 months</option>
                  <option value="540">18 months</option>
                  <option value="630">21 months</option>
                  <option value="730">2 years</option>
                  <option value="1500">Lifetime</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl  w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHERS">Others</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Admission Fee
                </label>
                <input
                  type="number"
                  name="admissionFee"
                  value={formData.admissionFee}
                  onChange={handleChange}
                  className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl  w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Package Fee
                </label>
                <input
                  type="number"
                  name="packageFee"
                  value={formData.packageFee}
                  onChange={handleChange}
                  className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl  w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleAmountChange}
                  className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl  w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            {/* radio */}
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label mb-1 cursor-pointer gap-3">
                  <span className="label-text">Active</span>
                  <input
                    type="radio"
                    name="status"
                    className="radio theme-controller"
                    value="active"
                    checked={formData.status === "active"}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer gap-3">
                  <span className="label-text">Inactive</span>
                  <input
                    type="radio"
                    name="status"
                    className="radio theme-controller"
                    value="inactive"
                    checked={formData.status === "inactive"}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="bg-yellow-500 text-white py-2 px-4 font-semibold hover:bg-yellow-600 rounded-xl transition duration-300"
                onClick={() => handleSubmit(formData)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default MemberPackage;
