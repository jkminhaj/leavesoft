import React, { useState } from 'react';
import { TfiSearch } from "react-icons/tfi";
import { GoDotFill } from "react-icons/go";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hook/UseAxioSecure';
import Dpagination from '../../../components library/Dpagination';
import DashboardTitle from "../../../components/DashboardTitle/Title";
import Mtitle from "/src/components library/Mtitle";

const DoorHistory = () => {
    const [branch, setBranch] = useState('shia');
    const url = 'device-logs';

    // Render Dpagination and pass the branch
    const { paginatedData, paginationControls, rowsPerPageAndTotal } = Dpagination({ branch, url });
    const axiosSecure = UseAxiosSecure();

    const handleRemove = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#fda93c11',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await axiosSecure.delete(`/${url}/${id}`);
                Swal.fire(
                    'Deleted!',
                    'The log has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Error deleting log:', error);
                Swal.fire(
                    'Error!',
                    'There was an error deleting the log.',
                    'error'
                );
            }
        }
    };

    return (
        <div className="p-4">
            <Mtitle title="Door Access Logs" rightcontent={
                <div className='flex justify-between'>
                    <div className="flex justify-end gap-4 items-center mb-4">
                        {/* Search bar */}
                        <div className='w-64 border shadow-sm py-2 px-3 bg-white rounded-xl'>
                            <div className='flex items-center gap-2'>
                                <TfiSearch className='text-2xl font-bold text-gray-500' />
                                <input type="text" className='outline-none w-full' placeholder='Enter search keyword' />
                            </div>
                        </div>
                    </div>
                </div>

            }></Mtitle>

            {rowsPerPageAndTotal}

            <div className="overflow-x-auto border shadow-sm rounded-xl p-4 mt-5">
                <table className="table w-full">
                    <thead className='bg-yellow-500'>
                        <tr className="text-sm font-medium text-white text-left">
                            <th className="p-3 rounded-l-xl">Member Picture</th>
                            <th className="p-3">Member Name</th>
                            <th className="p-3">Member Email</th>
                            <th className="p-3">Card Number</th>
                            <th className="p-3">Punch Time</th>
                            <th className="p-3">Device Log Type</th>
                            <th className="p-3 rounded-r-xl">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((log) => {
                            if (log.deviceLogType === 3) {
                                return (
                                    <tr key={log._id} className="hover:bg-slate-100 hover:rounded-xl">
                                        <td colSpan="7" className="px-4 py-3 text-center">
                                            Push-Out Front Door on {new Date(log.punchTime).toLocaleString('en-GB', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true
                                            })}
                                        </td>
                                    </tr>
                                );
                            } else {
                                return (
                                    <tr key={log._id} className="hover:bg-slate-100 hover:rounded-xl">
                                        <td className="px-4 py-3">
                                            <img src={log.memberPic} alt={log.memberName} className="w-10 h-10 rounded-full object-cover" />
                                        </td>
                                        <td className="px-4 py-3">{log.memberName}</td>
                                        <td className="px-4 py-3">{log.memberEmail}</td>
                                        <td className="px-4 py-3">{log.cardNumber}</td>
                                        <td className="px-4 py-3">
                                            {new Date(log.punchTime).toLocaleString('en-GB', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                hour12: true
                                            })}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className='flex justify-start items-center gap-1'>
                                                <GoDotFill className={`text-xs ${log.deviceLogType === 2 ? 'text-red-500' : 'text-green-500'}`} />
                                                <span className='first-letter:uppercase'>{log.deviceLogType === 2 ? 'Punched-Out' : 'Punched-In'}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 text-base">
                                            <button
                                                onClick={() => handleRemove(log._id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <RiDeleteBin2Line />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
                {paginationControls}
            </div>
        </div>
    );
};

export default DoorHistory;
