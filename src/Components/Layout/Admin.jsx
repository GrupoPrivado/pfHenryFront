import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashAdmin from '../../Pages/DashAdmin/DashAdmin'
import { roles } from '../../utils/roles'
import NavbarDashAdmin from '../NavBarDashboard/NavbarDashAdmin'
import PrivateRouter from '../PrivateRouter/PrivateRouter'

const Admin = () => {
    return (
        <div>
            <NavbarDashAdmin />
            <Routes>
                <Route path='/' element={<PrivateRouter rol={roles.ADMIN}><DashAdmin /></PrivateRouter>}/>
                <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />

            </Routes>

        </div>
    )
}

export default Admin
