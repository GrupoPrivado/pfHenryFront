import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  upDownAffiliateAct,
  getAllAffiliates,
  resetDataUpdate,
} from "../../../actions/actionAMBAdmin";

import styles from "./UpDownAffiliate.module.css";

const functionErrors = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
}; //cambiarla en un utils ya que se puede usar en todos los forms

const UpDownAffiliate = ({ setShowModalUpDown, showModalUpDown }) => {
  const dispatch = useDispatch();
  const { updateData } = useSelector((state) => state.ABMAdmin);

  const [errors, setErrors] = useState(false);

  const upDownAffiliateStruct = {
    id: "",
    alta: "",
    activo: "",
    grupoFamiliar: "",
    grupFamID: "",
    titularGF: "",
    subject: "",
    text: "",
    DNI: "",
  };

  const [upDownAffiliateData, setupDowndateAffiliateData] = useState(
    upDownAffiliateStruct
  );

  useEffect(() => {
    setupDowndateAffiliateData({
      id: updateData._id,
      alta: updateData.alta,
      activo: updateData.activo,
      titularGF: updateData.titularGF,
      grupoFamiliar: updateData.grupoFamiliar || false,
      grupFamID: updateData.grupFamID || false,
      DNI: updateData.DNI,
    });
  }, [updateData, dispatch]);

  const handleUpdateAffiliate = async (event) => {
    let updatedAffiliate = {
      ...upDownAffiliateData,
      [event.target.name]: event.target.value,
    };

    setupDowndateAffiliateData(updatedAffiliate);

    setErrors(functionErrors(updatedAffiliate));
  };

  const handleSubmitUpdateAffiliate = async (event) => {
    event.preventDefault();
    let response = await dispatch(upDownAffiliateAct(upDownAffiliateData));
    alert(response.success);
    setupDowndateAffiliateData(upDownAffiliateStruct);
    setShowModalUpDown(false);
    dispatch(getAllAffiliates());
    dispatch(resetDataUpdate());
    setErrors(true);
  };

  const handleClose = () => {
    setupDowndateAffiliateData(upDownAffiliateStruct);
    setShowModalUpDown(false);
    dispatch(resetDataUpdate());
    setErrors(true);
  };
  const showHideClassName = showModalUpDown ? "displayblock" : "displaynone";

  return (
    <div className={styles[showHideClassName]}>
      <section className={styles.modalmain}>
        <div className="flex justify-center">
          <h5 className="text-2xl font-bold text-gray-500">
            ALTA / BAJA Afiliado
          </h5>
        </div>
        <div className="modal-content py-4 text-left px-6 mt-1 ">
          <form>
            <div className="flex justify-around ">
              <div lassName="flex flex-col mt-3">
                <div>
                  <label className="text-md text-gray-600">
                    Nombre:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.nombre}
                    </span>
                  </label>
                </div>
                <div>
                  <label className="text-md text-gray-600">
                    Apellido:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.apellido}
                    </span>
                  </label>
                </div>
                <div>
                  <label className="text-md text-gray-600">
                    DNI:{" "}
                    <span className="text-xl uppercase text-black">
                      {updateData.DNI}
                    </span>
                  </label>
                </div>
              </div>
              <div lassName="flex flex-col justify-center">
                <div>
                  <label className="text-md text-gray-600">
                    Grupo familiar:{" "}
                    <span className="text-sm uppercase text-black">
                      {updateData.grupFamID ? "Si" : "No"}
                    </span>
                  </label>
                </div>
                <div>
                  <label className="text-md text-gray-600">
                    Titular:
                    <span className="text-sm uppercase text-black">
                      {" "}
                      {updateData.titularGF ? "Si" : "No"}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <div>
                  <label className="text-md text-gray-600">Asunto: </label>
                  <input
                    className="h-2 p-4 w-2/3 border-2 border-gray-300 mb-3 rounded-md"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    value={upDownAffiliateData.subject}
                    onChange={(e) => handleUpdateAffiliate(e)}
                    placeholder="Ingrese el asunto...."
                  />
                </div>
                <div>
                  <div>
                    <label className="text-md text-gray-600">Texto: </label>
                    <input
                      className="h-6 p-10 w-2/3 border-2 border-gray-300 mb-3 rounded-md"
                      type="textarea"
                      name="text"
                      autoComplete="off"
                      value={upDownAffiliateData.text}
                      onChange={(e) => handleUpdateAffiliate(e)}
                      placeholder="Ingrese el texto...."
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <label className="text-md text-gray-600">Alta: </label>
                  <select
                    name="alta"
                    onChange={(e) => handleUpdateAffiliate(e)}
                    value={upDownAffiliateData.alta}
                  >
                    <option value="">Seleccione:</option>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                  </select>
                </div>

                <div>
                  <label className="text-md text-gray-600">Activo: </label>
                  <select
                    name="activo"
                    onChange={(e) => handleUpdateAffiliate(e)}
                    value={upDownAffiliateData.activo}
                  >
                    <option value="">Seleccione:</option>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-1 ">
              <div className="flex w-2/3 justify-around">
                {errors ? (
                  <button
                    className="group relative w-15 h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={errors}
                    className="disabledButton"
                  >
                    Guardar
                  </button>
                ) : (
                  <button
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

export default UpDownAffiliate;
