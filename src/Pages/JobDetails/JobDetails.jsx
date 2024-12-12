import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job
    return (
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6 flex mx-auto mt-20 flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Employment Information</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-600">
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">🏭</span>
                    <div>
                        <img src={company_logo} alt="" />
                        <p className="font-medium">{title}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">💵</span>
                    <div>
                        <p className="text-sm">Salary</p>
                        <p className="font-medium">{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">💼</span>
                    <div>
                        <p className="text-sm">Job type</p>
                        <p className="font-medium">{jobType}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">🕒</span>
                    <div>
                        <p className="text-sm">Updated</p>
                        <p className="font-medium">10/07/2022</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">🎯</span>
                    <div>
                        <p className="text-sm">Experience</p>
                        <p className="font-medium">1 - 2 years</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">📅</span>
                    <div>
                        <p className="text-sm">Deadline</p>
                        <p className="font-medium">{applicationDeadline}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">📍</span>
                    <div>
                        <p className="text-sm">Location</p>
                        <p className="font-medium">{location}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="mr-2 text-blue-500">👔</span>
                    <div>
                        <p className="text-sm">Job level</p>
                        <p className="font-medium">Experienced (Non - Manager)</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-outline bg-blue-500 font-bold">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;