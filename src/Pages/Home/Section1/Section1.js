import React from 'react';

const Section1 = () => {
    return (
        <div style={{
            "background": " url('https://tse3.mm.bing.net/th?id=OIP.FQPO77uqI5hmN3L78CvDRAHaEo&pid=Api&P=0')",
            "background-size": "cover",
            "background-repeat": "no-repeat"
        }} className="  h-[500px] ">
            <div className='pt-28 pl-20'>
                <h1 className='text-6xl font-bold text-white'>Welcome to my<br /> website</h1>
                <p className='text-3xl text-white'>In this website you have found<br /> best second hand furniture.</p>
            </div>
            <div className="rating pl-20 mt-6">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    );
};

export default Section1;