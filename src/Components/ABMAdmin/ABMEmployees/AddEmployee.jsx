import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addEmployee,
  addProfessional,
  getAllCities,
  getAllEmployees,
  getAllProfessionals,
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

const AddEmployee = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(true);

  const inputEmployeeData = {
    name: "",
    lastName: "",
    legajo: "",
    telefono: "",
    email: "",
    password: "",
    activo: "",
  };

  let [inputEmployee, setInputEmployee] = useState(inputEmployeeData);

  const handleChange = (event) => {
    let newEmployee = {
      ...inputEmployee,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === "legajo") {
      newEmployee = { ...newEmployee, password: event.target.value };
    }
    setInputEmployee(newEmployee);

    setErrors(functionErrors(newEmployee));

    newEmployee = {};
  };

  const handleSubmitEmployee = async (event) => {
    event.preventDefault();

    let response = await dispatch(addEmployee(inputEmployee));
    alert(response.success);
    setInputEmployee(inputEmployeeData);
    setShowModalAdd(false);
    dispatch(getAllEmployees());
    setErrors(true);
  };

  const handleClose = () => {
    setInputEmployee(inputEmployeeData);
    setShowModalAdd(false);
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <h5>Agregar Nuevo Empleado</h5>
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

export default AddEmployee;
