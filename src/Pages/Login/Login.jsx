import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormLogin from '../../Components/FormLogin/FormLogin'
//import Logo from "./../../assets/logo.svg"
import HappyFamily from "./../../assets/happyFamily.jpeg"
import NavBar from '../../Components/NavBar/NavBar'
import { getItem } from '../../actions/actionAuth'
import {useTitle} from '../../hooks/useTitle'
import Logo from "../../assets/logo.svg"

function Login() {

    const navigate = useNavigate()
    useTitle('Ingresa a tu ArpyMedical')

    const [tipoUsuario, setTipoUsuario] = useState('afiliado')

    const handleSelectUsuario = (e) => {
        setTipoUsuario(e.target.value)
    }

    useEffect(() => {   
        const userType = getItem('userType')
        if(userType) navigate(`/${userType}`)
    }, [navigate])
//
    return (
        <div className='w-screen h-screen'>
            <div className='flex w-full h-full'>
                <div className='flex justify-center w-1/2 h-full'>
                    <img className='object-cover w-screen h-screen' src={HappyFamily} alt="Happy family Arpi Medical" />
                </div>
                <div className='w-1/2 h-screen flex flex-column items-center justify-center'>
                    <div>
                    <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src={Logo}
                        alt="Workflow"
                    />
                </div>
                        <select value={tipoUsuario} onChange={handleSelectUsuario}>
                            <option value='afiliado'>Afiliado</option>
                            <option value='profesional'>Profesional</option>
                            <option value='administrador'>Administrador</option>
                        </select>
                        <FormLogin tipoUsuario={tipoUsuario}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
