import React from 'react'
import { verifyRole } from '../../utils/authUtils';
import AccesoDenegado from '../../Pages/AccesoDenegado/AccesoDenegado';

const PrivateRouter = ({rol , children}) => { 
    const isAuthenticated = verifyRole(rol);      
    if (isAuthenticated) {
        return children
    }    
    return <AccesoDenegado/>
}

export default PrivateRouter

//creo deberia hacer un estado en redux y verificar con useeffect si cambió ese usar
//el seteo en localstorage hacerlo a partir de cuando se setea o cambia el estado de redux