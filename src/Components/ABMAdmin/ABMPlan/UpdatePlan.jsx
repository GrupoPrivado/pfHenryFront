import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { updatePlan, resetDataUpdate } from "../../../actions/actionAMBAdmin";

import {
  functionErrorsBtn,
  validateUpdatePlan,
} from "../../../utils/adminFormsControllers";

import styles from "./UpdatePlan.module.css";
import { enableBtn, disableBtn, formError } from "../../../utils/ABMStyles";

const UpdatePlan = ({ setShowModalUpdate }) => {
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
  const [showModalView, setShowModalViewUpdate] = useState(false);

  useEffect(() => {
    setUpdatePlanData({
      id: updateData._id,
      name: updateData.name,
      precio: updateData.precio,
      descripcion: updateData.descripcion,
      planActivo: updateData.planActivo,
    });
    functionErrorsBtn(updatePlanData);
  }, [updateData]);

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
    <div className={styles.modal}>
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

        <div className="modal-content pb-4 text-left px-6 h-90%">
          <div className="flex w-full justify-around items-center">
            <div>
              <label className="text-md text-gray-600">Precio: </label>
              <input
                className="h-2 p-4 w-full border-2 border-gray-300 m rounded-md"
                type="text"
                name="precio"
                autoComplete="off"
                value={updatePlanData.precio}
                onChange={(e) => handleUpdatePlan(e)}
                placeholder="Ingrese el precio...."
              />
              {errores.precio && (
                <p className={formError}>{errores.precio}</p>
              )}{" "}
            </div>
            <div>
              <label className="text-md text-gray-600">Activo: </label>
              <select
                className=" h-1/2 w-full  border-2 border-gray-300  rounded-md"
                id="activo"
                name="planActivo"
                onChange={(e) => handleUpdatePlan(e)}
                value={updatePlanData.planActivo}
              >
                <option value="">Seleccione</option>
                <option value="false">No</option>
                <option value="true">Si</option>
              </select>

              {errores.planActivo && (
                <p className={formError}>{errores.planActivo}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <div className=" flex flex-col">
              <div className="  w-full flex justify-center items-end  mb-2">
                <div className=" w-1/2 ">
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
                <div className="h-1/2 w-1/2 flex  justify-center items-end ">
                  <button
                    className="group relative  mx-1 h-6 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    name="descripcion"
                    onClick={(e) => handleAddDescription(e)}
                  >
                    Cargar descripcion
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <label className="  text-md text-gray-600">Descripción: </label>
                <textarea
                  className="  overflow-y-scroll p-4  w-full border-2 border-gray-300  rounded-md resize-none"
                  rows="1"
                  cols="30"
                  name="description"
                  autoComplete="off"
                  value={description}
                  onChange={(e) => handleChangeDescription(e)}
                  placeholder="Ingrese la Descripcion...."
                />
              </div>
            </div>
            <div className="w">
              <div
                className=" border overflow-y-scroll
              h-24 w-full flex flex-col border-gray-300  rounded-md"
              >
                {updatePlanData.descripcion &&
                  updatePlanData.descripcion.map((element, index) => {
                    return (
                      <div className=" flex  flex-col" key={"divDesc" + index}>
                        <div className="flex">
                          <label
                            className="inline-flex bg-indigo-600 text-white rounded-full rounded-tr-none h-6 px-3 justify-center items-center"
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
                            x
                          </button>
                        </div>
                      </div>
                    );
                  })}
                {errores.descripcion && (
                  <p className={formError}>{errores.descripcion}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex w-2/3 justify-around  ">
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
