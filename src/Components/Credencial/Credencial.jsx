import React from 'react'
import {  useSelector } from 'react-redux'







export default function () {
    const {user, route} = useSelector(state => state.auth)

    return (
        <div>
            <label >Nombre</label>
            <label >Apellido</label>
            <label >DNI</label>
            <label>Plan</label>
            <label>Codigo afiliado</label>
            
            
        </div>
    )
}
