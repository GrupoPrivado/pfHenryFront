import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { verifyRole } from '../../utils/authUtils'
import NavBarDashboard from "./../../Components/NavBarDashboard/NavBarDashboard"
import { getGroup } from '../../actions/actionGroup'
import{useDispatch, useSelector} from 'react-redux'
import FamilyGroupDash from '../../Components/FamilyGroup/FamilyGroupDash'

function DashAfil() {
   const { afiliado } = useSelector((state) => state.grupos)
   console.log(afiliado.codeGF)
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const result = verifyRole('afiliado');
    
    useEffect(() => {
        if(!result) navigate('/login')
        
    }, [result, navigate, ])


    useEffect(()=>{
        dispatch(getGroup(afiliado.codeGF))
    }, [] )

    return (
        <div>
            <NavBarDashboard/>


            <FamilyGroupDash/>
        </div>
    )
}

export default DashAfil
