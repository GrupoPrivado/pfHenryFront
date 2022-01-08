import React,{Fragment} from "react";
import {  Route, Routes } from "react-router-dom";

import LandingPage from '../src/Pages/LandingPage/LandingPage';

import Asociate from './Pages/Asociate/Asociate';

import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import DashAdmin from "./Pages/DashAdmin/DashAdmin";
import DashAfil from "./Pages/DashAfiliado/DashAfil";
import FamilyGroupDetail from "./Components/FamilyGroup/FamilyGroupDetail";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/asociate' element={<Asociate/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/afiliado' element={ <DashAfil/> }/>
        <Route path='/administrador' element={<DashAdmin />}/>
        <Route path='/afiliado/group' element={ <FamilyGroupDetail/> }/>

      </Routes>
    </Fragment>
  );
  
}

export default App;
