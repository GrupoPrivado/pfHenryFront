import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { postRecetaMedica } from "../../actions/professionalsActions";
import { validateReceta } from "../../utils/professionalFormsCOntrollers";
import { hoverBtnProf, disableBtnProf } from "../../utils/ABMStyles";

const GeneracionRecetas = ({
  affiliateData,
  professionalData,
  setRecetasModal,
}) => {
  const dispatch = useDispatch();
  const tipoReceta = ["Farmacia", "Estudio"];
  const [errores, setErrores] = useState({});

  const inputRecetaStruct = {
    afiliadoID: "",
    profesionalID: "",
    tipoReceta: "",
    descripcion: "",
  };

  const [inputReceta, setInputReceta] = useState(inputRecetaStruct);

  useEffect(() => {
    setInputReceta({
      ...inputReceta,
      profesionalID: professionalData,
      afiliadoID: affiliateData._id,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    const data = {
      ...inputReceta,
      [event.target.name]: event.target.value,
    };

    setInputReceta(data);
  };

  const handleSendInfo = () => {
    const validateError = validateReceta(inputReceta);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(postRecetaMedica(inputReceta));
      setRecetasModal(false);
    }
  };

  const handleClose = () => {
    setRecetasModal(false);
    setInputReceta(inputRecetaStruct);
  };

  return (
    <section className="absolute top-0 left-0 w-100vw full min-h-100vh bg-white flex flex-col gap-12 justify-center items-center z-50 p-8">
      <article className=" flex flex-col gap-4 items-center justify-center">
      <label className="py-4 mt-8 text-3xl">Afiliado</label>
      <div className="flex gap-4">
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">Nombre y Apellido</label>
        <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.nombre} {affiliateData.apellido}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">DNI</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.DNI}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">Activo</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.activo ? "Si" : "No"}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">E-mail</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.correoElectronico}</label>
        </div>
      </div>
      </article>

      <article className="relative flex flex-col">
        <label className="absolute bg-white -top-[0.95rem] left-4 px-1">Seleccione el tipo de receta </label>
        <select
          id="recetaType"
          name="tipoReceta"
          className="ring-2 ring-green-500 focus:ring-blue-500 outline-none rounded-md p-2"
          onChange={(e) => handleChange(e)}
        >
          <option value="">Seleccione</option>
          {tipoReceta.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
        {errores.tipoReceta && (
          <p className="absolute top-[2.5rem] text-red-700">{errores.tipoReceta}</p>
        )}
        <div className="relative flex flex-col mt-16">
          <label className="absolute bg-white -top-[0.95rem] left-4 px-1">Receta</label>
          <textarea
            rows="4"
            cols="50"
            name="descripcion"
            className="resize-none ring-2 ring-green-500 focus:ring-blue-500 outline-none rounded-md p-2"
            autoComplete="off"
            value={inputReceta.descripcion}
            onChange={(e) => handleChange(e)}
            placeholder="Ingrese lo recetado...."
          />
          {errores.descripcion && (
            <p className="absolute -bottom-[1.7rem] right-0 text-red-700">{errores.descripcion}</p>
          )}
        </div>
      </article>
            
          <div className="flex gap-10 mb-8">
            <button 
            className={disableBtnProf + " " + hoverBtnProf}
            onClick={handleSendInfo} 
            name="crearReceta">
              Crear
            </button>
            <button 
            className={disableBtnProf + " " + hoverBtnProf}
            onClick={handleClose} 
            name="close">
              Cerrar
            </button>
          </div>
    </section>
  );
};

export default GeneracionRecetas;
