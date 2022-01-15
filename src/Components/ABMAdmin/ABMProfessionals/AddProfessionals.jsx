import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProfessional,
  getAllProfessionals,
} from "../../../actions/actionAMBAdmin";

import styles from "./addProfessional.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddProfessional = ({ showModalAdd, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allSpecialities } = useSelector((state) => state.ABMAdmin);
  //Ver rutas para obtener las ciudades
  let [showModalProfessional, setShowModalProfessional] = useState(false);

  const [errors, setErrors] = useState(true);

  let [inputProfessional, setInputProfessional] = useState({
    nombre: "",
    apellido: "",
    DNI: 0,
    telefono:0,
    mail: "",
    ciudadID: "61e0c45d534c0844d9debf93",
    codeProv: "111",
    matricula: 0,
    codeEsp: "",
    tipoUsuario: "profesional",
    password: "",
    activo: false,
  });

  let [inputProfessional, setInputProfessional] = useState([]);

  const showHideClassName = showModalAdd ? "displayblock" : "displaynone";

  const handleChange = (event) => {
    let newProfessional = {
      ...inputProfessional,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === "DNI") {
      newProfessional = { ...newProfessional, password: event.target.value };
    }
    setInputProfessional(newProfessional);

    setErrors(functionErrors(newProfessional));

    newProfessional = {};
  };

  const handleSubmitProfessional = async (event) => {
    event.preventDefault();

    let response = await dispatch(addProfessional(inputProfessional));
    alert(response.success);
    setInputProfessional({
      nombre: "",
      apellido: "",
      DNI: 0,
      telefono:0,
      mail: "",
      ciudadID: "",
      codeProv: "",
      matricula: 0,
      codeEsp: "",
      tipoUsuario: "profesional",
      password: "",
      activo: false,
    });
    await dispatch(getAllProfessionals());
    setErrors(true);
    setShowModalAdd(false);
  };

  const handleClose = () => {
    setInputProfessional({
      nombre: "",
      apellido: "",
      DNI: 0,
      telefono:0,
      mail: "",
      ciudadID: "",
      codeProv: "",
      matricula: 0,
      codeEsp: "",
      tipoUsuario: "profesional",
      password: "",
      activo: false,
    });
    setErrors(true);
    setShowModalAdd(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Profesional</h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitProfessional(e)}
            id="addProfessional"
          >
            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="nombre"
                autoComplete="off"
                value={inputProfessional.nombre}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label>Apellido: </label>
              <input
                type="text"
                name="apellido"
                autoComplete="off"
                value={inputProfessional.apellido}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el apellido...."
              />
            </div>

            <div>
              <label>DNI: </label>
              <input
                type="number"
                name="DNI"
                autoComplete="off"
                value={inputProfessional.DNI}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el DNI...."
              />
            </div>

            <div>
              <label>Matrícula: </label>
              <input
                type="number"
                name="matricuña"
                autoComplete="off"
                value={inputProfessional.matricula}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Matrícula...."
              />
            </div>

            <div>
              <label>Teléfono: </label>
              <input
                type="number"
                name="telefono"
                autoComplete="off"
                value={inputProfessional.telefono}
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
                value={inputProfessional.mail}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el e-mail...."
              />
            </div>

            {/* Colocar los selectores de ciudades y sacar el hardcodeo */}

            <select
              id="especialities"
              name="codeEsp"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Seleccione la Especialidad</option>
              {allSpecialities &&
                allSpecialities.map((element) => {
                  if (element.activa) {
                    return (
                      <option value={element.codeEsp} id={element._id}>
                        {element.nombre}
                      </option>
                    );
                  }
                })}
            </select>

            <div>
              <label>Activo: </label>
              <select name="activo" onChange={(e) => handleChange(e)}>
                <option value="">Seleccione:</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </select>
            </div>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="addProfessional"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="addProfessional">
              Cargar
            </button>
          )}
                <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>

    
    </div>
  );
};

export default AddProfessional;
