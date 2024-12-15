import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplication = () => {
    const jobs = useLoaderData()

    const handleChange = (e, _id) => {
        console.log(e.target.value, _id);
        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:3000/job-application/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    console.log(jobs);
    return (
        <div>
            <h1>view application </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job =>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                <div className="font-bold">{job.applicant}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.category}

                                    </td>
                                    <td>{job.applicationDeadline}</td>
                                    <th>
                                        <select
                                            defaultValue={job.status || 'Changes Status'}
                                            onChange={(e) => handleChange(e, job._id)}
                                            className="select select-bordered select-xs w-full max-w-xs">

                                            <option disabled>Changes Status</option>
                                            <option>Under Review </option>
                                            <option>Set Inetview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ViewApplication;