import React from "react";
// import ABMSearchPrescriptions from "./ABMSearchPrescriptions";
import { useDispatch, useSelector } from "react-redux";

import {
  getPrescriptionData,
  updatePrescription,
} from "../../../actions/actionAMBAdmin";
import ABMPrescriptionsListAffData from "./ABMPrescriptionListAffData";
import ABMPrescriptionsSearch from "./ABMPrescriptionsSearch";
import styles from "./ABMPrescriptions.module.css";

const ABMPrescriptionsList = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const { prescriptionDNI, affiliatePrescriptionData } = useSelector(
    (state) => state.ABMAdmin
  );

  const handleEditPrescription = async (event) => {
    await dispatch(getPrescriptionData(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div>
      <div>
        <div class="p-4">
          <div class="bg-white p-6 rounded-md">
            <div>
              <div className="flex ">
                <div className="flex w-1/2 ">
                  <ABMPrescriptionsListAffData
                    affiliatePrescriptionData={affiliatePrescriptionData}
                  />
                </div>
                <div className=" flex justify-end items-end w-1/2">
                  <ABMPrescriptionsSearch />
                </div>
              </div>
              <div className="mt-3.5">
                <div>
                  <div class="grid overflow-hidden grid-cols-5 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                    <div className="  flex justify-center">
                      <span>Receta Nº</span>
                    </div>
                    <div className="  flex justify-center">
                      <span>Autorizada</span>
                    </div>
                    <div className="  flex justify-center">
                      <span>Profesional</span>
                    </div>

                    <div className="  flex justify-center">
                      <span>Realizada</span>
                    </div>

                    <div className="  flex justify-center">
                      <span>Editar</span>
                    </div>
                  </div>
                  {prescriptionDNI?.length !== 0 &&
                    prescriptionDNI.map((element) => {
                      return (
                        <div key={element._id} className={styles.tabla}>
                          <div className="grid overflow-hidden grid-cols-5 grid-rows-1 gap-  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                            <div className="  flex justify-center">
                              <span>{element.numReceta}</span>
                            </div>
                            <div className="  flex justify-center">
                              <span>{element.status}</span>
                            </div>
                            <div className="  flex justify-center">
                              <span>
                                {element.profesionalID.nombre +
                                  " " +
                                  element.profesionalID.apellido}
                              </span>
                            </div >
                            <div className="  flex justify-center">
                              <span>{element.planActivo ? "Si" : "No"}</span>
                            </div>

                            <div className="  flex justify-center">
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
  );
};

export default ABMPrescriptionsList;
