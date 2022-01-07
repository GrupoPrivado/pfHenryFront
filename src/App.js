
import React,{Fragment} from "react";
import {  Route, Routes } from "react-router-dom";

import LandingPage from '../src/Pages/LandingPage/LandingPage';

import Asociate from './Pages/Asociate/Asociate';

import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import DashboardAfiliado from "./Pages/DashboardAfiliado/DashboardAfiliado";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/asociate' element={<Asociate/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<DashboardAfiliado/>}/>
      </Routes>
    </Fragment>
  );
  
}

export default App;
