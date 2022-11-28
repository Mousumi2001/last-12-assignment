import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSend = info => {
        console.log(info)
        toast.success('create product successfully')

        fetch('https://assignment-12-server-lime.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/dashboard/myproduct')
            })


    }
    return (
        <div>


            <div className='m-20'>
                <div className='h-[400px] flex justify-center items-center'>
                    <div className='w-2/3 p-7'>
                        <h1 className='text-3xl mt-9'>Add a products</h1>
                        <form onSubmit={handleSubmit(handleSend)} className='grid lg:grid-cols-2 lg:gap-8'>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type='text' {...register("name")} placeholder="name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">picture</span>
                                </label>
                                <input type='url' {...register("picture")} placeholder="url" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type='text' {...register("price")} placeholder="price" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type='text' {...register("location")} placeholder="location" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type='text' {...register("phone")} placeholder="phone_number" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">product category</span>
                                </label>
                                <input type='text' {...register("category_id")} placeholder="category_id" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Year_of_purchase</span>
                                </label>
                                <input type='text' {...register("year_of_purchase")} placeholder="year_of_purchase" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">seller</span>
                                </label>
                                <input type='text' {...register("seller")} placeholder="seller" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input type='email' {...register("email")} placeholder="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">post_time</span>
                                </label>
                                <input type='text' {...register("post_time")} placeholder="post_time" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <br />

                            {/* <select className="select select-bordered w-full max-w-xs">
                                <option>Seller</option>
                                <option>User</option>
                            </select> */}
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