import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  updateAffiliateAct,
  getAllAffiliates,
  resetDataUpdate,
  getAllProvinces,
  getAllCities,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpdateAffiliate.module.css";
import {
  functionErrorsBtn,
  validateAffiliateUpdate,
} from "../../../utils/adminFormsControllers";
import { enableBtn, disableBtn , formError} from "../../../utils/ABMStyles";

const UpdateAffiliate = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData, allPlans, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  const [errors, setErrors] = useState(true);
  const [errores, setErrores] = useState({});

  const updateAffiliateStruct = {
    id: "",
    telefono: "",
    correoElectronico: "",
    direccion: "",
    ciudadID: "",
    provinciaID: "",
    planID: "",
    alta: "",
    activo: "",
  };

  const [updateAffiliateData, setUpdateAffiliateData] = useState(
    updateAffiliateStruct
  );

  useEffect(() => {
    setUpdateAffiliateData({
      id: updateData._id,
      telefono: updateData.telefono,
      correoElectronico: updateData.correoElectronico,
      direccion: updateData.direccion,
      ciudadID: updateData.ciudadID._id,
      provinciaID: updateData.provinciaID._id,
      planID: updateData.planID._id,
      alta: updateData.alta,
      activo: updateData.activo,
    });
    dispatch(getAllProvinces());
    dispatch(getAllCities(updateData.provinciaID._id));
  }, [updateData]);

  const handleUpdateAffiliate = async (event) => {
    let updatedAffiliate = {
      ...updateAffiliateData,
      [event.target.name]: event.target.value,
    };

    setUpdateAffiliateData(updatedAffiliate);

    setErrors(functionErrorsBtn(updatedAffiliate));
  };

  const handleChangeProvince = (e) => {
    const newData = {
      ...updateAffiliateData,
      provinciaID: e.target.value,
    };
    dispatch(getAllCities(newData.provinciaID));
    setUpdateAffiliateData(newData);
  };

  const handleSubmitUpdateAffiliate = async (event) => {
    event.preventDefault();

    const validateError = validateAffiliateUpdate(updateAffiliateData);
    setErrores(validateError);

    if (Object.entries(validateError).length <= 0) {
      dispatch(updateAffiliateAct(updateAffiliateData));
      setShowModalUpdate(false);
      dispatch(getAllAffiliates());
      dispatch(resetDataUpdate());
    }
  };

  const handleClose = () => {
    setUpdateAffiliateData(updateAffiliateStruct);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate({}));
    setErrors(true);
  };

  return (
    <div className={styles.modal}>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Modificar Afiliado
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 h-90%">
          <form className="">
            <div className="flex mb-5">
              <div>
                <label className="text-md text-gray-600">Teléfono: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                  type="number"
                  name="telefono"
                  autoComplete="off"
                  value={updateAffiliateData.telefono}
                  onChange={(e) => handleUpdateAffiliate(e)}
                  placeholder="Ingrese el Teléfono...."
                />
                {errores.telefono && (
                  <p className={formError}>
                    {errores.telefono}
                  </p>
                )}
              </div>

              
                <div>
                  <label className="text-md text-gray-600">Domicilio: </label>
                  <input
                    className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                    type="test"
                    name="direccion"
                    autoComplete="off"
                    value={updateAffiliateData.direccion}
                    onChange={(e) => handleUpdateAffiliate(e)}
                    placeholder="Ingrese el domocilio...."
                  />
                  {errores.direccion && (
                    <p className={formError}>
                      {errores.direccion}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex mb-5">
              <div className="w-1/2">
                <label className="text-md text-gray-600">E-Mail: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300  rounded-md"
                  type="email"
                  name="correoElectronico"
                  autoComplete="off"
                  value={updateAffiliateData.correoElectronico}
                  onChange={(e) => handleUpdateAffiliate(e)}
                  placeholder="Ingrese el E-Mail...."
                />
                {errores.correoElectronico && (
                  <p className={formError}>
                    {errores.correoElectronico}
                  </p>
                )}
              </div>
              

              <div className=" h-1/2 flex flex-col">
                <label className="text-md text-gray-600">Tipo de Plan: </label>

                <select
                  className="border-2 p-1 border-gray-300 rounded-md"
                  id="planes"
                  name="planID"
                  onChange={handleUpdateAffiliate}
                  value={updateAffiliateData.planID}
                  defaultValue={updateAffiliateData.planID}
                >
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
                </select>
                {errores.planID && (
                  <p className={formError}>
                    {errores.planID}
                  </p>
                )}
              </div>
              </div>

            
              <div className="flex mb-5">
                <div className="w-1/2">
                  <label className="text-md text-gray-600" htmlFor="provincia">
                    Provincia:{" "}
                  </label>
                  <select
                    value={updateAffiliateData.provinciaID}
                    onChange={handleChangeProvince}
                    className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                    required
                    defaultValue={updateAffiliateData.provinciaID}
                  >
                    {provinces &&
                      provinces.map((p) => (
                        <option key={p._id} value={p._id}>
                          {p.nombre}
                        </option>
                      ))}
                  </select>
                  {errores.provinciaID && (
                    <p className={formError}>
                      {errores.provinciaID}
                    </p>
                  )}
                </div>

                <div className="w-1/2">
                  <label className="text-md text-gray-600" htmlFor="localidad">
                    Localidad{" "}
                  </label>
                  <select
                    onChange={handleUpdateAffiliate}
                    value={updateAffiliateData.ciudadID}
                    name="ciudadID"
                    className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                    defaultValue={updateAffiliateData.ciudadID}
                  >
                    {cities &&
                      cities.map((c) => (
                        <option key={c._id} value={c._id}>
                          {c.localidad}
                        </option>
                      ))}
                  </select>
                  {errores.ciudadID && (
                    <p className={formError}>
                      {errores.ciudadID}
                    </p>
                  )}
                </div>
             
            </div>
          </form>
          <div className="flex justify-around w-full">
            <div className="flex w-2/3 justify-around items-center">
              <button
                key="submitFormButton"
                onClick={handleSubmitUpdateAffiliate}
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
        </div>
      </section>
    </div>
  );
};

export default UpdateAffiliate;
