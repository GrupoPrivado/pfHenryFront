import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../actions/actionAuth";
import SuccessAlert from "../Alerts/SuccessAlert";

function EditPassword({setErrorAlert, setAlertMessage}) {
  const dispatch = useDispatch();
  const [passwords, setPasswords] = useState({
    old: "",
    newPass: "",
    repeat: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if(passwords.newPass === passwords.repeat) {
      dispatch(changePassword(passwords));
      setPasswords({
        old: "",
        newPass: "",
        repeat: "",
      })
    } else {
      setErrorAlert(true)
      setAlertMessage('Las contraseñas deben coincidir')
    }
    // setTimeout(() => {
    //   {setActiveAlert}(true);
    // }, 1000);
    // setTimeout(() => {
    //   setActiveAlert(false);
    // }, 4000);

    //alert("Contraseña cambiada con exito")
  };

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-start w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm w-90vw sm:w-40vw sm:grid-cols-3 sm:grid-rows-5">
            <h3 className="col-span-4 row-span-1 text-2xl font-bold text-left text-primary">
              Actualizar Contraseña
            </h3>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="old">
                Contraseña Actual
              </label>
              <input
                type="password"
                name="old"
                value={passwords.old}
                onChange={handleChange}
                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                placeholder="Contraseña actual"
                required
              />
            </div>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="newPass">
                Nueva Contraseña
              </label>
              <input
                type="password"
                name="newPass"
                value={passwords.newPass}
                onChange={handleChange}
                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                placeholder="Nueva contraseña"
                required
              />
            </div>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="repeat">
                Repetir Contraseña
              </label>
              <input
                type="password"
                name="repeat"
                value={passwords.repeat}
                onChange={handleChange}
                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                placeholder="Repetir contraseña"
                required
              />
            </div>
            <div className="items-center col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-3 sm:row-span-1">
              <button
                type="submit"
                value="Cambiar Contraseña"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-semibold text-white border border-transparent rounded-md disabled:bg-gray-500 bg-primary group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                disabled={
                  !passwords.old || !passwords.newPass || !passwords.repeat
                }
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* {activeAlert && <SuccessAlert />} */}
    </div>
  );
}
export default EditPassword;

/*

  return (
    <div className="flex items-center justify-start w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm w-90vw sm:grid-cols-4 sm:grid-rows-2">
            <h3 className="col-span-4 row-span-1 text-2xl font-bold text-left text-primary">
              Actualizar Contraseña
            </h3>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="old">
                Contraseña Actual
              </label>
              <input
                type="password"
                name="old"
                value={passwords.old}
                onChange={handleChange}
                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                placeholder="Contraseña actual"
                required
              />
            </div>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="newPass">
                Nueva Contraseña
              </label>
              <input
                type="password"
                name="newPass"
                value={passwords.newPass}
                onChange={handleChange}
                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                placeholder="Nueva contraseña"
                required
              />
            </div>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
              <label className="text-lg font-semibold" htmlFor="repeat">
                Repetir Contraseña
              </label>
              <input
                type="password"
                name="repeat"
                value={passwords.repeat}
                onChange={handleChange}
                className="relative block w-full px-3 py-2 text-xl font-semibold text-gray-500 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 "
                placeholder="Repetir contraseña"
                required
              />
            </div>
            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-1 sm:row-span-1">
              <button
                type="submit"
                value="Cambiar Contraseña"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md disabled:bg-gray-500 bg-primary group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                disabled={
                  !passwords.old || !passwords.newPass || !passwords.repeat
                }
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );


*/
