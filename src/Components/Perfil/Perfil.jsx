import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAfiliate, getItem, removeItem } from "../../actions/actionAuth";
import { alertActions } from "../../actions/actionAlerts";

import EditImage from "./EditImage";
import EditPassword from "./EditPassword";
import EditProfile from "./EditProfile";
import SuccessAlert from "../Alerts/SuccessAlert";

function Perfil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, route, data, error } = useSelector((state) => state.auth);
  const { type, message } = useSelector((state) => state.alerts);



  const [activeAlert, setActiveAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    dispatch(alertActions.clear());

    if (type) {
      setActiveAlert(true)
      setAlertMessage(message);
    }

    if (!data) {
      dispatch(getAfiliate(getItem()));
    }
    if (route !== "") {
      removeItem("userType");
      navigate(`/${route}`);
    }
  }, [dispatch, route, navigate, data, message, type]);


     setTimeout(() => {
       setActiveAlert(false);
     }, 4000);

  return (
    <div className="mt-4">
      <h1 className="col-span-4 row-span-1 mb-10 ml-8 text-4xl font-bold text-left text-primary">
        Mi Cuenta
      </h1>
      <div className="grid items-center grid-cols-1 grid-rows-1 sm:grid-rows-1 sm:grid-cols-2">
        <EditImage photo={user.urlPhoto} />
        <EditPassword error={error} />
      </div>
      <EditProfile user={user} data={data} />

      {activeAlert && <SuccessAlert message={alertMessage} />}
    </div>
  );
}

export default Perfil;
