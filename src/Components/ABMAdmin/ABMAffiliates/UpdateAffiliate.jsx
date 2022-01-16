import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateAffiliateAct,
  getAllAffiliates,
  resetDataUpdate,
  getAllProvinces,
  getAllCities,
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
  const { updateData, allPlans, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  const [errors, setErrors] = useState(false);

  let [updateAffiliateData, setUpdateAffiliateData] = useState({
    id: "",
    telefono: 0,
    correoElectronico: "",
    direccion: "",
    ciudadID: "",
    provinciaID: "",
    planID: "",
    alta: "",
    activo: "",
  });

  useEffect(() => {
    setUpdateAffiliateData({
      id: updateData._id,
      telefono: updateData.telefono,
      correoElectronico: updateData.correoElectronico,
      direccion: updateData.direccion,
      ciudadID: updateData.ciudadID._id,
      provinciaID: updateData.provinciaID._id,
      planID: updateData.planID._id,
      alta: updateData.alta,
      activo: updateData.activo,
    });
    dispatch(getAllProvinces());
    dispatch(getAllCities(updateData.provinciaID._id));
  }, [updateData]);

  const handleUpdateAffiliate = async (event) => {
    let updatedAffiliate = {
      ...updateAffiliateData,
      [event.target.name]: event.target.value,
    };

    setUpdateAffiliateData(updatedAffiliate);

    setErrors(functionErrors(updatedAffiliate));
  };

  const handleChangeProvince = (e) => {
    const newData = {
      ...updateAffiliateData,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setUpdateAffiliateData(newData);
  };

  const handleSubmitUpdateAffiliate = async (event) => {
    event.preventDefault();
    let response = await dispatch(updateAffiliateAct(updateAffiliateData));
    alert(response.success);
    setUpdateAffiliateData({
      id: "",
      telefono: 0,
      correoElectronico: "",
      direccion: "",
      ciudadID: "",
      provinciaID: "",
      planID: "",
      alta: "",
      activo: "",
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
      direccion: "",
      ciudadID: "",
      provinciaID: "",
      planID: "",
      alta: "",
      activo: "",
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  return (
    <div>
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

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="provincia">
                Provincia{" "}
              </label>
              <select
                value={updateAffiliateData.provinciaID}
                onChange={handleChangeProvince}
                name="provinciaID"
                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                required
              >
                {provinces &&
                  provinces.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.nombre}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="localidad">
                Localidad{" "}
              </label>
              <select
                onChange={(e) => handleUpdateAffiliate(e)}
                value={updateAffiliateData.ciudadID}
                name="ciudadID"
                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                required
              >
                {cities &&
                  cities.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.localidad}
                    </option>
                  ))}
              </select>
            </div>

            <select
              id="planes"
              name="planID"
              onChange={(e) => handleUpdateAffiliate(e)}
              value={updateAffiliateData.planID}
            >
              <option value="">Seleccione su Plan</option>
              {allPlans &&
                allPlans.map((element) => {
                  return (
                    <option value={element._id} id={element._id}>
                      {element.name}
                    </option>
                  );
                })}
            </select>
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
