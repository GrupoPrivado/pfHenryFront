import React from "react";

import { useDispatch } from "react-redux";

import {
  getAllSpecialities,
  getSpecialityData,
  deleteSpeciality,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMSpecialties.module.css";

const ABMSpecialitiesList = ({
  allSpecialities,
  setShowModalUpdate,
  setShowModalAdd,
  showModalAdd,
}) => {
  const dispatch = useDispatch();

  const handleEditSpeciality = async (event) => {
    await dispatch(getSpecialityData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeleteSpeciality = async (event) => {
    let response = await dispatch(deleteSpeciality(event.target.value));

    await dispatch(getAllSpecialities());
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
                  Agregar Especialidad
                </button>
                </div>
                <div className="mt-3.5">
                  <div>
                    <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div>
                        <span>Codigo </span>
                      </div>
                      <div>
                        <span>Nombre</span>
                      </div>
                      <div>
                        <span>Descripcion</span>
                      </div>

                      <div>
                        <span>Editar</span>
                      </div>
                    </div>
                    {allSpecialities.length !== 0 &&
                      allSpecialities.map((element) => {
                        return (
                          <div key={element._id} className={styles.tabla}>
                            <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                              <div class="px-2 flex">
                                <span>{element.codeEsp}</span>
                              </div>
                              <div>
                                <span>{element.nombre}</span>
                              </div>
                              <div class="px-2">
                                <span>{element.descripcion}</span>
                              </div>

                              <div class="px-2">
                                <button
                                  key={"delete" + element._id}
                                  title="Delete"
                                  value={element._id}
                                  onClick={(e) => handleDeleteSpeciality(e)}
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
