import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAfiliate, getItem, removeItem } from '../../actions/actionAuth';

import NavBarDashboard from "./../../Components/NavBarDashboard/NavBarDashboard"
import { getGroup } from '../../actions/actionGroup'
import FamilyGroupDash from '../../Components/FamilyGroup/FamilyGroupDash'
import { TokenMedico } from '../../Components/TokenMedico/TokenMedico';
import Authorizations from '../../Components/Authorizations/Authorizations';

import DashContainer from '../../Components/DashContainer/DashContainer';
import Credencial from '../../Components/Credencial/Credencial';

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
            {/* <NavBarDashboard/> */}
            <DashContainer/>
            
            {/* <Link to='/afiliado/credencial'>
                <button>Credencial</button>
            </Link> */}
            {/* <Link to='/afiliado/prestadores'>
            <button> Cartilla Prestadores</button></Link> */}

            <button name='token' onClick={toggleClass}> Token </button>
            {
                isActive.token && <TokenMedico /> 
            }
            <button name='credencial' onClick={toggleClass}> Credencial </button>
            {
                isActive.credencial && <Credencial/>
            }

            <button name='farmacia' onClick={toggleClass}> farmacia </button>
            {
                isActive.farmacia && <div> Farmacia </div>
            }
            <button name='cartilla' onClick={toggleClass}> cartilla </button>
            {
                isActive.cartilla && <div> Cartilla </div>
            }
            
        </div>
    )
}

export default DashAfil
