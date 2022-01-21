import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { addSpeciality } from "../../../actions/actionAMBAdmin";

import styles from "./addSpecialty.module.css";
import { enableBtn, disableBtn } from "../../../utils/ABMStyles";
import {
  functionErrorsBtn,
  validateEspeciality,
} from "../../../utils/adminFormsControllers";

const AddSpeciality = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({});

  const inputSpecialityStruct = {
    nombre: "",
    descripcion: "",
    activa: "",
  };

  const [inputSpeciality, setInputSpeciality] = useState(inputSpecialityStruct);

  const handleChange = (event) => {
    let newSpeciality = {
      ...inputSpeciality,
      [event.target.name]: event.target.value,
    };
    setInputSpeciality(newSpeciality);

    setErrors(functionErrorsBtn(newSpeciality));

    newSpeciality = {};
  };

  const handleSubmitSpeciality = async (event) => {
    event.preventDefault();

    const validateError = validateEspeciality(inputSpeciality);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(addSpeciality(inputSpeciality));
      setInputSpeciality(inputSpecialityStruct);
      setShowModalAdd(false);
      setErrors(true);
    }
  };

  const handleClose = () => {
    setInputSpeciality(inputSpecialityStruct);
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
            {errores.nombre && (
              <p className="absolute text-red-700">{errores.nombre}</p>
            )}

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
              {errores.nombre && (
                <p className="absolute text-red-700">{errores.descripcion}</p>
              )}
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
                {errores.nombre && (
                  <p className="absolute text-red-700">{errores.activa}</p>
                )}
              </div>
              <div className="flex w-2/3 justify-around">
                <button
                  type="submit"
                  key="submitFormButton"
                  form="addSpeciality"
                  className={errors ? disableBtn : enableBtn}
                  disabled={errors}
                >
                  Guardar
                </button>

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
