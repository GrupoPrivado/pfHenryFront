import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updatePharmacy,
  getAllPharmacies,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdatePharmacy.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdatePharmacy = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();

  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  let [updatePharmacyData, setUpdatePharmacyData] = useState({
    id: "",
    direccion: "",
    telefono: "",
    mail: "",
  });

  useEffect(() => {
    setUpdatePharmacyData({
      id: updateData._id,
      direccion:  updateData.direccion,
      telefono:  updateData.telefono,
      mail:  updateData.mail,
    });
  }, [updateData, dispatch]);

  const handleUpdatePharmacy = async (event) => {
    let updatedPharmacy = {
      ...updatePharmacyData,
      [event.target.name]: event.target.value,
    };
    setUpdatePharmacyData(updatedPharmacy);

    setErrors(functionErrors(updatedPharmacy));
  };

  const handleSubmitUpdatePharmacy = async (event) => {
    event.preventDefault();
    let response = await dispatch(updatePharmacy(updatePharmacyData));
    alert(response.success);
    setUpdatePharmacyData({
      id: "",
     direccion: "",
      telefono: "",
      mail: "",
    });
    await dispatch(getAllPharmacies({}));
    dispatch(resetDataUpdate());

    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdatePharmacyData({
      id: "",
     direccion: "",
     telefono: "",
     mail: "",
    });
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const showHideClassName = showModalUpdate ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
      <div className="flex justify-center">
          <h5 className="text-2xl font-bold text-gray-500">
            Modificar Farmacia
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 ">
          <form onSubmit={(e) => handleSubmitUpdatePharmacy(e)} id="updPharmacy">
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
            </div>

            <div>
              <label className="text-md text-gray-600">Teléfono: </label>
              <input

className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"type="text"
                name="telefono"
                autoComplete="off"
                value={updatePharmacyData.telefono}
                onChange={(e) => handleUpdatePharmacy(e)}
                placeholder="Ingrese el Teléfono...."
              />
            </div>

            <div>
              <label className="text-md text-gray-600">E-mail: </label>
              <input
              className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                type="text"
                name="mail"
                autoComplete="off"
                value={updatePharmacyData.mail}
                onChange={(e) => handleUpdatePharmacy(e)}
                placeholder="Ingrese el E-mail...."
              />
            </div>
          
          <div className="flex justify-between">
          <div className="flex w-1/3 items-center">
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  id="activa"
                  name="activa"
                  // onChange={(e) => handleChange(e)}
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

export default UpdatePharmacy;
