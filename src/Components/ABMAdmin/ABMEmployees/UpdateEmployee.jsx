import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  getAllEmployees,
  resetDataUpdate,
  updateEmployee,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateEmployee.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdateEmployee = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  const inputEmployeeData = {
    _id: "",
    telefono: "",
    email: "",
  };

  const [updateEmployeeData, setUpdateEmployeeData] =
    useState(inputEmployeeData);

  useEffect(() => {
    setUpdateEmployeeData({
      _id: updateData._id,
      telefono: updateData.telefono,
      email: updateData.email,
    });
  }, [updateData]);

  const handleUpdateEmployee = async (event) => {
    let updatedEmployee = {
      ...updateEmployeeData,
      [event.target.name]: event.target.value,
    };

    setUpdateEmployeeData(updatedEmployee);

    setErrors(functionErrors(updatedEmployee));
  };

  const handleSubmitUpdateEmployee = async (event) => {
    event.preventDefault();
    let response = await dispatch(updateEmployee(updateEmployeeData));
    alert(response.success);
    setUpdateEmployeeData(inputEmployeeData);
    setShowModalUpdate(false);
    dispatch(getAllEmployees());
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  const handleClose = () => {
    setUpdateEmployeeData(inputEmployeeData);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <h5>Modificar Empleado</h5>
        <div className={styles.container}>
          <form>
            <div>
              <label>Teléfono: </label>
              <input
                type="number"
                name="telefono"
                autoComplete="off"
                value={updateEmployeeData.telefono}
                onChange={(e) => handleUpdateEmployee(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label>E-Mail: </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={updateEmployeeData.email}
                onChange={(e) => handleUpdateEmployee(e)}
                placeholder="Ingrese el E-Mail...."
              />
            </div>
          </form>

          {errors ? (
            <button disabled={errors} className="disabledButton">
              Cargar
            </button>
          ) : (
            <button onClick={handleSubmitUpdateEmployee}>Cargar</button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdateEmployee;
