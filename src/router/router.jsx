import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import JobDetails from '../Pages/JobDetails/JobDetails';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/jobs/:id',
                element:<JobDetails/>,
                loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
        ]
    }
])

export default router;