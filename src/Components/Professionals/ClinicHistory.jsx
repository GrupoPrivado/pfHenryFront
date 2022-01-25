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

  return (
    <div>
      <label>Paciente</label>
    <AffiliateData affiliateData={consultaMedicaData.afiliadoID}/>
      {clinicHistory?.length > 0?
        clinicHistory.map((e) => {
        return (  <div>
            <label>Fecha Consulta: {e.fechaConsulta}</label>
            <label>Nombre Prof.: {e.profesionalID.nombre}</label>
            <label>Apellido Prof.: {e.profesionalID.apellido}</label>
            <label>Matricula Prof.: {e.profesionalID.matricula}</label>
            <label>Especialidad.: {e.profesionalID.especID.nombre}</label>
            <label>Diagnóstico: {e.diagnostico}</label>
          </div>);
        }): <div> El paciente no posee historial medico </div>}
    </div>
  );
};

export default ClinicHistory;
