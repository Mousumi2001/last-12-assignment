import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const handleLogin = data => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='h-[400px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-3xl text-center'>Welcome</h2>
                    <h2 className='text-2xl text-center'>Login Into Your Account</h2>
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
                    <br />
                    <button className='btn btn-black w-full'>Login With Google</button>
                </div>
            </div >
        </div>
    );
};

export default Login;