import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location)
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <Spinner animation="border" variant="success" />;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>
};

export default PrivateRoute;