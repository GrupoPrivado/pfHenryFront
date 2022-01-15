import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addPlan,
  getAllPlansData,
} from "../../../actions/actionAMBAdmin";

import styles from "./addPlan.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddPlan = ({ showModalAdd, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(true);

  let [inputPlan, setInputPlan] = useState({
    name: "",
    codePlan: "",
    precio: "",
    descripcion: "",
    planActivo: false,
  });

  const showHideClassName = showModalAdd ? "displayblock" : "displaynone";

  const handleChange = (event) => {
    let newPlan = {
      ...inputPlan,
      [event.target.name]: event.target.value,
    };
    setInputPlan(newPlan);

    setErrors(functionErrors(newPlan));

    newPlan = {};
  };

  const handleSubmitPlan = async (event) => {
    event.preventDefault();
    let response = await dispatch(addPlan(inputPlan));
    alert(response.success);
    setInputPlan({
      name: "",
    codePlan: "",
    precio: "",
    descripcion: "",
    planActivo: false,
    });
    await dispatch(getAllPlansData());
    setErrors(true);
    setShowModalAdd(false);
  };

  const handleClose = () => {
    setInputPlan({
      name: "",
    codePlan: "",
    precio: "",
    descripcion: "",
    planActivo: false,
    });
    setErrors(true);
    setShowModalAdd(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Plan</h5>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmitPlan(e)} id="addPlan">
            <div>
              <label>Codigo: PLN-</label>
              <input
                type="text"
                name="codePlan"
                autoComplete="off"
                value={inputPlan.codePlan}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Codigo...."
              />
            </div>

            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={inputPlan.nombre}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label>Precio: </label>
              <input
                type="text"
                name="precio"
                autoComplete="off"
                value={inputPlan.precio}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el precio...."
              />
            </div>

            <div>
              <label>Descripción: </label>
              <input
                type="text"
                name="descripcion"
                autoComplete="off"
                value={inputPlan.descripcion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Descripcion...."
              />
            </div>

            <select
              id="activo"
              name="planActivo"
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
              form="addPlan"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="addPlan">
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default AddPlan;
