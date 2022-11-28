import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <div className="navbar bg-base-100 flex lg:justify-around">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                {
                                    user?.email ?
                                        <>
                                            <li><Link to='/dashboard'>Dashboard</Link></li>
                                            <li><button onClick={handleLogOut}>LogOut</button></li>
                                        </>
                                        :
                                        <>
                                            <li tabIndex={0}><Link to='/login'>Login</Link></li>
                                            <li><Link to='/signup'>SignUp</Link></li>
                                        </>
                                }
                            </ul>
                        </div>
                        <div className='flex'>
                            <img className='w-12 h-12' src='https://tse4.mm.bing.net/th?id=OIP.N5llMZ-Pmp-5mUqsjoLXSQHaHa&pid=Api&P=0' alt='' />
                            <a className="btn p-0 btn-ghost normal-case text-xl">Old<span className='font-bold text-blue-500'>Furniture</span></a>
                        </div>
                    </div>


                    {/* destop  */}
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 font-bold">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                user?.email ?
                                    <>
                                        <li><Link to='/dashboard'>Dashboard</Link></li>
                                        <li><button onClick={handleLogOut}>LogOut</button></li>
                                    </>
                                    :
                                    <>
                                        <li tabIndex={0}><Link to='/login'>Login</Link></li>
                                        <li><Link to='/signup'>SignUp</Link></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;