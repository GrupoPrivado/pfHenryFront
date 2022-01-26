import React, { useEffect } from 'react';
import { verifyRole } from '../../utils/authUtils';
import AccesoDenegado from '../../Pages/AccesoDenegado/AccesoDenegado';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem } from '../../actions/actionAuth';

const PrivateRouter = ({rol , children}) => { 
    const navigate = useNavigate()
    const { route } = useSelector(state => state.auth)


    useEffect(() => {
        if(rol === 'afiliado'){
            if (route === "login") {
                removeItem("userType");
                navigate(`/${route}`);
              }
            if (route !== "") {
                navigate(`/${route}`);
            }
        }
    }, [route,navigate, rol])
    
    const isAuthenticated = verifyRole(rol);     
    if (isAuthenticated) {
        return children
    }    
    return <AccesoDenegado/>
}

export default PrivateRouter

