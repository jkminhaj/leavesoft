import React, { useState, useEffect } from 'react';
import UseAxiosSecure from '../../../Hook/UseAxioSecure.jsx';
import { GoPlus } from 'react-icons/go';
import { TfiSearch } from 'react-icons/tfi';
import Mtitle from './../../../components library/Mtitle.jsx';
import UserSearch from './UserSearch'; // Import UserSearch component
import Swal from 'sweetalert2'; // Import SweetAlert
import { IoFilterOutline } from "react-icons/io5";
import { PiLockKeyLight } from 'react-icons/pi';
import GlobalLoading from '../../../components library/GlobalLoading.jsx'; // Import your loading spinner

const groups = ["Premium", "Standard", "VIP"];
const statuses = ["All", "occupied", "available", "reserved"];
const genders = ["Gents", "Female", "Common"];

const LockerPayments = () => {
  const axiosSecure = UseAxiosSecure();
  const branch = 'shia';
  const [lockers, setLockers] = useState([]);
  const [filteredLockers, setFilteredLockers] = useState([]);
  const [group, setGroup] = useState('Premium');
  const [status, setStatus] = useState('All'); // Show all lockers
  const [gender, setGender] = useState('Gents');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false); 
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user

  // Fetch Lockers
  const fetchLockers = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await axiosSecure.get(`/lockers/${branch}/get-all`);
      setLockers(response.data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error Fetching Lockers',
        text: 'There was an issue fetching lockers. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch lockers initially
  useEffect(() => {
    fetchLockers();
  }, [axiosSecure]);

  // Apply filters whenever lockers or filters change
  useEffect(() => {
    const applyFilters = () => {
      setLoading(true);
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
      setLoading(false);
    };

    applyFilters();
  }, [lockers, group, status, gender, searchTerm]);

  // Get locker color based on status
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

  // Handle locker click to assign or unassign a locker
  const handleLockerClick = async (locker) => {
    setLoading(true);
    if (locker.status === 'occupied') {
      Swal.fire({
        title: 'Occupied Locker',
        text: 'This locker is currently occupied. You cannot make changes.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
      setLoading(false);
    } else if (locker.status === 'reserved') {
      const result = await Swal.fire({
        title: 'Reserved Locker',
        text: 'Do you want to unassign this reserved locker?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, unassign it!',
        cancelButtonText: 'Cancel',
      });
      setLoading(false);

      if (result.isConfirmed) {
        handleUnassignLocker(locker); // Pass the locker object
      }
    } else {
      setSelectedLocker(locker);
      setIsModalOpen(true);
      setLoading(false);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocker(null);
    setSelectedUser(null);
  };

  // Assign user to locker with validation
  const handleUserSelect = async (userId) => {
    setLoading(true);
    if (!selectedLocker) {
      Swal.fire({
        icon: 'warning',
        title: 'No Locker Selected',
        text: 'Please select a locker first.',
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axiosSecure.put(`/lockers/assign-locker/${selectedLocker._id}`, {
        member_id: userId,
      });

      if (response.status === 200) {
        setLockers((prev) => prev.map(locker => locker._id === selectedLocker._id ? response.data : locker));
        Swal.fire({
          icon: 'success',
          title: 'Locker Assigned',
          text: 'The locker has been successfully assigned.',
        });
        setLoading(false);
        closeModal();
        fetchLockers(); // Fetch updated lockers after assigning
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Assignment Error',
        text: 'Failed to assign the locker. Please try again.',
      });
      setLoading(false);
    }
  };

  // Unassign locker with validation
  const handleUnassignLocker = async (locker) => {
    setLoading(true);
    if (!locker.member_id) {
      Swal.fire({
        icon: 'warning',
        title: 'No Member Assigned',
        text: 'This locker has no member assigned to unassign.',
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axiosSecure.put(`/lockers/unassign-locker/${locker._id}`, {
        member_id: locker.member_id._id,
      });

      if (response.status === 200) {
        setLockers((prev) => prev.map(l => l._id === locker._id ? response.data.locker : l));
        Swal.fire({
          icon: 'success',
          title: 'Locker Unassigned',
          text: 'The locker has been successfully unassigned.',
        });
        setLoading(false);
        fetchLockers(); // Fetch updated lockers after unassigning
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to unassign the locker. Please try again.';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
      });
      setLoading(false);
    }
  };

  return (
    <div className='px-2'>
      {loading ? (
        <GlobalLoading /> // Show loading spinner when loading is true
      ) : (
        <>
          <Mtitle
            title="Permanent Lockers"
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
            <div className='flex  flex-row-reverse mb-3'>
              <div className='w-full'></div>
              <div className="flex w-full space-x-4 mb-4">
                <div className=''>
                  <h3 className="font-medium text-lg  border  p-2 pr-5 rounded-xl flex min-w-max items-center gap-3"><span><IoFilterOutline /></span> Filter Lockers</h3>
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

            {/* Grid to display lockers */}
            <div className="grid grid-cols-6 gap-4">
              {filteredLockers.map((locker) => (
                <div
                  key={locker._id}
                  className={`flex flex-col py-5 items-center rounded-xl border text-center bg-white cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg`}
                  onClick={() => handleLockerClick(locker)} // Trigger locker click
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
          </div>

          {/* Modal for selecting user */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg min-w-[800px]">
                <h2 className="text-2xl font-semibold mb-4">Assign Member to Locker</h2>
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
        </>
      )}
    </div>
  );
};

export default LockerPayments;
