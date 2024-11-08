import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaDumbbell } from "react-icons/fa";
import UseAxiosSecure from "../../../Hook/UseAxioSecure";
import WorkoutPlannerModal from "./Modal/WorkoutPlannerModal";
import Mtitle from "../../../components library/Mtitle";

const CreateRoutine = () => {
  const [routine, setRoutine] = useState({
    routineName: "",
    difficulty: "beginner",
    days: 1,
    workouts: [],
    dayNames: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [branch, setBranch] = useState("Shia");

  const axiosSecure = UseAxiosSecure();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoutine({
      ...routine,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
  };


  const handleSaveDayNames = (dayNames) => {
    setRoutine({
      ...routine,
      dayNames: dayNames,
    });
  };


  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold text-center mb-6">Workout Planner</h1> */}
      <Mtitle title="Workout Planner" ></Mtitle>
      {/* Create Workout Routine Form */}
      <div className="w-full max-w-[600px] shadow-sm mt-20 border mx-auto rounded-lg p-10">
        <h2 className="text-2xl font-semibold text-center mb-10">Create Workout Routine</h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="block text-sm font-medium mb-1">Routine Name</label>
            <input
              type="text"
              name="routineName"
              value={routine.routineName}
              onChange={handleInputChange}
              className="focus:border-gray-300 appearance-none text-gray-700 border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline mb-6"
              required
            />
          </div>

          <div className="">
            <label className="block text-sm font-medium mb-1">Difficulty</label>
            <select
              name="difficulty"
              value={routine.difficulty}
              onChange={handleInputChange}
              className="focus:border-gray-300 appearance-none text-gray-700 border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline mb-6"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advance">Advance</option>
            </select>
          </div>

          <div className="">
            <label className="block text-sm font-medium mb-1">Days</label>
            <input
              type="number"
              name="days"
              value={routine.days}
              onChange={handleInputChange}
              className="focus:border-gray-300 appearance-none text-gray-700 border shadow-sm rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline mb-6"
              min="1"
              max="6"
              required
            />
          </div>

          <button type="submit" className="btn bg-yellow-500 text-white hover:bg-yellow-600 w-full">
            Create Routine
          </button>
        </form>
      </div>

      {/* Display Selected Workouts in Routine */}
      <div className="my-6">
        {/* <h2 className="text-2xl font-semibold mb-4">Selected Workouts</h2> */}
        <ul className="list-disc pl-6">
          {routine.workouts.map((workout) => (
            <li key={workout._id}>{workout.name}</li>
          ))}
        </ul>
      </div>

      {/* Modal for the workout planner */}
      {showModal && (
        <WorkoutPlannerModal
          routineName={routine.routineName}
          numberOfDays={routine.days}
          difficulty = {routine.difficulty}
          onClose={() => setShowModal(false)}
          onSave={handleSaveDayNames} // Save the day names
          branchName={branch}
        />
      )}

      {/* Display Saved Day Names after Modal is closed */}
      {routine.dayNames.length > 0 && (
        <div className="my-6">
          <h2 className="text-2xl font-semibold mb-4">Routine Day Names</h2>
          <ul className="list-disc pl-6">
            {routine.dayNames.map((dayName, index) => (
              <li key={index}>{dayName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateRoutine;
