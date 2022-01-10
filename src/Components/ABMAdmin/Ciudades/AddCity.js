import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCity, getAllCities } from "../../../actions/actionAMBReducer";

import styles from "./addCityDevice.module.css"

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  console.log('arrayKeys', arrayKeys)
  console.log('arrayData', arrayData)
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddCity = ({ showModalAdd, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(true);

  let [inputCity, setInputCity] = useState({
    CP: "",
    localidad: "",
    provincia: "",
  });

  const showHideClassName = showModalAdd ? "displayblock" : "displaynone";

  const handleChange = (event) => {
    let newCity = {
      ...inputCity,
      [event.target.name]: event.target.value,
    };
    setInputCity(newCity);

    setErrors(functionErrors(newCity));

    newCity = {};
  };

  const handleSubmitCity = async (event) => {
    event.preventDefault();
    let response = await dispatch(addCity(inputCity));
    alert(response.success);
    setInputCity({
      CP: "",
      localidad: "",
      provincia: "",
    });
    await dispatch(getAllCities())
    setErrors(true);
    setShowModalAdd(false);
  };

  const handleClose = () => {
    setInputCity({
      CP: "",
      localidad: "",
      provincia: "",
    });
    setErrors(true);
    setShowModalAdd(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Agregar Nueva Ciudad</h5>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmitCity(e)} id="addCity">
            <div>
              <label>CP: </label>
              <input
                type="text"
                name="CP"
                autoComplete="off"
                value={inputCity.CP}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Cod. Post...."
              />
            </div>

            <div>
              <label>Localidad: </label>
              <input
                type="text"
                name="localidad"
                autoComplete="off"
                value={inputCity.localidad}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Localidad...."
              />
            </div>

            <div>
              <label>Provincia: </label>
              <input
                type="text"
                name="provincia"
                autoComplete="off"
                value={inputCity.provincia}
                onChange={(e) => handleChange(e)}
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
            <button type="submit" key="submitFormButton" form="addCity">
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default AddCity;
