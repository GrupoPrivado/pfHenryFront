import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { updatePlan, resetDataUpdate } from "../../../actions/actionAMBAdmin";

import {
  functionErrorsBtn,
  validateUpdatePlan,
} from "../../../utils/adminFormsControllers";

import styles from "./UpdatePlan.module.css";
import { enableBtn, disableBtn } from "../../../utils/ABMStyles";

const UpdatePlan = ({setShowModalUpdate}) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);
  const [errores, setErrores] = useState({});

  const updatePlanStruct = {
    id: "",
    name: "",
    precio: "",
    descripcion: "",
    planActivo: "",
  };

  const [updatePlanData, setUpdatePlanData] = useState(updatePlanStruct);
  const [showModalView, setShowModalViewUpdate] = useState(false)

  useEffect(() => {
    setUpdatePlanData({
      id: updateData._id,
      name: updateData.name,
      precio: updateData.precio,
      descripcion: updateData.descripcion,
      planActivo: updateData.planActivo,
    });
    functionErrorsBtn(updatePlanData);
  }, [updateData, dispatch]);

  const [type, setTypeArr] = useState("");
  const [description, setdescriptionArr] = useState("");

  const handleDeleteDescr = (event) => {
    const newDesc = updatePlanData.descripcion;

    newDesc.splice(event.target.value, 1);

    setUpdatePlanData({
      ...updatePlanData,
      descripcion: newDesc,
    });

    setErrors(functionErrorsBtn(updatePlanData));
  };

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
      setUpdatePlanData({
        ...updatePlanData,
        descripcion: [...updatePlanData.descripcion, newDesc],
      });
      setTypeArr("");
      setdescriptionArr("");
      setErrors(functionErrorsBtn(updatePlanData));
    }
  };

  const handleUpdatePlan = async (event) => {
    let updatedPlan = {
      ...updatePlanData,
      [event.target.name]: event.target.value,
    };

    setUpdatePlanData(updatedPlan);

    setErrors(functionErrorsBtn(updatedPlan));
  };

  const handleSubmitUpdatePlan = async () => {
    const validateError = validateUpdatePlan(updatePlanData);
    setErrores(validateError);

    if (Object.entries(validateError).length <= 0) {
      dispatch(updatePlan(updatePlanData));
      setShowModalUpdate(false);
      setUpdatePlanData(updatePlanStruct);
      setErrors(true);
      dispatch(resetDataUpdate());
    }
  };

  const handleClose = () => {
    setUpdatePlanData(updatePlanStruct);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate({}));
    setErrors(false);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <div className="flex justify-center items-center">
            <h5 className="text-2xl font-bold text-gray-500">Editar Plan: </h5>
          </div>
          <div className="flex justify-center items-center  mx-1.5">
            <h5 className="text-2xl font-semibold text-black uppercase">
              {updatePlanData.name}
            </h5>
          </div>
        </div>

        <div className="modal-content py-4 text-left px-6 h-90%">
          <div>
            <label className="text-md text-gray-600">Precio: </label>
            <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-2 rounded-md"
              type="text"
              name="precio"
              autoComplete="off"
              value={updatePlanData.precio}
              onChange={(e) => handleUpdatePlan(e)}
              placeholder="Ingrese el precio...."
            />
            <p className="absolute text-red-700">{errores.precio}</p>
          </div>

          <div className="flex ">
            <div className="w-1/2">
              <div>
                <label className="text-md text-gray-600">Tipo: </label>
                <input
                  className="h-2 p-4  w-full border-2 border-gray-300 mb-2 rounded-md"
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
              <div className="h-20% flex  justify-center items-center">
                <button
                  className="group relative w-2/3 h-6 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  name="descripcion"
                  onClick={(e) => handleAddDescription(e)}
                >
                  Cargar descripcion
                </button>
              </div>

              <div className="h-80% border overflow-y-scroll flex  border-gray-300  rounded-md">
                <button>Ver descripcion </button>
                {updatePlanData.descripcion &&
                  updatePlanData.descripcion.map((element, index) => {
                    return (
                      <div  className='grid overflow-hidden auto-cols-auto auto-rows-auto gap-0'key={"divDesc" + index}>
                        <div className="flex">
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
                  <p className="absolute text-red-700">{errores.descripcion}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end  ">
            <div className="flex w-1/3 items-center">
              <label className="text-md text-gray-600">Activo: </label>
              <select
                className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                id="activo"
                name="planActivo"
                onChange={(e) => handleUpdatePlan(e)}
                value={updatePlanData.planActivo}
                defaultValue={0}
              >
                <option value="">Seleccione</option>
                <option value="false">No</option>
                <option value="true">Si</option>
              </select>
            </div>
            <p className="absolute text-red-700">{errores.planActivo}</p>
            <div className="flex w-2/3 justify-around mt-4">
              <button
                key="submitFormButton"
                onClick={handleSubmitUpdatePlan}
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
        </div>
      </section>
    </div>
  );
};

export default UpdatePlan;
