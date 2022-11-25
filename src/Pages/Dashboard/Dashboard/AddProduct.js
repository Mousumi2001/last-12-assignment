import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();


    const handleSend = data => {
        console.log(data)
    }
    return (
        <div>
            <h1 className='text-3xl'>Add a products</h1>

            <div className='m-20'>
                <div className='h-[400px] flex justify-center items-center'>
                    <div className='w-96 p-7'>
                        <h2 className='text-2xl'>SignUp Into Your Account</h2>
                        <form onSubmit={handleSubmit(handleSend)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type='text' {...register("name")} placeholder="name" className="input input-bordered w-full max-w-xs" />
                            </div>
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

                            <select className="select select-bordered w-full max-w-xs">
                                <option>Seller</option>
                                <option>User</option>
                            </select>
                            <br />
                            <input type="submit" className='btn btn-outline w-full' />
                        </form>
                        <br />

                    </div>
                </div >
            </div>
        </div>
    );
};

export default AddProduct;