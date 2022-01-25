import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updatePharmacy,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import {
  functionErrorsBtn,
  validateUpdatePharmacy,
} from "../../../utils/adminFormsControllers";

import styles from "./UpdatePharmacy.module.css";
import { enableBtn, disableBtn } from "../../../utils/ABMStyles";

const UpdatePharmacy = ({ setShowModalUpdate }) => {
  const dispatch = useDispatch();

  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);
  const [errores, setErrores] = useState({});

  const updatePharmacyDataStruct = {
    id: "",
    direccion: "",
    telefono: "",
    mail: "",
    activo: "",
  };

  const [updatePharmacyData, setUpdatePharmacyData] = useState(
    updatePharmacyDataStruct
  );

  useEffect(() => {
    setUpdatePharmacyData({
      id: updateData._id,
      direccion: updateData.direccion,
      telefono: updateData.telefono,
      mail: updateData.mail,
      activo: updateData.activo,
    });
  }, [updateData]);

  const handleUpdatePharmacy = async (event) => {
    let updatedPharmacy = {
      ...updatePharmacyData,
      [event.target.name]: event.target.value,
    };
    setUpdatePharmacyData(updatedPharmacy);

    setErrors(functionErrorsBtn(updatedPharmacy));
  };

  const handleSubmitUpdatePharmacy = async (event) => {
    event.preventDefault();
    const validateError = validateUpdatePharmacy(updatePharmacyData);
    setErrores(validateError);

    if (Object.entries(validateError).length <= 0) {
      dispatch(updatePharmacy(updatePharmacyData));
      setShowModalUpdate(false);
      //setUpdatePharmacyData(updatePharmacyDataStruct);
      //setErrors(true);
      dispatch(resetDataUpdate());
    }
  };

  const handleClose = () => {
    setUpdatePharmacyData(updatePharmacyDataStruct);

    setShowModalUpdate(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  return (
    <div className={styles.modal}>
    <section className={styles.modalmain}>
      <div className="flex justify-center">
        <h5 className="text-2xl font-bold text-gray-500">Modificar Farmacia</h5>
      </div>
      <div className="modal-content py-4 text-left px-6 ">
        <form>
          <div>
            <label className="text-md text-gray-600">Dirección: </label>
            <input
              className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
              type="text"
              name="direccion"
              autoComplete="off"
              value={updatePharmacyData.direccion}
              onChange={(e) => handleUpdatePharmacy(e)}
              placeholder="Ingrese la Dirección...."
            />
            {errores.direccion && (
              <p className="absolute text-red-700">{errores.direccion}</p>
            )}
          </div>

          <div>
            <label className="text-md text-gray-600">Teléfono: </label>
            <input
              className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
              type="number"
              name="telefono"
              autoComplete="off"
              value={updatePharmacyData.telefono}
              onChange={(e) => handleUpdatePharmacy(e)}
              placeholder="Ingrese el Teléfono...."
            />

            {errores.telefono && (
              <p className="absolute text-red-700">{errores.telefono}</p>
            )}
          </div>

          <div>
            <label className="text-md text-gray-600">E-mail: </label>
            <input
              className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
              type="mail"
              name="mail"
              autoComplete="off"
              value={updatePharmacyData.mail}
              onChange={(e) => handleUpdatePharmacy(e)}
              placeholder="Ingrese el E-mail...."
            />
            {errores.mail && (
              <p className="absolute text-red-700">{errores.mail}</p>
            )}
          </div>

          <div className="flex justify-between">
            <div className="flex w-1/3 ">
              <label className="text-md text-gray-600">Activo: </label>
              <select
                className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                id="activa"
                name="activo"
                onChange={(e) => handleUpdatePharmacy(e)}
                value={updatePharmacyData.activo}
              >
                <option value="">Seleccione</option>
                <option value="false">No</option>
                <option value="true">Si</option>
              </select>
              {errores.activo && (
                <p className="absolute text-red-700">{errores.activo}</p>
              )}
            </div>
          </div>
        </form>
        <div className="flex w-2/3 justify-around">
          <button
            key="submitFormButton"
            onClick={handleSubmitUpdatePharmacy}
            className={errors ? disableBtn : enableBtn}
            disabled={errors}
          >
            Guardar
          </button>
          <button
            onClick={() => handleClose()}
            className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cerrar
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default UpdatePharmacy;
