import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getPrescriptionsByDNI,
  getPrescriptionById,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPrescriptions.module.css";

const ABMPrescriptionsList = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const { prescriptionDNI, affiliatePrescriptionData } = useSelector((state) => state.ABMAdmin);

  const handleEditPrescription = async (event) => {
    await dispatch(getPrescriptionById(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div>
          <label>Nombre: {affiliatePrescriptionData.nonmbre}</label>
          <label>Apellido: {affiliatePrescriptionData.apellido}</label>
          <label>DNI: {affiliatePrescriptionData.DNI}</label>
          <label>E-mail: {affiliatePrescriptionData.correoElectronico}</label>
          <label>Activo: {affiliatePrescriptionData.activo?"Si":"No"}</label>
          <div className={styles.divScroll}>
        <div className={styles.tabla}>
          <label>Receta Nº</label>
          <label>Autorizada</label>
          <label>Realizada</label>
        </div>
        {prescriptionDNI &&
          prescriptionDNI.map((element) => {
            return (
              <div key={element._id} className={styles.tabla}>
                <label>{element.numReceta}</label>
                <label>{element.status}</label>
                <label>{element.planActivo ? "Si" : "No"}</label>
                <button
                  title="Edit"
                  key={"edit" + element._id}
                  value={element._id}
                  onClick={(e) => handleEditPrescription(e)}
                >
                  Edit
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ABMPrescriptionsList;
