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
import Credencial from '../Credencial/Credencial'
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
        const name = e.target.getAttribute('name')
        const modal = isActive[name]
        setActive({
            ...isActive,
            [name]: !modal
        })
    };

    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: "\n\t@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');\n\n\t* {\n\t\tfont-family: 'Noto Sans JP', sans-serif;\n\t}\n\n\t.bg-app {\n\t\tbackground-image: url('');\n\t}\n" }} />
            <div className="flex flex-row items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover opacity-80 bg-app" style={{ backgroundImage: `url(${Logo})` }}>
                <main className="flex flex-col w-full max-w-5xl m-4 overflow-hidden bg-white shadow-lg lg:flex-row backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl lg:m-6">
                    <div className="flex-1 p-4 lg:p-6">
                        <div className="flex items-center mb-8 text-4xl text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokelineloin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="ml-4 font-bold">Bienvenidx {user.nombre}</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 grid-rows-3 md:grid-rows-2 md:grid-cols-3">
                            <MedicalHistory/> 
                            <Authorizations/>
                            <FamilyGroupDash/>
                            
                            {/* <Link to="/afiliado/credencial"> */}
                            <div name='credencial' onClick={toggleClass} className="relative flex flex-col p-4 bg-white rounded-2xl justify-start items-center backdrop-filter backdrop-blur-lg bg-opacity-20 undefined object-top cursor-pointer" >
                                    <div className="mt-4 mb-2 text-lg  text-center text-white">
                                        <label name='credencial' className='text-xl font-medium'>Credencial</label>
                                        <svg name='credencial' xmlns="http://www.w3.org/2000/svg" className="h-28 w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                            </div>
                            {
                                isActive.credencial && <Credencial toggleClass={toggleClass} /> 
                            }

                            {/* </Link> */}
                            <div className="relative flex flex-col p-4 bg-white rounded-2xl justify-start items-center backdrop-filter backdrop-blur-lg bg-opacity-20 undefined object-top">
                                    <div className="mt-4 mb-2 text-lg  text-center text-white">
                                        <button className='text-xl font-medium' name='token' onClick={toggleClass}>Token</button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </div>
                            </div>
                                    {
                                        isActive.token && <TokenMedico /> 
                                    }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashContainer
