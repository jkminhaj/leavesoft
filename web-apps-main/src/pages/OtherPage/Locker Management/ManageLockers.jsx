import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState, useEffect } from 'react';
import { IoFilterOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import UseAxiosSecure from '../../../Hook/UseAxioSecure.jsx';
import { GoPlus } from 'react-icons/go';
import { TfiSearch } from 'react-icons/tfi';
import Mpagination from '../../../components library/Mpagination.jsx';
import Swal from 'sweetalert2';
import LockerModal from './LockerModal.jsx';
import Mtitle from './../../../components library/Mtitle.jsx';

const groups = ["Premium", "Standard", "VIP"];
const statuses = ["occupied", "available", "reserved"];
const genders = ["Gents", "Female", "Common"];

const ManageLockers = () => {
  const axiosSecure = UseAxiosSecure();
  const branch = 'shia';
  const [lockers, setLockers] = useState([]);
  const [filteredLockers, setFilteredLockers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState('Premium');
  const [status, setStatus] = useState('available');
  const [gender, setGender] = useState('Gents');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLocker, setCurrentLocker] = useState(null);

  useEffect(() => {
    const fetchLockers = async () => {
      try {
        setLoading(true);
        const response = await axiosSecure.get(`/lockers/${branch}/${group}/${gender}/${status}`);
        setLockers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lockers:', error);
        setLoading(false);
      }
    };

    fetchLockers();
  }, [group, gender, status, axiosSecure]);

  useEffect(() => {
    const applyFilters = () => {
      setLoading(true);
      let filtered = lockers;

      if (searchTerm) {
        filtered = filtered.filter(locker => locker.lockerName.toLowerCase().includes(searchTerm.toLowerCase()));
      }

      setFilteredLockers(filtered);
      setLoading(false);
    };

    applyFilters();
  }, [lockers, group, status, gender, searchTerm]);

  const handleEdit = (id) => {
    setLoading(true);
    if (!id || typeof id !== 'string' || id.trim() === '') {
      Swal.fire({
        title: 'Invalid Locker ID',
        text: 'The locker ID is invalid. Please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
      setLoading(false);
      return;
    }
  
    const lockerToEdit = lockers.find(locker => locker._id === id);
  
    if (!lockerToEdit) {
      Swal.fire({
        title: 'Locker Not Found',
        text: 'The locker with the specified ID does not exist.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
      setLoading(false);
      return;
    }
  
    setCurrentLocker(lockerToEdit);
    setIsModalOpen(true);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    if (!id || typeof id !== 'string' || id.trim() === '') {
      Swal.fire({
        title: 'Invalid Locker ID',
        text: 'The locker ID is invalid. Please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK'
      });
      setLoading(false);
      return;
    }
  
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
  
      if (result.isConfirmed) {
        await axiosSecure.delete(`/lockers/${id}`);
  
        setLockers(lockers.filter(locker => locker._id !== id));
        setFilteredLockers(filteredLockers.filter(locker => locker._id !== id));
  
        Swal.fire('Deleted!', 'The locker has been deleted.', 'success');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error deleting locker:', error);
      Swal.fire('Error!', 'There was an error deleting the locker.', 'error');
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setLoading(true);
    setCurrentLocker(null);
    setIsModalOpen(true); // Open modal
    setLoading(false);
  };

  const handleSave = async () => {
    setLoading(true);
    if (!currentLocker) {
      setLoading(false);
      return;
    }

    try {
      if (currentLocker._id) {
        // Update existing locker
        await axiosSecure.put(`/lockers/put/${currentLocker._id}`, currentLocker);
      } else {
        // Add new locker
        await axiosSecure.post("/lockers/post", currentLocker);
      }
      setIsModalOpen(false);
      const response = await axiosSecure.get(`/lockers/${branch}/${group}/${gender}/${status}`);
      setLockers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error saving locker:', error);
      Swal.fire('Error!', 'There was an error saving the locker.', 'error');
      setLoading(false);
    }
  };

  const { paginatedData, paginationControls, rowsPerPageAndTotal } = Mpagination({ totalData: filteredLockers });

  return (
    <div className='px-2'>
      <Mtitle
        title="Manage Lockers"
        rightcontent={
          <div className='flex justify-between'>
            <div className="flex justify-end gap-4 items-center mb-4">
              <div className='w-64 border shadow-sm py-2 px-3 bg-white rounded-xl'>
                <div className='flex items-center gap-2'>
                  <TfiSearch className='text-2xl font-bold text-gray-500' />
                  <input
                    type="text"
                    className='outline-none w-full'
                    placeholder='Search here'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-2 cursor-pointer items-center bg-yellow-500 text-white py-2 px-4 rounded-xl shadow hover:bg-yellow-600 transition duration-300">
                <button onClick={handleAddNew} className="font-semibold">Add New</button>
                <GoPlus className="text-xl text-white" />
              </div>
            </div>
          </div>
        }
      ></Mtitle>

      {rowsPerPageAndTotal}
      <div className="mt-5">
        <div className=' flex flex-row-reverse'>
          <div className='w-full'></div>
          <div className="flex space-x-4 w-full">
            <div className=''>
              <h3 className="font-medium text-lg  border  p-2 pr-5 rounded-xl flex min-w-max items-center gap-3"><span><IoFilterOutline></IoFilterOutline></span> Filter Lockers</h3>
            </div>
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="focus:border-gray-300 appearance-none cursor-pointer text-gray-700  border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              {groups.map((groupOption) => (
                <option key={groupOption} value={groupOption}>
                  {groupOption}
                </option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="focus:border-gray-300 appearance-none cursor-pointer text-gray-700  border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              {statuses.map((statusOption) => (
                <option key={statusOption} value={statusOption}>
                  {statusOption}
                </option>
              ))}
            </select>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="focus:border-gray-300 appearance-none cursor-pointer text-gray-700  border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              {genders.map((genderOption) => (
                <option key={genderOption} value={genderOption}>
                  {genderOption}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto border  rounded-xl px-5 py-3 mt-5">
          <table className="table w-full">
            <thead>
              <tr className="text-base font-normal text-gray-700 text-left">
                <td className="p-3 rounded-full">Locker Name</td>
                <td className="p-3 rounded-full">Group</td>
                <td className="p-3 rounded-full">Gender</td>
                <td className="p-3 rounded-full">Status</td>
                <td className="p-3 rounded-full">Actions</td>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : filteredLockers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-40">
                    No lockers found.
                  </td>
                </tr>
              ) : (
                paginatedData.map((locker) => (
                  <tr key={locker._id} className="hover:bg-slate-100  hover:rounded-xl transition duration-200 ease-in-out">
                    <td className="px-4 py-4 font-medium">{locker.lockerName}</td>
                    <td className="px-4 py-4">{locker.group}</td>
                    <td className="px-4 py-4">{locker.gender}</td>

                    <td className="px-4 py-4 first-letter:capitalize">{locker.status}</td>
                    <td className="px-4 py-4 flex items-center">
                      <button onClick={() => handleEdit(locker._id)} className="text-blue-500 hover:text-blue-700 text-xl mr-2">
                        <TbEdit/>
                      </button>
                      <button onClick={() => handleDelete(locker._id)} className="text-red-500 hover:text-red-700 text-xl ml-2">
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {paginationControls}
      </div>

      {isModalOpen && (
        <LockerModal
          locker={currentLocker}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          groups={groups}
          genders={genders}
          statuses={statuses}
          branch={branch}
        />
      )}
    </div>
  );
};

export default ManageLockers;
