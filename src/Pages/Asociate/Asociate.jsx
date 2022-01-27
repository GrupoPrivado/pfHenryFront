import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAsociate from "../../Components/FormAsociate/FormAsociate";
import FormAddAsociateGroup from "../../Components/FormAsociate/FormAddAsociateGroup";
import { getPlanes } from "../../actions/actionPlanes";
import { useTitle } from "../../hooks/useTitle";
import { getAllProvinces } from "../../actions/actionProviders";
import { alertActions } from "../../actions/actionAlerts";
import { useNavigate } from "react-router-dom";
import {alertSweet  } from '../../Components/Alerts/alertSweet'
import EditFamiliar from "../../Components/FormAsociate/EditFamiliar";

export default function Asociate() {
  const [activeAlert, setActiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [editModal, setEditModal] = useState(false)
  const { type, message } = useSelector((state) => state.alerts);

  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    if (!activeAlert || !errorAlert) {
      dispatch(alertActions.clear());
    }
    if (type === "alert-success") {
      setActiveAlert(true);
      setAlertMessage('Registro exitoso');
      setTimeout(() => {
        navigate('/login')
        
      }, 2800);
    }
    if (type === "alert-danger") {
      setErrorAlert(true);
      setAlertMessage(message);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, type]);

  const {provinces, cities} = useSelector(state => state.providers)
  useTitle("Asociate a ArpyMedical");
  
useEffect(() => {
  dispatch(getPlanes());
  dispatch(getAllProvinces())
}, [dispatch]);

  const [modal, setModal] = useState(false);

  return (
    <div>      
          <FormAsociate
            provinces={provinces}
            cities={cities}
            modal={modal}
            setModal={setModal}
            setEditModal={setEditModal}
          />
        
        {modal && (
          <FormAddAsociateGroup
            provinces={provinces}
            cities={cities}
            modal={modal}
            setModal={setModal}
          />
        )}
      {editModal && <EditFamiliar provinces={provinces} cities={cities} setEditModal={setEditModal} /> }

      {activeAlert && alertSweet('success', alertMessage, false, false, setActiveAlert, !activeAlert , () => {}, false, 2500)}
      {errorAlert && alertSweet('error', alertMessage, false, false, setErrorAlert, !errorAlert , () => {},  false, 2800)}
    </div>
  );
}
