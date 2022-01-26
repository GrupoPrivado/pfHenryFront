import React, { useEffect, useState } from "react";
import NavBarDashboard from "../NavBarDashboard/NavBarDashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProviders,
  getAllCities,
  getAllSpecialties,
  filterByCity,
  getAllPharmacies,
  getAllProvinces,
  deleteCities,
} from "../../actions/actionProviders";
import Pharmacies from "../../Pages/PharmaciesPage/Pharmacies";
import { User } from "heroicons-react";
import { getAfiliate, getItem } from "../../actions/actionAuth";
import Logo from "./../../assets/bg2.jpg"
import CartillaMedica from "./CartillaMedica";
import { convertClassName } from "../../utils/constantes";


export default function CartPrest() {
  const dispatch = useDispatch();
  const {
    cities,
    providers,
    provinces,
    specialties,
    limitPaged,
    isLoading
  } = useSelector((state) => state.providers);

  const [filter, setfilter] = useState({
    provinciaID: "",
    ciudadID: "",
    especID: "",
    skip: 0
  });

  useEffect(() => {
    dispatch(getAllProvinces());
    dispatch(getAllSpecialties())
  }, [])

  useEffect(() => {
    dispatch(getAllProviders(filter.provinciaID, filter.ciudadID, filter.especID, filter.skip));
  }, [filter.ciudadID, filter.provinciaID, filter.especID, filter.skip]);


  const handleSelectCity = (e) => {
    const newData = {
      ...filter,
      skip: 0,
      [e.target.name]: e.target.value,
    };
    setfilter(newData)
  };

  const handleChangeProvince = (e) => {
    const newProvince = e.target.value
    const newFilters = {
      ...filter,
      ciudadID: "",
      skip:0,
      provinciaID: e.target.value,
    };
    if (newProvince !== '') {
      dispatch(getAllCities(newFilters.provinciaID));
    } else {
      dispatch(deleteCities())
    }
    setfilter(newFilters);
  };

  const handleNextPage = () => {
    console.log('entra')
    console.log(filter.skip, limitPaged)
    if(filter.skip < limitPaged){
      setfilter({
        ...filter,
        skip: filter.skip + 20
      });
    }
  };

  const handlePrevPage = () => {
    if(filter.skip >= 20)  {
      setfilter({
        ...filter,
        skip: filter.skip - 20
      });  
    }
  };

  return (
    <div className="flex flex-col w-full bg-cover start min-h-70vh contenair" style={{ backgroundImage: `url(${Logo})` }}>
      <h3 className='mt-3 ml-3 text-4xl font-bold text-left text-white'>Cartilla Médica</h3>
      <div className="flex justify-center gap-6 ">
        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
        <label className="text-lg font-semibold text-white">Seleccione una Provincia:</label>
        <select
          name="provincia"
          value={filter.provinciaID}
          onChange={handleChangeProvince}
          className="w-[400px] relative block px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10"
        >
          <option value="">Todas</option>
          {provinces &&
            provinces.map((p) => (
              <option key={p._id} value={p._id}>
                {p.nombre}{" "}
              </option>
            ))}
        </select>

        </div>
        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">

        <label className="text-lg font-semibold text-white">Seleccione una Ciudad:</label>
        <select name="ciudadID" onChange={handleSelectCity} className="relative block w-[400px] px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10">
          <option value="">Todas</option>
          {cities?.map((e) => (
            <option key={e._id} value={e._id}>
              {e.localidad}
            </option>
          ))}
        </select>
        </div>
        <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">

        <label className="text-lg font-semibold text-white">Seleccione una Especialidad:</label>
        <select name="especID" value={filter.especID} onChange={handleSelectCity} className="relative block w-[400px] px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 bg-white border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10">
          <option value="">Todas</option>
          {specialties?.map((e) => (
            <option key={e._id} value={e._id}>
              {e.nombre}
            </option>
          ))}
        </select>
        </div>
      </div>
      <div className="flex justify-end w-90vw mx-auto h-[56px]">
        <button className={convertClassName(filter.skip === 0 ? 'hidden' : '',"p-4 text-white font-bold hover:bg-[rgba(38,52,155,1)] hover:rounded-md")   } onClick={handlePrevPage}> {'<< Anterior'}</button>
        <button className={convertClassName(filter.skip + 20 >= limitPaged ? 'hidden' : '',"p-4 text-white font-bold hover:bg-[rgba(38,52,155,1)] hover:rounded-md")   } onClick={handleNextPage}>{'Siguiente >>'}</button>
      </div>
      <CartillaMedica providers={providers} isLoading={isLoading}/>
    </div>
  );
}


/*
      {/* <select name="speciality" id=""  onClick={handleSelectCity}>
        <option value="">Seleccione especialidad</option>
        {specialties?.map((e) => (
          <option value={e.codeEsp} >
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

*/