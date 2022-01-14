import React, { Fragment, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'

function Credencial({toggleClass}) {
  const [open, setOpen] = useState(true)
  const { user, route } = useSelector((state) => state.auth);
  const cancelButtonRef = useRef(null)

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
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg name='credencial' xmlns="http://www.w3.org/2000/svg" className="h-28 w-28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 items-center">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Credencial
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      
                        Nombre: <label>{user.nombre}</label>
                        <hr/>
                        Apellido: <label>{user.apellido}</label>
                        <hr/>
                        DNI: <label>{user.DNI}</label>
                        <hr/>
                        Plan: <label>{user.codePlan}</label>
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    // <div name='credencial' onClick={toggleClass} className="fixed z-10 inset-0 overflow-y-auto">
    //   <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    //     <div className="flex absolute bg-secondary flex-col">
    //       <label>{user.nombre}</label>
    //       <label>{user.apellido}</label>
    //       <label>{user.DNI}</label>
    //       <label>{user.codePlan}</label>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Credencial;
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Credencial() {
//   const { user, route } = useSelector((state) => state.auth);

//   return (
//     <div className="absolute w-screen h-screen inset-8">
//       <div className="flex absolute  bg-secondary flex-col">
//         <label>{user.nombre}</label>
//         <label>{user.apellido}</label>
//         <label>{user.DNI}</label>
//         <label>{user.codePlan}</label>
//       </div>
//     </div>
//   )
// }

// export default Credencial;
