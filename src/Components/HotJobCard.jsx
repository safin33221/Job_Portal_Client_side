import React from 'react';

const HotJobCard = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job
    return (
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col justify-between">
            <div className="flex p-4">
                <img
                    src={company_logo}
                    alt="LinkedIn Logo"
                    className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{jobType}</p>
                    <p className="text-xs text-gray-400">{location}</p>
                </div>
            </div>
            <div className="p-4 text-sm text-gray-600">
                <p>
                    {description}
                </p>
            </div>
            <div className="px-4 pb-4">
                <div className="flex space-x-2">
                    {
                        requirements.slice(0,3).map(item => <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 ">{item}</span>)
                    }


                </div>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-gray-200 bottom-0">
                <span className=" font-semibold text-green-500">{`${salaryRange.min} - ${salaryRange.max}`}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Apply Now</button>
            </div>
        </div>
    );
};

export default HotJobCard;