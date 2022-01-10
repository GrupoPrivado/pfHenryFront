import React from "react";
import {  useSelector } from 'react-redux'

function Authorizations() {
    const {recetas} = useSelector(state => state.recetas)
    console.log(' recetas auto',recetas[0].autorizadas)
  return (
    <div className="flex flex-col items-center p-6 m-10 w-80 h-50 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-3xl justify-evenly">
      <div>
        <h1>Recetas</h1>

         <div>
             <label htmlFor="">Autorizadas</label>
             {recetas.map(e=>(
                 <div>
                 <label htmlFor="">{e.autorizadas.practica}</label>
                 <label htmlFor="">{e.autorizadas.fecha}</label>
                 </div>
             ))}
         </div>
         <div>
             <label htmlFor="">Pendientes</label>
             {recetas.map(e=>(
                 <div>
                 <label htmlFor="">{e.pendientes.practica}</label>
                 <label htmlFor="">{e.pendientes.fecha}</label>
                 </div>
             ))}
         </div>

      </div>


    </div>
  );
}

export default Authorizations;
