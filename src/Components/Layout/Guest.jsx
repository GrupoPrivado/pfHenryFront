import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Asociate from '../../Pages/Asociate/Asociate'
import Contact from '../../Pages/Contact/Contact'
import LandingPage from '../../Pages/LandingPage/LandingPage'
import Login from '../../Pages/Login/Login'
import NavBar from '../NavBar/NavBar'

const Guest = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/asociate' element={<Asociate/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />

            </Routes>

        </div>
    )
}

export default Guest
