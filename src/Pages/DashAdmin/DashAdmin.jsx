import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyRole } from '../../utils/authUtils'

function DashAdmin() {

    const navigate = useNavigate()

    const result = verifyRole('administrador');

    useEffect(() => {
        if(!result) navigate('/login')

    }, [result, navigate])
   
    return (
        <>
        
            <div>
            Dashboard Administrador </div> 
        

        </>
    )
}

export default DashAdmin
