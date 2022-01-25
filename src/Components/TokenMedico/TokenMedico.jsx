import React, { useEffect, useState, Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMedicalToken, getNewMedicalToken } from "../../actions/actionAuth";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import logo from "../../assets/logo_white_large.png";
import { motion } from "framer-motion";
import { SpinnerCircular } from "spinners-react";

export const TokenMedico = ({ toggleClass }) => {
  const [active, setActive] = useState(true);
  const { medicalToken, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    // if (medicalToken.length < 3) dispatch(getMedicalToken())
    if (medicalToken.length === 3) setActive(false);
  }, [medicalToken.length]);

  const newToken = () => {
    const { error } = dispatch(getNewMedicalToken());
    if (error) {
      setActive(false);
    }
  };

  const [open, setOpen] = useState(true);
  const { user, route } = useSelector((state) => state.auth);
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="transition-opacity bg-gray-900 bg-opacity-90">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block h-full overflow-hidden align-middle transition-all transform border-t border-l border-solid shadow-xl bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border-t-gray-200 border-l-gray-200">
              <div className="px-4 pt-5 pb-5 sm:p-6">
                <div className="sm:flex backdrop-filter backdrop-blur-lg">
                  <div className="flex flex-col items-center mt-6 sm:mt-0 justify-evenly">
                    <img src={logo} alt="Logo" className="w-full pb-2 " />
                    <h1 className="pb-4 text-2xl font-normal tracking-widest text-white">
                      Token Medico
                    </h1>
                    {
                      isLoading ? (<SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }}/>) : (<motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 mt-2"
                      >
                        {medicalToken.length ?
                          medicalToken.map((token, index) => (
                            <h3
                              key={index}
                              className="pb-4 text-2xl font-normal tracking-widest text-white"
                            >
                              {token}
                            </h3>
                          )) : <p>¡Genera un nuevo token!</p>}
  
                        {active && (
                          <button
                            onClick={newToken}
                            className="relative flex justify-center w-40 px-4 py-2 m-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md group hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Nuevo Token
                          </button>
                        )}
                      </motion.div>)
                    }
                    
                    <button
                      name="token"
                      onClick={toggleClass}
                      className="self-end w-20 p-1 text-lg font-bold bg-white border-2 rounded-md text-primary hover:bg-primary border-primary hover:text-white hover:border-2 hover:border-white"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    // <div className="relative flex flex-col justify-center p-4 bg-white md:col-span-2 md:row-span-2 shrink-0 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined">
    //     <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
    //         <h1>Tokens</h1>
    //     </div>
    //     <div className='flex flex-col justify-around px-2.5 w-full font-normal text-white shrink-0'>
    //         {medicalToken.length && medicalToken.map((token, index) =>
    //             <div key={index}>
    //                 {token}
    //             </div>)}

    //         {
    //             active && <button onClick={newToken}>Nuevo Token</button>
    //         }

    // </div>
  );
};
