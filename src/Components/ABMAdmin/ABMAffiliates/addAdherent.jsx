import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../../actions/actionAMBAdmin";

import styles from "./addAffiliate.module.css";

import { enableBtn, disableBtn } from "../../../utils/ABMStyles";
import {
  functionErrorsBtn,
  validateAdherent,
} from "../../../utils/adminFormsControllers";

const AddAdherent = ({ handleAddAdherent, setShowModalAdherent }) => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({});

  const arrParentesco = [
    { display: "Hijo/a", value: "hijo" },
    { display: "Conyugue", value: "conyugue" },
    { display: "Familiar a cargo", value: "famCargo" },
  ];

  const inputAdherentStruct = {
    nombre: "",
    apellido: "",
    DNI: "",
    fechaNacimiento: "",
    telefono: "",
    correoElectronico: "",
    direccion: "",
    ciudadID: "",
    provinciaID: "",
    parentesco: "",
  };

  let [inputAdherent, setInputAdherent] = useState(inputAdherentStruct);

  const handleChangeProvince = (e) => {
    const newData = {
      ...inputAdherent,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInputAdherent(newData);
  };

  const handleSubmit = () => {
    const validateError = validateAdherent(inputAdherent);
    console.log(validateError, 'validate error')
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      setShowModalAdherent(false);
      handleAddAdherent(inputAdherent);
      setInputAdherent(inputAdherentStruct);
    }
  };

  const handleChange = (event) => {
    let newAdherent = {
      ...inputAdherent,
      [event.target.name]: event.target.value,
    };
    setInputAdherent(newAdherent);

    setErrors(functionErrorsBtn(newAdherent));

    newAdherent = {};
  };

  const handleClose = () => {
    setInputAdherent(inputAdherentStruct);
    setErrors(true);
    setShowModalAdherent(false);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Adherente
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 h-90% ">
          <form>
            <div className="flex">
              <div className="w-1/3">
                <label className="text-md text-gray-600">Nombre: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="text"
                  name="nombre"
                  autoComplete="off"
                  value={inputAdherent.nombre}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el nombre...."
                />
                {errores.nombre && (
                  <p className="absolute text-red-700">{errores.nombre}</p>
                )}
              </div>

              <div className="w-1/3">
                <label className="text-md text-gray-600">Apellido: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="text"
                  name="apellido"
                  autoComplete="off"
                  value={inputAdherent.apellido}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el apellido...."
                />
                {errores.apellido && (
                  <p className="absolute text-red-700">{errores.apellido}</p>
                )}
              </div>

              <div className="w-1/3">
                <label className="text-md text-gray-600">DNI: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="number"
                  name="DNI"
                  autoComplete="off"
                  value={inputAdherent.DNI}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el DNI...."
                />
                {errores.DNI && (
                  <p className="absolute text-red-700">{errores.DNI}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600">
                  Fecha de Nacimiento:{" "}
                </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="date"
                  name="fechaNacimiento"
                  autoComplete="off"
                  value={inputAdherent.fechaNacimiento}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese Fecha Nacimiento...."
                />
                {errores.fechaNacimiento && (
                  <p className="absolute text-red-700">
                    {errores.fechaNacimiento}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label className="text-md text-gray-600">Teléfono: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  name="telefono"
                  autoComplete="off"
                  value={inputAdherent.telefono}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el Teléfono...."
                />
                {errores.telefono && (
                  <p className="absolute text-red-700">{errores.telefono}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600">E-Mail: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="email"
                  name="correoElectronico"
                  autoComplete="off"
                  value={inputAdherent.correoElectronico}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el E-Mail...."
                />
                {errores.correoElectronico && (
                  <p className="absolute text-red-700">
                    {errores.correoElectronico}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label className="text-md text-gray-600">Domicilio: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="test"
                  name="direccion"
                  autoComplete="off"
                  value={inputAdherent.direccion}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el domocilio...."
                />
                {errores.direccion && (
                  <p className="absolute text-red-700">{errores.direccion}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600" htmlFor="provincia">
                  Provincia{" "}
                </label>
                <select
                  value={inputAdherent.provinciaID}
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
                  Localidad{" "}
                </label>
                <select
                  onChange={(e) => handleChange(e)}
                  value={inputAdherent.ciudadID}
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
            <div className="flex justify-between items-end  mt-4">
              <div className="flex w-1/2 items-center">
                <label className="text-md text-gray-600">Parentesco </label>
                <select
                  className="border-2 p-1 border-gray-300 mb-3 rounded-md"
                  id="parentesco"
                  name="parentesco"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione</option>
                  {arrParentesco.map((element) => {
                    return (
                      <option
                        value={element.value}
                        id={element.value}
                        key={element.value}
                      >
                        {element.display}
                      </option>
                    );
                  })}
                </select>
                {errores.parentesco && (
                  <p className="absolute text-red-700">{errores.parentesco}</p>
                )}
              </div>
              <div className=" flex justify-around  w-1/2">
                <button
                  key="submitFormButton"
                  className={errors ? disableBtn : enableBtn}
                  disabled={errors}
                  onClick={handleSubmit}
                >
                  Guardar
                </button>

                <button
                  className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleClose()}
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

export default AddAdherent;
