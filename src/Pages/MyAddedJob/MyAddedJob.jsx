import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyAddedJob = () => {
    const [jobs, setJobs] = useState([])
    const { user } = UseAuth()
    console.log(jobs);

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">My Added Post {jobs.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Deadline</th>
                            <th>Action</th>
                            <th>Applicaiton</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, idx) =>

                                <tr>
                                    <th>{idx + 1}</th>
                                    <td>{job.title}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Action</td>
                                    <td>
                                        <Link to={`/viewApplication/${job._id}`}>
                                            <button className="btn">View Applicaiton</button>

                                        </Link>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedJob;