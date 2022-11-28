import React, { useEffect, useState } from 'react';
import Spinner from '../../../Shared/Spinner/Spinner';
import Advertised from '../Advertised/Advertised';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import Section1 from '../Section1/Section1';
import Section3 from '../Section3/Section3';

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-lime.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <Section1></Section1>
            <section className='grid grid-cols-3 mt-9 gap-6 p-14'>
                {
                    categories.map(category => <CategoriesSection key={category._id}
                        category={category}
                    ></CategoriesSection>)
                }
            </section>

            <Section3></Section3>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;