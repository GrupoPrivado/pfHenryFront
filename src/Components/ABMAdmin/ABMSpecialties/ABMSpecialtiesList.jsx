import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { getSpecialityData } from "../../../actions/actionAMBAdmin";

import styles from "./ABMSpecialties.module.css";

const ABMSpecialitiesList = ({
  setShowModalUpdate,
  setShowModalAdd,
  setDeleteState,
}) => {
  const dispatch = useDispatch();

  const { allSpecialities } = useSelector((state) => state.ABMAdmin);

  const handleEditSpeciality = async (event) => {
    await dispatch(getSpecialityData(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div className={styles.divScroll}>
      <div className="bg-gray-50 min-h-[60vh]  ">
        <div>
          <div className="p-4">
            <div className="bg-white p-6 rounded-md">
              <div>
                <div className=" flex justify-end">
                  <button
                    className="group relative justify-items-end w-30 flex  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    title="Agregar Especialidad"
                    onClick={() => setShowModalAdd(true)}
                  >
                    Agregar Especialidad
                  </button>
                </div>
                <div className="mt-3.5">
                  <div>
                    <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className="  flex justify-center">
                        <span>Nombre</span>
                      </div>
                      <div className="  flex justify-center">
                        <span>Descripcion</span>
                      </div>
                      <div className="  flex justify-center">
                        <span>Activa</span>
                      </div>

                      <div className="  flex justify-center">
                        <span>Editar</span>
                      </div>
                    </div>
                    {allSpecialities.length !== 0 &&
                      allSpecialities.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-0  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                              <div className="  flex justify-center">
                                <span>{element.nombre}</span>
                              </div>
                              <div className="  flex justify-center">
                                <span>{element.descripcion}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.activa ? "Si" : "No"}</span>
                              </div>

                              <div className="  flex justify-around">
                                <button
                                  key={"delete" + element._id}
                                  title="Delete"
                                  value={element._id}
                                  onClick={(e) =>
                                    setDeleteState(e.target.value)
                                  }
                                  className="pr-3 "
                                >
                                  Eliminar
                                </button>
                                <button
                                  title="Edit"
                                  key={"edit" + element._id}
                                  value={element._id}
                                  onClick={(e) => handleEditSpeciality(e)}
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

export default ABMSpecialitiesList;
