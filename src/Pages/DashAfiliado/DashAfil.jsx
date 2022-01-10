import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import { getAfiliate, getItem, removeItem } from '../../actions/actionAuth';
import { logout } from '../../utils/authUtils';
import NavBarDashboard from "./../../Components/NavBarDashboard/NavBarDashboard"
import { getGroup } from '../../actions/actionGroup'
import FamilyGroupDash from '../../Components/FamilyGroup/FamilyGroupDash'
import { TokenMedico } from '../../Components/TokenMedico/TokenMedico';
import Credencial from '../../Components/Credencial/Credencial';
import Authorizations from '../../Components/Authorizations/Authorizations';
import MedicalHistory from '../../Components/MedicalHistory/MedicalHistory';
import DashContainer from '../../Components/DashContainer/DashContainer';

function DashAfil() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {user, route} = useSelector(state => state.auth)
    const [isActive, setActive] = useState({
        credencial: false,
        token: false,
        farmacia: false,
        cartilla: false
    });
        
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

    const toggleClass = (e) => {
        const modal = isActive[e.target.name]
        setActive({
            ...isActive,
            [e.target.name]: !modal
        })
      };


    return (
        <div>
            <NavBarDashboard/>
            <h1>Bienvenidx {user.nombre}</h1>
            <DashContainer/>
            <FamilyGroupDash/>
            {/* <MedicalHistory/> */}
            <Authorizations/>
            
            <Link to='/afiliado/credencial'>
                <button>Credencial</button>
            </Link>
            <Link to='/afiliado/prestadores'>
            <button> Cartilla Prestadores</button></Link>

            <button name='token' onClick={toggleClass}> Token </button>
            {
                isActive.token && <TokenMedico /> 
            }

            
        </div>
    )
}

export default DashAfil
