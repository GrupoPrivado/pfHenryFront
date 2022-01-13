import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateAffiliateAct,
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

const UpDownAffiliate = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [upDownAffiliateData, setupDowndateAffiliateData] = useState({
    id: "",
    nombre: 0,
    apellido: "",
    DNI: 0,
    codePlan: "",
    alta: "",
    activo: "",
    titularGF: "",
    codeGF: "",
    oldAlta: "",
    oldActivo: "",
  });

  useEffect(() => {
    setupDowndateAffiliateData({
      id: updateData._id,
      nombre: updateData.nombre,
      apellido: updateData.apellido,
      DNI: updateData.DNI,
      codePlan: updateData.codePlan,
      alta: updateData.alta,
      activo: updateData.activo,
      titularGF: updateData.titularGF,
      codeGF: updateData.codeGF,
      oldAlta: updateData.alta,
      oldActivo: updateData.activo,
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
    let response = await dispatch(updateAffiliateAct(upDownAffiliateData));
    alert(response.success);
    setupDowndateAffiliateData({
        id: "",
        nombre: 0,
        apellido: "",
        DNI: 0,
        codePlan: "",
        alta: "",
        activo: "",
        titularGF: "",
        codeGF: "",
        oldAlta: "",
        oldActivo: "",
    });
    await dispatch(getAllAffiliates());
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setupDowndateAffiliateData({
        id: "",
        nombre: 0,
        apellido: "",
        DNI: 0,
        codePlan: "",
        alta: "",
        activo: "",
        titularGF: "",
        codeGF: "",
        oldAlta: "",
        oldActivo: "",
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const showHideClassName = showModalUpdate ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <h5>Alta/Baja Afiliado</h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitUpdateAffiliate(e)}
            id="updateAffiliate"
          >
            <div>
              <label>Nombre: {}</label>
           
            </div>

            <div>
              <label>E-Mail: </label>
              <input
                type="email"
                name="correoElectronico"
                autoComplete="off"
                value={updateAffiliateData.correoElectronico}
                onChange={(e) => handleUpdateAffiliate(e)}
                placeholder="Ingrese el E-Mail...."
              />
            </div>

            <div>
              <label>Domicilio: </label>
              <input
                type="test"
                name="direccion"
                autoComplete="off"
                value={updateAffiliateData.direccion}
                onChange={(e) => handleUpdateAffiliate(e)}
                placeholder="Ingrese el domocilio...."
              />
            </div>

            <div>
              <label>Localidad: </label>
              <input
                type="text"
                name="localidad"
                autoComplete="off"
                value={updateAffiliateData.localidad}
                onChange={(e) => handleUpdateAffiliate(e)}
                placeholder="Ingrese la Localidad...."
              />
            </div>

            <div>
              <label>C.P.: </label>
              <input
                type="number"
                name="ciudadCP"
                autoComplete="off"
                value={updateAffiliateData.ciudadCP}
                onChange={(e) => handleUpdateAffiliate(e)}
                placeholder="Ingrese el Cod. Postal...."
              />
            </div>

            <div>
              <label>Provincia: </label>
              <input
                type="text"
                name="provincia"
                autoComplete="off"
                value={updateAffiliateData.provincia}
                onChange={(e) => handleUpdateAffiliate(e)}
                placeholder="Ingrese la Provincia...."
              />
            </div>

            <select
              id="planes"
              name="odePlan"
              onChange={(e) => handleUpdateAffiliate(e)}
            >
              <option value="">Seleccione su Plan</option>
              {allPlans &&
                allPlans.map((element) => {
                  return (
                    <option
                      value={element.codePlan}
                      id={element._id}
                      selected={
                        element.codePlan === updateAffiliateData.oldCodePlan
                      }
                    >
                      {element.name}
                    </option>
                  );
                })}
            </select>

            <div>
              <label>Alta: </label>
              <select name="alta" onChange={(e) => handleUpdateAffiliate(e)}>
                <option value="">Seleccione:</option>
                <option
                  value={true}
                  selected={true === updateAffiliateData.oldAlta}
                >
                  Si
                </option>
                <option
                  value={false}
                  selected={false === updateAffiliateData.oldAlta}
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
                  selected={true === updateAffiliateData.oldActivo}
                >
                  Si
                </option>
                <option
                  value={false}
                  selected={false === updateAffiliateData.oldActivo}
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
              form="updateAffiliate"
              disabled={errors}
              className="disabledButton"
            >
              Cargar
            </button>
          ) : (
            <button type="submit" key="submitFormButton" form="updateAffiliate">
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
