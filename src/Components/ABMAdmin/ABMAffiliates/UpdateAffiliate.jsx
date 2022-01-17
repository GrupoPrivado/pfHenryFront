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

  const [errors, setErrors] = useState(false);

  let [updateAffiliateData, setUpdateAffiliateData] = useState({
    id: "",
    telefono: 0,
    correoElectronico: "",
    direccion: "",
    ciudadID: "",
    provinciaID: "",
    planID: "",
    alta: "",
    activo: "",
  });

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
    setUpdateAffiliateData({
      id: "",
      telefono: 0,
      correoElectronico: "",
      direccion: "",
      ciudadID: "",
      provinciaID: "",
      planID: "",
      alta: "",
      activo: "",
    });
    dispatch(getAllAffiliates());
    dispatch(resetDataUpdate());
    setErrors(true);
    setShowModalUpdate(false);
  };

  const handleClose = () => {
    setUpdateAffiliateData({
      id: "",
      telefono: 0,
      correoElectronico: "",
      direccion: "",
      ciudadID: "",
      provinciaID: "",
      planID: "",
      alta: "",
      activo: "",
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
            Modificar Afiliado
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 ">
          <form

            id="updateAffiliate"
          >

            <div className="flex">
              <div>
                <label className="text-md text-gray-600">Teléfono: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-5 rounded-md"
                  type="number"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  name="telefono"
                  autoComplete="off"
                  value={updateAffiliateData.telefono}
                  onChange={(e) => handleUpdateAffiliate(e)}
                  placeholder="Ingrese el Teléfono...."
                />
              </div>


              <div>
                <label className="text-md text-gray-600">E-Mail: </label>
                <input
                  className="h-2 p-4 w-full border-2 border-gray-300 mb-5 rounded-md"
                  type="email"
                  name="correoElectronico"
                  autoComplete="off"
                  value={updateAffiliateData.correoElectronico}
                  onChange={(e) => handleUpdateAffiliate(e)}
                  placeholder="Ingrese el E-Mail...."
                />
              </div>
            </div>
            <div className="flex">
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

              <div className="flex flex-col">
                <label className="text-md text-gray-600" htmlFor="localidad">
                  Plan:
                </label>
                <select
                  className="relative block w-full px-1 py-1  text-sm font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 uppercase mb-3  "
                  id="planes"
                  name="planID"
                  onChange={(e) => handleUpdateAffiliate(e)}
                  value={updateAffiliateData.planID}
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
            <div>
              <div className="flex">
                <div className="col-span-3 row-span-1 w-full -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                  <label className="text-md text-gray-600" htmlFor="provincia">
                    Provincia{" "}
                  </label>
                  <select
                    value={updateAffiliateData.provinciaID}
                    onChange={handleChangeProvince}
                    name="provinciaID"
                    className="relative block w-full px-1 py-1 my-2 text-sm font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 uppercase mb-3  "
                    required
                  >
                    {provinces &&
                      provinces.map((p) => (
                        <option key={p._id} value={p._id}>
                          {p.nombre}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="col-span-3 w-full row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1 ">
                  <label className="text-md text-gray-600" htmlFor="localidad">
                    Localidad{" "}
                  </label>
                  <select
                    onChange={(e) => handleUpdateAffiliate(e)}
                    value={updateAffiliateData.ciudadID}
                    name="ciudadID"
                    className="relative block w-full px-1 py-1 my-2 text-sm font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 mb-3  "
                    required
                  >
                    {cities &&
                      cities.map((c) => (
                        <option key={c._id} value={c._id}>
                          {c.localidad}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
<div className='flex justify-center my-10'>
              <div className="flex w-2/3 justify-around" >
                {errors ? (
                  <button
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit"
              key="submitFormButton"
              form="updateAffiliate"
              disabled={errors}

                  >
                    Guardar
                  </button>
                ) : (
                  <button
                  type="submit" key="submitFormButton" form="updateAffiliate"
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
            </div>
            
          </form>

            

        </div>
      </section>
    </div>
  );
};

export default UpdateAffiliate;
