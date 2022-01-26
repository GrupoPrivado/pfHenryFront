import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAllFactura, getAllAffiliatesTitular, getAllPlans } from "../../../actions/actionAMBAdmin";

import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";
import ABMPaged from "../ABMPaged";
import GetAfifilDNI from "./ABMAffilSearch";
import ABMAffilFactList from "./ABMAffilList";
import { enableBtnProf } from "../../../utils/ABMStyles";

const ABMAffilFacturas = () => {
  const dispatch = useDispatch();

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

  }, [message, type, activeAlert, errorAlert]);

  useEffect(() => {
    dispatch(getAllAffiliatesTitular(0, 10));
    dispatch(getAllPlans());
  }, []);

  const createAllFacturas = () =>{
    dispatch(addAllFactura())
  }

  return (
    <div>
      <GetAfifilDNI />

      <button
          className={
          enableBtnProf 
          }
          
          onClick={createAllFacturas}
        >
          Generar Facturas
        </button>

      <ABMAffilFactList
      />
      <ABMPaged getFunction={getAllAffiliatesTitular} />

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

export default ABMAffilFacturas;
