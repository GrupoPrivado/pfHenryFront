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

const UpdateSpeciality = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updateSpecialityData, setUpdateSpecialityData] = useState({
    id: "",
    newCodeEsp: "",
    newNombre: "",
    newDescripcion: "",
    newActiva: false,
    oldCodeEsp: "",
    oldNombre: "",
    oldDescripcion: "",
    oldActiva: false,
  });

  useEffect(() => {
    setUpdateSpecialityData({
      id: updateData._id,
      newCodeEsp: updateData.codeEsp,
      newNombre: updateData.nombre,
      newDescripcion: updateData.descripcion,
      newActiva: updateData.activa,
      oldCodeEsp: updateData.codeEsp,
      oldNombre: updateData.nombre,
      oldDescripcion: updateData.descripcion,
      oldActiva: updateData.activa,
    });
  }, [updateData, dispatch]);

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
      newCodeEsp: "",
      newNombre: "",
      newDescripcion: "",
      newActiva: false,
      oldCodeEsp: "",
      oldNombre: "",
      oldDescripcion: "",
      oldActiva: false,
    });
    await dispatch(getAllSpecialities());
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdateSpecialityData({
      id: "",
      newCodeEsp: "",
      newNombre: "",
      newDescripcion: "",
      newActiva: false,
      oldCodeEsp: "",
      oldNombre: "",
      oldDescripcion: "",
      oldActiva: false,
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const showHideClassName = showModalUpdate ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <div className="flex justify-center">
        <h5 className="text-2xl font-bold text-gray-500">
          Modificar Especialidad
        </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 ">
          <form
            onSubmit={(e) => handleSubmitUpdateSpeciality(e)}
            id="updateSpeciality"
          >
            <div>
              <label className="text-md text-gray-600">Codigo: </label>
              <input
                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="newCodeEsp"
                autoComplete="off"
                value={updateSpecialityData.newCodeEsp}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese el Codódigo...."
              />
            </div>

            <div>
              <label className="text-md text-gray-600">Nombre: </label>
              <input
                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="newNombre"
                autoComplete="off"
                value={updateSpecialityData.newNombre}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label className="text-md text-gray-600">Descripción: </label>
              <input
                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="newDescripcion"
                autoComplete="off"
                value={updateSpecialityData.newDescripcion}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese la Descripcion...."
              />
            </div>

            <div className="flex justify-between">
              <div className="flex w-1/3 items-center">
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  id="activa"
                  name="newActiva"
                  onChange={(e) => handleUpdateSpeciality(e)}
                  defaultValue={0}
                >
                  <option
                    value="false"
                    selected={updateSpecialityData.oldActiva === false}
                  >
                    No
                  </option>
                  <option
                    value="true"
                    selected={updateSpecialityData.oldActiva === true}
                  >
                    Si
                  </option>
                </select>
              </div>

              <div className="flex w-2/3 justify-around">
                {errors ? (
                  <button
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit"
                    key="submitFormButton"
                    form="addSpeciality"
                    disabled={errors}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    type="submit"
                    key="submitFormButton"
                    form="addSpeciality"
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
