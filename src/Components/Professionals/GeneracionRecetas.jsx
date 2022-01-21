import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { postRecetaMedica } from "../../actions/professionalsActions";

const GeneracionRecetas = ({
  affiliateData,
  professionalData,
  setRecetasModal,
}) => {
  const dispatch = useDispatch();

  const tipoReceta = ["Farmacia", "Estudio"];

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
  }, []);

  const handleChange = (event) => {
    const data = {
      ...inputReceta,
      [event.target.name]: event.target.value,
    };

    setInputReceta(data);
  };

  const handleSendInfo = () => {
    setRecetasModal(false);
    dispatch(postRecetaMedica(inputReceta));
    setInputReceta(inputRecetaStruct);
  };

  const handleClose = () => {
    setRecetasModal(false);
    setInputReceta(inputRecetaStruct);
  };

  return (
    <div>
      <div>
        <label>DNI: {affiliateData.DNI}</label>
        <label>Apellido: {affiliateData.apellido}</label>
        <label>Nombre: {affiliateData.nombre}</label>
        <label>E-mail: {affiliateData.correoElectronico}</label>
        <label>Activo: {affiliateData.activo ? "Si" : "No"}</label>
      </div>

      <div>
        <label>Seleccione el tipo de receta: </label>
        <select
          id="recetaType"
          name="tipoReceta"
          onChange={(e) => handleChange(e)}
          defaultValue={0}
        >
          <option value="">Seleccione</option>
          {tipoReceta.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>

      <div>
        <label>Receta: </label>
        <textarea
          rows="4"
          cols="50"
          name="descripcion"
          className="resize-none"
          autoComplete="off"
          value={inputReceta.descripcion}
          onChange={(e) => handleChange(e)}
          placeholder="Ingrese lo recetado...."
        />
      </div>

      <button onClick={handleSendInfo} name="crearReceta">Crear</button>
      <button onClick={handleClose} name="close">Cerrar</button>
    </div>
  );
};

export default GeneracionRecetas;
