import React from "react";

import { useDispatch } from "react-redux";

import {
  getAllProfessionals,
  getProfessionalData,
  allSpecialities,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMProfessionals.module.css";

const ABMAffiliatesList = ({ allProfessionals, setShowModalUpdate, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const handleEditProfessional = async (event) => {
    console.log('<<<<<<Edit>>>>>>', event.target.value)
    await dispatch(getProfessionalData(event.target.value));
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
                      Agregar Profesional
                    </button>
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
                          <span>Alta </span>
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
                                <div>
                                  <span>{element.localidad}</span>
                                </div>
                                <div class="px-2">
                                  <span>{element.provincia}</span>
                                </div>
                                <div class="px-2">
                                  <span>{element.especialidad}</span>
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
