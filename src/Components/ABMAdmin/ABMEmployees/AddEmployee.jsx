import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { addEmployee, getAllEmployees } from "../../../actions/actionAMBAdmin";

import styles from "./AddEmployee.module.css";

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
                name="name"
                autoComplete="off"
                value={inputEmployee.name}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label>Apellido: </label>
              <input
                type="text"
                name="lastName"
                autoComplete="off"
                value={inputEmployee.lastName}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el apellido...."
              />
            </div>

            <div>
              <label>Legajo: </label>
              <input
                type="number"
                name="legajo"
                autoComplete="off"
                value={inputEmployee.legajo}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el legajo...."
              />
            </div>

            <div>
              <label>Teléfono: </label>
              <input
                type="number"
                name="telefono"
                autoComplete="off"
                value={inputEmployee.telefono}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label>E-mail: </label>
              <input
                type="text"
                name="email"
                autoComplete="off"
                value={inputEmployee.email}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el e-mail...."
              />
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
            <button onClick={(e) => handleSubmitEmployee(e)}>Cargar</button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default AddEmployee;
