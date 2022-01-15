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

const UpdateAffiliate = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData, allPlans } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updateAffiliateData, setUpdateAffiliateData] = useState({
    id: "",
    telefono: 0,
    correoElectronico: "",
    direccion: 0,
    localidad: "",
    ciudadCP: 0,
    provincia: "",
    codePlan: "",
    alta: "",
    activo: "",
    titularGF: "",
    codeGF: "",
    oldTelefono: 0,
    oldCorreoElectronico: "",
    oldDireccion: 0,
    oldLocalidad: "",
    oldCiudadCP: 0,
    oldProvincia: "",
    oldCodePlan: "",
    oldAlta: "",
    oldActivo: "",
  });

  useEffect(() => {
    setUpdateAffiliateData({
      id: updateData._id,
      telefono: updateData.telefono,
      correoElectronico: updateData.correoElectronico,
      direccion: updateData.direccion,
      localidad: updateData.localidad,
      ciudadCP: updateData.ciudadCP,
      provincia: updateData.provincia,
      codePlan: updateData.codePlan,
      alta: updateData.alta,
      activo: updateData.activo,
      titularGF: updateData.titularGF,
      codeGF: updateData.codeGF,
      oldTelefono: updateData.telefono,
      oldCorreoElectronico: updateData.correoElectronico,
      oldDireccion: updateData.direccion,
      oldLocalidad: updateData.localidad,
      oldCiudadCP: updateData.ciudadCP,
      oldProvincia: updateData.provincia,
      oldCodePlan: updateData.codePlan,
      oldAlta: updateData.alta,
      oldActivo: updateData.activo,
    });
  }, [updateData]);

  const handleUpdateAffiliate = async (event) => {
    let updatedAffiliate = {
      ...updateAffiliateData,
      [event.target.name]: event.target.value,
    };

    setUpdateAffiliateData(updatedAffiliate);

    setErrors(functionErrors(updatedAffiliate));
  };

  const handleSubmitUpdateAffiliate = async (event) => {
    event.preventDefault();
    let response = await dispatch(updateAffiliateAct(updateAffiliateData));
    alert(response.success);
    setUpdateAffiliateData({
      id: "",
      telefono: 0,
      correoElectronico: "",
      direccion: 0,
      localidad: "",
      ciudadCP: 0,
      provincia: "",
      codePlan: "",
      alta: "",
      activo: "",
      titularGF: "",
      codeGF: "",
      oldTelefono: 0,
      oldCorreoElectronico: "",
      oldDireccion: 0,
      oldLocalidad: "",
      oldCiudadCP: 0,
      oldProvincia: "",
      oldCodePlan: "",
      oldAlta: "",
      oldActivo: "",
    });
    await dispatch(getAllAffiliates());
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdateAffiliateData({
      id: "",
      telefono: 0,
      correoElectronico: "",
      direccion: 0,
      localidad: "",
      ciudadCP: 0,
      provincia: "",
      codePlan: "",
      alta: "",
      activo: "",
      titularGF: "",
      codeGF: "",
      oldTelefono: 0,
      oldCorreoElectronico: "",
      oldDireccion: 0,
      oldLocalidad: "",
      oldCiudadCP: 0,
      oldProvincia: "",
      oldCodePlan: "",
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
        <h5>Modificar Afiliado</h5>
        <div className={styles.container}>
          <form
            onSubmit={(e) => handleSubmitUpdateAffiliate(e)}
            id="updateAffiliate"
          >
            <div>
              <label>Teléfono: </label>
              <input
                type="number"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                name="telefono"
                autoComplete="off"
                value={updateAffiliateData.telefono}
                onChange={(e) => handleUpdateAffiliate(e)}
                placeholder="Ingrese el Teléfono...."
              />
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

export default UpdateAffiliate;
