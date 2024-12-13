import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
   
    if (loading) {
        return <span className="loading loading-spinner loading-lg min-h-screen"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivetRoute;