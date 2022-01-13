import React from "react";

import { useDispatch } from "react-redux";

import {
  getPharmacyData,
  deletePharmacy,
  getAllCities,
  getAllPharmacies,
} from "../../../actions/actionAMBAdmin";

import styles from "./ABMPharmaciesList.module.css";

const ABMPharmaciesList = ({ allPharmacies, setShowModalUpdate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  const { allCities } = useSelector((state) => state.ABMAdmin);

  const handleEditPharmacy = async (event) => {
    await dispatch(getPharmacyData(event.target.value));
    setShowModalUpdate(true);
  };

  const handleDeletePharmacy = async (event) => {
    let response = await dispatch(deletePharmacy(event.target.value));

    await dispatch(getAllPharmacies());
  };

  return (
    <div className={styles.divScroll}>
      <div className={styles.tabla}>
        <label>Nombre</label>
        <label>Direccion</label>
        <label>Ciudad</label>
        <label>Provincia</label>
        <label>Activa</label>
      </div>
      {allPharmacies.length !== 0 &&
        allPharmacies.map((element) => {
          return (
            <div key={element.nombre} className={styles.tabla}>
              <label>{element.direccion}</label>
              <label>
                {
                  allCities.filter((city) => {
                    city.CP === element.ciudadCP;
                  }).nombre
                }
              </label>
              <label>
                {
                  allCities.filter((city) => {
                    city.CP === element.ciudadCP;
                  }).provincia
                }
              </label>
              <label>{element.activa ? "Si" : "No"}</label>
              <button
                key={"delete" + element._id}
                title="Delete"
                value={element._id}
                onClick={(e) => handleDeletePharmacy(e)}
              >
                XXXX
              </button>
              <button
                title="Edit"
                key={"edit" + element._id}
                value={element.CP}
                onClick={(e) => handleEditPharmacy(e)}
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ABMPharmaciesList;
