import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  putConsultaMedica,
  resetData,
} from "../../actions/professionalsActions";
import { validateDignostico } from "../../utils/professionalFormsCOntrollers";
import { hoverBtnProf, disableBtnProf } from "../../utils/ABMStyles";

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
    <div className="mt-16 mx-4">
      <div className=" relative flex flex-col mb-6">
        <label className="absolute bg-white -top-[0.97rem] left-4 px-1">Diagnóstico</label>
        <textarea
          rows="4"
          cols="50"
          className="resize-none ring-2 ring-green-500 focus:ring-blue-500 outline-none rounded-md p-2"
          name="diagnostico"
          autoComplete="off"
          value={inputData.diagnostico}
          onChange={(e) => handleChangeDiag(e)}
          placeholder="Ingrese el Diagnostico...."
        />
        {errores.diagnostico && (
          <p className="absolute -bottom-[1.7rem] right-0 text-red-700">{errores.diagnostico}</p>
        )}
      </div>

      <button 
      onClick={handleUpdate} 
      name="guardar"
      className={disableBtnProf + " " + hoverBtnProf}
      >
        Guardar
      </button>
    </div>
  );
}

export default Diagnostico;
