import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  getPharmacyData,
  deletePharmacy,
  getAllCities,
  getAllPharmacies,
  getAllProvinces,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPharmacies.module.css";

const ABMPharmaciesList = ({
  allPharmacies,
  setShowModalUpdate,
  setShowModalAdd,
}) => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const handleChangeProvince = (e) => {
    dispatch(getAllCities(e.target.value));
    dispatch(getAllPharmacies({provinciaID:e.target.value}));
  };

  const handleChangeCity = (e) => {
    dispatch(getAllPharmacies({ciudadID:e.target.value}));
  };

  const handleEditPharmacy = async (event) => {
    await dispatch(getPharmacyData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeletePharmacy = async (event) => {
    let response = await dispatch(deletePharmacy(event.target.value));

    await dispatch(getAllPharmacies({}));
  };

  return (
    <div className={styles.divScroll}>
      <div class="bg-gray-50 min-h-screen  ">
        <div>
          <div class="p-4">
            <div class="bg-white p-6 rounded-md">
              <div>
                <div className=" flex justify-end">
                  <button
                    className="group relative justify-items-end w-30 flex  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    title="Agregar Especialidad"
                    onClick={() => setShowModalAdd(true)}
                  >
                    Agregar Farmacia
                  </button>
                </div>

                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label className="text-lg font-semibold" htmlFor="provincia">
                    Provincia{" "}
                  </label>
                  <select
                    onChange={handleChangeProvince}
                    name="provinciaID"
                    className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                    required
                  >
                    {provinces &&
                      provinces.map((p) => (
                        <option key={p._id} value={p._id}>
                          {p.nombre}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label className="text-lg font-semibold" htmlFor="localidad">
                    Localidad{" "}
                  </label>
                  <select
                    onChange={(e) => handleChangeCity(e)}
                    name="ciudadID"
                    className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                    required
                  >
                    {cities &&
                      cities.map((c) => (
                        <option key={c._id} value={c._id}>
                          {c.localidad}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="mt-3.5">
                  <div>
                    <div class=" flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className="w-1/6  flex justify-center">
                        <span>Nombre </span>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <span> Direccion</span>
                      </div>

                      <div className="w-1/6 flex justify-center">
                        <span>Localidad</span>
                      </div>
                      <div className="w-1/6  flex justify-center">
                        <span>Provincia</span>
                      </div>

                      <div className="w-1/6  flex justify-center">
                        <span>Activa </span>
                      </div>

                      <div className="w-1/6 flex justify-center">
                        <span>Editar</span>
                      </div>
                    </div>
                    {allPharmacies.length !== 0 &&
                      allPharmacies.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div class="flex justify-between  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                              <div class="w-1/6 flex justify-center ">
                                <span>{element.nombre}</span>
                              </div>
                              <div class="w-1/6 flex justify-center ">
                                <span>{element.direccion}</span>
                              </div>
                              <div class="w-1/6 flex justify-center ">
                                <span>{element.apellido}</span>
                              </div>
                              <div class="w-1/6 flex justify-center "></div>
                              <div class="w-1/6 flex justify-center ">
                                <span>{element.activa ? "Si" : "No"}</span>
                              </div>

                              <div class="w-1/6 flex justify-around ">
                                <button
                                  key={"delete" + element._id}
                                  title="Delete"
                                  value={element._id}
                                  onClick={(e) => handleDeletePharmacy(e)}
                                >
                                  Eliminar
                                </button>
                                <button
                                  title="Edit"
                                  key={"edit" + element._id}
                                  value={element._id}
                                  onClick={(e) => handleEditPharmacy(e)}
                                >
                                  Editar
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABMPharmaciesList;
