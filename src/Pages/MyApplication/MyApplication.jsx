import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';

const MyApplication = () => {
    const { user } = UseAuth()
    const [jobs, setJob] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJob(data)
            })
    }, [user.email])
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-center font-bold text-3xl'>My application</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>DeadLine</th>
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
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.category}
                                        
                                    </td>
                                    <td>{job.applicationDeadline}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Cancel</button>
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

export default MyApplication;