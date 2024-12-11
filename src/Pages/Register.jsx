import Lottie from 'lottie-react';
import React, { useContext } from 'react';

import register from "../assets/lottie/register.json"
import AuthContext from '../Context/AuthContext/AuthContext';

const Register = () => {
    const { createUserWithEmail } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);
        createUserWithEmail(email,password)
        .then(result =>{
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-4/12 mx-auto">
                    <Lottie animationData={register} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center font-bold">Register now!</h1>

                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;