import './App.css';
import React,{Fragment} from "react";
import {  Route, Routes } from "react-router-dom";

import LandingPage from '../src/Pages/LandingPage/LandingPage';
import FormAsociate from '../src/Components/FormAsociate/FormAsociate';
import FormAddAsociateGrup from '../src/Components/FormAsociate/FormAddAsociateGrup';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/asociate' element={<FormAsociate/>}/>
        <Route path='/asociate/group' element={<FormAddAsociateGrup/>}/>



      </Routes>

    </Fragment>
  );
  
}

export default App;
