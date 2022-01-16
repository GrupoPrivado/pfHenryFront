import React, { useEffect, useState } from "react";
import NavBarDashboard from "../NavBarDashboard/NavBarDashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProviders,
  getAllCities,
  getAllSpecialties,
  filterByCity,
  
} from "../../actions/actionProviders";
import { provincias } from "../../utils/constantes";

export default function CartPrest() {
  const dispatch = useDispatch();
  const { allProviders, cities, specialties, providers } = useSelector(
    (state) => state.providers
  );

  const [filter, setfilter] = useState({
    provincia: '',
    city:'',
    speciality :''
  });
  
  
  // useEffect(() => {
  //   dispatch(getAllProviders());
  //   // dispatch(getAllCities());
  //   dispatch(getAllSpecialties());
  // }, [dispatch]);

  async function handleSelectCity(e) {
    console.log('<<<<< target >>>>',e.target.name, '>>>>>>', e.target.value)
    const hand = {
      ...filter,
      [e.target.name]: e.target.value,
    };
    console.log('hand  ', hand)
    setfilter(hand);

    dispatch(filterByCity(hand.city, hand.speciality));
  }
  
  // function handleSelectSpecialties(e) {
  //   if (e.target.value !== "") {   
  //       dispatch(filterBySpecialties(e.target.value));  
  //   }
  // }

  const handleChangeProvince = (e) => {
    const newFilters = {
      ...filter,
      provincia: e.target.value
    }
    dispatch(getAllCities(newFilters.provincia))
    setfilter(newFilters)
  }
  console.log(cities)
  return (
    <div>
      {/* <NavBarDashboard /> */}
      <select name='provincia' onChange={handleChangeProvince}>
        <option value="">Seleccione su provincia</option>
        {
          provincias.map((p) =><option key={p.codeProv} value={p.codeProv} >{p.provincia} </option>)
        }
      </select>
      <select name="city" id="" onChange={handleSelectCity}>
        <option value="">Seleccione su ciudad</option>
        {cities?.map((e) => (
          <option value={e._id} >
            {e.localidad}
          </option>
        ))}
      </select>
      {/* <select name="speciality" id=""  onClick={handleSelectCity}>
        <option value="">Seleccione especialidad</option>
        {specialties?.map((e) => (
          <option value={e.codeEsp} >
            {e.nombre}
          </option>
        ))}
      </select> */}
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
