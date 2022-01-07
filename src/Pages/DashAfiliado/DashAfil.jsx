import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyRole } from '../../utils/authUtils'

function DashAfil() {

    const navigate = useNavigate()

    const result = verifyRole('afiliado');
    
    useEffect(() => {
        if(!result) navigate('/login')

    }, [result, navigate])

    return (
        <div>
            Dashboard Afiliado
        </div>
  
    )
}

export default DashAfil
