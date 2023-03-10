import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

//hay que poner children en el componente que recibimos por parametro
export const PrivateRoute = ({ children }) => {

    const {user} = useContext(AuthContext);

    const { pathname, search} = useLocation();

    localStorage.setItem('lastPath', pathname+search);

    return user.logged 
        ? children
        : <Navigate to="/login"/>

};
