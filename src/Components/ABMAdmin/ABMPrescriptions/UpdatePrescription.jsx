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
        <h4>Modificar Receta</h4>
        <h5>
          {updateData.afiliadoID.nombre + " " + updateData.afiliadoID.apellido}
        </h5>

        <label>Tipo de receta: {updateData.tipoReceta}</label>
        <div className={styles.container}>
          <form>
            <div>
              <label>Estado: </label>
              <select
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
                type="text"
                name="motivoNoAuto"
                autoComplete="off"
                value={updatePrescriptionData.motivoNoAuto}
                onChange={(e) => handleUpdatePrescription(e)}
                placeholder="Ingrese el motivo...."
              />
            </div>
          </form>

          {errors ? (
            <button
              key="submitFormButton1"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button
              key="submitFormButton"
              onClick={handleSubmitUpdatePrescription}
            >
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdatePrescription;
