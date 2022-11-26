import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/Dashboard/AddProduct";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/Dashboard/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProducts></MyProducts>
            }
        ]

    },
    {
        path: '*',
        element: <div className='flex justify-center pt-48'><h1 className='text-8xl'>4O4 page</h1></div>
    }
])

export default router;