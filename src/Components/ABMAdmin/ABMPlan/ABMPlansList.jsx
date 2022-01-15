import React from "react";

import { useDispatch} from "react-redux";

import { getAllPlansData, getPlanData, deletePlan  } from "../../../actions/actionAMBAdmin";

import styles from "./ABMPlans.module.css";

const ABMPlansList = ({ allPlansData, setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const handleEditPlan = async (event) => {
    await dispatch(getPlanData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeletePlan = async (event) => {
    let response = await dispatch(deletePlan(event.target.value));

    await dispatch(getAllPlansData());
  };
  console.log('<<<<<<<<<<< plans data gggggggg<<<<<<<', allPlansData)
  return (
    <div className={styles.divScroll}>
      <div className={styles.tabla}>
        <label>Código Plan</label>
        <label>Nombre</label>
        <label>Precio</label>
        <label>Descripción</label>
        <label>Activo</label>
      </div>
      {allPlansData &&
        allPlansData.map((element) => {
          return (
            <div key={element._id} className={styles.tabla}>
              {console.log(element)}
              <label>{element.codePlan}</label>
              <label>{element.name}</label>
              <label>{element.precio}</label>
              <label>{element.descripcion}</label>
              <label>{element.planActivo?"Si":"No"}</label>
              <button
                key={"delete" + element._id}
                title="Delete"
                value={element._id}
                onClick={(e) => handleDeletePlan(e)}
              >
                XXXX
              </button>
              <button
                title="Edit"
                key={"edit" + element._id}
                value={element._id}
                onClick={(e) => handleEditPlan(e)}
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ABMPlansList;
