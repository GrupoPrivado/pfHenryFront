import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../../actions/actionAMBAdmin";

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

const AddAdherent = ({
  handleAddAdherent,
  setShowModalAdherent,
}) => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(true);

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
    ciudadID: "",
    provinciaID: "",
    parentesco: "",
  });

  const handleChangeProvince = (e) => {
    const newData = {
      ...inputAdherent,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInputAdherent(newData);
  };

  const handleSubmit = () => {
    alert("Me cree");
    handleAddAdherent(inputAdherent);
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
    setShowModalAdherent(false);
  };

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
    <div>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Adherente</h5>
        <div className={styles.container}>
          {/* <form onSubmit={handleSubmit} id="addAdhernt"> */}
          <form>
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
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="provincia">
                Provincia{" "}
              </label>
              <select
                value={inputAdherent.provinciaID}
                onChange={handleChangeProvince}
                name="provinciaID"
                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                required
              >
                <option>Seleccione Provincia</option>
                {provinces &&
                  provinces.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.nombre}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="localidad">
                Localidad{" "}
              </label>
              <select
                onChange={(e) => handleChange(e)}
                value={inputAdherent.ciudadID}
                name="ciudadID"
                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                required
              >
                <option>Seleccione Localidad</option>
                {cities &&
                  cities.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.localidad}
                    </option>
                  ))}
              </select>
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
            <button key="submitFormButton" onClick={handleSubmit}>
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
