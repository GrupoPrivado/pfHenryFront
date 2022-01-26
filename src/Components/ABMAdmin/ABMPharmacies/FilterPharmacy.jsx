import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  getAllCities,
  getAllPharmacies,
  getAllProvinces,
  filterActiv,
  deleteCities,
} from "../../../actions/actionAMBAdmin";

const FilterPharmacy = () => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const [filterProvCit, setFilterProvCit] = useState({
    provinciaID: "",
    ciudadID: "",
    activo: "",
  });

  useEffect(() => {
    dispatch(
      getAllPharmacies(
        0,
        10,
        filterProvCit.provinciaID,
        filterProvCit.ciudadID,
        filterProvCit.activo
      )
    );
  }, [filterProvCit.ciudadID, filterProvCit.provinciaID, filterProvCit.activo]);

  const handleChangeProvince = (e) => {
    const newProvince = e.target.value;
    const newFilters = {
      ...filterProvCit,
      ciudadID: "",
      provinciaID: e.target.value,
    };
    if (newProvince !== "") {
      dispatch(getAllCities(newFilters.provinciaID));
    } else {
      dispatch(deleteCities());
    }
    setFilterProvCit(newFilters);
  };

  const handleSelectCity = (e) => {
    const newData = {
      ...filterProvCit,
      [e.target.name]: e.target.value,
    };
    setFilterProvCit(newData);
  };

  const handleChangeActiv = (e) => {
    const newData = {
      ...filterProvCit,
      activo: e.target.value,
    };
    setFilterProvCit(newData);
  };

  return (
    <div className="px-3">
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
            value={filterProvCit.provinciaID}
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
            onChange={handleSelectCity}
            name="ciudadID"
            className=" uppercase block w-full text-lg  my-2  font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
            value={filterProvCit.ciudadID}
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
            value={filterProvCit.activo}
          >
            <option value="">Todas</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPharmacy;
