import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import AffiliateData from "./AffiliateData";
import { hoverBtnProf, disableBtnProf } from "../../utils/ABMStyles";

const ClinicHistory = () => {
  const { clinicHistory, consultaMedicaData } = useSelector(
    (state) => state.professionals
  );
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getClinicHistory(consultaMedicaData.afiliadoID.DNI));
  // }, []);

  return (
    <div className="p-4 min-h-[83vh]">
      <button name="searchBtn" 
          className={disableBtnProf + " " + hoverBtnProf}
          onClick={() => navigate(-1)}>
            Volver
          </button>
      <AffiliateData affiliateData={consultaMedicaData.afiliadoID} />
      {clinicHistory?.length > 0 ? (
        clinicHistory.map((e) => {
          return (
            <div className="flex flex-col w-fit mb-6 mt-8 mx-auto justify-center items-center ring-2 ring-stone-800 hover:ring-blue-500 outline-none rounded-md p-8 pb-12">
              <label className="py-4 text-2xl">Fecha Consulta: {e.fechaConsulta}</label>
                <div className="flex gap-4 mt-6">
                    <div className="relative">
                      <label className="absolute bg-white -top-[1.3rem] left-4 px-1">Nombre y Apellido Prof.</label>
                      <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-16">{e.profesionalID.nombre} {e.profesionalID.apellido}</label>
                    </div>
                    <div className="relative">
                      <label className="absolute bg-white -top-[1.3rem] left-4 px-1">Matricula Prof.</label>
                      <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{e.profesionalID.matricula}</label>
                    </div>
                    <div className="relative">
                      <label className="absolute bg-white -top-[1.3rem] left-4 px-1">Especialidad Prof.</label>
                      <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{e.profesionalID.especID.nombre}</label>
                    </div>
                    <div className="relative">
                      <label className="absolute bg-white -top-[1.3rem] left-4 px-1">Diagnóstico:</label>
                      <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{e.diagnostico}</label>
                    </div>
                </div>
            </div>
          );
        })
      ) : (
        <div className="py-4 mt-8 mx-auto text-4xl"> El paciente no posee historial medico </div>
      )}
    </div>
  );
};

export default ClinicHistory;
