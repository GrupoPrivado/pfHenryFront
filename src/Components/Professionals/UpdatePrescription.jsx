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

  const statusPrescription = ["Autorizada", "Rechazada", "Pendiente"];
  const typePrescription = ["Farmacia", "Estudio"];

  const [errors, setErrors] = useState(false);

  let [updatePrescriptionData, setUpdatePrescriptionData] = useState({
    id: updateData._id,
    tipoReceta: "",
    status: "",
    motivoNoAuto: "N/C",
    realizada: false,
    correoElectronico: affiliatePrescriptionData.correoElectronico,
  });

  // useEffect(() => {
  //   setUpdatePlanData({
  //     id: updateData._id,
  //     tipoReceta: updateData.,
  //     autorizada: "",
  //     motivoNoAuto: "",
  //     realizada: false,
  //     correoElectronico: affiliatePrescriptionData.correoElectronico,
  //   });
  // }, );

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
    setUpdatePrescriptionData({
      id: "",
      tipoReceta: "",
      status: "",
      motivoNoAuto: "",
      realizada: false,
    });
    dispatch(resetDataUpdate());
    await dispatch(getPrescriptionsByDNI(affiliatePrescriptionData.nameDNI));
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdatePrescriptionData({
      id: "",
      tipoReceta: "",
      status: "",
      motivoNoAuto: "",
      realizada: false,
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <h4>Modificar Receta</h4>
        <h5>
          {affiliatePrescriptionData.name +
            " " +
            affiliatePrescriptionData.apellido}
        </h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitUpdatePrescription(e)}
            id="updatePrescription"
          >
            <div>
              <label>Tipo de receta: </label>
              <select
                id="tipoReceta"
                name="tipoReceta"
                onChange={(e) => handleUpdatePrescription(e)}
                defaultValue={0}
              >
                <option value="">Elija el tipo de receta</option>
                {typePrescription.map((prescr) => {
                  <option value={prescr}>{prescr}</option>;
                })}
              </select>
            </div>
            <div>
              <label>Estado: </label>
              <select
                id="status"
                name="status"
                onChange={(e) => handleUpdatePrescription(e)}
              >
                <option value="">Elija el estado de lareceta</option>
                {statusPrescription.map((stat) => {
                  <option value={stat}>{stat}</option>;
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
              type="submit"
              key="submitFormButton"
              form="updatePlan"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button
              type="submit"
              key="submitFormButton"
              form="updatePrescription"
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
