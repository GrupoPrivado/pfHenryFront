import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPharmacy, getAllPharmacies } from "../../../actions/actionAMBAdmin";

import styles from "./addPharmacy.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddPharmacy = ({ showModalAdd, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allCities } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(true);

  let [inputPharmacy, setInputPharmacy] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    mail: "",
    numHabilitacion: 0,
    ciudadCP: 0,
  });

  const showHideClassName = showModalAdd ? "displayblock" : "displaynone";

  const handleChange = (event) => {
    let newPharmacy = {
      ...inputPharmacy,
      [event.target.name]: event.target.value,
    };
    setInputPharmacy(newPharmacy);

    setErrors(functionErrors(newPharmacy));

    newPharmacy = {};
  };

  const handleSubmitPharmacy = async (event) => {
    event.preventDefault();
    let response = await dispatch(addPharmacy(inputPharmacy));
    alert(response.success);
    setInputPharmacy({
      nombre: "",
      direccion: "",
      telefono: "",
      mail: "",
      numHabilitacion: 0,
      ciudadCP: 0,
    });
    await dispatch(getAllPharmacies());
    setErrors(true);
    setShowModalAdd(false);
  };

  const handleClose = () => {
    setInputPharmacy({
      nombre: "",
      direccion: "",
      telefono: "",
      mail: "",
      numHabilitacion: 0,
      ciudadCP: 0,
    });
    setErrors(true);
    setShowModalAdd(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Agregar Nueva Farmacia</h5>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmitPharmacy(e)} id="addPharmacy">
            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="nombre"
                autoComplete="off"
                value={inputPharmacy.nombre}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Nombre...."
              />
            </div>

            <div>
              <label>Dirección: </label>
              <input
                type="text"
                name="direccion"
                autoComplete="off"
                value={inputPharmacy.direccion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Dirección...."
              />
            </div>

            <div>
              <label>Teléfono: </label>
              <input
                type="text"
                name="telefono"
                autoComplete="off"
                value={inputPharmacy.telefono}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label>E-mail: </label>
              <input
                type="text"
                name="mail"
                autoComplete="off"
                value={inputPharmacy.mail}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el E-mail...."
              />
            </div>

            <div>
              <label>Nro. Habilitación: </label>
              <input
                type="number"
                name="numHabilitacion"
                autoComplete="off"
                value={inputPharmacy.numHabilitacion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Nro. Habilit....."
              />
            </div>

            <select
              id="ciudad"
              name="ciudadCP"
              onChange={(e) => handleChange(e)}
              defaultValue={0}
            >
              <option value="">Seleccione la ciudad</option>
              {allCities.map((element) => {
                return (
                  <option value={element.CP} id={element.CP}>
                    {element.localidad}
                  </option>
                );
              })}
            </select>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="addPharmacy"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="addPharmacy">
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default AddPharmacy;
