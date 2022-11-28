import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser, googleSign } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();


    const handleSignUp = data => {
        console.log(data)
        setSignUpError('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('user create successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }


    const saveUser = (name, email) => {
        const user = { name, email };

        fetch('https://assignment-12-server-lime.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/')
            })
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
        <div className='my-20  '>
            <div className='h-[400px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-2xl'>SignUp Into Your Account</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type='text' {...register("name")} placeholder="name" className="inpu border-b-2 border-black border-l-2 p-2 border-black  w-full max-w-xs" />
                        </div>
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
                        <br />

                        <select className="select select-bordered w-full max-w-xs">
                            <option>Seller</option>
                            <option>User</option>
                        </select>
                        <br />
                        <p>Already have an account? <Link className='font-bold text-md' to='/login'>Login</Link></p>
                        <br />
                        <input type="submit" className='btn btn-outline w-full' />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <br />
                    <button onClick={handleGoogle} className='btn btn-black w-full'>Login With Google</button>
                </div>
            </div >
        </div>
    );
};

export default SignUp;