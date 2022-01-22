import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deletePharmacy,
  getAllPharmacies,
} from "../../../actions/actionAMBAdmin";

import AddPharmacy from "./AddPharmacy";
import UpdatePharmacy from "./UpdatePharmacy";
import ABMPharmacyList from "./ABMPharmaciesList";

import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";

const ABMPharmacies = () => {
  const dispatch = useDispatch();

  const { allPharmacies } = useSelector((state) => state.ABMAdmin);

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

    dispatch(getAllPharmacies());
  }, [message, type, activeAlert, errorAlert]);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  /********* Funciones para borrar un elemento*********/
  const [deleteState, setDeleteState] = useState("");
  const [confirmDeleteState, setConfirmDeleteState] = useState(false);

  const deletePharmacyFunc = async (value) => {
    dispatch(deletePharmacy(value));
    dispatch(getAllPharmacies());
    setDeleteState("");
    setConfirmDeleteState(true);
  };

  /********* Fin Funciones para borrar un elemento*********/

  return (
    <div>
      <ABMPharmacyList
        allPharmacies={allPharmacies}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        setDeleteState={setDeleteState}
      />

      {showModalAdd && <AddPharmacy setShowModalAdd={setShowModalAdd} />}

      {showModalUpdate && (
        <UpdatePharmacy
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
        />
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
          deletePharmacyFunc,
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

export default ABMPharmacies;
