import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashProfessional from '../../Pages/DashProfessional/DashProfessional'
import { roles } from '../../utils/roles'
import FooterProfessional from '../Footer/FooterProfessional'
import NavbarProfessional from '../NavBarDashboard/NavbarProfessional'
import PrivateRouter from '../PrivateRouter/PrivateRouter'
import ClinicHistory from '../Professionals/ClinicHistory'

const Profesionales = () => {
    return (
        <div>
            <NavbarProfessional />
            <Routes>
                <Route path='/' element={<PrivateRouter rol={roles.PROF}><div> <DashProfessional/> </div></PrivateRouter>}/>
                <Route path='/historiaclinica' element={<PrivateRouter rol={roles.PROF}><div> <ClinicHistory/> </div></PrivateRouter>}/>
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
            <FooterProfessional />
        </div>
    )
}
export default Profesionales