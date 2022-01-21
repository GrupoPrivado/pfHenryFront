import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAfiliate, getItem, removeItem } from "../../actions/actionAuth";
import { alertActions } from "../../actions/actionAlerts";

import EditImage from "./EditImage";
import EditPassword from "./EditPassword";
import EditProfile from "./EditProfile";
import SuccessAlert from "../Alerts/SuccessAlert";
import ErrorAlert from "../Alerts/ErrorAlert";
import { getAllCities, getAllProvinces } from "../../actions/actionProviders";
import {alertSweet} from '../Alerts/alertSweet'




function Perfil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, route, data } = useSelector((state) => state.auth);
  const { type, message } = useSelector((state) => state.alerts);

  const [activeAlert, setActiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const { cities, provinces } = useSelector((state) => state.providers);

  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (!data) {
      dispatch(getAfiliate(getItem()));
    }
    if (provinces.length === 0) dispatch(getAllProvinces());

    if (user.provinciaID) dispatch(getAllCities(user.provinciaID));
  }, [user.provinciaID]);

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

    // if (!data) {
    //   dispatch(getAfiliate(getItem()));
    // }
    if (route !== "") {
      removeItem("userType");
      navigate(`/${route}`);
    }

  }, [route, message, type, activeAlert, errorAlert]);


  return (
    <div className="mt-12">
      <h1 className="col-span-4 row-span-1 mb-10 ml-8 text-4xl font-bold  text-primary text-center">
        Mi Cuenta
      </h1>
      <div className="grid items-center grid-cols-1 grid-rows-1 sm:grid-rows-1 sm:grid-cols-2">
        <EditImage photo={user.urlPhoto} />
        <EditPassword
          setErrorAlert={setErrorAlert}
          setAlertMessage={setAlertMessage}
        />
      </div>
      <EditProfile user={user} data={data} />

      {activeAlert && alertSweet('success', alertMessage, false, false, setActiveAlert, !activeAlert , () => {}, false, 2500)}
      {errorAlert && alertSweet('error', alertMessage, false, false, setErrorAlert, !errorAlert , () => {},  false, 2500)}

    </div>
  );
}

export default Perfil;
