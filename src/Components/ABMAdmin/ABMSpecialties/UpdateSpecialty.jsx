import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateSpecialityAct,
  getAllSpecialities,
 resetDataUpdate
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
        <h5>Modificar Especialidad</h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitUpdateSpeciality(e)}
            id="updateSpeciality"
          >
            <div>
              <label>Codigo: </label>
              <input
                type="text"
                name="newCodeEsp"
                autoComplete="off"
                value={updateSpecialityData.newCodeEsp}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese el Codódigo...."
              />
            </div>

            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="newNombre"
                autoComplete="off"
                value={updateSpecialityData.newNombre}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label>Descripción: </label>
              <input
                type="text"
                name="newDescripcion"
                autoComplete="off"
                value={updateSpecialityData.newDescripcion}
                onChange={(e) => handleUpdateSpeciality(e)}
                placeholder="Ingrese la Descripcion...."
              />
            </div>

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
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="updateSpeciality"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button
              type="submit"
              key="submitFormButton"
              form="updateSpeciality"
            >
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdateSpeciality;
