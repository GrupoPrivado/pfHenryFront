import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import DashAdmin from '../../Pages/DashAdmin/DashAdmin'
import { roles } from '../../utils/roles'
import NavbarDashAdmin from '../NavBarDashboard/NavbarDashAdmin'
import PrivateRouter from '../PrivateRouter/PrivateRouter'
import SideBar from '../ABMAdmin/ABMSelector/SideBar'
import ABMSpecialities from '../ABMAdmin/ABMSpecialties/ABMSpecialties'
import ABMAffiliates from '../ABMAdmin/ABMAffiliates/ABMAffiliates'
import ABMPharmacies from '../ABMAdmin/ABMPharmacies/ABMPharmacies'
import ABMProfessionals from "../../Components/ABMAdmin/ABMProfessionals/ABMProfessionals";
import ABMPlans from '../ABMAdmin/ABMPlan/ABMPlans'
import ABMPrescriptions from '../ABMAdmin/ABMPrescriptions/ABMPrescriptions'
import ABMEmployees from '../ABMAdmin/ABMEmployees/ABMEmployees'
import FooterAdmin from '../Footer/FooterAdmin'

const Admin = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div>
            <NavbarDashAdmin showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <Routes>
                <Route path='/' element={<PrivateRouter rol={roles.ADMIN}><DashAdmin /></PrivateRouter>}/>
                <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />
                <Route path='/especialidades' element={<PrivateRouter rol={roles.ADMIN}><ABMSpecialities/></PrivateRouter>}/>
                <Route path='/farmacias' element={<PrivateRouter rol={roles.ADMIN}><ABMPharmacies/></PrivateRouter>}/>
                <Route path='/afiliados' element={<PrivateRouter rol={roles.ADMIN}><ABMAffiliates/></PrivateRouter>}/>
                <Route path='/prestadores' element={<PrivateRouter rol={roles.ADMIN}><ABMProfessionals/></PrivateRouter>}/>
                <Route path='/planes' element={<PrivateRouter rol={roles.ADMIN}><ABMPlans/></PrivateRouter>}/>
                <Route path='/recetas' element={<PrivateRouter rol={roles.ADMIN}><ABMPrescriptions/></PrivateRouter>}/>
                <Route path='/empleados' element={<PrivateRouter rol={roles.ADMIN}><ABMEmployees/></PrivateRouter>}/>

            </Routes>
 <FooterAdmin/>
        </div>
    )
}

export default Admin
