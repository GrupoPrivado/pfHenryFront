import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addSpeciality,
  getAllSpecialities,
} from "../../../actions/actionAMBAdmin";

import styles from "./addSpecialty.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddSpeciality = ({ showModalAdd, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(true);

  let [inputSpeciality, setInputSpeciality] = useState({
    codeEsp: "",
    nombre: "",
    descripcion: "",
    activa: false,
  });

  const showHideClassName = showModalAdd ? "displayblock" : "displaynone";

  const handleChange = (event) => {
    let newSpeciality = {
      ...inputSpeciality,
      [event.target.name]: event.target.value,
    };
    setInputSpeciality(newSpeciality);

    setErrors(functionErrors(newSpeciality));

    newSpeciality = {};
  };

  const handleSubmitSpeciality = async (event) => {
    event.preventDefault();
    let response = await dispatch(addSpeciality(inputSpeciality));
    alert(response.success);
    setInputSpeciality({
      codeEsp: "",
      nombre: "",
      descripcion: "",
      activa: false,
    });
    await dispatch(getAllSpecialities());
    setErrors(true);
    setShowModalAdd(false);
  };

  const handleClose = () => {
    setInputSpeciality({
      codeEsp: "",
      nombre: "",
      descripcion: "",
      activa: false,
    });
    setErrors(true);
    setShowModalAdd(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Agregar Nueva Especialidad</h5>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmitSpeciality(e)} id="addSpeciality">
            <div>
              <label>Codigo: ESP-</label>
              <input
                type="text"
                name="codeEsp"
                autoComplete="off"
                value={inputSpeciality.codeEsp}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Codigo...."
              />
            </div>

            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="nombre"
                autoComplete="off"
                value={inputSpeciality.nombre}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label>Descripción: </label>
              <input
                type="text"
                name="descripcion"
                autoComplete="off"
                value={inputSpeciality.descripcion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Descripcion...."
              />
            </div>

            <select
              id="activa"
              name="activa"
              onChange={(e) => handleChange(e)}
              defaultValue={0}
            >
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="addSpeciality"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="addSpeciality">
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default AddSpeciality;
