import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  getPharmacyData,
  deletePharmacy,
  getAllCities,
  getAllPharmacies,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPharmacies.module.css";

// const pharmacyCity = (allCities, ciudadCP ) =>{
//   const name = allCities.filter((city) =>
//     city.CP === ciudadCP
//   )

//   return name.localidad
// }

// const pharmacyProv = (allCities, ciudadCP ) =>{
//   const name = allCities.filter((city) =>
//     city.CP === ciudadCP
//   )

//   return name.provincia
// }

const ABMPharmaciesList = ({
  allPharmacies,
  setShowModalUpdate,
  setShowModalAdd,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  const { allCities } = useSelector((state) => state.ABMAdmin);

  const handleEditPharmacy = async (event) => {
    await dispatch(getPharmacyData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeletePharmacy = async (event) => {
    let response = await dispatch(deletePharmacy(event.target.value));

    await dispatch(getAllPharmacies());
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
                  <div className="mt-3.5">
                    <div>
                      <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                        <div>
                          <span>Nombre </span>
                        </div>
                        <div>
                          <span> Direccion</span>
                        </div>

                        <div>
                          <span>Localidad</span>
                        </div>
                        <div>
                          <span>Provincia</span>
                        </div>

                        <div>
                          <span>Activa </span>
                        </div>

                        <div>
                          <span>Editar</span>
                        </div>
                      </div>
                      {allPharmacies.length !== 0 &&
                        allPharmacies.map((element) => {
                          return (
                            <div key={element._id} className={styles.tabla}>
                              <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                                <div class="px-2 flex">
                                  <span>{element.nombre}</span>
                                </div>
                                <div>
                                  <span>{element.direccion}</span>
                                </div>
                                <div>
                                  <span>{element.apellido}</span>
                                </div>
                                <div>
                                  <span>
                                    {
                                      allCities.filter(
                                        (city) => city.CP === element.ciudadCP
                                      ).nombre
                                    }
                                  </span>
                                </div>
                                <div class="px-2">
                                  <span>
                                    {
                                      allCities.filter(
                                        (city) => city.CP === element.ciudadCP
                                      ).provincia
                                    }
                                  </span>
                                </div>
                                <div>
                                  <span>{element.activa ? "Si" : "No"}</span>
                                </div>

                                <div class="px-2">
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
