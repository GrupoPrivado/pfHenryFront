import React from "react";

import { useDispatch} from "react-redux";

import { getCityData, deleteCity, getAllCities } from "../../../actions/actionAMBAdmin";

import styles from "./ABMCiudades.module.css";

const ABMCiudadesList = ({ allCities, setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const handleEditCity = async (event) => {
    await dispatch(getCityData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeleteCity = async (event) => {
    let response = await dispatch(deleteCity(event.target.value));

    await dispatch(getAllCities());
  };

  return (
    <div className={styles.divScroll}>
      <div className={styles.tabla}>
        <label>CP</label>
        <label>Localidad</label>
        <label>Provincia</label>
      </div>
      {allCities.length !== 0 &&
        allCities.map((element) => {
          return (
            <div key={element.CP} className={styles.tabla}>
              <label>{element.CP}</label>
              <label>{element.localidad}</label>
              <label>{element.provincia}</label>
              <button
                key={"delete" + element.CP}
                title="Delete"
                value={element._id}
                onClick={(e) => handleDeleteCity(e)}
              >
                XXXX
              </button>
              <button
                title="Edit"
                key={"edit" + element.CP}
                value={element.CP}
                onClick={(e) => handleEditCity(e)}
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ABMCiudadesList;
