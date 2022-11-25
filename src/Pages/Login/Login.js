import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div>
            <div className='h-[400px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-3xl text-center'>Welcome</h2>
                    <h2 className='text-2xl text-center'>SignUp Into Your Account</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' {...register("email")} placeholder="email" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' {...register("password")} placeholder="password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <br />
                        <input type="submit" className='btn btn-outline w-full' />
                    </form>
                </div>
            </div >
        </div>
    );
};

export default Login;