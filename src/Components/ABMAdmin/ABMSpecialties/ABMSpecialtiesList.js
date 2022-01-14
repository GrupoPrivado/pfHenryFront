import React from "react";

import { useDispatch} from "react-redux";

import { getAllSpecialities, getSpecialityData, deleteSpeciality  } from "../../../actions/actionAMBAdmin";

import styles from "./ABMSpecialties.module.css";

const ABMSpecialitiesList = ({ allSpecialities, setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const handleEditSpeciality = async (event) => {
    await dispatch(getSpecialityData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeleteSpeciality = async (event) => {
    let response = await dispatch(deleteSpeciality(event.target.value));

    await dispatch(getAllSpecialities());
  };

  return (
    <div className={styles.divScroll}>
      <div className={styles.tabla}>
        <label>Código Esp.</label>
        <label>Nombre</label>
        <label>Activa</label>
        <label>Descripción</label>
      </div>
      {allSpecialities.length !== 0 &&
        allSpecialities.map((element) => {
          return (
            <div key={element._id} className={styles.tabla}>
              <label>{element.codeEsp}</label>
              <label>{element.nombre}</label>
              <label>{element.activa}</label>
              <label>{element.descripcion}</label>
              <button
                key={"delete" + element._id}
                title="Delete"
                value={element._id}
                onClick={(e) => handleDeleteSpeciality(e)}
              >
                XXXX
              </button>
              <button
                title="Edit"
                key={"edit" + element._id}
                value={element._id}
                onClick={(e) => handleEditSpeciality(e)}
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ABMSpecialitiesList;
