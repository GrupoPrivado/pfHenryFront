import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../../actions/actionAMBAdmin";

import styles from "./addAffiliate.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const AddAdherent = ({ handleAddAdherent, setShowModalAdherent }) => {
  const dispatch = useDispatch();

  const { cities, provinces } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(true);

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
    alert("Me cree");
    setShowModalAdherent(false);
    handleAddAdherent(inputAdherent);
    setInputAdherent(inputAdherentStruct);
  };

  const handleChange = (event) => {
    let newAdherent = {
      ...inputAdherent,
      [event.target.name]: event.target.value,
    };
    setInputAdherent(newAdherent);

    setErrors(functionErrors(newAdherent));

    newAdherent = {};
  };

  const handleClose = () => {
    setInputAdherent(inputAdherentStruct);
    setErrors(true);
    setShowModalAdherent(false);
  };
  const showHideClassName = setShowModalAdherent
    ? "displayblock"
    : "displaynone";
  return (
    <div className={styles[showHideClassName]}>
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
              </div>
            </div>
            <div className="flex justify-between items-end  mt-4">
              <div className="flex w-1/2 items-center">
              <label className="text-md text-gray-600">Parentesco </label>
                <select

className="border-2 p-1 border-gray-300 mb-3 rounded-md"id="parentesco"
                  name="parentesco"
                  onChange={(e) => handleChange(e)}
                  defaultValue={0}
                >
                  <option value="">Seleccione</option>
                  {arrParentesco.map((element) => {
                    return (
                      <option value={element.value} id={element.value} key={element.value}>
                        {element.display}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className=" flex justify-around  w-1/2">
              {errors ? (
                <button
                  type="submit"
                  key="submitFormButton"
                  form="addAdhernt"
                  disabled={errors}
                  className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar
                </button>
              ) : (
                <button className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" key="submitFormButton" onClick={handleSubmit}>
                  Guardar
                </button>
              )}
              <button className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => handleClose()}>Cerrar</button>
            </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddAdherent;
