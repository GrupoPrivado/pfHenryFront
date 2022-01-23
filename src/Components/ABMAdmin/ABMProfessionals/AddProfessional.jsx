import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProfessional,
  getAllCities,
  getAllProfessionals,
  getAllProvinces,
} from "../../../actions/actionAMBAdmin";

import styles from "./AddProfessional.module.css";

import { enableBtn, disableBtn } from "../../../utils/ABMStyles";
import {
  functionErrorsBtn, validateProfessional,
} from "../../../utils/adminFormsControllers";

const AddProfessional = ({ setShowModalAdd }) => {
  const dispatch = useDispatch();

  const { allSpecialities, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  useEffect(() => {
    dispatch(getAllProvinces());
  }, []);

  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({});

  const inputProfessionalStruct = {
    nombre: "",
    apellido: "",
    DNI: "",
    telefono: "",
    mail: "",
    ciudadID: "",
    provinciaID: "",
    matricula: "",
    especID: "",
    tipoUsuario: "profesional",
    password: "",
    activo: "",
  };

  const [inputProfessional, setInputProfessional] = useState(
    inputProfessionalStruct
  );

  const handleChangeProvince = (e) => {
    const newData = {
      ...inputProfessional,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setInputProfessional(newData);
  };

  const handleChange = (event) => {
    let newProfessional = {
      ...inputProfessional,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === "DNI") {
      newProfessional = { ...newProfessional, password: event.target.value };
    }
    setInputProfessional(newProfessional);

    setErrors(functionErrorsBtn(newProfessional));

    newProfessional = {};
  };

  const handleSubmitProfessional = async (event) => {
    event.preventDefault();

    const validateError = validateProfessional(inputProfessional);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(addProfessional(inputProfessional));
      dispatch(getAllProfessionals({}));
      setShowModalAdd(false);
    }
  };

  const handleClose = () => {
    setInputProfessional(inputProfessionalStruct);
    setShowModalAdd(false);
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Agregar Nuevo Profesional
          </h5>
        </div>

        <div cclassName="modal-content py-4 text-left px-6 h-90% ">
          <form>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600">Nombre: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="text"
                  name="nombre"
                  autoComplete="off"
                  value={inputProfessional.nombre}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el nombre...."
                />
                {errores.nombre && (
                  <p className="absolute text-red-700">{errores.nombre}</p>
                )}
              </div>

              <div className="w-1/2">
                <label className="text-md text-gray-600">Apellido: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="text"
                  name="apellido"
                  autoComplete="off"
                  value={inputProfessional.apellido}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el apellido...."
                />
                {errores.apellido && (
                  <p className="absolute text-red-700">{errores.apellido}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600">DNI: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="number"
                  name="DNI"
                  autoComplete="off"
                  value={inputProfessional.DNI}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el DNI...."
                />
                {errores.DNI && (
                  <p className="absolute text-red-700">{errores.DNI}</p>
                )}
              </div>

              <div className="w-1/2">
                <label className="text-md text-gray-600">Matrícula: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="number"
                  name="matricula"
                  autoComplete="off"
                  value={inputProfessional.matricula}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese la Matrícula...."
                />
                {errores.matricula && (
                  <p className="absolute text-red-700">{errores.matricula}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label className="text-md text-gray-600">Teléfono: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="number"
                  name="telefono"
                  autoComplete="off"
                  value={inputProfessional.telefono}
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
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-1 rounded-md"
                  type="text"
                  name="mail"
                  autoComplete="off"
                  value={inputProfessional.mail}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ingrese el e-mail...."
                />
                {errores.mail && (
                  <p className="absolute text-red-700">{errores.mail}</p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className=" w-1/2">
                <label className="text-md text-gray-600" htmlFor="provincia">
                  Provincia{" "}
                </label>
                <select
                  value={inputProfessional.provinciaID}
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
                  value={inputProfessional.ciudadID}
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
            <div className="flex w-full ">
              <div className="w-1/2">
                <select
                  className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                  id="especialities"
                  name="especID"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione la Especialidad</option>
                  {allSpecialities &&
                    allSpecialities.map((element) => {
                      if (element.activa) {
                        return (
                          <option value={element._id} id={element._id}>
                            {element.nombre}
                          </option>
                        );
                      }
                    })}
                </select>
                {errores.especID && (
                  <p className="absolute text-red-700">{errores.especID}</p>
                )}
              </div>

              <div className="flex w-1/2">
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                  name="activo"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Seleccione</option>
                  <option value={true}>Si</option>
                  <option value={false}>No</option>
                </select>
                {errores.activo && (
                  <p className="absolute text-red-700">{errores.activo}</p>
                )}
              </div>
            </div>
          </form>
          <div className="flex w-full justify-around">
            <button
              key="submitFormButton"
              className={errors ? disableBtn : enableBtn}
              disabled={errors}
              onClick={handleSubmitProfessional}
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
      </section>
    </div>
  );
};

export default AddProfessional;
