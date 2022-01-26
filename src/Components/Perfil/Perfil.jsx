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
import { alertSweet } from '../Alerts/alertSweet'
import PersonalDetails from "./PersonalDetails";




function Perfil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, route, data } = useSelector((state) => state.auth);
  const { type, message } = useSelector((state) => state.alerts);

  const [activeAlert, setActiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const { cities, provinces } = useSelector((state) => state.providers);

  const [alertMessage, setAlertMessage] = useState("");
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (!data) {
      dispatch(getAfiliate());
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

    // if (route === "login") {
    //   removeItem("userType");
    //   navigate(`/${route}`);
    // }
    // if (route !== "") {
    //   navigate(`/${route}`);
    // }

  }, [ message, type, activeAlert, errorAlert]);

  const handleClick = () => {
    setModal(!modal)
  }

  return (
    <div className="mt-12">
      <h1 className="col-span-4 row-span-1 mb-10 ml-8 text-4xl font-bold text-left text-primary">
        Mi Cuenta
      </h1>
      <div className="grid items-center grid-cols-1 grid-rows-1 sm:grid-rows-1 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-evenly">
          <EditImage photo={user.urlPhoto} />
          <button
            onClick={handleClick}
            className="flex justify-center px-4 py-2 mx-auto text-sm font-semibold text-white border border-transparent rounded-md w-52 mt-7 disabled:bg-gray-500 bg-primary group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Cambiar Contraseña
          </button>
        </div>
        <PersonalDetails user={user} />
      </div>
      <EditProfile user={user} data={data} />
      {modal && (
        <EditPassword
        setErrorAlert={setErrorAlert}
        setAlertMessage={setAlertMessage}
        modal={modal}
        setModal={setModal}
      /> 
      )}

      {activeAlert && alertSweet('success', alertMessage, false, false, setActiveAlert, !activeAlert, () => { }, false, 2500)}
      {errorAlert && alertSweet('error', alertMessage, false, false, setErrorAlert, !errorAlert, () => { }, false, 2500)}

    </div>
  );
}

export default Perfil;
