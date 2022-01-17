import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateProfessional,
  getAllProfessionals,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateProfessional.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdateProfessional = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updateProfessionalData, setUpdateProfessionalData] = useState({
    _id: "",
    telefono: 0,
    mail: "",
    ciudadID: "",
    codeProv: "",
    activo: false,
  });

  useEffect(() => {
    setUpdateProfessionalData({
      _id: updateData._id,
      telefono: updateData.telefono,
      mail: updateData.mail,
      ciudadID: "61e0c45d534c0844d9debf93",
      codeProv: "111",
      activo: updateData.activo,
    });
  }, [updateData, dispatch]);

  const handleUpdateProfessional = async (event) => {
    let updatedProfessional = {
      ...updateProfessionalData,
      [event.target.name]: event.target.value,
    };

    setUpdateProfessionalData(updatedProfessional);

    setErrors(functionErrors(updatedProfessional));
  };

  const handleSubmitUpdateProfessional = async (event) => {
    event.preventDefault();
    let response = await dispatch(updateProfessional(updateProfessionalData));
    alert(response.success);
    setUpdateProfessionalData({
      _id: "",
      telefono: 0,
      mail: "",
      ciudadID: "",
      codeProv: "",
      activo: false,
    });
    await dispatch(getAllProfessionals());
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdateProfessionalData({
      _id: "",
      telefono: 0,
      mail: "",
      ciudadID: "",
      codeProv: "",
      activo: false,
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const showHideClassName = showModalUpdate ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Modificar Profesional</h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitUpdateProfessional(e)}
            id="updateProfessional"
          >
            <div>
              <label>Teléfono: </label>
              <input
                type="number"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                name="telefono"
                autoComplete="off"
                value={updateProfessionalData.telefono}
                onChange={(e) => handleUpdateProfessional(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label>E-Mail: </label>
              <input
                type="email"
                name="mail"
                autoComplete="off"
                value={updateProfessionalData.mail}
                onChange={(e) => handleUpdateProfessional(e)}
                placeholder="Ingrese el E-Mail...."
              />
            </div>

            {/* Colocar los selectores de ciudades y sacar el hardcodeo */}

            <div>
              <label>Activo: </label>
              <select
                name="activo"
                onChange={(e) => handleUpdateProfessional(e)}
              >
                <option value="">Seleccione:</option>
                <option
                  value={true}
                  selected={true === updateProfessionalData.activo}
                >
                  Si
                </option>
                <option
                  value={false}
                  selected={false === updateProfessionalData.activo}
                >
                  No
                </option>
              </select>
            </div>
          </form>

          {errors ? (
            <button
              type="submit"
              key="submitFormButton"
              form="updateProfessional"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button
              type="submit"
              key="submitFormButton"
              form="updateProfessional"
            >
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfessional;
