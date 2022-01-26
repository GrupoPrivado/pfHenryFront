import React, { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import  logo  from '../../assets/logo_white_large.png'
import { motion } from "framer-motion";

function Credencial({toggleClass, name, lastname, dni, plan}) {
  const [open, setOpen] = useState(true)
  const { user, route } = useSelector((state) => state.auth);
  const cancelButtonRef = useRef(null)
  // WARNING EN CONSOLA => There are no focusable elements inside the <FocusTrap /> 

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto  transition-opacity bg-gray-900 bg-opacity-75" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
            <div className="inline-block h-full overflow-hidden align-middle transition-all transform border-t border-l border-solid shadow-xl bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border-t-gray-200 border-l-gray-200">
              <div className="px-4 pt-5 pb-5 sm:p-6">
                <div className="sm:flex backdrop-filter backdrop-blur-lg">
                  <motion.div                         animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }} className="flex flex-col mt-6 sm:mt-0 sm:ml-4 justify-evenly">
                      <img src={logo} alt="Logo" className="top-0 self-center w-full pb-8 "/>
                    <div className="mt-16 pt-14">
                      <h3 className="absolute pb-4 text-2xl font-normal tracking-widest text-white bottom-20">
                        Nº AFILIADO {dni}
                      </h3>
                      <h3 className="absolute pb-4 text-xl font-normal tracking-widest text-white bottom-8">
                        NOMBRE {name} {lastname}
                      </h3>
                      <h3 className="absolute bottom-0 pt-6 pb-2 text-xl font-normal tracking-widest text-white">
                        PLAN {plan}
                      </h3>
                    </div>
                    <button name="credencial" onClick={toggleClass} className="self-end w-20 p-1 text-lg font-bold bg-white border-2 rounded-md text-primary hover:bg-primary border-primary hover:text-white hover:border-2 hover:border-white">Cerrar</button>
                  </motion.div>
                </div>
              </div>
            </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}



export default Credencial;
