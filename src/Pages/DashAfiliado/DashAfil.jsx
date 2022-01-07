import React from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyRole } from '../../utils/authUtils'

function DashAfil() {

    const navigate = useNavigate()

    return (
        <>
        {
            verifyRole('afiliado') ?  <div>
            Dashboard Afiliado </div> : navigate('/login')
        }

    
        </>
    )
}

export default DashAfil
