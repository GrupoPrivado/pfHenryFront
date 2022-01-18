import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateProfessional,
  getAllProfessionals,
  resetDataUpdate,
  getAllProvinces,
  getAllCities,
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

const UpdateProfessional = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  const [errors, setErrors] = useState(false);

  let [updateProfessionalData, setUpdateProfessionalData] = useState({
    _id: "",
    telefono: "",
    mail: "",
    ciudadID: "",
    provinciaID: "",
  });

  useEffect(() => {
    setUpdateProfessionalData({
      _id: updateData._id,
      telefono: updateData.telefono,
      mail: updateData.mail,
      ciudadID: updateData.ciudadID._id,
      provinciaID: updateData.provinciaID._id,
    });
    dispatch(getAllProvinces());
    dispatch(getAllCities(updateData.provinciaID._id));
  }, [updateData, dispatch]);

  const handleUpdateProfessional = async (event) => {
    let updatedProfessional = {
      ...updateProfessionalData,
      [event.target.name]: event.target.value,
    };

    setUpdateProfessionalData(updatedProfessional);

    setErrors(functionErrors(updatedProfessional));
  };

  const handleChangeProvince = (e) => {
    const newData = {
      ...updateProfessionalData,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setUpdateProfessionalData(newData);
  };

  const handleSubmitUpdateProfessional = async (event) => {
    event.preventDefault();
    let response = await dispatch(updateProfessional(updateProfessionalData));
    alert(response.success);
    setUpdateProfessionalData({
      _id: "",
      telefono: "",
      mail: "",
      ciudadID: "",
      provinciaID: "",
    });
    setShowModalUpdate(false);
    dispatch(getAllProfessionals());
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  const handleClose = () => {
    setUpdateProfessionalData({
      _id: "",
      telefono: "",
      mail: "",
      ciudadID: "",
      provinciaID: "",
    });
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <h5>Modificar Profesional</h5>
        <div className={styles.container}>
          <form>
            <div>
              <label>Teléfono: </label>
              <input
                type="number"
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

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="localidad">
                Localidad{" "}
              </label>
              <select
                onChange={handleUpdateProfessional}
                value={updateProfessionalData.ciudadID}
                name="ciudadID"
                className="relative block w-full px-3 py-2 my-3 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                defaultValue={updateProfessionalData.ciudadID}
              >
                <option>Seleccione Localidad</option>
                {cities &&
                  cities.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.localidad}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-span-3 row-span-1 w-full -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-md text-gray-600" htmlFor="provincia">
                Provincia{" "}
              </label>
              <select
                value={updateProfessionalData.provinciaID}
                onChange={handleChangeProvince}
                name="provinciaID"
                className="relative block w-full px-1 py-1 my-2 text-sm font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 uppercase mb-3  "
                required
                defaultValue={updateProfessionalData.provinciaID}
              >
                <option>Seleccione Provincia</option>
                {provinces &&
                  provinces.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.nombre}
                    </option>
                  ))}
              </select>
            </div>

           
          </form>

          {errors ? (
            <button disabled={errors} className="disabledButton">
              Cargar
            </button>
          ) : (
            <button onClick={handleSubmitUpdateProfessional}>Cargar</button>
          )}
          <button onClick={() => handleClose()}>Cerrar</button>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfessional;
