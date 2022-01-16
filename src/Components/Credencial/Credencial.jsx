import React, { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import  logo  from '../../assets/logo_white_large.png'

function Credencial({toggleClass}) {
  const [open, setOpen] = useState(true)
  const { user, route } = useSelector((state) => state.auth);
  const cancelButtonRef = useRef(null)


  // WARNING EN CONSOLA => There are no focusable elements inside the <FocusTrap /> 

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-80 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-80 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="h-full inline-block align-middle bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border-t-gray-200 border-t border-l-gray-200 border-l border-solid">
              <div className="px-4 pt-5 pb-5 sm:p-6">
                <div className="sm:flex  backdrop-filter backdrop-blur-lg">
                  <div className="mt-6 sm:mt-0 sm:ml-4 flex flex-col justify-evenly">
                    <img src={logo} alt="Logo" className="top-0 self-center w-full pb-8 "/>
                    <div className="mt-16 pt-14">
                      <h3 className="text-2xl text-white font-normal absolute bottom-20 pb-4 tracking-widest">
                        Nº AFILIADO {user.DNI}
                      </h3>
                      <h3 className="text-white font-normal text-xl absolute bottom-8 pb-4 tracking-widest">
                        NOMBRE {user.nombre} {user.apellido}
                      </h3>
                      <h3 className="text-white font-normal text-xl bottom-0 pb-2 pt-6 absolute tracking-widest">
                        PLAN {user.planID.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}



export default Credencial;
