import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { roles } from '../../utils/roles'
import PrivateRouter from '../PrivateRouter/PrivateRouter'

export const Profesionales = () => {
    return (
        <div>
            <nav>
                Navbar profesionales
            </nav>
            <Routes>
                <Route path='/' element={<PrivateRouter rol={roles.PROF}><div> Dashboard Profesional </div></PrivateRouter>}/>
                <Route path='/pacientes' element={<PrivateRouter rol={roles.PROF}><div> Gestión de pacientes </div></PrivateRouter>}/>
                <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />
            </Routes>
        </div>
    )
}
