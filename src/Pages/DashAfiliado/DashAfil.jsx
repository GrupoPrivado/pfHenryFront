import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAfiliate, getItem, removeItem } from '../../actions/actionAuth';
import { logout } from '../../utils/authUtils';

import NavBarDashboard from "./../../Components/NavBarDashboard/NavBarDashboard"
import { getGroup } from '../../actions/actionGroup'
import FamilyGroupDash from '../../Components/FamilyGroup/FamilyGroupDash'

function DashAfil() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const {user, route} = useSelector(state => state.auth)
 
    
    console.log(user, ' <<<<< user >')
    
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
            <FamilyGroupDash/>

            <p>{user.nombre}</p>
            <button onClick={() => { logout(); navigate('/') }}>Cerrar Sesión</button>

        </div>
    )
}

export default DashAfil
