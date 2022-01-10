import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import FormLogin from '../../Components/FormLogin/FormLogin'
//import Logo from "./../../assets/logo.svg"
import HappyFamily from "./../../assets/happyFamily.jpeg"
import NavBar from '../../Components/NavBar/NavBar'
import { getItem } from '../../actions/actionAuth'
function Login() {

    const navigate = useNavigate()
    useEffect(() => {   
        const userType = getItem('userType')
        if(userType) navigate(`/${userType}`)
    }, [navigate])
//
    return (
        <div className='w-screen h-screen'>
            <NavBar/>
            <div className='flex w-full h-full'>
                <div className='flex justify-center w-1/2 h-full'>
                    <img className='object-cover w-screen h-screen' src={HappyFamily} alt="Happy family Arpi Medical" />
                </div>
                <div className='w-1/2 h-screen flex flex-column items-center justify-center'>
                    <div>
                        <FormLogin/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
