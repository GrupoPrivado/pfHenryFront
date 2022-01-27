import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alertActions } from "../../actions/actionAlerts";
import { getClinicHistory } from "../../actions/professionalsActions";
import { disableBtnProf, enableBtnProf } from "../../utils/ABMStyles";
import { alertSweet } from "../Alerts/alertSweet";
import AffiliateData from "./AffiliateData";
import ConsultaSearch from "./ConsultaSearch";
import Diagnostico from "./Diagnostico";
import GeneracionRecetas from "./GeneracionRecetas";
import ProfessionalData from "./ProfessionalData";

const IndexProfessional = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { consultaMedicaData, professionalData } = useSelector(
    (state) => state.professionals
  );

  const { type, message } = useSelector((state) => state.alerts);

  const [activeAlert, setActiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (!activeAlert || !errorAlert) {
      dispatch(alertActions.clear());
    }

    if (type === "alert-success") {
      setActiveAlert(true);
      setAlertMessage(message);
    }
    if (type === "alert-danger") {
      setErrorAlert(true);
      setAlertMessage(message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, type, activeAlert, errorAlert]);

  /****** Variables y funciones para la generación de recetas Func 3******/

  const [recetasModal, setRecetasModal] = useState(false);

  const enterPage = () => {
    dispatch(getClinicHistory(consultaMedicaData.afiliadoID.DNI));
    setTimeout(() => {
      navigate("/profesional/historiaclinica");
    }, 2000);
  };

  /****** Variables y funciones la generación de recetas Func 3******/

  return (
    <div className="w-full flex justify-center items-center flex-col gap-8">

      {!consultaMedicaData._id && <ConsultaSearch />}

      <div className="flex justify-center items-center w-40vw h-10 gap-20 mt-4">
        {/* <Link to="/profesional/historiaclinica"> */}
        <button
          className={
            consultaMedicaData.afiliadoID ? enableBtnProf : disableBtnProf
          }
          disabled={consultaMedicaData.afiliadoID ? false : true}
          onClick={enterPage}
        >
          Historial Medico
        </button>
        {/* </Link> */}

        <button
          name="recetasModal"
          onClick={() => setRecetasModal(true)}
          className={
            consultaMedicaData.afiliadoID ? enableBtnProf : disableBtnProf
          }
          disabled={consultaMedicaData.afiliadoID ? false : true}
        >
          Generar Receta
        </button>
      </div>
        
      <div className="relative p-6">
      <ProfessionalData professionalData={professionalData} />

      {recetasModal && (
        <GeneracionRecetas
          affiliateData={consultaMedicaData.afiliadoID}
          professionalData={professionalData._id}
          setRecetasModal={setRecetasModal}
        />
      )}

      {consultaMedicaData.afiliadoID && (
        <AffiliateData affiliateData={consultaMedicaData.afiliadoID} />
      )}

      {consultaMedicaData.afiliadoID && (
        <Diagnostico token={consultaMedicaData.tokenMedico} />
      )}
      </div>
      {activeAlert &&
        alertSweet(
          "success",
          alertMessage,
          false,
          false,
          setActiveAlert,
          !activeAlert,
          () => {},
          false,
          2500
        )}
      {errorAlert &&
        alertSweet(
          "error",
          alertMessage,
          false,
          false,
          setErrorAlert,
          !errorAlert,
          () => {},
          false,
          2500
        )}
    </div>
  );
};

export default IndexProfessional;
