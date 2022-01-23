import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addAffiliate,
  getAllAffiliates,
  getAllProvinces,
  getAllCities,
} from "../../../actions/actionAMBAdmin";
import AddAdherent from "./addAdherent";

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

const AddAffiliate = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allPlans, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  let [showModalAdherent, setShowModalAdherent] = useState(false);

  const [errors, setErrors] = useState(true);

  const inputAffiliateStruct = {
    nombre: "",
    apellido: "",
    DNI: "",
    fechaNacimiento: "",
    telefono: "",
    correoElectronico: "",
    ciudadID: "",
    provinciaID: "",
    direccion: "",
    planID: "",
    password: "",
    alta: "",
    activo: "",
    parentesco: "titular",
  };

  const [inputAffiliate, setInputAffiliate] = useState(inputAffiliateStruct);

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  let [inputAdherent, setInputAdherent] = useState([]);

  const handleChange = (event) => {
    let newAffiliate = {
      ...inputAffiliate,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === "DNI") {
      newAffiliate = { ...newAffiliate, password: event.target.value };
    }
    setInputAffiliate(newAffiliate);

    setErrors(functionErrors(newAffiliate));

    newAffiliate = {};
  };

  const handleAddAdherent = (data) => {
    setInputAdherent([...inputAdherent, data]);
  };

  const handleChangeProvince = (e) => {
    const newData = {
      ...inputAffiliate,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInputAffiliate(newData);
  };

  const deleteAdherent = (event) => {
    const adherentArray = inputAdherent.filter(
      (element) => element.DNI !== event.target.name
    );
    if (adherentArray) setInputAdherent(adherentArray);
    else setInputAdherent([]);
  };

  const handleSubmitAffiliate = async (event) => {
    event.preventDefault();
    const outputAffiliate = [inputAffiliate, ...inputAdherent];

    let response = await dispatch(addAffiliate(outputAffiliate));
    alert(response.success);
    setInputAffiliate(inputAffiliateStruct);
    setShowModalAdd(false);
    dispatch(getAllAffiliates());
    setErrors(true);
  };

  const handleClose = () => {
    setInputAffiliate(inputAffiliateStruct);
    setShowModalAdd(false);
    setErrors(true);
  };
  const showHideClassName = setShowModalAdd ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Nuevo Afiliado
          </h5>
        </div>
        <div className="modal-content pb-4 text-left px-6 h-90% ">
          <form>
            <div className="flex">
              <div className="w-1/3">
                <label className="text-md text-gray-600">Nombre: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="text"
                  name="nombre"
                  autoComplete="off"
                  value={inputAffiliate.nombre}
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
                  value={inputAffiliate.apellido}
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
                  value={inputAffiliate.DNI}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el DNI...."
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600">
                  Fehca de Nacimiento:{" "}
                </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="date"
                  name="fechaNacimiento"
                  autoComplete="off"
                  value={inputAffiliate.fechaNacimiento}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese Fecha Nacimiento...."
                />
              </div>

              <div className="w-1/2">
                <label className="text-md text-gray-600">Teléfono: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="number"
                  name="telefono"
                  autoComplete="off"
                  value={inputAffiliate.telefono}
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
                  value={inputAffiliate.correoElectronico}
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
                  value={inputAffiliate.direccion}
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
                  value={inputAffiliate.provinciaID}
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
                  value={inputAffiliate.ciudadID}
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

            <div className="flex  justify-between">
              <div>
                <label className="text-md text-gray-600">Plan: </label>
                <select
                  className="border-2 p-1 border-gray-300 mb-3 rounded-md"
                  id="planes"
                  name="planID"
                  onChange={(e) => handleChange(e)}
                  value={inputAffiliate.planID}
                >
                  <option value="">Seleccione</option>
                  {allPlans &&
                    allPlans.map((element) => {
                      return (
                        <option value={element._id} id={element._id} key={element._id}>
                          {element.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div>
                <label className="text-md text-gray-600">Alta: </label>
                <select
                  className="border-2 p-1 border-gray-300 mb-3 rounded-md"
                  name="alta"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione:</option>
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </select>
              </div>

              <div>
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  className="border-2 p-1 border-gray-300 mb-3 rounded-md"
                  name="activo"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione:</option>
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </form>
          <div className="flex ">
            <div className="w-4/6 flex">
              <div className="w-1/3">
                <button
                  className="group relative   h-full flex items-center justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  onClick={() => setShowModalAdherent(true)}
                >
                  Agregar Adherente
                </button>
              </div>
              <div className=" w-2/3 border  flex  border-gray-300 m rounded-md">
                {inputAdherent &&
                  inputAdherent.map((element) => {
                    return (
                      <div>
                        <label
                          className="text-sm text-gray-600"
                          id={"label" + element.nombre}
                        >
                          {element.nombre + " " + element.apellido}
                        </label>
                        <button
                          className="text-red-600"
                          id={"delete" + element.nombre}
                          name={element.DNI}
                          onClick={(e) => deleteAdherent(e)}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className=" flex justify-between w-2/6">
              {errors ? (
                <button
                  className="group relative w-15 h-10 flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={errors}
                >
                  Guardar
                </button>
              ) : (
                <button
                  key="submitFormButton"
                  className="group relative w-15 h-10 flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSubmitAffiliate}
                >
                  Guardar
                </button>
              )}

              <button
                className="group relative w-15 h-10 flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleClose()}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModalAdherent && (
        <AddAdherent handleAddAdherent={handleAddAdherent} setShowModalAdherent={setShowModalAdherent} />
      )}
    </div>
  );
};

export default AddAffiliate;
