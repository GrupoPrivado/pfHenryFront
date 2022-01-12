import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashAfil from '../../Pages/DashAfiliado/DashAfil'
import { roles } from '../../utils/roles'
import Authorizations from '../Authorizations/Authorizations'
import Credencial from '../Credencial/Credencial'
import FamilyGroupDetail from '../FamilyGroup/FamilyGroupDetail'
import MedicalHistoryDetails from '../MedicalHistory/MedicalHistoryDetails'
import NavBarDashboard from '../NavBarDashboard/NavBarDashboard'
import PrivateRouter from '../PrivateRouter/PrivateRouter'
import CartPrest from '../Providers/CartPrest'

const Afiliado = () => {
  return (
    <div>
      <NavBarDashboard />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter rol={roles.AFIL}>
              <DashAfil />
            </PrivateRouter>
          }
        />
        <Route path="/group" element={<PrivateRouter><FamilyGroupDetail /></PrivateRouter> } />
        <Route path="/credencial" element={<PrivateRouter><Credencial /></PrivateRouter>} />
        <Route path="/autorizaciones" element={<PrivateRouter><Authorizations /></PrivateRouter>} />
        <Route path="/historial" element={<PrivateRouter><MedicalHistoryDetails /></PrivateRouter>} />
        <Route path="/prestadores" element={<PrivateRouter><CartPrest /></PrivateRouter>} />
        <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />

      </Routes>
    </div>
  );
};

export default Afiliado
