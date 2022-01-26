import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllEmployees,
  deleteEmployee,
} from "../../../actions/actionAMBAdmin";
import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";

import ABMEmployeesList from "./ABMEmployeesList";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import UpDownEmployee from "./UpDownEmployee";

const ABMEmployees = () => {
  const dispatch = useDispatch();

  const { allEmployees } = useSelector((state) => state.ABMAdmin);

  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalUpDown, setShowModalUpDown] = useState(false);

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
    dispatch(getAllEmployees());
  }, [message, type, activeAlert, errorAlert]);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);
  const [deleteState, setDeleteState] = useState("");
  const [confirmDeleteState, setConfirmDeleteState] = useState(false);

  const deleteSpecialityFunc = (value) => {
    dispatch(deleteEmployee(value));
    dispatch(getAllEmployees());
    setDeleteState("");
    setConfirmDeleteState(true);
  };

  return (
    <div>
      <ABMEmployeesList
        allEmployees={allEmployees}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        setShowModalUpDown={setShowModalUpDown}
        setDeleteState={setDeleteState}
      />
      {showModalAdd && (
        <AddEmployee
          showModalAdd={showModalAdd}
          setShowModalAdd={setShowModalAdd}
        />
      )}
      {showModalUpdate && (
        <UpdateEmployee
          showModalAdd={showModalAdd}
          setShowModalUpdate={setShowModalUpdate}
        />
      )}
      {showModalUpDown && (
        <UpDownEmployee setShowModalUpDown={setShowModalUpDown} />
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
          "Si, borrar",
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
        )}{" "}
    </div>
  );
};

export default ABMEmployees;
