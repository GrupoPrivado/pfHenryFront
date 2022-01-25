import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteProfessional,
  getAllProfessionals,
  getAllEspecialities,
} from "../../../actions/actionAMBAdmin";
import FilterProfessionals from "./FilterProfessionals";
import AddProfessional from "./AddProfessional";
import UpdateProfessional from "./UpdateProfessional";
import ProfessionalsList from "./ABMProfessionalsList";
import UpDownProfessional from "./UpDownProfessional";
import ABMPaged from "../ABMPaged";
import { alertActions } from "../../../actions/actionAlerts";
import { alertSweet } from "../../Alerts/alertSweet";

const ABMProfessionals = () => {
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
  }, [ message, type, activeAlert, errorAlert]);

   /********* Funciones para borrar un elemento*********/
   const [deleteState, setDeleteState] = useState("");
   const [confirmDeleteState, setConfirmDeleteState] = useState(false);
 
   const deleteProfFunc = async (value) => {
     dispatch(deleteProfessional(value));
     dispatch(getAllProfessionals(0,10));
     setDeleteState("");
     setConfirmDeleteState(true);
   };
 
   /********* Fin Funciones para borrar un elemento*********/
  
  let [showModalAdd, setShowModalAdd] = useState(false);
  let [showModalUpdate, setShowModalUpdate] = useState(false);
  let [showModalUpDown, setShowModalUpDown] = useState(false);

  useEffect(() => {
    dispatch(getAllEspecialities());
    dispatch(getAllProfessionals(0,10));
  }, []);

  return (
    <div>
      
<FilterProfessionals/>
      <ProfessionalsList
        setShowModalUpdate={setShowModalUpdate}
        setShowModalAdd={setShowModalAdd}
        setShowModalUpDown={setShowModalUpDown}
        setDeleteState={setDeleteState}
      />
      <ABMPaged getFunction={getAllProfessionals} />

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
