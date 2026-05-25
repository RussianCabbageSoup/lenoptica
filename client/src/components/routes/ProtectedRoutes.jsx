import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../index';

const ProtectedRoutes = ({ children, requiredRole }) => {
    const { user } = useContext(Context);

    if (!user.isAuth) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && user.user?.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoutes;