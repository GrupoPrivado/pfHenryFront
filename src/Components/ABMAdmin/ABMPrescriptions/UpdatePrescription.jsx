import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updatePrescription,
  getPrescriptionsByDNI,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdatePrescription.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdatePrescription = ({ setShowModalUpdate, showModalUpdate }) => {
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
  const typePrescription = ["Farmacia", "Estudio"];

  const [errors, setErrors] = useState(false);

  let [updatePrescriptionData, setUpdatePrescriptionData] =
    useState(inputPrescription);

  useEffect(() => {
    setUpdatePrescriptionData({
      id: updateData._id,
      tipoReceta: updateData.tipoReceta,
      status: updateData.status,
      motivoNoAuto: "N/C",
      realizada: false,
      correoElectronico: updateData.afiliadoID.correoElectronico,
    });
  }, []);

  const handleUpdatePrescription = async (event) => {
    let updatedPlanPrescription = {
      ...updatePrescriptionData,
      [event.target.name]: event.target.value,
    };

    setUpdatePrescriptionData(updatedPlanPrescription);

    setErrors(functionErrors(updatedPlanPrescription));
  };

  const handleSubmitUpdatePrescription = async (event) => {
    event.preventDefault();
    let response = await dispatch(updatePrescription(updatePrescriptionData));
    alert(response.success);
    setUpdatePrescriptionData(inputPrescription);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    dispatch(getPrescriptionsByDNI(updateData.afiliadoID.DNI));
    setErrors(true);
  };

  const handleClose = () => {
    setUpdatePrescriptionData(setUpdatePrescriptionData(inputPrescription));
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div>
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
                <option value="">Elija el estado de lareceta</option>
                {statusPrescriptionOpc.map((stat) => {
                  return <option value={stat}>{stat}</option>;
                })}
              </select>
            </div>

            <div>
              <label>Motivo no autorización: </label>
              <input
              className="h-2 p-4  w-full border-2 border-gray-300 mb-2 rounded-md"
                  
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
          {errors ? (
            <button
            className="group relative w-15 h-10 flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              key="submitFormButton1"
              disabled={errors}
              className="disabledButton"
            >
              Guardar
            </button>
          ) : (
            <button
            className="group relative w-15 h-10 flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              key="submitFormButton"
              onClick={handleSubmitUpdatePrescription}
            >
              Guardar
            </button>
          )}
          <button className="group relative w-15 h-10 flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " onClick={() => handleClose()}>Cerrar</button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default UpdatePrescription;
