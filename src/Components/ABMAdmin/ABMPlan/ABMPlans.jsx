import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deletePlan, getAllPlansData } from "../../../actions/actionAMBAdmin";

import AddPlan from "./AddPlan";
import UpdatePlan from "./UpdatePlan";
import ABMPlansList from "./ABMPlansList";
import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";

const ABMPlans = () => {
  const dispatch = useDispatch();

  const { allPlansData } = useSelector((state) => state.ABMAdmin);

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

    dispatch(getAllPlansData());
  }, [ message, type, activeAlert, errorAlert]);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllPlansData());
  }, []);

  /********* Funciones para borrar un elemento*********/
  const [deleteState, setDeleteState] = useState("");
  const [confirmDeleteState, setConfirmDeleteState] = useState(false);

  const deletePlanFunc = async (value) => {
    dispatch(deletePlan(value));
    dispatch(getAllPlansData());
    setDeleteState("");
    setConfirmDeleteState(true);
  };

  /********* Fin Funciones para borrar un elemento*********/
console.log('updatePlan', showModalUpdate)
  return (
    <div>
      <ABMPlansList
        allPlansData={allPlansData}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        setDeleteState={setDeleteState}
      />

      {showModalAdd && (
        <AddPlan
          showModalAdd={showModalAdd}
          setShowModalAdd={setShowModalAdd}
        />
      )}

      {showModalUpdate && (
        <UpdatePlan setShowModalUpdate={setShowModalUpdate} />
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
      {deleteState &&
        alertSweet(
          "warning",
          "¿Desea eliminar el registro?",
          true,
          true,
          deletePlanFunc,
          deleteState,
          setDeleteState,
          "",
          0,
          "Yes, delete it!",
          "danger"
        )}
      {confirmDeleteState &&
        alertSweet(
          "success",
          "Registro borrado con éxito",
          false,
          false,
          setConfirmDeleteState,
          !confirmDeleteState,
          () => {},
          false,
          2500
        )}
    </div>
  );
};

export default ABMPlans;
