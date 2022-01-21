import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllSpecialities } from "../../../actions/actionAMBAdmin";

import AddSpeciality from "./AddSpecialty";
import UpdateSpeciality from "./UpdateSpecialty";
import ABMSpecialitiesList from "./ABMSpecialtiesList";

import SuccessAlert from "../../Alerts/SuccessAlert";
import ErrorAlert from "../../Alerts/ErrorAlert";
import { alertActions } from "../../../actions/actionAlerts";

const ABMSpecialities = () => {
  const dispatch = useDispatch();

  const { allSpecialities } = useSelector((state) => state.ABMAdmin);

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

    dispatch(getAllSpecialities());
  }, [dispatch, message, type, activeAlert, errorAlert]);

  setTimeout(() => {
    setActiveAlert(false);
    setErrorAlert(false);
  }, 4000);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllSpecialities());
  }, [dispatch]);

  return (
    <div>
      <ABMSpecialitiesList
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
        allSpecialities={allSpecialities}
        setShowModalUpdate={setShowModalUpdate}
      />

      {showModalAdd && <AddSpeciality setShowModalAdd={setShowModalAdd} />}

      {showModalUpdate && (
        <UpdateSpeciality setShowModalUpdate={setShowModalUpdate} />
      )}

      {activeAlert && <SuccessAlert message={alertMessage} />}
      {errorAlert && <ErrorAlert message={alertMessage} />}
    </div>
  );
};

export default ABMSpecialities;
