import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateProfessional,
  resetDataUpdate,
  getAllProvinces,
  getAllCities,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateProfessional.module.css";

import {
  functionErrorsBtn,
  validateProfesionalUpdate,
} from "../../../utils/adminFormsControllers";
import { enableBtn, disableBtn, formError } from "../../../utils/ABMStyles";

const UpdateProfessional = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  const [errors, setErrors] = useState(false);
  const [errores, setErrores] = useState({});

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

    setErrors(functionErrorsBtn(updatedProfessional));
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

    const validateError = validateProfesionalUpdate(updateProfessionalData);
    setErrores(validateError);

    if (Object.entries(validateError).length <= 0) {
      dispatch(updateProfessional(updateProfessionalData));
      setShowModalUpdate(false);
      dispatch(resetDataUpdate());
    }
  };

  const handleClose = () => {
    setUpdateProfessionalData(updateProfessionalDataStruct);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div className={styles.modal}>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Modificar Profesional
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 h-90% ">
          <form>
            <div className="mb-4">
              <label className="text-md text-gray-600">Teléfono: </label>
              <input
                className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                type="number"
                name="telefono"
                autoComplete="off"
                value={updateProfessionalData.telefono}
                onChange={(e) => handleUpdateProfessional(e)}
                placeholder="Ingrese el Teléfono...."
              />
              {errores.telefono && (
                <p className={formError}>{errores.telefono}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="text-md text-gray-600">E-Mail: </label>
              <input
                className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                type="email"
                name="mail"
                autoComplete="off"
                value={updateProfessionalData.mail}
                onChange={(e) => handleUpdateProfessional(e)}
                placeholder="Ingrese el E-Mail...."
              />
              {errores.mail && (
                <p className={formError}>{errores.mail}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="text-md text-gray-600" htmlFor="provincia">
                Provincia{" "}
              </label>
              <select
                value={updateProfessionalData.provinciaID}
                onChange={handleChangeProvince}
                name="provinciaID"
                className=" h-full w-full  border-2 border-gray-300 rounded-md uppercase"
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
              {errores.provinciaID && (
                <p className={formError}>{errores.provinciaID}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="text-md text-gray-600" htmlFor="localidad">
                Localidad{" "}
              </label>
              <select
                onChange={handleUpdateProfessional}
                value={updateProfessionalData.ciudadID}
                name="ciudadID"
                className=" h-full w-full  border-2 border-gray-300  rounded-md"
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
              {errores.ciudadID && (
                <p className={formError}>{errores.ciudadID}</p>
              )}
            </div>
          </form>
<div className="flex justify-center">
          <div className="flex w-2/3 justify-around">
            <button
              key="submitFormButton"
              className={errors ? disableBtn : enableBtn}
              disabled={errors}
              onClick={handleSubmitUpdateProfessional}
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
    </div>
  );
};

export default UpdateProfessional;
