import React from "react";

import { useState } from "react";

import styles from "./addAffiliate.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
}
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddAdherent = ({ handleAddAdherent, showModalAdherent, setShowModalAdherent }) => {

    const [errors, setErrors] = useState(true);

    const showHideClassName = showModalAdherent ? "displayblock" : "displaynone";
    
  const arrParentesco = [
    { display: "Hijo/a", value: "hijo" },
    { display: "Conyugue", value: "conyugue" },
    { display: "Familiar a cargo", value: "famCargo" },
  ];

  let [inputAdherent, setInputAdherent] = useState({
    nombre: "",
    apellido: "",
    DNI: 0,
    fechaNacimiento: "",
    telefono: 0,
    correoElectronico: "",
    direccion: 0,
    localidad: "",
    ciudadCP: 0,
    provincia: "",
    parentesco: "",
  });

const handleSubmit = () =>{
    alert('Me cree')
    handleAddAdherent(inputAdherent)
    setShowModalAdherent(false);
}
  const handleChange = (event) => {
    let newAdherent = {
      ...inputAdherent,
      [event.target.name]: event.target.value,
    };
    setInputAdherent(newAdherent);

    setErrors(functionErrors(newAdherent));

    newAdherent = {};
  };

  const handleClose = () => {
    setInputAdherent({
      nombre: "",
      apellido: "",
      DNI: 0,
      fechaNacimiento: "",
      telefono: 0,
      correoElectronico: "",
      direccion: 0,
      localidad: "",
      ciudadCP: 0,
      provincia: "",
      parentesco: "",
    });
    setErrors(true);
    setShowModalAdherent(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Adherente</h5>
        <div className={styles.container}>
          {/* <form onSubmit={handleSubmit} id="addAdhernt"> */}
          <form >
            <div>
              <label>Nombre: </label>
              <input
                type="text"
                name="nombre"
                autoComplete="off"
                value={inputAdherent.nombre}
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
                value={inputAdherent.apellido}
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
                value={inputAdherent.DNI}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el DNI...."
              />
            </div>

            <div>
              <label>Fehca de Nacimiento: </label>
              <input
                type="date"
                name="fechaNacimiento"
                autoComplete="off"
                value={inputAdherent.fechaNacimiento}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese Fecha Nacimiento...."
              />
            </div>

            <div>
              <label>Teléfono: </label>
              <input type="tel"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              
                name="telefono"
                autoComplete="off"
                value={inputAdherent.telefono}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label>E-Mail: </label>
              <input
                type="email"
                name="correoElectronico"
                autoComplete="off"
                value={inputAdherent.correoElectronico}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el E-Mail...."
              />
            </div>

            <div>
              <label>Domicilio: </label>
              <input
                type="test"
                name="direccion"
                autoComplete="off"
                value={inputAdherent.direccion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el domocilio...."
              />
            </div>

            <div>
              <label>Localidad: </label>
              <input
                type="text"
                name="localidad"
                autoComplete="off"
                value={inputAdherent.localidad}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Localidad...."
              />
            </div>

            <div>
              <label>C.P.: </label>
              <input
                type="number"
                name="ciudadCP"
                autoComplete="off"
                value={inputAdherent.ciudadCP}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Cod. Postal...."
              />
            </div>

            <div>
              <label>Provincia: </label>
              <input
                type="text"
                name="provincia"
                autoComplete="off"
                value={inputAdherent.provincia}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Provincia...."
              />
            </div>

            <select
              id="parentesco"
              name="parentesco"
              onChange={(e) => handleChange(e)}
              defaultValue={0}
            >
              <option value="">Parentesco</option>
              {arrParentesco.map((element) => {
                return (
                  <option value={element.value} id={element.value}>
                    {element.display}
                  </option>
                );
              })}
            </select>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="addAdhernt"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button  key="submitFormButton" onClick={handleSubmit}>
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default AddAdherent;
