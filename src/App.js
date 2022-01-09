import React,{Fragment} from "react";
import {  Route, Routes } from "react-router-dom";

import LandingPage from '../src/Pages/LandingPage/LandingPage';

import Asociate from './Pages/Asociate/Asociate';

import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import DashAdmin from "./Pages/DashAdmin/DashAdmin";
import DashAfil from "./Pages/DashAfiliado/DashAfil";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import Credencial from "./Components/Credencial/Credencial";
import CartPrest from "./Components/Providers/CartPrest";
import { roles } from './utils/roles';
import FamilyGroupDetail from "./Components/FamilyGroup/FamilyGroupDetail";


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/asociate' element={<Asociate/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/afiliado' element={<PrivateRouter rol={roles.AFIL}><DashAfil/></PrivateRouter>}/>
        <Route path='/administrador' element={<PrivateRouter rol={roles.ADMIN}><DashAdmin /></PrivateRouter>}/>
        <Route path='/afiliado/group' element={ <FamilyGroupDetail/> }/>
        <Route path='/afiliado/credencial' element={ <Credencial/> }/>
        <Route path='/afiliado/prestadores' element={ <CartPrest/> }/>


        <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />
      </Routes>
    </Fragment>
  );
  
}

export default App;
