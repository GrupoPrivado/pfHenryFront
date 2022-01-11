import React,{useEffect, useState} from "react";
import NavBarDashboard from "../NavBarDashboard/NavBarDashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getAllProviders, getAllCities, getAllSpecialties } from "../../actions/actionProviders";



export default function CartPrest() {
  const dispatch = useDispatch();
  const {allProviders, cities, specialties} = useSelector(state => state.providers)
 const [ciudad, setCiudad] = useState()

  useEffect(()=> {
  dispatch(getAllProviders())
  dispatch(getAllCities())
  dispatch(getAllSpecialties())
},[dispatch]

  
  )

  function handleSelect(e) {
    if (e.target.value !== "") {
      setCiudad({
        ...ciudad,
        ciudad: e.target.value,
      });
    }
  }

  return (
    <div>
      {/* <NavBarDashboard /> */}
      <select name="" id="">
        <option value="">Seleccione su ciudad</option>
        {cities?.map(e=> (
          <option value={e.localidad} key={e._id}>{e.localidad}</option>
        ))}
      </select>
      <select name="" id="">
        <option value="">Seleccione especialidad</option>
        {specialties?.map(e=> (
          <option value={e.nombre} key={e._id}>{e.nombre}</option>
        ))}
      </select>
      <div>
       { allProviders?.map(e=> (
         <div key={e._id}>
           <label >{e.nombre}</label>
           <label >{e.apellido}</label>
           <label>{e.codeEsp}</label>
         </div>
       ))}

      </div>

      <Link to="/afiliado">

        <button>Volver</button>
      </Link>
    </div>
  );
}
