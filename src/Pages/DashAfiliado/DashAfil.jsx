import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashAuthorizations from "../../Components/DashAuthorizations/DashAuthorizations";
import FamilyGroupDash from "../../Components/FamilyGroup/FamilyGroupDash";
import MedicalHistory from "../../Components/MedicalHistory/MedicalHistory";
import { TokenMedico } from "../../Components/TokenMedico/TokenMedico";
import Logo from "./../../assets/bg2.jpg";
import { useNavigate } from "react-router-dom";
import { getGroup } from "../../actions/actionGroup";
import {
  // getItem,
  getAfiliate,
  getMedicalToken,
  removeItem,
} from "../../actions/actionAuth";
import Credencial from "../../Components/Credencial/Credencial";
import { getRecetas } from "../../actions/actionRecet";
import { motion } from "framer-motion";
import { IdentificationIcon, KeyIcon } from "@heroicons/react/outline";
import { getHistorial } from "../../actions/actionConsultas";
// import Modal from "../../Components/Modal/Modal";

function DashAfil() {
  const { user, route } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [isActive, setActive] = useState({
    credencial: false,
    token: false,
    farmacia: false,
    cartilla: false,
  });

  useEffect(() => {
    dispatch(getAfiliate());
    // if (route === "login") {
    //   removeItem("userType");
    //   navigate(`/${route}`);
    // }
    // if (route !== "") {
    //   navigate(`/${route}`);
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user.grupFamID) dispatch(getGroup(user.grupFamID));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.grupFamID]);

  useEffect(() => {
    dispatch(getRecetas());
    dispatch(getHistorial());
    dispatch(getRecetas());
    dispatch(getMedicalToken());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const { medicalToken } = useSelector((state) => state.auth);
  //   useEffect(() => {
  //     // if (medicalToken.length === 3) setActive(false)
  //   }, []);

  const toggleClass = (e) => {
    const name = e.target.getAttribute("name");
    const modal = isActive[name];
    setActive({
      ...isActive,
      [name]: !modal,
    });
  };
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');\n\n\t* {\n\t\tfont-family: 'Noto Sans JP', sans-serif;\n\t}\n\n\t.bg-app {\n\t\tbackground-image: url('');\n\t}\n",
        }}
      />
      <div
        className="flex flex-row items-center justify-center min-h-[70vh] bg-center bg-no-repeat bg-cover bg-app"
        style={{ backgroundImage: `url(${Logo})` }}
      >
        <main className="flex flex-col w-full max-w-5xl m-4 overflow-hidden bg-white shadow-lg lg:flex-row backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl lg:m-6">
          <div className="flex-1 p-4 lg:p-6">
            <div className="flex items-center mb-8 text-4xl text-white">

              <div className="ml-4 font-bold">Bienvenidx {user.nombre}</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-3 md:grid-rows-2 md:grid-cols-3">
              <MedicalHistory />
              <DashAuthorizations />
              <FamilyGroupDash />


              <div
                name="credencial"
                onClick={toggleClass}
                className="relative flex flex-col items-center justify-start object-top p-4 bg-white cursor-pointer rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined"
              >
                {/* <div className="flex flex-col items-center justify-start mt-4 mb-2 text-lg text-center text-white"> */}
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-start mt-4 mb-2 text-lg text-center text-white"
                >
                  <label
                    name="credencial"
                    className="text-xl font-medium cursor-pointer"
                  >
                    Credencial
                  </label>
                  <button name="credencial" onClick={toggleClass}>
                    <IdentificationIcon className="text-white pointer-events-none h-28 w-28" />
                  </button>
                </motion.div>
                {/* </div> */}
              </div>
              {isActive.credencial && (
                <Credencial
                  toggleClass={toggleClass}
                  name={user.nombre}
                  lastname={user.apellido}
                  dni={user.DNI}
                  plan={user.planID.name}
                />
              )}

              <div
                name="token"
                onClick={toggleClass}
                className="relative flex flex-col items-center justify-start object-top p-4 bg-white cursor-pointer rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined"
              >
                {/* <div className="flex flex-col items-center justify-start mt-4 mb-2 text-lg text-center text-white"> */}
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-start mt-4 mb-2 text-lg text-center text-white"
                >
                  <label
                    name="token"
                    className="text-xl font-medium cursor-pointer "
                  >
                    Token
                  </label>
                  <button name="token" onClick={toggleClass}>
                    <KeyIcon className="text-white pointer-events-none h-28 w-28" />
                  </button>
                  {/* </div> */}
                </motion.div>
              </div>
              {isActive.token && <TokenMedico toggleClass={toggleClass} />}
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

export default DashAfil;
