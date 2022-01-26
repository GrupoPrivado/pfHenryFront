import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSpeciality,
  getAllSpecialities,
} from "../../../actions/actionAMBAdmin";

import AddSpeciality from "./AddSpecialty";
import UpdateSpeciality from "./UpdateSpecialty";
import ABMSpecialitiesList from "./ABMSpecialtiesList";
import ABMPaged from "../ABMPaged";
import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";

const ABMSpecialities = () => {
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

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);

  useEffect(() => {
    dispatch(getAllSpecialities(0, 10));
  }, []);

  /********* Funciones para borrar un elemento*********/
  const [deleteState, setDeleteState] = useState("");
  const [confirmDeleteState, setConfirmDeleteState] = useState(false);

  const deleteSpecialityFunc = (value) => {
    dispatch(deleteSpeciality(value));
    dispatch(getAllSpecialities());
    setDeleteState("");
    setConfirmDeleteState(true);
  };

  /********* Fin Funciones para borrar un elemento*********/

  return (
    <div>
      <ABMSpecialitiesList
        showModalAdd={showModalAdd}
        setShowModalAdd={setShowModalAdd}
        setShowModalUpdate={setShowModalUpdate}
        setDeleteState={setDeleteState}
      />
      <ABMPaged getFunction={getAllSpecialities} />

      {showModalAdd && <AddSpeciality setShowModalAdd={setShowModalAdd} />}

      {showModalUpdate && (
        <UpdateSpeciality setShowModalUpdate={setShowModalUpdate} />
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
          deleteSpecialityFunc,
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

export default ABMSpecialities;
