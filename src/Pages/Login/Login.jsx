import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../Components/FormLogin/FormLogin";
import HappyFamily from "./../../assets/happyFamily.jpeg";
import { getItem } from "../../actions/actionAuth";
import { useTitle } from "../../hooks/useTitle";
import RecoverPassword from "../../Components/FormLogin/RecoverPassword";
import { alertSweet } from "../../Components/Alerts/alertSweet";
import {motion} from 'framer-motion'
//import Logo from "./../../assets/logo.svg"
// import NavBar from "../../Components/NavBar/NavBar";
// import Logo from "../../assets/logo.svg";
// import SuccessAlert from "../../Components/Alerts/SuccessAlert";
// import ErrorAlert from "../../Components/Alerts/ErrorAlert";

function Login() {
  const [activeForm, setForm] = useState(false);
  const navigate = useNavigate();
  useTitle("Ingresa a tu ArpyMedical");

  const [activeAlert, setActiveAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const handleChangeAlerts = (type, message, set) => {
    if (type === "error") {
      setErrorAlert(set);
      setAlertMessage(message);
    }
    if (type === "success") {
      setActiveAlert(set);
      setAlertMessage(message);
    }
  };
  
  useEffect(() => {
    const userType = getItem("userType");
    if (userType) navigate(`/${userType}`);
  }, [navigate]);
  //
  return (
    <motion.div className="w-screen h-[91vh]" animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.15 }}>
      <div className="flex w-full h-full">
        <div className="flex justify-center w-1/2 h-full">
          <img
            className="object-cover w-screen "
            src={HappyFamily}
            alt="Happy family Arpi Medical"
          />
        </div>
        <div className="w-1/2 flex flex-column items-center justify-center">
          <div>
            {activeForm ? (
              <RecoverPassword
                setForm={setForm}
                activeForm={activeForm}
                handleChangeAlerts={handleChangeAlerts}
              />
            ) : (
              <FormLogin
                setForm={setForm}
                activeForm={activeForm}
                handleChangeAlerts={handleChangeAlerts}
              />
            )}
          </div>
        </div>
      </div>
      {activeAlert &&
        alertSweet(
          "success",
          alertMessage,
          false,
          false,
          () => {},
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
          3000
        )}
    </motion.div>
  );
}

export default Login;

/*
  return (
    <div className="w-screen h-[91vh]">
      <div className="flex w-full h-full">
        <div className="flex justify-center w-1/2 h-full">
          <img
            className="object-cover w-screen "
            src={HappyFamily}
            alt="Happy family Arpi Medical"
          />
        </div>
        <div className="w-1/2 flex flex-column items-center justify-center">
          <div>


            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

*/
