import React from "react";

import { useDispatch, useSelector,  } from "react-redux";
import { useEffect, } from "react";

import {
  getPharmacyData,
  
  getAllProvinces,
  
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPharmacies.module.css";

const ABMPharmaciesList = ({
  setShowModalUpdate,
  setShowModalAdd,
  setDeleteState,
}) => {
  const dispatch = useDispatch();

  const { allPharmacies } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  

  const handleEditPharmacy = async (event) => {
    await dispatch(getPharmacyData(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div className={styles.divScroll}>
      <div className="bg-gray-50 min-h-screen  ">
        <div>
          <div className="">
            <div className="bg-white px-6 pb-6 pt-1 rounded-md">
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
                    <div className=" grid overflow-hidden grid-cols-6 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
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
                            <div className="grid overflow-hidden grid-cols-6 grid-rows-1 gap-0 justify-between  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                              <div className=" flex justify-center ">
                                <span>{element.nombre}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.direccion}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.ciudadID.localidad}</span>
                              </div>
                              <div className=" flex justify-center uppercase ">
                                <span>{element.provinciaID.nombre}</span>
                              </div>

                              <div className=" flex justify-center ">
                                <span>{element.activo ? "Si" : "No"}</span>
                              </div>
                              <div className=" flex justify-around ">
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
