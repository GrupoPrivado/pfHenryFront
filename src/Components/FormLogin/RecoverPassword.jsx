import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import Logo from "../../assets/logo.svg";
import { getUserToken, recoverPassword } from "../../utils/authUtils";

function RecoverPassword({setForm, activeForm, handleChangeAlerts}) {
  const [input, setInput] = useState({
    DNI: "",
    correoElectronico: "",
    tipoUsuario: "afiliado",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await recoverPassword(input);
    if(result.success){
        handleChangeAlerts('success', result.message, true)
        setTimeout(() => {
            //handleChangeAlerts('success', '', false)
            navigate('/')
        }, 4000);
    } else {
        handleChangeAlerts('error', result.message, true)
        setTimeout(() => {
            handleChangeAlerts('error', '', false)
        }, 5000);
    }
  };

  const styles = {
    contenedor:
      "min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
    img: "mx-auto h-12 w-auto",
  };

  return (
    <div className={styles.contenedor}>
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
        </div>
        <form className="mt-8 space-y-6 ">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <select
              name="tipoUsuario"
              value={input.tipoUsuario}
              onChange={handleChange}
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              <option value="afiliado">Afiliado</option>
              <option value="profesional">Profesional</option>
              <option value="administrador">Administrador</option>
            </select>
            <div>
              <label htmlFor="dni" className="sr-only">
                DNI
              </label>
              <input
                id="dni"
                name="DNI"
                type="dni"
                autoComplete="dni"
                
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="DNI"
                onChange={(e) => handleChange(e)}
                value={input.DNI}
              />
            </div>
            <div>
              <label htmlFor="correoElectronico" className="sr-only">
                Contraseña
              </label>
              <input
                id="correoElectronico"
                name="correoElectronico"
                type="text"

                
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Correo Electrónico"
                onChange={(e) => handleChange(e)}
                value={input.correoElectronico}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setForm(!activeForm)}>...volver al inicio de sesión </button>
            </div>
          </div>

          <div>
            <button
            type="submit"
              onClick={handleSubmit}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Recuperar Contraseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecoverPassword;
