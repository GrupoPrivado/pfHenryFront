import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Authorizations from '../Authorizations/Authorizations'
import FamilyGroupDash from '../FamilyGroup/FamilyGroupDash'
import MedicalHistory from '../MedicalHistory/MedicalHistory'
import { TokenMedico } from '../TokenMedico/TokenMedico'
import Logo from "./../../assets/bg2.jpg"
import {Link, useNavigate} from "react-router-dom"
import { getGroup } from '../../actions/actionGroup'
import { getAfiliate, getItem, removeItem } from '../../actions/actionAuth';
import {getRecetas} from '../../actions/actionRecet'


function DashContainer() {
    const { user, route } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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

    useEffect(()=>{
        if(user.DNI) dispatch(getRecetas(user.DNI))
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
            <style dangerouslySetInnerHTML={{ __html: "\n\t@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');\n\n\t* {\n\t\tfont-family: 'Noto Sans JP', sans-serif;\n\t}\n\n\t.bg-app {\n\t\tbackground-image: url('');\n\t}\n" }} />
            <div className="flex flex-row items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover opacity-80 bg-app" style={{ backgroundImage: `url(${Logo})` }}>
                <main className="flex flex-col w-full max-w-5xl m-4 overflow-hidden bg-white shadow-lg lg:flex-row backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl lg:m-6">
                    <div className="flex-1 p-4 lg:p-6">
                        <div className="flex items-center mb-8 text-4xl text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="ml-4 font-bold">Bienvenidx {user.nombre}</div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 grid-rows-7 md:grid-rows-3 md:grid-cols-3">
                            <MedicalHistory/> 
                            <FamilyGroupDash/>
                            <Authorizations/>
                            <Link to="/afiliado/credencial">
                                <div className="relative flex flex-col p-4 bg-white rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                    <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
                                        <h1>Credencial</h1>
                                    </div>
                                </div>
                            </Link>
                            <div className="relative flex flex-col p-4 bg-white rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
                                    <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
                                        <button name='token' onClick={toggleClass}> Token </button>
                                    </div>
                                    {
                                        isActive.token && <TokenMedico /> 
                                    }
                                </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashContainer
