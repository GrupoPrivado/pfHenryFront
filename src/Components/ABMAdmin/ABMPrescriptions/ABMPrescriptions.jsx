import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllPrescriptions } from "../../../actions/actionAMBAdmin";

import UpdatePrescription from "./UpdatePrescription";
import ABMPrescriptionsList from "./ABMPrescriptionsList";
import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";

const ABMPrescriptions = () => {
  const dispatch = useDispatch();

  const { type, message } = useSelector((state) => state.alerts);

  let [showModalUpdate, setShowModalUpdate] = useState(false);

  const [errorAlert, setErrorAlert] = useState(false);
   
  const [activeAlert, setActiveAlert] = useState(false);
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

  }, [ message, type, activeAlert, errorAlert]);

  return (
    <div>
 

      <ABMPrescriptionsList setShowModalUpdate={setShowModalUpdate} />

      {showModalUpdate && (
        <UpdatePrescription setShowModalUpdate={setShowModalUpdate} />
      )}

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

export default ABMPrescriptions;
