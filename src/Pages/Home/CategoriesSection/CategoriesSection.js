import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = ({ category }) => {
    const { img, category: categoryName, id } = category;
    return (
        <div className="card h-3/4 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{categoryName}</h2>
                <div className="card-actions">
                    <button className="btn btn-black"><Link to={`/products/${id}`}>All Products</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;