import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteProfessional,
  getAllProfessionals,
  getAllSpecialities,
} from "../../../actions/actionAMBAdmin";

import AddProfessional from "./AddProfessional";
import UpdateProfessional from "./UpdateProfessional";
import ProfessionalsList from "./ABMProfessionalsList";
import UpDownProfessional from "./UpDownProfessional";

import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";

const ABMProfessionals = () => {
  const dispatch = useDispatch();

  const { allProfessionals } = useSelector((state) => state.ABMAdmin);

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

    dispatch(getAllProfessionals({}));
  }, [ message, type, activeAlert, errorAlert]);

   /********* Funciones para borrar un elemento*********/
   const [deleteState, setDeleteState] = useState("");
   const [confirmDeleteState, setConfirmDeleteState] = useState(false);
 
   const deleteProfFunc = async (value) => {
     dispatch(deleteProfessional(value));
     dispatch(getAllProfessionals());
     setDeleteState("");
     setConfirmDeleteState(true);
   };
 
   /********* Fin Funciones para borrar un elemento*********/
  
  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalUpDown, setShowModalUpDown] = useState(false);

  useEffect(() => {
    dispatch(getAllSpecialities());
    dispatch(getAllProfessionals({}));
  }, []);

  return (
    <div>
      

      <ProfessionalsList
        allProfessionals={allProfessionals}
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        setShowModalUpDown={setShowModalUpDown}
        setDeleteState={setDeleteState}
      />

      {showModalAdd && <AddProfessional setShowModalAdd={setShowModalAdd} />}

       {showModalUpdate && <UpdateProfessional
        setShowModalUpdate={setShowModalUpdate}
      />} 

  {showModalUpDown && (
        <UpDownProfessional
          setShowModalUpDown={setShowModalUpDown}
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
          deleteProfFunc,
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

export default ABMProfessionals;
