import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getconsultaMedica,
  putConsultaMedica,
} from "../../actions/professionalsActions";
import AffiliateData from "./AffiliateData";
import GeneracionRecetas from "./GeneracionRecetas";
import ProfessionalData from "./ProfessionalData";

const IndexProfessional = () => {
  const dispatch = useDispatch();

  const { consultaMedicaData, professionalData } = useSelector(
    (state) => state.professionals
  );

  /****** Variables y funciones para buscar la consulta medica Func 1******/
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
    dispatch(getconsultaMedica(dataAffiliate));
  };

  /****** Fin Variables y funciones para buscar la consulta medica Func 1******/

  /****** Variables y funciones para llenar consulta medica Func 2******/

  const inputDataStruct = {
    diagnostico: "",
    token: "",
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
    const dataSend = {...inputData, token: dataAffiliate.token }
    setInputData(dataSend);
    dispatch(putConsultaMedica(dataSend));
    setDataAffiliate(dataAffiliateStruct)
    setInputData(inputDataStruct)
  };

  /****** Fin Variables y funciones para llenar consulta medica Func 2******/

  /****** Variables y funciones para la generación de recetas Func 3******/

  const [recetasModal, setRecetasModal] = useState(false);

  /****** Variables y funciones la generación de recetas Func 3******/

  return (
    <div className="w-full flex justify-center items-center flex-col gap-8">
      {/*Busqueda Consulta Medica Func 1*/}
      <section className="flex justify-center items-center h-20">
        <div>
            <label>DNI Afiliado: </label>
            <input
              type="number"
              name="DNI"
              autoComplete="off"
              value={dataAffiliate.DNI}
              onChange={(e) => handleChange(e)}
              placeholder="Ingrese el DNI...."
            />
        </div>
        <div>
            <label>Token Consulta: </label>
            <input
              type="number"
              name="token"
              autoComplete="off"
              value={dataAffiliate.token}
              onChange={(e) => handleChange(e)}
              placeholder="Ingrese el Token...."
            />
        </div>
      <div>
        {/* <label>Token Consulta: </label> */}
        <button name="searchBtn" onClick={(e) => handleSendInfo(e)}>
          Buscar
        </button>
      </div>
      </section>
      {/*Fin Busqueda Consulta Medica */}

      {/* Botonera */}
      <div className="flex justify-around items-center w-40vw h-10">
        <Link to="/profesional/historiaclinica">
          <button>Historial Medico</button>
        </Link>

        <button name="recetasModal" onClick={() => setRecetasModal(true)}>
          Generar Receta
        </button>
      </div>
      {/* Fin Botonera */}

      {/* Generar Receta */}

      {recetasModal && (
        <GeneracionRecetas
          affiliateData={consultaMedicaData.afiliadoID}
          professionalData={professionalData._id}
          setRecetasModal={setRecetasModal}
        />
      )}
      {/* Fin Generar Receta */}

      {/*  Historial Medico */}
      {/* Fin  Historial Medico */}

      {/* Datos Personales Afiliado */}
      {consultaMedicaData.afiliadoID && (
        <AffiliateData affiliateData={consultaMedicaData.afiliadoID} />
      )}
      {/* Fin Datos Personales Afiliado */}

      {/* Datos Personales Medico */}
      <ProfessionalData professionalData={professionalData} />
      {/* Fin Datos Personales Medico */}

      {/* Diagnostico Func 2*/}
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
      </div>

      <button onClick={handleUpdate} name="guardar"> Guardar</button>
      {/* Fin Diagnostico */}
    </div>
  );
};

export default IndexProfessional;
