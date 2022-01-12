import React from 'react';
import { verifyRole } from '../../utils/authUtils';
import AccesoDenegado from '../../Pages/AccesoDenegado/AccesoDenegado';

const PrivateRouter = ({rol , children}) => { 
    
    const isAuthenticated = verifyRole(rol);     
    console.log('rol: ', rol, ' is auth ', isAuthenticated) 
    if (isAuthenticated) {
        return children
    }    
    return <AccesoDenegado/>
}

export default PrivateRouter

