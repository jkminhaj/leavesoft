import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hook/UseAxioSecure";
import { TfiSearch } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import Mmodal from "../../../components library/Mmodal";
import Mpagination from "../../../components library/Mpagination";
import { CiUser } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import Mtitle from "/src/components library/Mtitle";
import { ColorRing } from "react-loader-spinner";


const ManageClasses = () => {
  const axiosSecure = UseAxiosSecure();
  const branch = "shia";
  const [classes, setClasses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    instructor: "",
    duration: "",
    date: "",
    time: "",
    location: "",
    branch: branch,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editClassId, setEditClassId] = useState(null);
  const [filteredClass, setFilteredClass] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // Filter classes based on the search term
    const results = classes.filter((cls) =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClass(results);
  }, [searchTerm, classes]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axiosSecure.get(`/classes/${branch}/get-all`);
      setClasses(response.data);
      setFilteredClass(response.data);
    } catch (error) {
      console.error("There was an error fetching the classes!", error);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsEditing(false);
    setFormData({
      name: "",
      instructor: "",
      duration: "",
      date: "",
      time: "",
      location: "",
      branch: branch,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    axiosSecure
      .get(`/classes/get-id/${id}`)
      .then((response) => {
        const { name, instructor, duration, date, time, location } =
          response.data;

        // Convert time to 24-hour format if necessary
        const [hours, minutes, period] = time.toUpperCase().split(/[: ]/);
        const time24Hour =
          period === "PM" && hours !== "12"
            ? `${parseInt(hours, 10) + 12}:${minutes}`
            : `${hours}:${minutes}`;

        setFormData({
          name,
          instructor,
          duration,
          date,
          time: time24Hour,
          location,
          branch,
        });
        setIsEditing(true);
        setEditClassId(id);
        openModal();
      })
      .catch((error) => {
        console.error("There was an error fetching the class data!", error);
      });
  };

  const handleRemove = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/classes/delete/${id}`);
        fetchClasses(); // Refresh the list of classes
        Swal.fire("Deleted!", "Your class has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting class:", error);
        Swal.fire("Error!", "There was an error deleting the class.", "error");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axiosSecure.put(`/classes/put/${editClassId}`, formData);
        Swal.fire("Updated!", "The class has been updated.", "success");
      } else {
        await axiosSecure.post(`/classes/post`, formData);
        Swal.fire("Added!", "The new class has been added.", "success");
      }
      fetchClasses();
      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error!", "There was an error submitting the form.", "error");
    }
  };

  // Utility function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Utility function to format time
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const isPM = hour >= 12;
    const formattedHour = hour % 12 || 12;
    const ampm = isPM ? "PM" : "AM";
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  // calling pagination function
  const { paginatedData, paginationControls, rowsPerPageAndTotal } =
    Mpagination({ totalData: filteredClass ? filteredClass : classes });

  return (
    <div className="p-4">
      {/* Top part */}
      <Mtitle title="Manage Classes" rightcontent={
        <section className='flex justify-between'>
          <div className="flex justify-end gap-4 items-center mb-4">
            {/* Search bar */}
            <div className='w-64 border shadow-sm py-2 px-3 bg-white rounded-xl'>
              <div className='flex items-center gap-2'>
                <TfiSearch className='text-2xl font-bold text-gray-500' />
                <input type="text" value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} className='outline-none w-full' placeholder='Search class' />
              </div>
            </div>
            {/* Add new button */}
            <div className="flex gap-2 cursor-pointer items-center bg-yellow-500 text-white py-2 px-4 rounded-xl shadow hover:bg-yellow-600 transition duration-300">
              <button
                onClick={openModal}
                className="font-semibold"
              >
                New Class
              </button>
              <GoPlus className="text-xl text-white" />
            </div>
          </div>
        </section>
      } />

      {/* Items per page */}
      {rowsPerPageAndTotal}
      {/* Table part */}
      <section>
        <div className="overflow-x-auto border shadow-sm rounded-xl p-4 mt-5">
          <table className="table w-full">
            <thead className="bg-yellow-500">
              <tr className="text-sm font-medium text-white text-left">
                <td className="p-3 rounded-l-xl">Name</td>
                <td className="p-3">Instructor</td>
                <td className="p-3">Date</td>
                <td className="p-3">Time</td>
                <td className="p-3">Duration</td>
                <td className="p-3">Location</td>
                <td className="p-3 rounded-r-xl">Action</td>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-slate-100 hover:rounded-xl">
                  <td className="px-4 py-3 flex gap-3 justify-between">
                    {item.name}
                    <p className="flex items-center gap-2">
                      {item.registered.length}{" "}
                      <HiOutlineUsers className="text-gray-600" />
                    </p>
                  </td>
                  <td className="px-4 py-3">{item.instructor}</td>
                  <td className="px-4 py-3">{formatDate(item.date)}</td>
                  <td className="px-4 py-3">{formatTime(item.time)}</td>
                  <td className="px-4 py-3">{item.duration} minutes</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className="flex gap-3 text-base">
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="text-blue-500 hover:text-blue-700 mr-2"
                    >
                      <FiEdit3 />
                    </button>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {classes.length === 0 && (
            <div className="flex justify-center pt-20 pb-7">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          )}
          {paginationControls}
        </div>
      </section>

      {/* Modal for adding/editing a class */}
      <Mmodal isOpen={isOpen} onClose={closeModal}>
        <p className="text-2xl font-semibold mb-2">
          {isEditing ? "Edit Class" : "Add new class"}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Fill in the details for the class
        </p>
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Class Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Instructor Name
              </label>
              <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleInputChange}
                className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Duration (in mins)
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="focus:border-yellow-500 appearance-none text-gray-700 text-sm border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 font-semibold hover:bg-yellow-600 rounded-xl transition duration-300"
            >
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </Mmodal>
    </div>
  );
};

export default ManageClasses;
