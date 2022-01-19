import React from "react";
import ABMSearchPrescriptions from "./ABMSearchPrescriptions";
import { useDispatch, useSelector } from "react-redux";

import {
  getPrescriptionsByDNI,
  getPrescriptionById,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPrescriptions.module.css";

const ABMPrescriptionsList = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const { prescriptionDNI, affiliatePrescriptionData } = useSelector(
    (state) => state.ABMAdmin
  );

  const handleEditPrescription = async (event) => {
    await dispatch(getPrescriptionById(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div>
      

      <div className={styles.divScroll}>
        <div class="bg-gray-50 min-h-screen  ">
          <div>
            <div class="p-4">
              <div class="bg-white p-6 rounded-md">
                <div>
                  <div className="flex ">
                  <div className=" flex flex-col w-1/3">
                    <label className="text-md text-gray-600">Nombre: <span className="text-sm uppercase text-black"> {affiliatePrescriptionData.nonmbre} </span></label>
                    <label className="text-md text-gray-600">
                      Apellido: <span className="text-sm uppercase text-black"> {affiliatePrescriptionData.apellido}</span>
                    </label>
                  </div>
                  <div className=" flex flex-col w-1/3">
                    <label className="text-md text-gray-600">DNI: <span className="text-sm uppercase text-black">{affiliatePrescriptionData.DNI}</span></label>
                    <label className="text-md text-gray-600">
                      E-mail:<span className="text-sm uppercase text-black"> {affiliatePrescriptionData.correoElectronico}</span>
                    </label>
                    <label className="text-md text-gray-600">
                      Activo: <span className="text-sm uppercase text-black"> {affiliatePrescriptionData.activo ? "Si" : "No"}</span>
                    </label>
                  </div>
                  <div className=" flex justify-end w-1/3">
                    <ABMSearchPrescriptions />
                  </div>
                  </div>
                  <div className="mt-3.5">
                    <div>
                      <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                        <div>
                          <span>Receta Nº</span>
                        </div>
                        <div>
                          <span>Autorizada</span>
                        </div>
                        <div>
                          <span>Realizada</span>
                        </div>

                        <div>
                          <span>Editar</span>
                        </div>
                      </div>
                      {prescriptionDNI &&
                        prescriptionDNI.map((element) => {
                          return (
                            <div key={element._id} className={styles.tabla}>
                              <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                                <div class="px-2 flex">
                                  <span>{element.numReceta}</span>
                                </div>
                                <div>
                                  <span>{element.status}</span>
                                </div>
                                <div class="px-2">
                                  <span>
                                    {element.planActivo ? "Si" : "No"}
                                  </span>
                                </div>

                                <div class="px-2">
                                  {/* // <button
                                //   key={"delete" + element._id}
                                //   title="Delete"
                                //   value={element._id}
                                //   onClick={(e) => handleDeleteSpeciality(e)}
                                //   className="pr-3 "
                                // >
                                //   Eliminar
                                // </button> */}
                                  <button
                                    title="Edit"
                                    key={"edit" + element._id}
                                    value={element._id}
                                    onClick={(e) => handleEditPrescription(e)}
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
    </div>
  );
};

export default ABMPrescriptionsList;
