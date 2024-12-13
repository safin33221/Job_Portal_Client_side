import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import JobDetails from '../Pages/JobDetails/JobDetails';
import PrivetRoute from '../Privet/PrivetRoute';
import ApplyJob from '../Pages/ApplyJob/ApplyJob';
import MyApplication from '../Pages/MyApplication/MyApplication';
import AddJob from '../Pages/AddJob/AddJob';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs/:id',
                element: <PrivetRoute><JobDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivetRoute><ApplyJob /></PrivetRoute>
            },
            {
                path: '/myApplication',
                element: <PrivetRoute><MyApplication /></PrivetRoute>
            },
            {
                path: '/addJob',
                element: <PrivetRoute><AddJob /></PrivetRoute>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    }
])

export default router;