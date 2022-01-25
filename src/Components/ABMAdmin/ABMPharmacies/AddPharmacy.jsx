import React, { useEffect } from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addPharmacy,
  getAllCities,
  getAllProvinces,
} from "../../../actions/actionAMBAdmin";

import styles from "./addPharmacy.module.css";

import { enableBtn, disableBtn } from "../../../utils/ABMStyles";

import {
  functionErrorsBtn,
  validatePharmacy,
} from "../../../utils/adminFormsControllers";

const AddPharmacy = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const inputPharmacyStruct = {
    nombre: "",
    direccion: "",
    telefono: "",
    mail: "",
    numHabilitacion: "",
    ciudadID: "",
    provinciaID: "",
    activo: "",
  };

  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({});

  const [inputPharmacy, setInputPharmacy] = useState(inputPharmacyStruct);

  const handleChange = (event) => {
    let newPharmacy = {
      ...inputPharmacy,
      [event.target.name]: event.target.value,
    };
    setInputPharmacy(newPharmacy);

    setErrors(functionErrorsBtn(newPharmacy));

    newPharmacy = {};
  };

  const handleChangeProvince = (e) => {
    const newData = {
      ...inputPharmacy,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInputPharmacy(newData);
  };

  const handleSubmitPharmacy = (event) => {
    event.preventDefault();

    const validateError = validatePharmacy(inputPharmacy);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(addPharmacy(inputPharmacy));
      //setInputPharmacy(inputPharmacyStruct);
      //setErrors(true);
      setShowModalAdd(false);
    }
  };

  const handleClose = () => {
    setShowModalAdd(false);
    setInputPharmacy(inputPharmacyStruct);
    setErrors(true);
  };

  return (
    <div className={styles.modal}>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Nueva Farmacia
          </h5>
        </div>

        <div className="modal-content py-4 text-left px-6 h-90% ">
          <form>
            <div className="flex">
              <div className=" w-1/2">
                <label className="text-md text-gray-600">Nombre: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="text"
                  name="nombre"
                  autoComplete="off"
                  value={inputPharmacy.nombre}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el Nombre...."
                />
              </div>
              {errores.nombre && (
                <p className="absolute text-red-700">{errores.nombre}</p>
              )}

              <div className=" w-1/2">
                <label className="text-md text-gray-600">
                  Nro. Habilitación:{" "}
                </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="number"
                  name="numHabilitacion"
                  autoComplete="off"
                  value={inputPharmacy.numHabilitacion}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el Nro. Habilit....."
                />
                {errores.numHabilitacion && (
                  <p className="absolute text-red-700">
                    {errores.numHabilitacion}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-md text-gray-600">Dirección: </label>
              <input
                className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                type="text"
                name="direccion"
                autoComplete="off"
                value={inputPharmacy.direccion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese la Dirección...."
              />
              {errores.direccion && (
                <p className="absolute text-red-700">{errores.direccion}</p>
              )}
            </div>

            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600">Teléfono: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="number"
                  name="telefono"
                  autoComplete="off"
                  value={inputPharmacy.telefono}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el Teléfono...."
                />
                {errores.telefono && (
                  <p className="absolute text-red-700">{errores.telefono}</p>
                )}
              </div>
              <div className="w-1/2">
                <label className="text-md text-gray-600">E-mail: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-5 rounded-md"
                  type="mail"
                  name="mail"
                  autoComplete="off"
                  value={inputPharmacy.mail}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el E-mail...."
                />
                {errores.mail && (
                  <p className="absolute text-red-700">{errores.mail}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600" htmlFor="provincia">
                  Provincia:{" "}
                </label>
                <select
                  value={inputPharmacy.provinciaID}
                  onChange={handleChangeProvince}
                  name="provinciaID"
                  className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                  required
                >
                  <option>Seleccione Provincia</option>
                  {provinces &&
                    provinces.map((p) => (
                      <option key={p._id} value={p._id}>
                        {p.nombre}
                      </option>
                    ))}
                </select>
                {errores.provinciaID && (
                  <p className="absolute text-red-700">{errores.provinciaID}</p>
                )}
              </div>

              <div className="w-1/2">
                <label className="text-md text-gray-600" htmlFor="localidad">
                  Localidad:{" "}
                </label>
                <select
                  onChange={(e) => handleChange(e)}
                  value={inputPharmacy.ciudadID}
                  name="ciudadID"
                  className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                  required
                >
                  <option>Seleccione Localidad</option>
                  {cities &&
                    cities.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.localidad}
                      </option>
                    ))}
                </select>
                {errores.ciudadID && (
                  <p className="absolute text-red-700">{errores.ciudadID}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex w-1/3 items-center">
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  className="border-2 p-1 border-gray-300 mb-3 rounded-md"
                  id="activo"
                  name="activo"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione</option>
                  <option value="false">No</option>
                  <option value="true">Si</option>
                </select>
                {errores.activo && (
                  <p className="absolute text-red-700">{errores.activo}</p>
                )}
              </div>
              <div className="flex w-2/3 justify-around">
                <button
                  key="submitFormButton"
                  name="guardar"
                  onClick={handleSubmitPharmacy}
                  className={errors ? disableBtn : enableBtn}
                  disabled={errors}
                >
                  Guardar
                </button>
                <button
                  key="closeBtn"
                  type="button"
                  name="closeBtn"
                  onClick={handleClose}
                  className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddPharmacy;
