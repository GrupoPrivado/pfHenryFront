import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  putConsultaMedica,
  resetData,
} from "../../actions/professionalsActions";
import { validateDignostico } from "../../utils/professionalFormsCOntrollers";

function Diagnostico({ token }) {
  const dispatch = useDispatch();

  const [errores, setErrores] = useState({});

  const inputDataStruct = {
    diagnostico: "",
    token: token,
  };

  const [inputData, setInputData] = useState(inputDataStruct);

  const handleChangeDiag = (event) => {
    const data = {
      ...inputData,
      [event.target.name]: event.target.value,
    };

    setInputData(data);
  };

  const handleUpdate = () => {
    const validateError = validateDignostico(inputData);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(putConsultaMedica(inputData));
      dispatch(resetData());
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <label>Diagnóstico: </label>
        <textarea
          rows="4"
          cols="50"
          className="resize-none"
          name="diagnostico"
          autoComplete="off"
          value={inputData.diagnostico}
          onChange={(e) => handleChangeDiag(e)}
          placeholder="Ingrese el Diagnostico...."
        />
        {errores.diagnostico && (
          <p className="absolute text-red-700">{errores.diagnostico}</p>
        )}
      </div>

      <button onClick={handleUpdate} name="guardar">
        Guardar
      </button>
    </div>
  );
}

export default Diagnostico;
