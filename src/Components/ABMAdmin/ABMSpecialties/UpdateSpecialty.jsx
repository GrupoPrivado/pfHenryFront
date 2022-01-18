import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateSpecialityAct,
  getAllSpecialities,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateSpeciality.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdateSpeciality = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updateSpecialityData, setUpdateSpecialityData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    activa: "",
  });

  useEffect(() => {
    setUpdateSpecialityData({
      id: updateData._id,
      nombre: updateData.nombre,
      descripcion: updateData.descripcion,
      activa: updateData.activa,
    });
  }, [updateData]);

  const handleUpdateSpeciality = async (event) => {
    let updatedSpeciality = {
      ...updateSpecialityData,
      [event.target.name]: event.target.value,
    };

    setUpdateSpecialityData(updatedSpeciality);

    setErrors(functionErrors(updatedSpeciality));
  };

  const handleSubmitUpdateSpeciality = async (event) => {
    event.preventDefault();
    let response = await dispatch(updateSpecialityAct(updateSpecialityData));
    alert(response.success);
    setUpdateSpecialityData({
      id: "",
      nombre: "",
      descripcion: "",
      activa: "",
    });
    setShowModalUpdate(false);
    dispatch(getAllSpecialities());
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  const handleClose = () => {
    setUpdateSpecialityData({
      id: "",
      nombre: "",
      descripcion: "",
      activa: "",
    });
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex justify-center">
          <h5 className="text-2xl font-bold text-gray-500">
            Modificar Especialidad
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 ">
          <form>
            <div>
              <label className="text-md text-gray-600">Nombre: </label>
              <input
                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="nombre"
                autoComplete="off"
                value={updateSpecialityData.nombre}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label className="text-md text-gray-600">Descripción: </label>
              <input
                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="descripcion"
                autoComplete="off"
                value={updateSpecialityData.descripcion}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese la Descripcion...."
              />
            </div>

            <div className="flex justify-between">
              <div className="flex w-1/3 items-center">
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  id="activa"
                  name="activa"
                  onChange={(e) => handleUpdateSpeciality(e)}
                  // defaultValue={updateSpecialityData.activa}
                  value={updateSpecialityData.activa}
                >
                  <option value="">Seleccione</option>
                  <option value="false">No</option>
                  <option value="true">Si</option>
                </select>
              </div>

              <div className="flex w-2/3 justify-around">
                {errors ? (
                  <button
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={errors}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitUpdateSpeciality}
                    key="submitFormButton"
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                )}
                <button
                  onClick={() => handleClose()}
                  className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateSpeciality;
