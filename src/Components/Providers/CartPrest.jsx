import React, { useEffect, useState } from "react";
import NavBarDashboard from "../NavBarDashboard/NavBarDashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProviders,
  getAllCities,
  getAllSpecialties,
  filterByCity,
  filterBySpecialties,
} from "../../actions/actionProviders";

export default function CartPrest() {
  const dispatch = useDispatch();
  const { allProviders, cities, specialties, providers } = useSelector(
    (state) => state.providers
  );

  const [city, setCity] = useState();
  const [speciality, setSpeciality] = useState();

  useEffect(() => {
    dispatch(getAllProviders());
    dispatch(getAllCities());
    dispatch(getAllSpecialties());
  }, [dispatch]);

  function handleSelectCity(e) {
    if (e.target.value !== "") {
      dispatch(filterByCity(e.target.value))
    }
    dispatch(filterByCity(city));
  }
  
  function handleSelectSpecialties(e) {
    if (e.target.value !== "") {
      
        dispatch(filterBySpecialties(e.target.value));
      
    }
    
  }
  
  return (
    <div>
      {/* <NavBarDashboard /> */}
      <select name="" id="" onClick={handleSelectCity} >
        <option value="">Seleccione su ciudad</option>
        {cities?.map((e) => (
          <option value={e.CP} key={e._id}>
            {e.localidad}
          </option>
        ))}
      </select>
      <select name="" id="" >
        <option value="">Seleccione especialidad</option>
        {specialties?.map((e) => (
          <option value={e.codeEsp} key={e._id}>
            {e.nombre}
          </option>
        ))}
      </select>
      <div>
        {providers?.map((e) => (
          <div key={e._id}>
            <label>{e.nombre}</label>
            <label>{e.apellido}</label>
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
