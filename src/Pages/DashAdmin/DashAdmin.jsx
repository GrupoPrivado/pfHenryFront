import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/authUtils';
import NavBarDashAdmin from '../../Components/NavBarDashboard/NavbarDashAdmin'

import ABMCities from '../../Components/ABMAdmin/ABMCities/ABMCities';
import ABMSpecialities from '../../Components/ABMAdmin/ABMSpecialties/ABMSpecialties';
import ABMAffiliates from '../../Components/ABMAdmin/ABMAffiliates/ABMAffiliates';



function DashAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    
    const {route} = useSelector(state => state.auth)
 

    useEffect(() => {
        if(route !== '') navigate(`/${route}`)
    }, [dispatch, route, navigate])
  
    return (
        <div>
 
 
            
{/*             
            ABM 
            <ABMCities/>

            <ABMSpecialities/>
            
            <ABMAffiliates/>

           
        

            Dashboard Administrador  
            <button onClick={() => { logout(); navigate('/') }}>Cerrar Sesión</button> */}


        </div> 
    )
}

export default DashAdmin
