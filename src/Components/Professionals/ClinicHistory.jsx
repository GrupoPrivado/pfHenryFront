import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClinicHistory } from "../../actions/professionalsActions";
import AffiliateData from "./AffiliateData";

const ClinicHistory = () => {
  const dispatch = useDispatch();

  const { clinicHistory, consultaMedicaData } = useSelector(
    (state) => state.professionals
  );

  useEffect(() => {
    dispatch(getClinicHistory(consultaMedicaData.afiliadoID.DNI));
  }, []);
console.log(clinicHistory,'----------clinicHistory---------')
  return (
    <div>
      <label>Paciente</label>
    <AffiliateData affiliateData={consultaMedicaData.afiliadoID}/>
      {clinicHistory &&
        clinicHistory.map((e) => {
        return (  <div>
            <label>Fecha Consulta: {e.fechaConsulta}</label>
            <label>Nombre Prof.: {e.profesionalID.nombre}</label>
            <label>Apellido Prof.: {e.profesionalID.apellido}</label>
            <label>Matricula Prof.: {e.profesionalID.matricula}</label>
            <label>Especialidad.: {e.profesionalID.especID.nombre}</label>
            <label>Diagnóstico: {e.diagnostico}</label>
          </div>);
        })}
    </div>
  );
};

export default ClinicHistory;
