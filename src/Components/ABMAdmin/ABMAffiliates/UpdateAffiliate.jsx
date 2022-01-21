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

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpdateAffiliate = ({ setShowModalUpdate, showModalUpdate }) => {
  const dispatch = useDispatch();
  const { updateData, allPlans, cities, provinces } = useSelector(
    (state) => state.ABMAdmin
  );

  const [errors, setErrors] = useState(true);

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

    setErrors(functionErrors(updatedAffiliate));
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
    let response = await dispatch(updateAffiliateAct(updateAffiliateData));
    alert(response.success);
    setUpdateAffiliateData(updateAffiliateStruct);
    setShowModalUpdate(false);
    dispatch(getAllAffiliates());
    dispatch(resetDataUpdate({}));
    setErrors(true);
  };

  const handleClose = () => {
    setUpdateAffiliateData(updateAffiliateStruct);
    setShowModalUpdate(false);
    dispatch(resetDataUpdate({}));
    setErrors(true);
  };

  return (
    <div>
      <section className={styles.modalmain}>
        <div className="flex justify-center h-10%">
          <h5 className="text-2xl font-bold text-gray-500">
            Modificar Afiliado
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 h-90%">
          <form className="h-100%">
            <div className="flex">
              <div>
                <label className="text-md text-gray-600">Teléfono: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-5 rounded-md"
                  type="number"
                  name="telefono"
                  autoComplete="off"
                  value={updateAffiliateData.telefono}
                  onChange={(e) => handleUpdateAffiliate(e)}
                  placeholder="Ingrese el Teléfono...."
                />
              </div>

              <div className="flex h-1/3">
                <div>
                  <label className="text-md text-gray-600">Domicilio: </label>
                  <input
                    className="h-2 p-4 w-full border-2 border-gray-300 mb-3 rounded-md"
                    type="test"
                    name="direccion"
                    autoComplete="off"
                    value={updateAffiliateData.direccion}
                    onChange={(e) => handleUpdateAffiliate(e)}
                    placeholder="Ingrese el domocilio...."
                  />
                </div>
                <div>
                  <label className="text-md text-gray-600">
                    Tipo de Plan:{" "}
                  </label>

                  <select
                    className="border-2 p-1 border-gray-300 mb-3 rounded-md"
                    id="planes"
                    name="planID"
                    onChange={handleUpdateAffiliate}
                    value={updateAffiliateData.planID}
                    defaultValue={updateAffiliateData.planID}
                  >
                    <option value="">Seleccione su Plan</option>
                    {allPlans &&
                      allPlans.map((element) => {
                        return (
                          <option value={element._id} id={element._id}>
                            {element.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="flex">
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
                    onChange={handleUpdateAffiliate}
                    value={updateAffiliateData.ciudadID}
                    name="ciudadID"
                    className=" h-1/2 w-full  border-2 border-gray-300 mb-5 rounded-md"
                    defaultValue={updateAffiliateData.ciudadID}
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
            </div>

            <div className="flex justify-between h-1/3">
              <div className="flex w-1/3 items-center">
                <label className="text-md text-gray-600">Activo: </label>
                <select
                  className="border-2 p-1 border-gray-300  rounded-md"
                  id="activo"
                  name="activo"
                  // onChange={(e) => handleChange(e)}
                  defaultValue={0}
                >
                  <option value="">Seleccione</option>
                  <option value="false">No</option>
                  <option value="true">Si</option>
                </select>
              </div>
              <div className="flex w-2/3 justify-around items-center">
                {errors ? (
                  <button
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={errors}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    key="submitFormButton"
                    onClick={handleSubmitUpdateAffiliate}
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

export default UpdateAffiliate;
