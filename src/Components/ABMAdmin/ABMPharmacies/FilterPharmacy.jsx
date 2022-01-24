import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  
  getAllCities,
  getAllPharmacies,
  
  filterActiv,
} from "../../../actions/actionAMBAdmin";



export default function FilterPharmacy() {

  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);
  const [filter, setFilter] = useState("");

  const handleChangeProvince = (e) => {
    dispatch(getAllCities(e.target.value));
    if (e.target.value !== "")
      dispatch(getAllPharmacies({ provinciaID: e.target.value }));
    else {
      dispatch(getAllPharmacies({ provinciaID: undefined }));
    }
    setFilter("");
  };

  const handleChangeCity = (e) => {
    if (e.target.value !== "")
      dispatch(getAllPharmacies({ ciudadID: e.target.value }));
    else {
      dispatch(getAllPharmacies(filter));
      setFilter("");
    }
  };
  const handleChangeActiv = (e) => {
    setFilter(e.target.value);
    dispatch(filterActiv(e.target.value));}

    return (
      <div>
        <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-0">
          <div className="px-4">
            <label
              className="text-lg font-semibold text-indigo-800"
              htmlFor="provincia"
            >
              Filtra por Provincia{" "}
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
                  <option key={p._id} value={p._id}>
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
              Filtra por Localidad{" "}
            </label>
            <select
               onChange={(e) => handleChangeCity(e)}
              name="ciudadID"
              className=" uppercase block w-full text-lg  my-2  font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
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
          <div className="px-4">
            <label
              className="text-lg font-semibold text-indigo-800"
              htmlFor="activo"
            >
              Filtra por Activa{" "}
            </label>
            <select
               onChange={handleChangeActiv}
              name="activo"
              className=" block w-full  my-2 text-lg font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
              value={filter}
            >
              <option value="">Todas</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>
    );
  ;
}
