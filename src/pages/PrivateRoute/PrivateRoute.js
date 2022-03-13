import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Privateroute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div>
            <h1>Loading..</h1>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default Privateroute;