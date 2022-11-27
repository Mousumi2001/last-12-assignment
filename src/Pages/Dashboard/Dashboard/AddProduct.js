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


            <div className='m-20'>
                <div className='h-[400px] flex justify-center items-center'>
                    <div className='w-2/3 p-7'>
                        <h1 className='text-3xl'>Add a products</h1>
                        <form onSubmit={handleSubmit(handleSend)} className='grid grid-cols-2 gap-8'>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type='text' {...register("name")} placeholder="name" className="input input-bordered w-full max-w-xs" />
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
                                <input type='text' {...register("product-category")} placeholder="product_category" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                                <input type='text' {...register("description")} placeholder="description" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Year of purchase</span>
                                </label>
                                <input type='text' {...register("Year of purchase")} placeholder="Year_of_purchase" className="input input-bordered w-full max-w-xs" />
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