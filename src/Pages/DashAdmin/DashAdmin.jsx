import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';


function DashAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const {user, route} = useSelector(state => state.auth)


    useEffect(() => {
        if(route !== '') navigate(`/${route}`)
    }, [dispatch, route, navigate])
  
    return (
        <div>
            Dashboard Administrador  
        </div> 
    )
}

export default DashAdmin
