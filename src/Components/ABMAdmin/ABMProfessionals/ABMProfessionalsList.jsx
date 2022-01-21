import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getAllProfessionals,
  getProfessionalData,
  getAllCities,
  getAllProvinces,
  deleteProfessional,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMProfessionals.module.css";

const ABMAffiliatesList = ({
  allProfessionals,
  setShowModalUpdate,
  setShowModalAdd,
  setShowModalUpDown
}) => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const handleBajaAltaProfessional = async (event) => {
    await dispatch(getProfessionalData(event.target.value));
    setShowModalUpDown(true);
  };

  const handleDeleteProfessional = async (event) => {
    let response = await dispatch(deleteProfessional(event.target.value));

    await dispatch(getAllProfessionals({}));
  };

  const handleEditProfessional = async (event) => {
    await dispatch(getProfessionalData(event.target.value));
    setShowModalUpdate(true);
  };

  const [filter, setFilter] = useState({ provinciaID: undefined });

  const handleChangeProvince = (e) => {
    dispatch(getAllCities(e.target.value));
    if (e.target.value !== "")
      dispatch(getAllProfessionals({ provinciaID: e.target.value }));
    else dispatch(getAllProfessionals({ provinciaID: undefined }));

    setFilter({ provinciaID: e.target.value });
  };

  const handleChangeCity = (e) => {
    if (e.target.value !== "")
      dispatch(getAllProfessionals({ ciudadID: e.target.value }));
    else dispatch(getAllProfessionals(filter));
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
                    Agregar Profesional
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
                    <option value="">Seleccione Provincia</option>
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
                    <option value="">Seleccione Localidad</option>
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
                    <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div>
                        <span>Matricula </span>
                      </div>
                      <div>
                        <span>Nombre </span>
                      </div>
                      <div>
                        <span>Apellido</span>
                      </div>
                      <div>
                        <span>Localidad</span>
                      </div>
                      <div>
                        <span>Provincia</span>
                      </div>
                      <div>
                        <span>Especialidad</span>
                      </div>
                      <div>
                        <span>Teléfono</span>
                      </div>
                      <div>
                        <span>E-mail </span>
                      </div>
                      <div>
                        <span>Activo </span>
                      </div>

                      <div>
                        <span>Editar</span>
                      </div>
                    </div>
                    {allProfessionals.length !== 0 &&
                      allProfessionals.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                              <div class="px-2 flex">
                                <span>{element.matricula}</span>
                              </div>
                              <div>
                                <span>{element.nombre}</span>
                              </div>
                              <div>
                                <span>{element.apellido}</span>
                              </div>
                              <div class="w-1/6 flex justify-center ">
                                <span>{element.ciudadID.localidad}</span>
                              </div>
                              <div class="w-1/6 flex justify-center ">
                                <span>{element.provinciaID.nombre}</span>
                              </div>
                              <div class="px-2">
                                <span>{element.especID.nombre}</span>
                              </div>
                              <div class="px-2">
                                <span>{element.telefono}</span>
                              </div>
                              <div class="px-2">
                                <span>{element.mail}</span>
                              </div>
                              <div>
                                <span>{element.activo ? "Si" : "No"}</span>
                              </div>

                              <div class="px-2">
                                <button
                                  title="Edit"
                                  key={"edit" + element._id}
                                  value={element._id}
                                  onClick={(e) => handleEditProfessional(e)}
                                >
                                  Editar
                                </button>

                                <button
                                  title="bajaalta"
                                  key={"baja" + element._id}
                                  value={element._id}
                                  onClick={(e) => handleBajaAltaProfessional(e)}
                                >
                                  Baja/Alta
                                </button>

                                <button
                                  key={"delete" + element._id}
                                  title="Delete"
                                  value={element._id}
                                  onClick={(e) => handleDeleteProfessional(e)}
                                >
                                  Eliminar
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

export default ABMAffiliatesList;
