import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import { getAfiliate, getItem, removeItem } from '../../actions/actionAuth';
import { logout } from '../../utils/authUtils';
import {  Route, Routes } from "react-router-dom";

import NavBarDashboard from "./../../Components/NavBarDashboard/NavBarDashboard"
import { getGroup } from '../../actions/actionGroup'
import FamilyGroupDash from '../../Components/FamilyGroup/FamilyGroupDash'
import FamilyGroupDetail from '../../Components/FamilyGroup/FamilyGroupDetail';
import Credencial from '../../Components/Credencial/Credencial';
import Authorizations from '../../Components/Authorizations/Authorizations';
import MedicalHistory from '../../Components/MedicalHistory/MedicalHistory';

function DashAfil() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {user, route} = useSelector(state => state.auth)
    const [dash, setDash] = useState()

    
   // console.log(user, ' <<<<< user >')
    
    useEffect(() => {
        dispatch(getAfiliate(getItem('userToken')))
        if(route !== '') {
            removeItem('userType')
            navigate(`/${route}`)
        } 
    }, [dispatch, route, navigate])
    
    
    useEffect(()=>{
        if(user.codeGF) dispatch(getGroup(user.codeGF))
    }, [dispatch, user] )

    return (
        <div>
            <NavBarDashboard/>
            <h1>Bienvenidx {user.nombre}</h1>
            <FamilyGroupDash/>
            
            <Link to='/afiliado/credencial'>
                <button> Credencial</button>
            </Link>

        </div>
    )
}

export default DashAfil
