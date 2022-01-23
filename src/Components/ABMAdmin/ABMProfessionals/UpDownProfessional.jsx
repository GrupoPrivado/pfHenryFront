import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  upDownProfessionalAct,
  getAllProfessionals,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpDownProfessional.module.css";
import { functionErrorsBtn } from "../../../utils/adminFormsControllers";
import { enableBtn, disableBtn } from "../../../utils/ABMStyles";

const UpDownProfessional = ({ setShowModalUpDown }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  const upDownProfessionalDataStruct = {
    id: "",
    activo: "",
    subject: "",
    text: "",
  };

  const [upDownProfessionalData, setupDowndateProfessionalData] = useState(
    upDownProfessionalDataStruct
  );

  useEffect(() => {
    setupDowndateProfessionalData({
      id: updateData._id,
      activo: updateData.activo,
    });
  }, [updateData, dispatch]);

  const handleUpdateProfessional = async (event) => {
    let updatedProfessional = {
      ...upDownProfessionalData,
      [event.target.name]: event.target.value,
    };

    setupDowndateProfessionalData(updatedProfessional);

    setErrors(functionErrorsBtn(updatedProfessional));
  };

  const handleSubmitUpdateProfessional = (event) => {
    event.preventDefault();

    dispatch(upDownProfessionalAct(upDownProfessionalData));
    setShowModalUpDown(false);
    dispatch(getAllProfessionals());
    dispatch(resetDataUpdate());
  };

  const handleClose = () => {
    setupDowndateProfessionalData(upDownProfessionalDataStruct);
    setShowModalUpDown(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex  justify-center">
          <h5 className="text-2xl font-bold text-gray-500">
            ALTA / BAJA Profesional
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 mt-1 ">
          <form>
            <div className="flex flex-col  ">
              <div className="flex w-full mt-3">
                <div className="w-1/2 ">
                  <label className="text-md text-gray-600">
                    Nombre:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.nombre}
                    </span>
                  </label>
                </div>
                <div className="w-1/2 ">
                  <label className="text-md text-gray-600">
                    Apellido:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.apellido}
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex  w-full  mt-3">
                <div className="w-1/2 ">
                  <label className="text-md text-gray-600">
                    DNI:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.DNI}
                    </span>
                  </label>
                </div>
                <div className="w-1/2 ">
                  <label className="text-md text-gray-600">
                    Matricula:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.matricula}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div>
                <div>
                  <label className="text-md text-gray-600">Asunto: </label>
                  <input
                    className="h-2 p-4 w-2/3 border-2 border-gray-300 mb-3 rounded-md"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    value={upDownProfessionalData.subject}
                    onChange={(e) => handleUpdateProfessional(e)}
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
                      value={upDownProfessionalData.text}
                      onChange={(e) => handleUpdateProfessional(e)}
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
                    onChange={(e) => handleUpdateProfessional(e)}
                    value={upDownProfessionalData.activo}
                  >
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 ">
              <div className="flex w-2/3 justify-around">
                <button
                  onClick={handleSubmitUpdateProfessional}
                  key="submitFormButton"
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

export default UpDownProfessional;
