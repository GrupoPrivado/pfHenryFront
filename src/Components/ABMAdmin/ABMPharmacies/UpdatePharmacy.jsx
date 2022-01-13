import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateCity,
  getAllCities,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateCity.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdatePharmacy = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();

  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updatePharmacyData, setUpdatePharmacyData] = useState({
    id: "",
    direccion: "",
    telefono: "",
    mail: "",
  });

  useEffect(() => {
    setUpdatePharmacyData({
      id: updateData._id,
      direccion:  updateData.direccion,
      telefono:  updateData._id.telefono,
      mail:  updateData.mail,
    });
  }, [updateData, dispatch]);

  const handleUpdateCity = async (event) => {
    let updatedPharmacy = {
      ...updatePharmacyData,
      [event.target.name]: event.target.value,
    };
    setUpdatePharmacyData(updatedPharmacy);

    setErrors(functionErrors(updatedPharmacy));
  };

  const handleSubmitUpdateCity = async (event) => {
    event.preventDefault();
    let response = await dispatch(UpdatePharmacy(updatePharmacyData));
    alert(response.success);
    setUpdatePharmacyData({
      id: "",
      direccion: "",
      telefono: "",
      mail: "",
    });
    await dispatch(getAllPharmacies());
    dispatch(resetDataUpdate());

    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdatePharmacyData({
      id: "",
      direccion: "",
      telefono: "",
      mail: "",
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const showHideClassName = showModalUpdate ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Modificar la Farmacia</h5>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmitUpdateCity(e)} id="updatePharmacy">
            <div>
              <label>Dirección: </label>
              <input
                  type="text"
                  name="direccion"
                autoComplete="off"
                value={updatePharmacyData.direccion}
                onChange={(e) => handleUpdateCity(e)}
                placeholder="Ingrese la Dirección...."
              />
            </div>

            <div>
              <label>Teléfono: </label>
              <input
                type="text"
                name="telefono"
                autoComplete="off"
                value={updatePharmacyData.telefono}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label>E-mail: </label>
              <input
                type="text"
                name="mail"
                autoComplete="off"
                value={updatePharmacyData.mail}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el E-mail...."
              />
            </div>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="updatePharmacy"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="updatePharmacy">
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdatePharmacy;
