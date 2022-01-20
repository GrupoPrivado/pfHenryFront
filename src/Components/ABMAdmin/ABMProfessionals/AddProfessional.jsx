import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProfessional,
  getAllCities,
  getAllProfessionals,
  getAllProvinces,
} from "../../../actions/actionAMBAdmin";

import styles from "./AddProfessional.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddProfessional = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allSpecialities, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const [errors, setErrors] = useState(true);

  const inputProfessionalStruct = {
    nombre: "",
    apellido: "",
    DNI: "",
    telefono: "",
    mail: "",
    ciudadID: "",
    provinciaID: "",
    matricula: "",
    especID: "",
    tipoUsuario: "profesional",
    password: "",
    activo: "",
  }

  const [inputProfessional, setInputProfessional] = useState(inputProfessionalStruct);

  const handleChangeProvince = (e) => {
    const newData = {
      ...inputProfessional,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInputProfessional(newData);
  };

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
    setInputProfessional(inputProfessionalStruct);
    setShowModalAdd(false);
    dispatch(getAllProfessionals());
    setErrors(true);
  };

  const handleClose = () => {
    setInputProfessional(inputProfessionalStruct);
    setShowModalAdd(false);
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Profesional</h5>
        <div className={styles.container}>
          <form>
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
                name="matricula"
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

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="provincia">
                Provincia{" "}
              </label>
              <select
                value={inputProfessional.provinciaID}
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
                value={inputProfessional.ciudadID}
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

            <div>
              <select
                id="especialities"
                name="especID"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Seleccione la Especialidad</option>
                {allSpecialities &&
                  allSpecialities.map((element) => {
                    if (element.activa) {
                      return (
                        <option value={element._id} id={element._id}>
                          {element.nombre}
                        </option>
                      );
                    }
                  })}
              </select>
            </div>

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
            <button disabled={errors}>Cargar</button>
          ) : (
            <button onClick={(e) => handleSubmitProfessional(e)}>Cargar</button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default AddProfessional;
