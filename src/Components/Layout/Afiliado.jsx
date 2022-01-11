import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashAfil from '../../Pages/DashAfiliado/DashAfil'
import { roles } from '../../utils/roles'
import Authorizations from '../Authorizations/Authorizations'
import { Credencial } from '../Credencial/Credencial'

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
        <Route path="/group" element={<FamilyGroupDetail />} />
        <Route path="/credencial" element={<Credencial />} />
        <Route path="/autorizaciones" element={<Authorizations />} />
        <Route path="/historial" element={<MedicalHistoryDetails />} />
        <Route path="/prestadores" element={<CartPrest />} />
        <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />

      </Routes>
    </div>
  );
};

export default Afiliado
