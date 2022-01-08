import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyRole } from '../../utils/authUtils'
import NavBarDashboard from "./../../Components/NavBarDashboard/NavBarDashboard"
import { getAllGroup } from '../../actions/actionGroup'
import{useDispatch} from 'react-redux'
import FamilyGroupDash from '../../Components/FamilyGroup/FamilyGroupDash'

function DashAfil() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const result = verifyRole('afiliado');
    
    useEffect(() => {
        if(!result) navigate('/login')
        dispatch(getAllGroup())
    }, [result, navigate])

    return (
        <div>
            <NavBarDashboard/>

            
            <FamilyGroupDash/>
        </div>
    )
}

export default DashAfil
