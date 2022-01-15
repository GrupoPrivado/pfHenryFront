import React from "react";

import { useDispatch } from "react-redux";

import {
  getAllProfessionals,
  getProfessionalData,
  allSpecialities,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMProfessionals.module.css";

const ABMAffiliatesList = ({ allProfessionals, setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const handleEditProfessional = async (event) => {
    console.log('<<<<<<Edit>>>>>>', event.target.value)
    await dispatch(getProfessionalData(event.target.value));
    setShowModalUpdate(true);
  };

  return (
    <div className={styles.divScroll}>
      <div className={styles.tabla}>
        <label>Matrícula</label>
        <label>Nombre</label>
        <label>Apellido</label>
        <label>Localidad</label>
        <label>Provincia</label>
        <label>Especialidad</label>
        <label>Teléfono</label>
        <label>E-mail</label>
        <label>Activo</label>
      </div>
      {allProfessionals.length !== 0 &&
        allProfessionals.map((element) => {
          return (
            <div key={element._id} className={styles.tabla}>
              <label>{element.matricula}</label>
              <label>{element.nombre}</label>
              <label>{element.apellido}</label>
              <label>{element.localidad}</label>
              <label>{element.provincia}</label>
              <label>{element.especialidad}</label>
              <label>{element.telefono}</label>
              <label>{element.mail}</label>
              <label>{element.activo ? "Si" : "No"}</label>

              <button
                title="Edit"
                key={"edit" + element._id}
                value={element._id}
                onClick={(e) => handleEditProfessional(e)}
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ABMAffiliatesList;
