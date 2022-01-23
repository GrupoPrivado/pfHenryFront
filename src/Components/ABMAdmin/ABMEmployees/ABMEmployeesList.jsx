import React from "react";

import { useDispatch } from "react-redux";

import {
  deleteEmployee,
  getEmployeeData,
  getAllEmployees,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMEmployees.module.css";

const ABMEmployeesList = ({
  allEmployees,
  setShowModalUpdate,
  setShowModalAdd,
  setShowModalUpDown,
}) => {
  const dispatch = useDispatch();

  const handleBajaAltaEmployee = async (event) => {
    await dispatch(getEmployeeData(event.target.value));
    setShowModalUpDown(true);
  };

  const handleDeleteEmployee = async (event) => {
    let response = await dispatch(deleteEmployee(event.target.value));

    await dispatch(getAllEmployees());
  };

  const handleEditEmployee = async (event) => {
    await dispatch(getEmployeeData(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div className={styles.divScroll}>
      <div className="bg-gray-50 min-h-screen  ">
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
                    Agregar Empleado
                  </button>
                </div>

                <div className="mt-3.5">
                  <div>
                    <div className="grid overflow-hidden grid-cols-7 grid-rows-1 gap-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className=" flex justify-center">
                        <span>Legajo</span>
                      </div>
                      <div className=" flex justify-center">
                        <span className=" flex justify-center">Nombre </span>
                      </div>
                      <div>
                        <span className=" flex justify-center">Apellido</span>
                      </div>
                      <div>
                        <span className=" flex justify-center">Teléfono</span>
                      </div>
                      <div className=" flex justify-center">
                        <span>Email</span>
                      </div>
                      <div className=" flex justify-center">
                        <span>Activo </span>
                      </div>
                      <div className=" flex justify-center">
                        <span>Editar </span>
                      </div>
                    </div>
                    {allEmployees.length !== 0 &&
                      allEmployees.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div className="grid overflow-hidden grid-cols-7 justify-between  py-1 px-4 items-center border-t text-sm font-normal mt-4 space-x-4">
                              <div className=" flex justify-center ">
                                <span>{element.legajo}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.name}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.lastName}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.telefono}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.email}</span>
                              </div>
                              <div className=" flex justify-center ">
                                <span>{element.activo ? "Si" : "No"}</span>
                              </div>

                              <div className=" flex justify-around ">
                                <button
                                  title="Edit"
                                  key={"edit" + element._id}
                                  value={element._id}
                                  onClick={(e) => handleEditEmployee(e)}
                                >
                                  Editar
                                </button>

                                <button
                                  title="bajaalta"
                                  key={"baja" + element._id}
                                  value={element._id}
                                  onClick={(e) => handleBajaAltaEmployee(e)}
                                >
                                  Baja/Alta
                                </button>

                                <button
                                  key={"delete" + element._id}
                                  title="Delete"
                                  value={element._id}
                                  onClick={(e) => handleDeleteEmployee(e)}
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

export default ABMEmployeesList;
