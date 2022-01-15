import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
    upDownAffiliateAct,
  getAllAffiliates,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateAffiliate.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpDownAffiliate = ({ setShowModalUpDown, showModalUpDown }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [upDownAffiliateData, setupDowndateAffiliateData] = useState({
    DNI: "",
    alta: "",
    activo: "",
    titularGF: "",
    grupoFamiliar: "",
    codeGF: "",
  });

  useEffect(() => {
    setupDowndateAffiliateData({
      DNI: updateData.DNI,
      alta: updateData.alta,
      activo: updateData.activo,
      titularGF: updateData.titularGF,
      grupoFamiliar: updateData.grupoFamiliar,
      codeGF: updateData.codeGF,
    });
  }, [updateData, dispatch]);

  const handleUpdateAffiliate = async (event) => {
    let updatedAffiliate = {
      ...upDownAffiliateData,
      [event.target.name]: event.target.value,
    };

    setupDowndateAffiliateData(updatedAffiliate);

    setErrors(functionErrors(updatedAffiliate));
  };

  const handleSubmitUpdateAffiliate = async (event) => {
    event.preventDefault();
    let response = await dispatch(upDownAffiliateAct(upDownAffiliateData));
    alert(response.success);
    setupDowndateAffiliateData({
      DNI: "",
      alta: "",
      activo: "",
      titularGF: "",
      grupoFamiliar: "",
      codeGF: "",
    });
    await dispatch(getAllAffiliates());
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpDown(false);
  };

  const handleClose = () => {
    setupDowndateAffiliateData({
      DNI: "",
      alta: "",
      activo: "",
      titularGF: "",
      grupoFamiliar: "",
      codeGF: "",
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpDown(false);
  };

  const showHideClassName = showModalUpDown ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Alta/Baja Afiliado</h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitUpdateAffiliate(e)}
            id="upDownAffiliate"
          >
            <div>
              <label>Nombre: {updateData.nombre}</label>
              <label>Apellido: {updateData.apellido}</label>
              <label>DNI: {updateData.DNI}</label>
              <label>Plan: {updateData.codePlan}</label>
              <label>Grupo familiar: {updateData.codeGF ? codeGF : "No"}</label>
              <label>Titular: {updateData.titularGF}</label>
            </div>

            <div>
              <label>Alta: </label>
              <select name="alta" onChange={(e) => handleUpdateAffiliate(e)}>
                <option value="">Seleccione:</option>
                <option
                  value={true}
                  selected={true === upDownAffiliateData.oldAlta}
                >
                  Si
                </option>
                <option
                  value={false}
                  selected={false === upDownAffiliateData.oldAlta}
                >
                  No
                </option>
              </select>
            </div>

            <div>
              <label>Activo: </label>
              <select name="activo" onChange={(e) => handleUpdateAffiliate(e)}>
                <option value="">Seleccione:</option>
                <option
                  value={true}
                  selected={true === upDownAffiliateData.oldActivo}
                >
                  Si
                </option>
                <option
                  value={false}
                  selected={false === upDownAffiliateData.oldActivo}
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
              form="upDownAffiliate"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="upDownAffiliate">
              Cargar
            </button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpDownAffiliate;