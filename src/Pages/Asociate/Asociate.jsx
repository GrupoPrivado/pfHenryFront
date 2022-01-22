import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAsociate from "../../Components/FormAsociate/FormAsociate";
import FormAddAsociateGroup from "../../Components/FormAsociate/FormAddAsociateGroup";
//import { postAfiliate } from "../../actions/actionPlanes";
import { getPlanes } from "../../actions/actionPlanes";
import NavBar from "../../Components/NavBar/NavBar";
import { useTitle } from "../../hooks/useTitle";
import { getAllProvinces } from "../../actions/actionProviders";
import { alertActions } from "../../actions/actionAlerts";
import SuccessAlert from "../../Components/Alerts/SuccessAlert";
import ErrorAlert from "../../Components/Alerts/ErrorAlert";
import { useNavigate } from "react-router-dom";
import {alertSweet  } from '../../Components/Alerts/alertSweet'

export default function Asociate() {
  const [activeAlert, setActiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  const {provinces, cities} = useSelector(state => state.providers)
  useTitle("Asociate a ArpyMedical");
  
useEffect(() => {
  dispatch(getPlanes());
  dispatch(getAllProvinces())
}, [dispatch]);

  const [output, setOutput] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <div>
 
        
          <FormAsociate
            setAlertMessage={setAlertMessage}
            setActiveAlert={setActiveAlert}
            setErrorAlert={setErrorAlert}
            provinces={provinces}
            cities={cities}
            setOutput={setOutput}
            output={output}
            modal={modal}
            setModal={setModal}
          />
        
        {modal && (
          <FormAddAsociateGroup
            provinces={provinces}
            cities={cities}
            setOutput={setOutput}
            output={output}
            modal={modal}
            setModal={setModal}
          />
        )}

{activeAlert && alertSweet('success', alertMessage, false, false, setActiveAlert, !activeAlert , () => {}, false, 2500)}
            {errorAlert && alertSweet('error', alertMessage, false, false, setErrorAlert, !errorAlert , () => {},  false, 3000)}
    </div>
  );
}
