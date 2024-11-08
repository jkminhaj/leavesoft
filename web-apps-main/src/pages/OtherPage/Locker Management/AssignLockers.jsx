import React, { useState, useEffect, useCallback } from 'react';
import UseAxiosSecure from '../../../Hook/UseAxioSecure.jsx';
import { GoPlus } from 'react-icons/go';
import { TfiSearch } from 'react-icons/tfi';
import Mtitle from './../../../components library/Mtitle.jsx';
import UserSearch from './UserSearch'; 
import Swal from 'sweetalert2'; 
import { PiLockKeyLight } from "react-icons/pi";
import { IoFilterOutline } from "react-icons/io5";
import GlobalLoading from '../../../components library/GlobalLoading.jsx';

const groups = ["Premium", "Standard", "VIP"];
const statuses = ["All", "occupied", "available", "reserved"];
const genders = ["Gents", "Female", "Common"];

const AssignLockers = () => {
  const axiosSecure = UseAxiosSecure();
  const branch = 'shia';
  const [lockers, setLockers] = useState([]);
  const [filteredLockers, setFilteredLockers] = useState([]);
  const [group, setGroup] = useState('Premium');
  const [status, setStatus] = useState('All');
  const [gender, setGender] = useState('Gents');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false); 
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchLockers = async () => {
      setLoading(true);
      try {
        const response = await axiosSecure.get(`/lockers/${branch}/get-all`);
        setLockers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lockers:', error);
        setLoading(false);
      }
    };

    fetchLockers();
  }, [axiosSecure]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = lockers;

      if (group !== 'All') {
        filtered = filtered.filter(locker => locker.group === group);
      }

      if (status !== 'All') {
        filtered = filtered.filter(locker => locker.status === status);
      }

      if (gender !== 'All') {
        filtered = filtered.filter(locker => locker.gender === gender);
      }

      if (searchTerm) {
        filtered = filtered.filter(locker => locker.lockerName.toLowerCase().includes(searchTerm.toLowerCase()));
      }

      setFilteredLockers(filtered);
    };

    applyFilters();
  }, [lockers, group, status, gender, searchTerm]);

  const getLockerColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'occupied':
        return 'bg-red-500';
      case 'reserved':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-200';
    }
  };

  const handleUnassignLocker = async (lockerId) => {
    setLoading(true);
    if (!lockerId) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Locker ID',
        text: 'The locker ID is missing or invalid. Please try again.',
      });
      setLoading(false);
      return;
    }
  
    try {
      const response = await axiosSecure.put(`/lockers/unassign/${lockerId}`);
  
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Locker is now available',
        });
        setLoading(false);
  
        setLockers((prev) => prev.map(locker => locker._id === lockerId ? response.data : locker));
      }
    } catch (error) {
      setLoading(false);
      console.error('Error unassigning locker:', error);
  
 
      Swal.fire({
        icon: 'error',
        title: 'Unassignment Failed',
        text: error.response?.data?.message || 'Failed to unassign locker. Please try again later.',
      });
      setLoading(false);
    }
  };

  const handleLockerClick = (locker) => {

    if (locker.status === 'reserved') {
      Swal.fire({
        title: 'Reserved Locker',
        text: 'This locker is reserved. Please go to the permanent locker management page to manage it.',
        icon: 'info',
        confirmButtonText: 'Go to Permanent Lockers',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
    } else if (locker.status === 'occupied') {
      Swal.fire({
        title: `Locker is occupied by ${locker.member_id?.full_name}`,
        text: "Has this member handed over the locker?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, unassign locker',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          handleUnassignLocker(locker._id);
        }
      });
    } else {
      setSelectedLocker(locker);
      setIsModalOpen(true); 
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocker(null);
    setSelectedUser(null); 
  };

  const handleUserSelect = async (userId) => {

    if (!userId) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid User',
        text: 'No user selected or invalid user ID. Please select a valid user to assign the locker.',
      });
      return;
    }
  
    try {
      const response = await axiosSecure.put(`/lockers/update/${selectedLocker._id}`, {
        member_id: userId,
        status: 'occupied'
      });
  
      if (response.status === 200) {
        setLockers((prev) => prev.map(locker => locker._id === selectedLocker._id ? response.data : locker));
        closeModal();
      }
    } catch (error) {
      console.error('Error updating locker:', error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'There was a problem updating the locker assignment. Please try again later.',
      });
    }
  };

  return (
    <div className='px-2'>
      <Mtitle
        title="Assign Temporary Lockers"
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
                <GoPlus className="text-xl text-white" />
              </div>
            </div>
          </div>
        }
      />

      <div className="p-4">
      {loading ? (
        <GlobalLoading /> // Show loading spinner when loading is true
      ) : (
        <>
        <div className="flex  flex-row-reverse  mb-7">
          <div className='w-full'>

          </div>
          <div className='flex  w-full space-x-4'>
            <div className=''>
              <h3 className="font-medium text-lg  border  p-2 pr-5 rounded-xl flex min-w-max items-center gap-3"><span><IoFilterOutline></IoFilterOutline></span> Filter Lockers</h3>
            </div>
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
          </div>
        </div>


        <div className="grid grid-cols-6 gap-4">
          {filteredLockers.map((locker) => (
            <div
            key={locker._id}
            className={`flex flex-col py-5 items-center rounded-xl border text-center bg-white cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg`}
            onClick={() => handleLockerClick(locker)} 
          >
            <p><PiLockKeyLight className='text-4xl mt-1' /></p>
            <p className='mt-1'>{locker.lockerName}</p>
          
            <div className={`${getLockerColor(locker.status)} text-white font-medium mt-2 border px-2 rounded-lg`}>
              <p className='first-letter:uppercase'>{locker.status}</p>
            </div>
          
            {(locker.status === 'occupied' || locker.status === 'reserved') && (
              <div className="mt-2">
                <span className="text-sm">
                  {locker.member_id ? `${locker.member_id.full_name} (${locker.member_id.member_id})` : 'No member assigned'}
                </span>
              </div>
            )}
          </div>          
          ))}
        </div>
        </>
      )}
      </div>

 
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg  min-w-[800px]">
            <h2 className="text-2xl font-semibold mb-4">Assign Member to Temporary Locker</h2>
            <UserSearch setIsShow={setIsModalOpen} setUserId={handleUserSelect} />
            <div className="flex max-w-min gap-3 cursor-pointer  items-center bg-gray-500 text-white py-2 px-4 rounded-xl shadow hover:bg-gray-600 hover:border border hover:border-gray-300 hover:shadow-none transition duration-300">
              <button
                onClick={closeModal}
              >
                Close
              </button>

            </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default AssignLockers;
