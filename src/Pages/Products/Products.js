import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBooking from './ProductBooking';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();
    const [categoryProduct, setCategoryProduct] = useState(null);
    return (
        <div>
            <div className='grid grid-cols-2 gap-7 p-6'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setCategoryProduct={setCategoryProduct}
                    ></ProductCard>)
                }
            </div>
            {
                categoryProduct &&
                <ProductBooking
                    categoryProduct={categoryProduct}
                    setCategoryProduct={setCategoryProduct}
                ></ProductBooking>}
        </div>
    );
};

export default Products;