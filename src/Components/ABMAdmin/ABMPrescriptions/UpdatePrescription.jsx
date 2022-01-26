import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updatePrescription,
  getPrescriptionsByDNI,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdatePrescription.module.css";

import { functionErrorsBtn } from "../../../utils/adminFormsControllers";
import { enableBtn, disableBtn } from "../../../utils/ABMStyles";

const UpdatePrescription = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const { updateData, affiliatePrescriptionData } = useSelector(
    (state) => state.ABMAdmin
  );

  const inputPrescription = {
    id: "",
    tipoReceta: "",
    status: "",
    motivoNoAuto: "",
    realizada: "",
    correoElectronico: "",
  };

  const statusPrescriptionOpc = ["Autorizada", "Rechazada", "Pendiente"];

  const [errors, setErrors] = useState(false);

  let [updatePrescriptionData, setUpdatePrescriptionData] =
    useState(inputPrescription);

  useEffect(() => {
    setUpdatePrescriptionData({
      id: updateData._id,
      tipoReceta: updateData.tipoReceta,
      status: updateData.status,
      motivoNoAuto: "N/C",
      realizada: updateData.realizada,
      correoElectronico: updateData.afiliadoID.correoElectronico,
    });
  }, []);

  const handleUpdatePrescription = async (event) => {
    let updatedPlanPrescription = {
      ...updatePrescriptionData,
      [event.target.name]: event.target.value,
    };

    setUpdatePrescriptionData(updatedPlanPrescription);

    setErrors(functionErrorsBtn(updatedPlanPrescription));
  };

  const handleSubmitUpdatePrescription = async (event) => {
    event.preventDefault();
    dispatch(updatePrescription(updatePrescriptionData));
    setUpdatePrescriptionData(inputPrescription);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    dispatch(getPrescriptionsByDNI(updateData.afiliadoID.DNI));
  };

  const handleClose = () => {
    setUpdatePrescriptionData(setUpdatePrescriptionData(inputPrescription));
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div className={styles.modal}>
      <section className={styles.modalmain}>
        <div className="flex flex-col items-center h-20%">
          <div>
            <h5 className="text-2xl font-bold text-gray-500">
              Modificar Receta
            </h5>
          </div>
          <div className="flex w-full mt-5">
            <div className="w-1/2 flex justify-center">
              <h5 className="text-xl font-semibold text-black uppercase">
                {updateData.afiliadoID.nombre +
                  " " +
                  updateData.afiliadoID.apellido}
              </h5>
            </div>
            <div className="w-1/2 flex justify-center">
              <label className="text-md text-gray-600">
                Tipo de receta:{" "}
                <span className="text-md text-black">
                  {updateData.tipoReceta}
                </span>
              </label>
            </div>
            <div className="w-1/2 flex justify-center">
              <label className="text-md text-gray-600">
                Descripción:{" "}
                <span className="text-md text-black">
                  {updateData.descripcion}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="modal-content py-4 text-left px-6 h-80%">
          <form>
            <div>
              <label className="text-md text-gray-600">Estado: </label>
              <select
                className=" h-1/2  p-1 w-full  border-2 border-gray-300 mb-5 rounded-md"
                id="status"
                name="status"
                value={updatePrescriptionData.status}
                onChange={(e) => handleUpdatePrescription(e)}
              >
                {statusPrescriptionOpc.map((stat) => {
                  return (
                    <option value={stat} key={stat}>
                      {stat}
                    </option>
                  );
                })}
              </select>
            </div>
            <label className="text-md text-gray-600">Realizada: </label>
            <select
              className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
              id="realizada"
              name="realizada"
              onChange={(e) => handleUpdatePrescription(e)}
              value={updatePrescriptionData.realizada}
            >
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>

            <div>
              <label>Motivo no autorización: </label>
              <textarea
                className="h-2 p-4  w-full border-2 border-gray-300 mb-2 rounded-md resize-none"
                rows="8"
                cols="50"
                type="text"
                name="motivoNoAuto"
                autoComplete="off"
                value={updatePrescriptionData.motivoNoAuto}
                onChange={(e) => handleUpdatePrescription(e)}
                placeholder="Ingrese el motivo...."
              />
            </div>
          </form>
          <div className="  mt-10 flex justify-around w-full">
            <button
              className={errors ? disableBtn : enableBtn}
              disabled={errors}
              key="submitFormButton"
              onClick={handleSubmitUpdatePrescription}
            >
              Guardar
            </button>

            <button
              className="group relative w-15 h-10 flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
              onClick={() => handleClose()}
            >
              Cerrar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdatePrescription;
