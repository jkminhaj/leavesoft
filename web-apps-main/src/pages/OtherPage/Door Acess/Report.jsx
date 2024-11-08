import React, { useState, useEffect, useMemo } from 'react';
import DashboardTitle from "../../../components/DashboardTitle/Title";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import UseAxiosSecure from '../../../Hook/UseAxioSecure';
import Mtitle from "/src/components library/Mtitle";
import { IoFilterOutline } from "react-icons/io5";
import { TbFileExport } from 'react-icons/tb';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Function to generate a random color
const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const DoorReport = () => {
    const today = new Date();
    const currentYear = today.getFullYear().toString();
    const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0');
    const axiosSecure = UseAxiosSecure();
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        const url = `/device-logs/filter/${year}/${month}/STAFF/ALL`;
        axiosSecure.get(url)
            .then(response => {
                setAttendanceData(response.data);
            })
            .catch(error => {
                console.error('Error fetching attendance data:', error);
            });
    }, [month, year]);

    const generateReport = useMemo(() => {
        return attendanceData.map(memberData => {
            const punches = memberData.punch;
            const totalDays = punches.length;

            const parseDate = (dateStr) => new Date(dateStr);

            const getSingleMinDate = (dates) => {
                const validDates = dates.map(d => parseDate(d)).filter(d => !isNaN(d));
                return validDates.length > 0 ? new Date(Math.min(...validDates)) : null;
            };

            const getSingleMaxDate = (dates) => {
                const validDates = dates.map(d => parseDate(d)).filter(d => !isNaN(d));
                return validDates.length > 0 ? new Date(Math.max(...validDates)) : null;
            };

            const lowestPunchInDate = getSingleMinDate(punches.map(p => p.punchinTime));
            const earliestPunchOutDate = getSingleMaxDate(punches.map(p => p.punchOutTime));

            const latePunchIns = punches
                .filter(p => p.punchinTime && new Date(p.punchinTime) > new Date(`${year}-${month}-01T09:00:00`))
                .map(p => new Date(p.punchinTime).toISOString().split('T')[0] + ' ' + new Date(p.punchinTime).toTimeString().split(' ')[0]);

            const latestPunchOuts = punches
                .filter(p => p.punchOutTime && new Date(p.punchOutTime) > new Date(`${year}-${month}-01T17:00:00`))
                .map(p => new Date(p.punchOutTime).toISOString().split('T')[0] + ' ' + new Date(p.punchOutTime).toTimeString().split(' ')[0]);

            const totalHours = punches.reduce((sum, p) => {
                if (p.punchinTime && p.punchOutTime) {
                    const inTime = new Date(p.punchinTime);
                    const outTime = new Date(p.punchOutTime);
                    return sum + ((outTime - inTime) / 3600000);
                }
                return sum;
            }, 0);

            const averageHours = totalDays > 0 ? (totalHours / totalDays).toFixed(2) : '0.00';

            return {
                name: memberData.memberName,
                totalDays,
                lowestPunchIn: lowestPunchInDate ? lowestPunchInDate.toISOString().split('T')[0] : 'N/A',
                latePunchIns: latePunchIns.length > 0 ? latePunchIns : ['N/A'],
                earliestPunchOut: earliestPunchOutDate ? earliestPunchOutDate.toISOString().split('T')[0] : 'N/A',
                latestPunchOuts: latestPunchOuts.length > 0 ? latestPunchOuts : ['N/A'],
                averageHours
            };
        });
    }, [attendanceData, year, month]);

    const reportData = generateReport;

    // Prepare data for the bar chart
    const chartData = {
        labels: reportData.map(record => record.name),
        datasets: [{
            label: 'Average Working Hours',
            data: reportData.map(record => parseFloat(record.averageHours)),
            backgroundColor: reportData.map(() => generateRandomColor()), // Unique color for each member
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    return (
        <div className="p-6">

            <div className='mb-9'>
                <Mtitle title="Staff Monthly Report"
                    rightcontent={
                        <div className="">
                            <button className="bg-yellow-500 btn shadow rounded-xl text-white hover:bg-yellow-600  flex items-center gap-2 flex-row-reverse"><TbFileExport  className='text-xl'/> EXPORT REPORT</button>
                        </div>
                    }
                ></Mtitle>
            </div>

            <div className="flex items-center mb-5 rounded-xl">
                <div className='w-full'>
                <h3 className="font-semibold text-lg border max-w-max p-2 pr-5 rounded-xl pr- flex items-center gap-3 "><span><IoFilterOutline></IoFilterOutline></span> Filter Report</h3>
                </div>
                <div className='flex w-full gap-3'>
                    <select
                        className="select border focus:border-yellow-500 appearance-none text-gray-700 text-sm  shadow rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="2027">2027</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                    </select>
                    <select
                        className="select border   focus:border-yellow-500 appearance-none text-gray-700 text-sm  shadow rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    >
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="overflow-x-auto border shadow-sm rounded-xl p-4">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <td>SL.No.</td>
                                    <td>Name</td>
                                    <td>Total Days</td>
                                    <td>Earliest Punch In</td>
                                    <td>Late Punch Ins</td>
                                    <td>Earliest Punch Out</td>
                                    <td>Late Punch Outs</td>
                                    <td>Average Hours</td>
                                </tr>
                            </thead>
                            <tbody>
                                {reportData.map((record, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{record.name}</td>
                                        <td>{record.totalDays}</td>
                                        <td>{record.lowestPunchIn}</td>
                                        <td>{record.latePunchIns[0]}</td>
                                        <td>{record.earliestPunchOut}</td>
                                        <td>{record.latestPunchOuts[0]}</td>
                                        <td>{record.averageHours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-2">Average Working Hours per User</h3>
                        <div className="border shadow-sm rounded-xl p-4 ">
                            <Bar
                            
                                data={chartData}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        tooltip: {
                                            callbacks: {
                                                label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} hours`
                                            }
                                        }
                                    },
                                    scales: {
                                        x: {
                                            beginAtZero: true,
                                        },
                                        y: {
                                            beginAtZero: true,
                                            suggestedMin: 0
                                        }
                                    }
                                }}
                                width="100%"
                                height={null}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoorReport;
