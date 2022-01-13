import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import EditProfile from './EditProfile'

function Perfil() {
    
    return (
        <div className='mt-4'>
            <h1 className='ml-8 text-4xl col-span-4 row-span-1 text-left font-bold text-primary'>Mi Cuenta</h1>
            <EditProfile/>
        </div>
    )
}

export default Perfil
