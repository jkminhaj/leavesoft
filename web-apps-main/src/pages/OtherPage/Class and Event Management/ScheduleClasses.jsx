import React, { useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import Mpagination from "../../../components library/Mpagination";
import UseAxiosSecure from "../../../Hook/UseAxioSecure";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Mtitle from "/src/components library/Mtitle";
import { ColorRing } from "react-loader-spinner";


const ScheduleClasses = () => {
  // /register/:classId
  const axiosSecure = UseAxiosSecure();
  const branch = "shia";
  const [classes, setClasses] = useState([]);
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

  // Functions
  const userName = "Doraemon Rana"
  const userEmail = "Doraemon@gmail.com"
  const userPhoto = "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png";


  const handleRegister = async (classId) => {
    try {
      const response = await axiosSecure.post(`/classes/register/${classId}`, {
        name: userName,
        email: userEmail,
        photo: userPhoto,
      });

      if (response.status === 200) {
        alert("Registration successful:", response.data);
        // console.log(typeof userPhoto)
        // You can also add more logic here, like updating the UI
      } else {
        alert("Unexpected response:", response);
      }
    } catch (error) {
      alert("Error registering user:", error.response?.data || error.message);
      console.log(error);
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

  // calling pagination funciton
  const { paginatedData, paginationControls, rowsPerPageAndTotal } =
    Mpagination({ totalData: filteredClass ? filteredClass : classes });

  return (
    <>
      <section className="p-4">
        <Mtitle title="Shedule Classes"
          rightcontent={
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
                    className="font-semibold"
                  >
                    Button
                  </button>
                  <GoPlus className="text-xl text-white" />
                </div>
              </div>
            </section>
          } />

        {/* Items per page */}
        {rowsPerPageAndTotal}

        {/* table */}
        <section className="overflow-x-auto border shadow-sm rounded-xl p-4 mt-5">
          <table className="table w-full">
            <thead className="bg-yellow-500">
              <tr className="text-sm font-medium text-white text-left">
                <td className="p-3 rounded-l-xl">Name</td>
                <td className="p-3">Instructor</td>
                <td className="p-3">Date</td>
                <td className="p-3">Time</td>
                <td className="p-3">Duration</td>
                <td className="p-3">Location</td>
                <td className="p-3  rounded-r-xl">Action</td>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index} className="hover:bg-slate-100 hover:rounded-xl">
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.instructor}</td>
                  <td className="px-4 py-3">{formatDate(item.date)}</td>
                  <td className="px-4 py-3">{formatTime(item.time)}</td>
                  <td className="px-4 py-3">{item.duration} minutes</td>
                  <td className="px-4 py-3">{item.location}</td>
                  <td className=" hover:text-blue-500  py-3 cursor-pointer" onClick={() => { handleRegister(item._id) }}>Register</td>

                </tr>
              ))}
            </tbody>
          </table>
          {/* use  Mpagination for pagination and MtableLoading for table loading    */}
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
        </section>
      </section>
    </>
  );
};

export default ScheduleClasses;
