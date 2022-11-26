import React from 'react';

const ProductCard = ({ product, setCategoryProduct }) => {
    const { name, picture, loction, resalePrice, originalPrice, yearsofuse, posttime, seller } = product;

    return (
        <div>
            <div className="card h-3/4 lg:m-10 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Furniture: {name}</h2>
                    <p>Seller: {seller}</p>
                    <p>Location: {loction}</p>
                    <p>OriginalPrice: {originalPrice}</p>
                    <p>ResalePrice: {resalePrice}</p>
                    <p>PostTime: {posttime}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="booking-modal"
                            onClick={() => setCategoryProduct(product)}
                            className="btn btn-black">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;