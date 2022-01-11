import React,{Fragment} from "react";
import {  Route, Routes } from "react-router-dom";
import Afiliado from "./Components/Layout/Afiliado";
import Guest from "./Components/Layout/Guest";
import Admin from "./Components/Layout/Admin";
import { Profesionales } from "./Components/Layout/Profesionales";


function App() {
  return (
    <Fragment>
      <Routes>
          <Route path='/*' element={<Guest />} />
          <Route path='afiliado/*' element={<Afiliado/>} />
          <Route path='administrador/*' element={<Admin/>} />
          <Route path='profesionales/*' element={<Profesionales/>} />
        <Route path='*' element={<div><h1>Recurso no encontrado</h1></div>} />
      </Routes>
    </Fragment>
  );
  
}

export default App;
