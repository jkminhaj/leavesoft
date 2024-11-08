import React, { useState, useEffect } from "react";
import DashboardTitle from "../../../components/partial/DashboardTitle/Title";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import UseAxiosSecure from '../../../Hook/UseAxioSecure';
import Swal from 'sweetalert2';
import Pagination from "../../../components/pagination";
import { TfiSearch } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import MsearchBox from "../../../components library/MsearchBox";
import Mpagination from "../../../components library/Mpagination";
import MtableLoading from "../../../components library/MtableLoading";
import Mtitle from "/src/components library/Mtitle";


const StaffRole = () => {
  const axiosSecure = UseAxiosSecure();
  const branch = "shia";
  const [departments, setDepartments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDepartment, setNewDepartment] = useState('');
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [departments2, setDepartments2] = useState([]);
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axiosSecure.get(`/departments/${branch}/get-all`);
      setDepartments(response.data);
      setDepartments2(response.data);
    } catch (error) {
      console.error('There was an error fetching the departments!', error);
    }
  };

  const handleAddDepartment = async () => {
    if (editId) {
      // Update the department
      try {
        await axiosSecure.put(`/departments/put/${editId}`, { Role: newDepartment });
        fetchDepartments();
      } catch (error) {
        console.error('There was an error updating the department!', error);
      }
      setEditId(null);
    } else {

      try {
        await axiosSecure.post('/departments/post', { Role: newDepartment, branch });
        fetchDepartments();
      } catch (error) {
        console.error('There was an error adding the department!', error);
      }
    }
    setNewDepartment('');
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    const department = departments.find(dep => dep._id === id);
    setEditId(id);
    setNewDepartment(department?.Role || '');
    setIsModalOpen(true);
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/departments/delete/${id}`)
          .then(() => {
            fetchDepartments();
            Swal.fire(
              'Deleted!',
              'The department has been deleted.',
              'success'
            );
          })
          .catch(error => {
            console.error('There was an error deleting the department!', error);
            Swal.fire(
              'Error!',
              'There was an error deleting the department.',
              'error'
            );
          });
      }
    });
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    console.log('Search term:', value);
    const filteredDepartments = departments.filter(department =>
      department.Role.toLowerCase().includes(value.toLowerCase())
    );

    setDepartments2(filteredDepartments);

  };

  const { paginatedData, paginationControls, rowsPerPageAndTotal } = Mpagination({ totalData: departments2 });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Mtitle title="Staff Role" rightcontent={
        <div className='flex justify-between'>
          <div className="flex justify-end gap-4 items-center mb-4">
            {/* Search bar */}
            <div className='w-64 border shadow-sm py-2 px-3 bg-white rounded-xl'>
              <div className='flex items-center gap-2'>
                <TfiSearch className='text-2xl font-bold text-gray-500' />
                <input
                  type="text"
                  className='outline-none w-full'
                  placeholder='Search here'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            {/* Add new button */}
            <div className="flex gap-2 cursor-pointer items-center bg-yellow-500 text-white py-2 px-4 rounded-xl shadow hover:bg-yellow-600 transition duration-300">
              <button
                onClick={() => setIsModalOpen(true)}
                className="font-semibold"
              >
                Add New
              </button>
              <GoPlus className="text-xl text-white" />
            </div>
          </div>
        </div>
      } ></Mtitle>

      {rowsPerPageAndTotal}

      <section className="overflow-x-auto border shadow-sm rounded-xl p-4 pb- mt-5">
        <table className="table w-full">
          <thead className='bg-yellow-500 '>
            <tr className="text-sm  font-medium  text-white text-left">
              <td className="p-3 rounded-l-xl">Departments</td>
              <td className="p-3 rounded-r-xl text-right px-8">Action</td>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="hover:bg-slate-100 hover:rounded-xl">
                <td className="px-4 py-3">{item.Role}</td>
                <td className="py-3 px-6 flex justify-end space-x-4">
                  <button
                    onClick={() => handleEdit(item._id)}
                    className="text-blue-500 hover:text-blue-700 transition duration-150"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700 transition duration-150"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MtableLoading data={departments}></MtableLoading>
        {paginationControls}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">{editId !== null ? 'Edit' : 'Add'} Department</h2>
            <input
              type="text"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
              className="border p-2 mb-4 w-full"
              placeholder="Department Name"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewDepartment('');
                  setEditId(null);
                }}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-150"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDepartment}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-150"
              >
                {editId !== null ? 'Save' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffRole;
