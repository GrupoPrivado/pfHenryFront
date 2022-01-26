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

import { enableBtn, disableBtn, formError } from "../../../utils/ABMStyles";
import {
  functionErrorsBtn,
  validateAffiliate,
} from "../../../utils/adminFormsControllers";

const AddAffiliate = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allPlans, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  let [showModalAdherent, setShowModalAdherent] = useState(false);

  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({});

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

    setErrors(functionErrorsBtn(newAffiliate));

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

    const validateError = validateAffiliate(inputAffiliate);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(addAffiliate(outputAffiliate));
      dispatch(getAllAffiliates());
      setShowModalAdd(false);
    }
  };

  const handleClose = () => {
    setInputAffiliate(inputAffiliateStruct);
    setShowModalAdd(false);
    setErrors(true);
  };

  return (
    <div className={styles.modal}> 
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Nuevo Afiliado
          </h5>
        </div>
        <div className="modal-content pb-4 text-left px-6 h-90% ">
          <form>
            <div className="flex mb-4">
              <div className="w-1/3 ">
                <div className="flex items-center gap-1">
                  <label className="text-md text-gray-600">Nombre: </label>
                </div>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300  rounded-md "
                  type="text"
                  name="nombre"
                  autoComplete="off"
                  value={inputAffiliate.nombre}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el nombre...."
                />
                <span>
                  {errores.nombre && (
                    <p className={formError}>
                      {errores.nombre}
                    </p>
                  )}
                </span>
              </div>

              <div className="w-1/3 ">
                <div className="flex items-center gap-1">
                  <label className="text-md text-gray-600">Apellido: </label>
                  
                </div>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                  type="text"
                  name="apellido"
                  autoComplete="off"
                  value={inputAffiliate.apellido}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el apellido...."
                />
                <span>
                    {errores.apellido && (
                      <p className={formError}>
                        {errores.apellido}
                      </p>
                    )}
                  </span>
              </div>

              <div className="w-1/3 ">
                <div className="flex items-center gap-1">
                  <label className="text-md text-gray-600">DNI: </label>
                  
                </div>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                  type="number"
                  name="DNI"
                  autoComplete="off"
                  value={inputAffiliate.DNI}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el DNI...."
                />
                <span>
                    {errores.DNI && (
                      <p className={formError}>
                        {errores.DNI}
                      </p>
                    )}
                  </span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 ">
                <div className="flex items-center gap-1 ">
                  <label className="text-md text-gray-600">
                    Fecha de Nacimiento{" "}
                  </label>
                  
                </div>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 rounded-md"
                  type="date"
                  name="fechaNacimiento"
                  autoComplete="off"
                  value={inputAffiliate.fechaNacimiento}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese Fecha Nacimiento...."
                />
                <span>
                    {errores.fechaNacimiento && (
                      <p className={formError}>
                        {errores.fechaNacimiento}
                      </p>
                    )}
                  </span>
              </div>

              <div className="w-1/2">
                <div className="flex items-center gap-1 ">
                  <label className="text-md text-gray-600">Telefono: </label>
                  
                </div>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 rounded-md"
                  type="number"
                  name="telefono"
                  autoComplete="off"
                  value={inputAffiliate.telefono}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el Teléfono...."
                />
                <span>
                    {errores.telefono && (
                      <p className={formError}>
                        {errores.telefono}
                      </p>
                    )}
                  </span>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2">
                <div className="flex items-center gap-1">
                  <label className="text-md text-gray-600">Email: </label>
                  
                </div>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                  type="email"
                  name="correoElectronico"
                  autoComplete="off"
                  value={inputAffiliate.correoElectronico}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el E-Mail...."
                />
                <span>
                    {errores.correoElectronico && (
                      <p className={formError}>
                        {errores.correoElectronico}
                      </p>
                    )}
                  </span>
              </div>

              <div className="w-1/2">
                <div className="flex items-center gap-1">
                  <label className="text-md text-gray-600">Domicilio: </label>
                  
                </div>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                  type="test"
                  name="direccion"
                  autoComplete="off"
                  value={inputAffiliate.direccion}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el domocilio...."
                />
                <span>
                    {errores.direccion && (
                      <p className={formError}>
                        {errores.direccion}
                      </p>
                    )}
                  </span>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-1/2">
                <div className="flex items-center gap-1">
                  <label className="text-md text-gray-600">Provincia: </label>
                  
                </div>
                <select
                  value={inputAffiliate.provinciaID}
                  onChange={handleChangeProvince}
                  name="provinciaID"
                  className=" h-3/5 w-full  border-2 border-gray-300  rounded-md"
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
                <span>
                    {errores.provinciaID && (
                      <p className={formError}>
                        {errores.provinciaID}
                      </p>
                    )}
                  </span>
              </div>

              <div className="w-1/2">
                <div className="flex items-center gap-1">
                  <label className="text-md text-gray-600">Localidad: </label>
                  
                </div>
                <select
                  onChange={(e) => handleChange(e)}
                  value={inputAffiliate.ciudadID}
                  name="ciudadID"
                  className=" h-3/5 w-full  border-2 border-gray-300  rounded-md"
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
                <span>
                    {errores.ciudadID && (
                      <p className={formError}>
                        {errores.ciudadID}
                      </p>
                    )}
                  </span>
              </div>
            </div>

            <div className="flex  justify-between mb-5">
              <div>
                <label className="text-md text-gray-600">Plan: </label>
                <select
                  className="border-2 p-1 border-gray-300  rounded-md"
                  id="planes"
                  name="planID"
                  onChange={(e) => handleChange(e)}
                  value={inputAffiliate.planID}
                >
                  <option value="">Seleccione</option>
                  {allPlans &&
                    allPlans.map((element) => {
                      return (
                        <option
                          value={element._id}
                          id={element._id}
                          key={element._id}
                        >
                          {element.name}
                        </option>
                      );
                    })}
                  {errores.planID && (
                    <p className={formError}>{errores.planID}</p>
                  )}
                </select>
              </div>
              <div>
                <label className="text-md text-gray-600">Alta: </label>
                <select
                  className="border-2 p-1 border-gray-300  rounded-md"
                  name="alta"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione:</option>
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </select>
                {errores.alta && (
                  <p className={formError}>{errores.alta}</p>
                )}
              </div>

              <div>
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  className="border-2 p-1 border-gray-300  rounded-md"
                  name="activo"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione:</option>
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </select>
                {errores.activo && (
                  <p className={formError}>{errores.activo}</p>
                )}
              </div>
            </div>
          </form>
          <div className="flex ">
            <div className="w-1/2 flex gap-3">
              <div className="w-1/3 h-2/3">
                <button
                  className="group relative   h-full flex items-center justify-center py-4 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  onClick={() => setShowModalAdherent(true)}
                >
                  Agregar Adherente
                </button>
              </div>
              <div className=" w-1/2 border overflow-y-scroll flex  border-gray-300 m rounded-md">
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

            <div className=" flex justify-around items-center w-1/2">
              <button
                key="submitFormButton"
                className={errors ? disableBtn : enableBtn}
                disabled={errors}
                onClick={handleSubmitAffiliate}
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
        </div>
      </section>

      {showModalAdherent && (
        <AddAdherent
          handleAddAdherent={handleAddAdherent}
          setShowModalAdherent={setShowModalAdherent}
        />
      )}
    </div>
  );
};

export default AddAffiliate;
