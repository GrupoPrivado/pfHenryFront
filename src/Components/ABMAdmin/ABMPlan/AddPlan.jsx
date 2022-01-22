import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPlan } from "../../../actions/actionAMBAdmin";

import styles from "./addPlan.module.css";
import { enableBtn, disableBtn } from "../../../utils/ABMStyles";

import {
  functionErrorsBtn,
  validatePlan,
} from "../../../utils/adminFormsControllers";

const AddPlan = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({});

  const [type, setTypeArr] = useState("");
  const [description, setdescriptionArr] = useState("");

  const inputPlanStruct = {
    name: "",
    codePlan: "",
    precio: "",
    planActivo: "",
    descripcion: [],
  };

  const [inputPlan, setInputPlan] = useState(inputPlanStruct);

  const handleChangeDescription = (event) => {
    if (event.target.name === "type") {
      const newType = event.target.value;
      setTypeArr(newType);
    }

    if (event.target.name === "description") {
      const newDescription = event.target.value;
      setdescriptionArr(newDescription);
    }
  };

  const handleAddDescription = (event) => {
    // event.preventDefault();
    const newDesc = [type, description];
    if (type !== "" && description !== "") {
      setInputPlan({
        ...inputPlan,
        descripcion: [...inputPlan.descripcion, newDesc],
      });
      setTypeArr("");
      setdescriptionArr("");
    }
  };

  const handleDeleteDescr = (event) => {
    const newDesc = inputPlan.descripcion;

    newDesc.splice(event.target.value, 1);

    setInputPlan({
      ...inputPlan,
      descripcion: newDesc,
    });
  };

  const handleChange = (event) => {
    let newPlan = {
      ...inputPlan,
      [event.target.name]: event.target.value,
    };
    setInputPlan(newPlan);

    setErrors(functionErrorsBtn(newPlan));

    newPlan = {};
  };

  const handleSubmitPlan = () => {
    const validateError = validatePlan(inputPlan);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(addPlan(inputPlan));
      setInputPlan(inputPlanStruct);
      setShowModalAdd(false);
      setErrors(true);
    }
  };

  const handleClose = () => {
    setInputPlan(inputPlanStruct);
    setShowModalAdd(false);
    setErrors(true);
  };
  return (
    <div className="relative">
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Nuevo Plan
          </h5>
          <br />
        </div>
        <div className="modal-content py-4 text-left px-6 h-90%">
          <form>
            <div className="flex">
              <div>
                <label className="text-md text-gray-600">Codigo: </label>
                <input
                  className="h-2 p-4 mb-2.5 w-full border-2 border-gray-300  rounded-md"
                  type="text"
                  name="codePlan"
                  autoComplete="off"
                  value={inputPlan.codePlan}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el Codigo...."
                />
              </div>
              {errores.codePlan && (
                <p className="absolute text-red-700">{errores.codePlan}</p>
              )}

              <div>
                <label className="text-md text-gray-600">Nombre: </label>
                <input
                  className="h-2 p-4 mb-2.5 w-full border-2 border-gray-300  rounded-md"
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={inputPlan.nombre}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el nombre...."
                />
                {errores.name && (
                  <p className="absolute text-red-700">{errores.name}</p>
                )}
              </div>
              <div>
                <label className="text-md text-gray-600">Precio: </label>
                <input
                  className="h-2 p-4 mb-2.5 w-full border-2 border-gray-300 rounded-md"
                  type="number"
                  name="precio"
                  autoComplete="off"
                  value={inputPlan.precio}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el precio...."
                />
                {errores.precio && (
                  <p className="absolute text-red-700">{errores.precio}</p>
                )}
              </div>
            </div>
          </form>

          <div className="flex ">
            <div className="w-1/2">
              <div>
                <label className="text-md text-gray-600">Tipo: </label>
                <input
                  className="h-2 p-4  w-full border-2 border-gray-300  rounded-md"
                  type="text"
                  name="type"
                  autoComplete="off"
                  value={type}
                  onChange={(e) => handleChangeDescription(e)}
                  placeholder="Ingrese la Descripcion...."
                />
              </div>
              <div className="h-2/3">
                <label className=" h-1/3 text-md text-gray-600">
                  Descripción:{" "}
                </label>
                <textarea
                  className="h-2/3 p-4  w-full border-2 border-gray-300 mb-2 rounded-md resize-none"
                  rows="8"
                  cols="50"
                  name="description"
                  autoComplete="off"
                  value={description}
                  onChange={(e) => handleChangeDescription(e)}
                  placeholder="Ingrese la Descripcion...."
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="h-1/3 flex  justify-center items-center">
                <button
                  className="group relative w-2/3 h-6 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  name="descripcion"
                  onClick={(e) => handleAddDescription(e)}
                >
                  Cargar descripcion
                </button>
              </div>
              <div className="h-2/3 border  flex  border-gray-300 m rounded-md">
                {inputPlan.descripcion &&
                  inputPlan.descripcion.map((element, index) => {
                    return (
                      <div key={"divDesc" + index}>
                        <label
                          className="text-md text-gray-600"
                          key={"labelTipo" + index}
                        >
                          {element[0]}:{" "}
                        </label>
                        <label
                          className="text-md text-black"
                          key={"labelDesc" + index}
                        >
                          {element[1]}
                        </label>
                        <button
                          className="text-red-600"
                          value={index}
                          name={"btnDel" + index}
                          id={index}
                          onClick={(e) => handleDeleteDescr(e)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                {errores.descripcion && (
                  <p className="absolute text-red-700">{errores.descripcion}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end ">
            <div className="flex w-1/3 items-center">
              <label className="text-md text-gray-600">Activo: </label>
              <select
                id="activo"
                name="planActivo"
                onChange={(e) => handleChange(e)}
                defaultValue={0}
              >
                <option value="">Seleccione</option>
                <option value="false">No</option>
                <option value="true">Si</option>
              </select>
              {errores.planActivo && (
                <p className="absolute text-red-700">{errores.planActivo}</p>
              )}
            </div>

            <div className="flex w-2/3 justify-around mt-4">
              <button
                key="submitFormButton"
                onClick={handleSubmitPlan}
                className={errors ? disableBtn : enableBtn}
                disabled={errors}
              >
                Guardar
              </button>

              <button
                type="button"
                onClick={() => handleClose()}
                className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPlan;
