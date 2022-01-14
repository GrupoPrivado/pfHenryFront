import React from "react";

import { useDispatch} from "react-redux";

import { getAllAffiliates, getAffiliateData, deleteAffiliate  } from "../../../actions/actionAMBAdmin";

import styles from "./ABMAffiliates.module.css";

const ABMAffiliatesList = ({ allAffiliates, setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const handleEditAffiliate = async (event) => {
    await dispatch(getAffiliateData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeleteAffiliate = async (event) => {
    let response = await dispatch(deleteAffiliate(event.target.value));

    await dispatch(getAllAffiliates());
  };

  return (
    <div className={styles.divScroll}>
      <div className={styles.tabla}>
        <label>DNI</label>
        <label>Nombre</label>
        <label>Apellido</label>
        <label>Telefono</label>
        <label>Activo</label>
        <label>Alta</label>
      </div>
      {allAffiliates.length !== 0 &&
        allAffiliates.map((element) => {
          return (
            <div key={element._id} className={styles.tabla}>
              <label>{element.DNI}</label>
              <label>{element.nombre}</label>
              <label>{element.apellido}</label>
              <label>{element.telefono}</label>
              <label>{element.activo?"Si":"No"}</label>
              <label>{element.alta?"Si":"No"}</label>
              <button
                key={"delete" + element._id}
                title="Delete"
                value={element._id}
                onClick={(e) => handleDeleteAffiliate(e)}
              >
                XXXX
              </button>
              <button
                title="Edit"
                key={"edit" + element._id}
                value={element._id}
                onClick={(e) => handleEditAffiliate(e)}
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
