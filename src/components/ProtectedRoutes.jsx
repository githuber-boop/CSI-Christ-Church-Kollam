import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />; // Redirect to login if no token
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the token to get the role

    // Check if the role matches the allowed roles
    if (!allowedRoles.includes(decodedToken.role)) {
        return <Navigate to="/unauthorized" />; // Redirect if not authorized
    }

    return <Outlet />; // If authorized, render the nested route
};

export default ProtectedRoute;
