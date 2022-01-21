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

  const updateProfessionalDataStruct = {
    _id: "",
    telefono: "",
    mail: "",
    ciudadID: "",
    provinciaID: "",
  };

  const [updateProfessionalData, setUpdateProfessionalData] = useState(
    updateProfessionalDataStruct
  );

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
    setUpdateProfessionalData(updateProfessionalDataStruct);
    setShowModalUpdate(false);
    dispatch(getAllProfessionals());
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  const handleClose = () => {
    setUpdateProfessionalData(updateProfessionalDataStruct);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
      <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Modificar Profesional
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 h-90% ">
          <form>
            <div>
              <label className="text-md text-gray-600">Teléfono: </label>
              <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                type="number"
                name="telefono"
                autoComplete="off"
                value={updateProfessionalData.telefono}
                onChange={(e) => handleUpdateProfessional(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label className="text-md text-gray-600">E-Mail: </label>
              <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                type="email"
                name="mail"
                autoComplete="off"
                value={updateProfessionalData.mail}
                onChange={(e) => handleUpdateProfessional(e)}
                placeholder="Ingrese el E-Mail...."
              />
            </div>

            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-md text-gray-600" htmlFor="localidad">
                Localidad{" "}
              </label>
              <select
                onChange={handleUpdateProfessional}
                value={updateProfessionalData.ciudadID}
                name="ciudadID"
                className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
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

            <div >
              <label className="text-md text-gray-600" htmlFor="provincia">
                Provincia{" "}
              </label>
              <select
                value={updateProfessionalData.provinciaID}
                onChange={handleChangeProvince}
                name="provinciaID"
                className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md uppercase"
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
          <div className="flex w-full justify-around">
          {errors ? (
            <button  className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"disabled={errors} >
             Guardar
            </button>
          ) : (
            <button className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleSubmitUpdateProfessional}>Guardar</button>
          )}
          <button  className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => handleClose()}>Cerrar</button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfessional;
