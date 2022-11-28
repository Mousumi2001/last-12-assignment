import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h1 className='text-3xl'>My orders component.</h1>
            <div className="overflow-x-auto">
                <table className="table w-2/3 ml-9 ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;