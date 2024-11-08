// src/pages/Addworkout/Addworkout.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardTitle from "../../../components/DashboardTitle/Title";
import UseAxiosSecure from '../../../Hook/UseAxioSecure';
import { GoPlus } from 'react-icons/go';
import { TfiSearch } from 'react-icons/tfi';
import Mpagination from '../../../components library/Mpagination';
import Swal from 'sweetalert2';
import WorkoutModal from './Modal/WorkoutModal.jsx'; // Import the modal component
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Mtitle from '/src/components library/Mtitle';

const difficulties = ["All", "beginner", "intermediate", "advance"];
const muscleGroups = {
  "All": [],
  "Chest": ["Upper Chest", "Middle Chest", "Lower Chest", "Inner Chest"],
  "Back": ["Rhomboids", "Upper Lats", "Middle Lats", "Lower Lats"],
  "Legs": ["Quads", "Glutes", "Hamstrings", "Calves"],
  "Cardio": ["High-Intensity Cardio", "Moderate-Intensity Cardio", "Low-Intensity Cardio", "HIIT Cardio"],
  "Abs": ["Upper Abs", "Lower Abs", "Obliques Abs", "Whole Abs"],
  "Forearms": ["Flexion", "Extension"],
  "Shoulders": ["Trapezius", "Rear Shoulders", "Side Shoulders", "Front Shoulders"],
  "Biceps": ["Long Head", "Short Head", "Brachialis"],
  "Triceps": ["Long Triceps", "Medial Tricep", "Lateral Tricep"],
  "Other": []
};
const equipments = ["All", "None", "Barbell", "Dumbbell", "Kettlebell", "Machine", "Plate", "Resistance Band", "Suspension Band", "Other"];

const Addworkout = () => {
  const axiosSecure = UseAxiosSecure();
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [muscle, setMuscle] = useState('All');
  const [submuscle, setSubmuscle] = useState('All');
  const [equipment, setEquipment] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axiosSecure.get(`/workouts/filter/${muscle}/${submuscle}/${equipment}`);
        setWorkouts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, [muscle, submuscle, equipment, axiosSecure]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = workouts;

      if (difficulty !== 'All') {
        filtered = filtered.filter(workout => workout.difficulty === difficulty);
      }

      if (searchTerm) {
        filtered = filtered.filter(workout => workout.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }

      setFilteredWorkouts(filtered);
    };

    applyFilters();
  }, [workouts, difficulty, searchTerm]);

  const handleEdit = (id) => {
    const workoutToEdit = workouts.find(workout => workout._id === id);
    setCurrentWorkout(workoutToEdit);
    setIsModalOpen(true); // Open modal with current workout data
  };

  const handleDelete = async (id) => {
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
        await axiosSecure.delete(`/workouts/delete/${id}`);

        setWorkouts(workouts.filter(workout => workout._id !== id));
        setFilteredWorkouts(filteredWorkouts.filter(workout => workout._id !== id));

        Swal.fire('Deleted!', 'The workout has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting workout:', error);
      Swal.fire('Error!', 'There was an error deleting the workout.', 'error');
    }
  };

  const handleAddNew = () => {
    setCurrentWorkout(null); // Reset current workout
    setIsModalOpen(true); // Open modal
  };

  const handleSave = async () => {
    if (!currentWorkout) return;

    try {
      if (currentWorkout._id) {
        // Update existing workout
        // await axiosSecure.put(`/workouts/put/${currentWorkout._id}`, currentWorkout);
      } else {
        // Add new workout
        await axiosSecure.post("/workouts/post", currentWorkout);
      }
      setIsModalOpen(false); // Close modal
      const response = await axiosSecure.get(`/workouts/filter/${muscle}/${submuscle}/${equipment}`);
      setWorkouts(response.data);
    } catch (error) {
      console.error('Error saving workout:', error);
      Swal.fire('Error!', 'There was an error saving the workout.', 'error');
    }
  };

  const { paginatedData, paginationControls, rowsPerPageAndTotal } = Mpagination({ totalData: filteredWorkouts });


  return (
    <div className='px-2'>
      <Mtitle
        title="Workouts"
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
      <div className="p-4">
        <div className="flex space-x-4 mb-4">
          <select
            value={muscle}
            onChange={(e) => {
              setMuscle(e.target.value);
              setSubmuscle('All'); // Reset submuscle when muscle changes
            }}
            className="p-2 border rounded"
          >
            {Object.keys(muscleGroups).map((muscleOption) => (
              <option key={muscleOption} value={muscleOption}>
                {muscleOption}
              </option>
            ))}
          </select>

          {muscle !== 'All' && muscleGroups[muscle].length > 0 && (
            <select
              value={submuscle}
              onChange={(e) => setSubmuscle(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="All">All</option>
              {muscleGroups[muscle].map((submuscleOption) => (
                <option key={submuscleOption} value={submuscleOption}>
                  {submuscleOption}
                </option>
              ))}
            </select>
          )}

          <select
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="p-2 border rounded"
          >
            {equipments.map((equipmentOption) => (
              <option key={equipmentOption} value={equipmentOption}>
                {equipmentOption}
              </option>
            ))}
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="p-2 border rounded"
          >
            {difficulties.map((difficultyOption) => (
              <option key={difficultyOption} value={difficultyOption}>
                {difficultyOption}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto border shadow-sm rounded-xl p-4 mt-5">
          <table className="table w-full">
            <thead>
              <tr className="text-xs text-gray-500 text-left">
                <th className="p-3 rounded-full">Name</th>
                <th className="p-3 rounded-full">Type</th>
                <th className="p-3 rounded-full">Muscle</th>
                <th className="p-3 rounded-full">Submuscle</th>
                <th className="p-3 rounded-full">Equipment</th>
                <th className="p-3 rounded-full">Difficulty</th>
                <th className="p-3 rounded-full">Instructions</th>
                <th className="p-3 rounded-full">Photo</th>
                <th className="p-3 rounded-full">Video</th>
                <th className="p-3 rounded-full">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="10" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : filteredWorkouts.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center py-4">
                    No workouts found.
                  </td>
                </tr>
              ) : (
                paginatedData.map((workout) => (
                  <tr key={workout._id} className="hover:bg-slate-100 hover:rounded-xl transition duration-200 ease-in-out">
                    <td className="px-4 py-3 font-medium">{workout.name}</td>
                    <td className="px-4 py-3">{workout.type}</td>
                    <td className="px-4 py-3">{workout.muscle}</td>
                    <td className="px-4 py-3">{workout.submuscle || 'N/A'}</td>
                    <td className="px-4 py-3">{workout.equipment}</td>
                    <td className="px-4 py-3">{workout.difficulty}</td>
                    <td className="px-4 py-3">{workout.instructions}</td>
                    <td className="px-4 py-3">
                      <img src={workout.photo} alt={workout.name} className="w-16 h-16 object-cover rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <a href={workout.video} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View Video
                      </a>
                    </td>
                    <td className="px-4 py-3 flex items-center">
                      <button onClick={() => handleEdit(workout._id)} className="text-blue-500 hover:text-blue-700 text-xl mr-2">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(workout._id)} className="text-red-500 hover:text-red-700 text-xl ml-2">
                        <FaTrashAlt />
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
        <WorkoutModal
  workout={currentWorkout}
  onClose={() => setIsModalOpen(false)}
  onSave={handleSave}
  muscles={Object.keys(muscleGroups)}
  submusclesData={muscleGroups} 
  equipments={equipments}
  difficulties={difficulties}
/>
)}
    </div>
  );
};

export default Addworkout;
