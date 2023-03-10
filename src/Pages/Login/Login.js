import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn, googleSign } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }


    const handleGoogle = () => {
        googleSign(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <div className='h-[400px] flex justify-center items-center '>
                <div className='w-96 p-7'>
                    <h2 className='text-2xl '>Login Into Your Account</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type='email' {...register("email")} placeholder="email" className="inpu border-b-2 border-black border-l-2 p-2 border-black  w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' {...register("password")} placeholder="password" className="inpu border-b-2 border-black border-l-2 p-2 border-black  w-full max-w-xs" />
                        </div>
                        <p>Create a new account? <Link className='font-bold text-md' to='/signup'>SignUp</Link></p>
                        <br />
                        <input type="submit" className='btn btn-outline w-full' />
                    </form>
                    <br />
                    <button onClick={handleGoogle} className='btn btn-black w-full'>Login With Google</button>
                </div>
            </div >
        </div>
    );
};

export default Login;