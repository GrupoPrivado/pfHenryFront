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
 
        <div className="relative">
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
        </div>
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

      {activeAlert && <SuccessAlert message={alertMessage} />}
      {errorAlert && <ErrorAlert message={alertMessage} />}
    </div>
  );
}
