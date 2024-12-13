import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const ApplyJob = () => {
    const { id } = useParams()
    
    const {_id,user} = UseAuth()
    const navigate = useNavigate()
    
    const handleApply = e =>{
        e.preventDefault()
        const form = e.target
        const linkedIn = form.linkedIn.value
        const github = form.github.value
        const resume = form.resume.value
        console.log(linkedIn,github,resume);

        const jobApplication = {
            job_Id:id,
            applicant:user.email,
            linkedIn,
            github,
            resume
        }
        fetch('http://localhost:3000/job-application',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('applyed success')
                navigate('/myApplication')
            }
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleApply} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">linkedIn</span>
                            </label>
                            <input name='linkedIn' type="url" placeholder="linkedIn" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">GithHub</span>
                            </label>
                            <input name='github' type="url" placeholder="GithHub" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input name='resume' type="url" placeholder="Resume" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;