import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  getAllEmployees,
  resetDataUpdate,
  upDownEmployeeAct,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpDownEmployee.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpDownEmployee = ({ setShowModalUpDown }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  const upDownDataInput = {
    id: "",
    activo: "",
    email: "",
    subject: "",
    text: "",
  };

  let [upDownEmployeeData, setUpDowndateEmployeeData] =
    useState(upDownDataInput);

  useEffect(() => {
    setUpDowndateEmployeeData({
      id: updateData._id,
      mail: updateData.email,
      activo: updateData.activo,
    });
  }, [updateData]);

  const handleUpdateEmployee = async (event) => {
    let updatedEmployee = {
      ...upDownEmployeeData,
      [event.target.name]: event.target.value,
    };

    setUpDowndateEmployeeData(updatedEmployee);

    setErrors(functionErrors(updatedEmployee));
  };

  const handleSubmitUpdateEmployee = async (event) => {
    event.preventDefault();
    let response = await dispatch(upDownEmployeeAct(upDownEmployeeData));
    alert(response.success);
    setUpDowndateEmployeeData(upDownDataInput);
    setShowModalUpDown(false);
    dispatch(getAllEmployees());
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  const handleClose = () => {
    setUpDowndateEmployeeData(upDownDataInput);
    setShowModalUpDown(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex justify-center">
          <h5 className="text-2xl font-bold text-gray-500">
            ALTA / BAJA Empleado
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 mt-1 ">
          <form>
            <div className="flex justify-around ">
              <div lassName="flex flex-col mt-3">
                <div>
                  <label className="text-md text-gray-600">
                    Nombre:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.name}
                    </span>
                  </label>
                </div>
                <div>
                  <label className="text-md text-gray-600">
                    Apellido:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.lastName}
                    </span>
                  </label>
                </div>
                <div>
                  <label className="text-md text-gray-600">
                    Legajo:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.legajo}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <div>
                  <label className="text-md text-gray-600">Asunto: </label>
                  <input
                    className="h-2 p-4 w-2/3 border-2 border-gray-300 mb-3 rounded-md"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    value={upDownEmployeeData.subject}
                    onChange={(e) => handleUpdateEmployee(e)}
                    placeholder="Ingrese el asunto...."
                  />
                </div>
                <div>
                  <div>
                    <label className="text-md text-gray-600">Texto: </label>
                    <input
                      className="h-6 p-10 w-2/3 border-2 border-gray-300 mb-3 rounded-md"
                      type="textarea"
                      name="text"
                      autoComplete="off"
                      value={upDownEmployeeData.text}
                      onChange={(e) => handleUpdateEmployee(e)}
                      placeholder="Ingrese el texto...."
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <label className="text-md text-gray-600">Activo: </label>
                  <select
                    name="activo"
                    onChange={(e) => handleUpdateEmployee(e)}
                    value={upDownEmployeeData.activo}
                  >
                    <option value="">Seleccione:</option>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-1 "></div>
          </form>
          <div className="flex w-2/3 justify-around">
            {errors ? (
              <button
                className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={errors}
                className="disabledButton"
              >
                Guardar
              </button>
            ) : (
              <button
                onClick={handleSubmitUpdateEmployee}
                className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar
              </button>
            )}
            <button
              onClick={() => handleClose()}
              className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpDownEmployee;
