import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { updateCity, getAllCities } from "../../../actions/actionAMBReducer";

import styles from "./UpdateCity.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  console.log("arrayKeys", arrayKeys);
  console.log("arrayData", arrayData);
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdateCity = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { cityData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updateCityData, setUpdateCityData] = useState({
    id:"",
    newCP: "",
    newLocalidad: "",
    newProvincia: "",
    oldCP: "",
    oldLocalidad: "",
    oldProvincia: "",
  });

  useEffect(() => {
    setUpdateCityData({
        id:cityData._id,
      newCP: cityData.CP,
      newLocalidad: cityData.localidad,
      newProvincia: cityData.provincia,
      oldCP: cityData.CP,
      oldLocalidad: cityData.localidad,
      oldProvincia: cityData.provincia,
    });
  }, [cityData, dispatch]);

  const handleUpdateDevice = async (event) => {
    let updatedCity = {
      ...updateCityData,
      [event.target.name]: event.target.value,
    };
    setUpdateCityData(updatedCity);

    setErrors(functionErrors(updatedCity));
  };

  const handleSubmitUpdateCity = async (event) => {
    event.preventDefault();
    let response = await dispatch(updateCity(updateCityData));
    alert(response.success);
    setUpdateCityData({
        id:"",
      newCP: "",
      newLocalidad: "",
      newProvincia: "",
      oldCP: "",
      oldLocalidad: "",
      oldProvincia: "",
    });
    await dispatch(getAllCities());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdateCityData({
        id:"",
      newCP: "",
      newLocalidad: "",
      newProvincia: "",
      oldCP: "",
      oldLocalidad: "",
      oldProvincia: "",
    });
    setErrors(true);
    setShowModalUpdate(false);
  };

  const showHideClassName = showModalUpdate ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Modificar Ciudad</h5>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmitUpdateCity(e)} id="updateCity">
            <div>
              <label>CP: </label>
              <input
                type="text"
                name="newCP"
                autoComplete="off"
                value={updateCityData.newCP}
                onChange={(e) => handleUpdateDevice(e)}
                placeholder="Ingrese el Cod. Post...."
              />
            </div>

            <div>
              <label>Localidad: </label>
              <input
                type="text"
                name="newLocalidad"
                autoComplete="off"
                value={updateCityData.newLocalidad}
                onChange={(e) => handleUpdateDevice(e)}
                placeholder="Ingrese la Localidad...."
              />
            </div>

            <div>
              <label>Provincia: </label>
              <input
                type="text"
                name="newProvincia"
                autoComplete="off"
                value={updateCityData.newProvincia}
                onChange={(e) => handleUpdateDevice(e)}
                placeholder="Ingrese la Provincia...."
              />
            </div>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="addCity"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="updateCity">
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdateCity;