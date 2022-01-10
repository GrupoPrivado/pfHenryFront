import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils/authUtils';
import NavBarDashAdmin from '../../Components/NavBarDashboard/NavbarDashAdmin'

function DashAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const {route} = useSelector(state => state.auth)


    useEffect(() => {
        if(route !== '') navigate(`/${route}`)
    }, [dispatch, route, navigate])
  
    return (
        <div>
            <NavBarDashAdmin/>

            Dashboard Administrador  
            <button onClick={() => { logout(); navigate('/') }}>Cerrar Sesión</button>

        </div> 
    )
}

export default DashAdmin
