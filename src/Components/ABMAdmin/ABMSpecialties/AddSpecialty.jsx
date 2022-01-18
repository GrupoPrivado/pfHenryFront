import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  addSpeciality,
  getAllSpecialities,
} from "../../../actions/actionAMBAdmin";

import styles from "./addSpecialty.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddSpeciality = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(true);

  let [inputSpeciality, setInputSpeciality] = useState({
    nombre: "",
    descripcion: "",
    activa: "",
  });

  const handleChange = (event) => {
    let newSpeciality = {
      ...inputSpeciality,
      [event.target.name]: event.target.value,
    };
    setInputSpeciality(newSpeciality);

    setErrors(functionErrors(newSpeciality));

    newSpeciality = {};
  };

  const handleSubmitSpeciality = async (event) => {
    event.preventDefault();
    let response = await dispatch(addSpeciality(inputSpeciality));
    alert(response.success);
    setInputSpeciality({
      nombre: "",
      descripcion: "",
      activa: "",
    });
    setShowModalAdd(false);
    dispatch(getAllSpecialities());
    setErrors(true);
  };

  const handleClose = () => {
    setInputSpeciality({
      nombre: "",
      descripcion: "",
      activa: "",
    });
    setShowModalAdd(false);
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Nueva Especialidad
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 h-90% ">
          <form onSubmit={(e) => handleSubmitSpeciality(e)} id="addSpeciality">
            <div>
              <label className="text-md text-gray-600">Nombre: </label>
              <input
                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="nombre"
                autoComplete="off"
                value={inputSpeciality.nombre}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el nombre...."
              />
            </div>

            <div>
              <label className="text-md text-gray-600">Descripción: </label>
              <input
                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="descripcion"
                autoComplete="off"
                value={inputSpeciality.descripcion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Descripcion...."
              />
            </div>
            <div className="flex justify-between mt-8">
              <div className="flex w-1/3 items-center">
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  id="activa"
                  name="activa"
                  onChange={(e) => handleChange(e)}
                  defaultValue={0}
                >
                  <option value="">Seleccione</option>
                  <option value="false">No</option>
                  <option value="true">Si</option>
                </select>
              </div>
              <div className="flex w-2/3 justify-around">
                {errors ? (
                  <button
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit"
                    key="submitFormButton"
                    form="addSpeciality"
                    disabled={errors}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    type="submit"
                    key="submitFormButton"
                    form="addSpeciality"
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
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddSpeciality;
