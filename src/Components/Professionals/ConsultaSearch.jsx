import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getconsultaMedica } from "../../actions/professionalsActions";
import { validateDNIToken } from "../../utils/professionalFormsCOntrollers";
import { hoverBtnProf, disableBtnProf } from "../../utils/ABMStyles";

function ConsultaSearch() {
  const dispatch = useDispatch();

  /****** Variables y funciones para buscar la consulta medica Func 1******/

  const [errores, setErrores] = useState({});

  const dataAffiliateStruct = { DNI: "", token: "" };

  const [dataAffiliate, setDataAffiliate] = useState(dataAffiliateStruct);

  const handleChange = (event) => {
    const data = {
      ...dataAffiliate,
      [event.target.name]: event.target.value,
    };

    setDataAffiliate(data);
  };

  const handleSendInfo = () => {
    const validateError = validateDNIToken(dataAffiliate);
    setErrores(validateError);
    if (Object.entries(validateError).length <= 0) {
      dispatch(getconsultaMedica(dataAffiliate));
    }
  };

  /****** Fin Variables y funciones para buscar la consulta medica Func 1******/

  return (
    <div>
      <section className="flex justify-center items-center h-20 gap-10">
        <div className=" relative flex flex-col">
          <label className="absolute bg-white -top-[1rem] left-4 px-1">DNI Afiliado</label>
          <input
            type="number"
            name="DNI"
            autoComplete="off"
            value={dataAffiliate.DNI}
            onChange={(e) => handleChange(e)}
            placeholder="Ingrese el DNI...."
            className="ring-2 ring-green-500 focus:ring-blue-500 outline-none rounded-md p-2"
          />
          {errores.DNI && (
            <p className="absolute top-[2.5rem] text-red-700">{errores.DNI}</p>
          )}
        </div>
        <div className="relative flex flex-col">
          <label className="absolute bg-white -top-[1rem] left-4 px-1">Token Consulta</label>
          <input
            type="number"
            name="token"
            autoComplete="off"
            value={dataAffiliate.token}
            onChange={(e) => handleChange(e)}
            placeholder="Ingrese el Token...."
            className="ring-2 ring-green-500 focus:ring-blue-500 outline-none rounded-md p-2"
          />
          {errores.token && (
            <p className="absolute top-[2.5rem] text-red-700">{errores.token}</p>
          )}
        </div>
        <div>
          {/* <label>Token Consulta: </label> */}
          <button name="searchBtn" 
          className={disableBtnProf + " " + hoverBtnProf}
          onClick={handleSendInfo}>
            Buscar
          </button>
        </div>
      </section>
    </div>
  );
}

export default ConsultaSearch;
