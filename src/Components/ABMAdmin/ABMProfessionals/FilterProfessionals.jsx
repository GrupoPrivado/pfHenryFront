import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getAllProfessionals,
  getProfessionalData,
  getAllCities,
  getAllProvinces,
  deleteCities,
} from "../../../actions/actionAMBAdmin";

export default function FilterProfessionals() {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const [filter, setFilter] = useState("");
  const [filterProvCit, setFilterProvCit] = useState({
    provinciaID: "",
    ciudadID: "",
  });

  useEffect(() => {
    dispatch(
      getAllProfessionals(0, 10, filterProvCit.provinciaID, filterProvCit.ciudadID)
    );
  }, [filterProvCit.ciudadID, filterProvCit.provinciaID]);
  
  const handleChangeProvince = (e) => {
    const newProvince = e.target.value;
    const newFilters = {
      ciudadID: "",
      provinciaID: e.target.value,
    };
    if (newProvince !== "") {
      dispatch(getAllCities(newFilters.provinciaID));
    }
    else {
      dispatch(deleteCities())
    }
    setFilterProvCit(newFilters);
  };

  const handleChangeCity = (e) => {
    const newData = {
      ...filterProvCit,
      [e.target.name]: e.target.value,
    };
    setFilterProvCit(newData);
  };

  // const handleChangeActiv = (e) => {
  //   setFilter(e.target.value);
  //   dispatch(filterActiv(e.target.value));
  // };


  return (
    
      <div className="px-3  ">
        <div className="grid overflow-hidden   grid-cols-2 grid-rows-1 gap-0">
          <div className="px-4">
            <label
              className="text-lg font-semibold text-indigo-800"
              htmlFor="provincia"
            >
              Provincia{" "}
            </label>
            <select
              onChange={handleChangeProvince}
              name="provinciaID"
              className=" uppercase block w-full  my-2 text-lg font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
              required
            >
              <option value="">Seleccione Provincia</option>
              {provinces &&
                provinces.map((p) => (
                  <option className="uppercase" key={p._id} value={p._id}>
                    {p.nombre}
                  </option>
                ))}
            </select>
          </div>

          <div className="px-4">
            <label
              className="text-lg font-semibold text-indigo-800"
              htmlFor="localidad"
            >
              Localidad{" "}
            </label>
            <select
              onChange={(e) => handleChangeCity(e)}
              name="ciudadID"
              className=" uppercase block w-full  my-2 text-lg font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
              required
            >
              <option value="">Seleccione Localidad</option>
              {cities &&
                cities.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.localidad}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    
  );
}
