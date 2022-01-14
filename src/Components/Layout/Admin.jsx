import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import DashAdmin from '../../Pages/DashAdmin/DashAdmin'
import { roles } from '../../utils/roles'
import NavbarDashAdmin from '../NavBarDashboard/NavbarDashAdmin'
import PrivateRouter from '../PrivateRouter/PrivateRouter'
import SideBar from '../ABMAdmin/ABMSelector/SideBar'


const Admin = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div>
            <NavbarDashAdmin showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
            <Routes>
                <Route path='/' element={<PrivateRouter rol={roles.ADMIN}><DashAdmin /></PrivateRouter>}/>
                <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />
                

            </Routes>

        </div>
    )
}

export default Admin
