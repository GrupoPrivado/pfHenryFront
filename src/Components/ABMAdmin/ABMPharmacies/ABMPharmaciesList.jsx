import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  getPharmacyData,
  getAllCities,
  getAllPharmacies,
  getAllProvinces,
  filterActiv,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPharmacies.module.css";

const ABMPharmaciesList = ({
  allPharmacies,
  setShowModalUpdate,
  setShowModalAdd,
  setDeleteState,
}) => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const [filter, setFilter] = useState({ provinciaID: undefined });

  const handleChangeProvince = (e) => {
    dispatch(getAllCities(e.target.value));
    if (e.target.value !== "")
      dispatch(getAllPharmacies({ provinciaID: e.target.value }));
    else dispatch(getAllPharmacies({ provinciaID: undefined }));

    setFilter({ provinciaID: e.target.value });
  };

  const handleChangeCity = (e) => {
    if (e.target.value !== "")
      dispatch(getAllPharmacies({ ciudadID: e.target.value }));
    else dispatch(getAllPharmacies(filter));
  };
  const handleChangeActiv = (e) => {
    if (e.target.value !== "") {
      dispatch(filterActiv(e.target.value));
    } else if (e.target.value === "") dispatch(getAllPharmacies());
  };

  const handleEditPharmacy = async (event) => {
    await dispatch(getPharmacyData(event.target.value));
    setShowModalUpdate(true);
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
                      required
                    >
                      <option value="">Todas</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="mt-3.5">
                  <div>
                    <div class=" grid overflow-hidden grid-cols-6 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className=" flex justify-center">
                        <span>Nombre </span>
                      </div>
                      <div className=" flex justify-center">
                        <span> Direccion</span>
                      </div>

                      <div className=" flex justify-center">
                        <span>Localidad</span>
                      </div>
                      <div className="  flex justify-center">
                        <span>Provincia</span>
                      </div>

                      <div className="  flex justify-center">
                        <span>Activa </span>
                      </div>

                      <div className="flex justify-center">
                        <span>Editar</span>
                      </div>
                    </div>
                    {allPharmacies.length !== 0 &&
                      allPharmacies.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div class="grid overflow-hidden grid-cols-6 grid-rows-1 gap-0 justify-between  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                              <div class=" flex justify-center ">
                                <span>{element.nombre}</span>
                              </div>
                              <div class=" flex justify-center ">
                                <span>{element.direccion}</span>
                              </div>
                              <div class=" flex justify-center ">
                                <span>{element.ciudadID.localidad}</span>
                              </div>
                              <div class=" flex justify-center uppercase ">
                                <span>{element.provinciaID.nombre}</span>
                              </div>

                              <div class=" flex justify-center ">
                                <span>{element.activo ? "Si" : "No"}</span>
                              </div>
                              <div class=" flex justify-around ">
                                <button
                                  key={"delete" + element._id}
                                  title="Delete"
                                  value={element._id}
                                  onClick={(e) =>
                                    setDeleteState(e.target.value)
                                  }
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
