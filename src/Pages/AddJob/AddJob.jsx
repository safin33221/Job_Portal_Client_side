import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const AddJob = () => {
    const {user} =UseAuth()

    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        // console.log(formData.entries());
        const initData = Object.fromEntries(formData.entries())
        // console.log(initData);
        const { min, max, currency,...newJob } = initData
        newJob.salaryRange = {min,max,currency}
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);
        fetch('http://localhost:3000/jobs',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('job added successful')
            }
        })

    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Post New Job</h2>
            <form onSubmit={handleAddJob} className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-lg rounded-md">
                <h1 className="text-2xl font-bold mb-6">Job Data Form</h1>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-semibold">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Job Type</label>
                        <input
                            type="text"
                            name="jobType"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Category</label>
                        <select name='category' className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Pick the job category</option>
                            <option value='Software Engineer'>Software Engineer</option>
                            <option value='Marketing Specialist'>Marketing Specialist</option>
                            <option value='Finance Manager'>Finance Manager</option>
                            <option value='Content Writer'>Content Writer</option>
                            <option value='Teaching Assistant'>Teaching Assistant</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Salary Range (Min)</label>
                        <input
                            type="number"
                            name="min"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Salary Range (Max)</label>
                        <input
                            type="number"
                            name="max"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Currency</label>
                        <input
                            type="text"
                            name="currency"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 font-semibold">Description</label>
                        <textarea
                            name="description"
                            className="w-full p-2 border rounded-md"
                        ></textarea>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 font-semibold">Company</label>
                        <input
                            type="text"
                            name="company"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 font-semibold">Requirements</label>
                        <textarea
                            name="requirements"
                            className="w-full p-2 border rounded-md"
                        ></textarea>

                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 font-semibold">Responsibilities</label>
                        <textarea
                            name="responsibilities"
                            className="w-full p-2 border rounded-md"
                        ></textarea>

                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">Status</label>
                        <input
                            type="text"
                            name="status"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">HR Email</label>
                        <input
                            value={user?.email}
                            disabled
                            type="email"
                            name="hr_email"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold">HR Name</label>
                        <input
                            type="text"
                            name="hr_name"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 font-semibold">Company Logo URL</label>
                        <input
                            type="text"
                            name="company_logo"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddJob;