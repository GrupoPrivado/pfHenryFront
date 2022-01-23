import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getAllProfessionals,
  getProfessionalData,
  getAllCities,
  getAllProvinces,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMProfessionals.module.css";

const ABMAffiliatesList = ({
  allProfessionals,
  setShowModalUpdate,
  setShowModalAdd,
  setShowModalUpDown,
  setDeleteState,
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

  const handleEditProfessional = async (event) => {
    console.log('event update', event.target.value)
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

                <div className="grid overflow-hidden grid-cols-2 grid-rows-1 gap-0">
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
                          <option
                            className="uppercase"
                            key={p._id}
                            value={p._id}
                          >
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

                <div className="mt-3.5">
                  <div>
                    <div class="grid overflow-hidden grid-cols-8 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className=" flex justify-center">
                        <span>Matricula </span>
                      </div>
                      <div className=" flex justify-center">
                        <span>Nombre </span>
                      </div>

                      <div className=" flex justify-center">
                        <span>Localidad</span>
                      </div>
                      <div className=" flex justify-center">
                        <span>Provincia</span>
                      </div>
                      <div className=" flex justify-center">
                        <span>Especialidad</span>
                      </div>

                      <div className=" flex justify-center">
                        <span>E-mail </span>
                      </div>
                      <div className=" flex justify-center">
                        <span>Activo </span>
                      </div>

                      <div className=" flex justify-center">
                        <span>Editar</span>
                      </div>
                    </div>

                    {allProfessionals.length !== 0 &&
                      allProfessionals.map((element) => {
                        return (
                          <div
                            key={element._id}
                            className="grid overflow-hidden grid-cols-8 grid-rows-1 gap-0 justify-between  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4"
                          >
                            <div className=" flex justify-center ">
                              <span>{element.matricula}</span>
                            </div>
                            <div className=" flex justify-center ">
                              <span>{element.nombre}</span>
                              <span>{element.apellido}</span>
                            </div>

                            <div className=" flex justify-center ">
                              <span>{element.ciudadID.localidad}</span>
                            </div>
                            <div class=" flex justify-center ">
                              <span className="uppercase">
                                {element.provinciaID.nombre}
                              </span>
                            </div>
                            <div className=" flex justify-center ">
                              <span>{element.especID.nombre}</span>
                            </div>

                            <div className=" flex justify-center ">
                              <span>{element.mail}</span>
                            </div>
                            <div className=" flex justify-center ">
                              <span>{element.activo ? "Si" : "No"}</span>
                            </div>

                            <div className=" flex justify-around ">
                              <button
                                className="ml-1"
                                title="Edit"
                                key={"edit" + element._id}
                                value={element._id}
                                onClick={(e)=>handleEditProfessional(e.target.value)}
                              >
                                Editar
                              </button>

                              <button
                                className="ml-1"
                                title="bajaalta"
                                key={"baja" + element._id}
                                value={element._id}
                                onClick={(e) => handleBajaAltaProfessional(e)}
                              >
                                Baja/Alta
                              </button>

                              <button
                                className="ml-1"
                                key={"delete" + element._id}
                                title="Delete"
                                value={element._id}
                                onClick={(e) => setDeleteState(e.target.value)}
                              >
                                Eliminar
                              </button>
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
