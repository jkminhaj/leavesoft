import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import DashboardTitle from "../../../components/DashboardTitle/Title";

const MemberRequest = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        mainGoal: '',
        sessionDuration: '',
        trainingFrequency: '',
        workoutGoal: '',
        gymExperience: '',
        workoutTime: '',
        cardioIncluded: '',
        cardioDuration: '',
        plankTime: '',
        bodyType: '',
        injuries: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send `formData` to the server or API
    };

    return (
        <div className="container mx-auto p-5">
            <DashboardTitle title="Member Request" />
            
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Main Goal */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">1. What is your main goal for training?</h3>
                        <select name="mainGoal" value={formData.mainGoal} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Lose weight">Lose weight</option>
                            <option value="Gain muscle & body strength">Gain muscle & body strength</option>
                            <option value="Get lean & defined">Get lean & defined</option>
                            <option value="Improve endurance">Improve endurance</option>
                            <option value="Feel healthier">Feel healthier</option>
                            <option value="Increase flexibility">Increase flexibility</option>
                        </select>
                    </div>

                    {/* Session Duration */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">2. How long do you want to train in each session?</h3>
                        <select name="sessionDuration" value={formData.sessionDuration} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Short (up to 30 minutes)">Short (up to 30 minutes)</option>
                            <option value="Medium (30-60 minutes)">Medium (30-60 minutes)</option>
                            <option value="Long (60+ minutes)">Long (60+ minutes)</option>
                            <option value="Long Long (120 minutes)">Long Long (120 minutes)</option>
                        </select>
                    </div>

                    {/* Training Frequency */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">3. How often do you want to train per week?</h3>
                        <select name="trainingFrequency" value={formData.trainingFrequency} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="1 day">1 day</option>
                            <option value="2 days">2 days</option>
                            <option value="3 days">3 days</option>
                            <option value="4 days">4 days</option>
                            <option value="5 days">5 days</option>
                        </select>
                    </div>

                    {/* Workout Goal */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">4. What is your primary workout goal?</h3>
                        <select name="workoutGoal" value={formData.workoutGoal} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Maximum strength (4-10 reps)">Maximum strength (4-10 reps)</option>
                            <option value="Muscle gain (6-15 reps)">Muscle gain (6-15 reps)</option>
                            <option value="Strength endurance (12-20 reps)">Strength endurance (12-20 reps)</option>
                        </select>
                    </div>

                    {/* Gym Experience */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">5. What is your current gym experience level?</h3>
                        <select name="gymExperience" value={formData.gymExperience} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="New (0 months)">New (0 months)</option>
                            <option value="Beginner (<6 months)">Beginner (&lt;6 months)</option>
                            <option value="Intermediate (6 months to 1.5 years)">Intermediate (6 months to 1.5 years)</option>
                            <option value="Advanced (1.5+ years)">Advanced (1.5+ years)</option>
                            <option value="Pro (4+ years)">Pro (4+ years)</option>
                            <option value="Elite (8+ years)">Elite (8+ years)</option>
                        </select>
                    </div>

                    {/* Workout Time Preference */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">6. When do you prefer to work out?</h3>
                        <select name="workoutTime" value={formData.workoutTime} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                            <option value="No preference">No preference</option>
                        </select>
                    </div>

                    {/* Cardio Included */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">7. Do you include cardio in your routine?</h3>
                        <select name="cardioIncluded" value={formData.cardioIncluded} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Cardio Duration */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">8. How long do you want to perform cardio?</h3>
                        <select name="cardioDuration" value={formData.cardioDuration} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Short (5-10 min)">Short (5-10 min)</option>
                            <option value="Medium (10-20 min)">Medium (10-20 min)</option>
                            <option value="Long (20+ min)">Long (20+ min)</option>
                        </select>
                    </div>

                    {/* Plank Time */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">9. Can you hold a plank for more than 1 minute?</h3>
                        <select name="plankTime" value={formData.plankTime} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Body Type */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">10. Which best describes your current body type?</h3>
                        <select name="bodyType" value={formData.bodyType} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="Overweight">Overweight</option>
                            <option value="Medium">Medium</option>
                            <option value="Average">Average</option>
                            <option value="Flabby">Flabby</option>
                            <option value="Skinny">Skinny</option>
                            <option value="Muscular">Muscular</option>
                        </select>
                    </div>

                    {/* Injuries */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">11. Have you suffered any injuries?</h3>
                        <select name="injuries" value={formData.injuries} onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            <option value="">Select...</option>
                            <option value="None">None</option>
                            <option value="Shoulder">Shoulder</option>
                            <option value="Wrist">Wrist</option>
                            <option value="Knee">Knee</option>
                            <option value="Ankle">Ankle</option>
                            <option value="Lower back">Lower back</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button type="submit" className="btn btn-primary w-full max-w-xs">Request Workout</button>
                    </div>
                </form>
            ) : (
                <div className="text-center">
                    <FaCheckCircle className="text-5xl text-green-500 mx-auto" />
                    <h3 className="text-2xl font-semibold mt-4">You have already submitted the request, please wait!</h3>
                </div>
            )}
        </div>
    );
};

export default MemberRequest;
