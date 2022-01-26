import React from "react";
import Logo from "./../../assets/logo_white_large.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { SpinnerCircular } from "spinners-react";

function CardReceta({ setModal, modal }) {
  const { detail, isLoading } = useSelector((state) => state.recetas);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center transition-opacity bg-gray-900 bg-opacity-90"
    >
      <span
        className="flex items-center justify-center sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <div className="z-10 flex items-center justify-center p-4 overflow-hidden transition-all transform border-t border-l border-solid shadow-xl w-40vw bg-gradient-to-b from-white-rgba to-white-rgba2 rounded-3xl sm:my-8 sm:align-middle border-t-gray-200 border-l-gray-200">
        <div className="flex flex-col space-y-8">
          <img className="self-center w-4/5" src={Logo} alt="Logo Arpi" />
          {isLoading ? (
            <SpinnerCircular style={{ margin: 'auto', paddingTop: '20px' }} />
          ) : (
            <>
              <div className="flex flex-col items-center w-full text-white">
                <h3 className="pb-2 text-2xl font-semibold">
                  Receta Nº {detail.numReceta}
                </h3>
                <h4 className="pb-2 text-xl font-medium">
                  {detail.tipoReceta}
                </h4>
                <p className="p-8 text-4xl">{detail.descripcion}</p>
              </div>
              <div className="flex flex-col w-full text-center text-white">
                <h3 className="text-2xl font-bold">
                  Dr. {detail.profesionalID.nombre}{" "}
                  {detail.profesionalID.apellido}
                </h3>
                <h4 className="text-xl font-bold">
                  Especialista en {detail.profesionalID.especID.nombre}
                </h4>
                <h5 className="text-lg font-semibold">
                  M.P {detail.profesionalID.matricula}
                </h5>
              </div>
            </>
          )}

          <button
            className="self-end w-20 p-1 m-5 text-lg font-bold bg-white border-2 rounded-md text-primary hover:bg-primary border-primary hover:text-white hover:border-2 hover:border-white"
            onClick={() => setModal(!modal)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default CardReceta;
