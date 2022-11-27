import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const ProductBooking = ({ categoryProduct, setCategoryProduct }) => {
    const { name, picture, loction, resalePrice, originalPrice, yearsofuse, posttime, seller } = categoryProduct;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {
            email,
            itemName,
            price,
            location,
            phone
        }

        console.log(booking)
        toast.success('booking product successfully')
        setCategoryProduct(null)

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-6'>
                        <input name='email' type="text" placeholder="Type here" value={user?.email}
                            disabled className="input input-bordered w-full " />
                        <input name='itemName' type="text" placeholder="Type here" value={name} disabled className="input input-bordered w-full " />
                        <input name='price' type="text" placeholder="Type here" value={resalePrice} disabled className="input input-bordered w-full " />
                        <input name='location' type="text" placeholder="meet location" className="input input-bordered w-full " />

                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered w-full " />
                        <input type="submit" className='btn btn-black w-full' value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductBooking;