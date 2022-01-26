import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addFactura } from "../../../actions/actionAMBAdmin";
import styles from "./ABMAffiliates.module.css";

const ABMAffilFactList = () => {
  const dispatch = useDispatch();

  const { allAffiliatesTitular } = useSelector((state) => state.ABMAdmin);

  const handleGenerateFact = (e) => {
    dispatch(addFactura({ afiliadoID: e.target.value, planID: e.target.name }));
  };

  return (
    <div className={styles.divScroll}>
      <div className="bg-gray-50 min-h-screen  ">
        <div>
          <div className="px-4 pb-4">
            <div className="bg-white p-6 rounded-md">
              <div>
                <div className=" flex justify-end"></div>
                <div className="mt-3.5">
                  <div>
                    <div className=" grid overflow-hidden grid-cols-9 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className="w-1/8  flex justify-center">
                        <span>Dni </span>
                      </div>
                      <div className="w-1/8  flex justify-center">
                        <span>Nombre </span>
                      </div>
                      <div className="w-1/8  flex justify-center">
                        <span>Apellido</span>
                      </div>
                      <div className="w-1/8  flex justify-center">
                        <span>Telefono</span>
                      </div>
                      <div className="w-1/8  flex justify-center">
                        <span>Activo </span>
                      </div>
                      <div className="w-1/8  flex justify-center">
                        <span>Alta </span>
                      </div>

                      <div className="w-1/8  flex justify-center">
                        <span>Plan</span>
                      </div>

                      <div className="w-1/8  flex justify-center">
                        <span>Código Plan</span>
                      </div>
                      <div className="w-1/8  flex justify-center">
                        <span>Editar</span>
                      </div>
                    </div>
                    {allAffiliatesTitular.length !== 0 &&
                      allAffiliatesTitular.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div className="grid overflow-hidden grid-cols-9 grid-rows-1 gap-0 py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                              <div className="  flex justify-center">
                                <span>{element.DNI}</span>
                              </div>
                              <div className="  flex justify-center">
                                <span>{element.nombre}</span>
                              </div>
                              <div className="  flex justify-center">
                                <span>{element.apellido}</span>
                              </div>
                              <div className="  flex justify-center">
                                <span>{element.telefono}</span>
                              </div>
                              <div className=" flex justify-center">
                                <span>{element.activo ? "Si" : "No"}</span>
                              </div>

                              <div className="  flex justify-center">
                                <span>{element.alta ? "Si" : "No"}</span>
                              </div>

                              <div className="  flex justify-center">
                                <span>{element.planID?.name}</span>
                              </div>

                              <div className="  flex justify-center">
                                <span>{element.planID?.codePlan}</span>
                              </div>

                              <div className="  flex justify-around">
                                <button
                                  title="Factura"
                                  key={"edit" + element._id}
                                  value={element._id}
                                  name={element.planID._id}
                                  onClick={handleGenerateFact}
                                >
                                  Generar Factura
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

export default ABMAffilFactList;
