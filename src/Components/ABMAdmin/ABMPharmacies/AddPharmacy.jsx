import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPharmacy, getAllPharmacies } from "../../../actions/actionAMBAdmin";

import styles from "./addPharmacy.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddPharmacy = ({ showModalAdd, setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allCities } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(true);

  let [inputPharmacy, setInputPharmacy] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    mail: "",
    numHabilitacion: 0,
    ciudadCP: 0,
  });

  const showHideClassName = showModalAdd ? "displayblock" : "displaynone";

  const handleChange = (event) => {
    let newPharmacy = {
      ...inputPharmacy,
      [event.target.name]: event.target.value,
    };
    setInputPharmacy(newPharmacy);

    setErrors(functionErrors(newPharmacy));

    newPharmacy = {};
  };

  const handleSubmitPharmacy = async (event) => {
    event.preventDefault();
    let response = await dispatch(addPharmacy(inputPharmacy));
    alert(response.success);
    setInputPharmacy({
      nombre: "",
      direccion: "",
      telefono: "",
      mail: "",
      numHabilitacion: 0,
      ciudadCP: 0,
    });
    await dispatch(getAllPharmacies());
    setErrors(true);
    setShowModalAdd(false);
  };

  const handleClose = () => {
    setInputPharmacy({
      nombre: "",
      direccion: "",
      telefono: "",
      mail: "",
      numHabilitacion: 0,
      ciudadCP: 0,
    });
    setErrors(true);
    setShowModalAdd(false);
  };

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
      <div className="flex justify-center">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Nueva Farmacia
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 ">
          <form onSubmit={(e) => handleSubmitPharmacy(e)} id="addPharmacy">
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
            <div className=" w-1/2">
              <label className="text-md text-gray-600">Nro. Habilitación: </label>
              <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                type="number"
                name="numHabilitacion"
                autoComplete="off"
                value={inputPharmacy.numHabilitacion}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Nro. Habilit....."
              />
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
            </div>
<div className="flex">
            <div>
              <label className="text-md text-gray-600">Teléfono: </label>
              <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                type="text"
                name="telefono"
                autoComplete="off"
                value={inputPharmacy.telefono}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>
            <div><label className="text-md text-gray-600">Ciudad: </label>
            <select
            className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
              id="ciudad"
              name="ciudadCP"
              onChange={(e) => handleChange(e)}
              defaultValue={0}
            >
              <option value="">Seleccione la ciudad</option>
              {allCities.map((element) => {
                return (
                  <option value={element.CP} id={element.CP}>
                    {element.localidad}
                  </option>
                );
              })}
            </select>
            </div>
            </div>
            <div>
              <label className="text-md text-gray-600">E-mail: </label>
              <input
              className="h-2 p-4 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="mail"
                autoComplete="off"
                value={inputPharmacy.mail}
                onChange={(e) => handleChange(e)}
                placeholder="Ingrese el E-mail...."
              />
            </div>

            
 
          <div className="flex justify-between">
          <div className="flex w-1/3 items-center">
                <label className="text-md text-gray-600">Activo: </label>
                <select 
                
                  id="activa"
                  name="activa"
                  onChange={(e) => handleChange(e)}
                  defaultValue={0}
                >
                  <option value="false">No</option>
                  <option value="true">Si</option>
                </select>
              </div>
          <div className="flex w-2/3 justify-around">
                {errors ? (
                  <button
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit"
                    key="submitFormButton"
                    form="addSpeciality"
                    disabled={errors}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    type="submit"
                    key="submitFormButton"
                    form="addSpeciality"
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                )}
                <button
                  onClick={() => handleClose()}
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
