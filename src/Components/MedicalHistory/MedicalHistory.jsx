import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHistorial } from "../../actions/actionConsultas";
import { motion } from "framer-motion";
function MedicalHistory() {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { consultas } = useSelector((state) => state.consultas);
  // useEffect(() => {
  //     dispatch(getHistorial())
  // }, [dispatch])

  return (
    <Link
      className="relative flex flex-col justify-center p-4 bg-white md:col-span-1 rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-20 undefined sm:row-span-1 sm:col-span-3 md:row-span-1"
      to="/afiliado/historial"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5 }}
      >
        <div className="mt-4 mb-2 text-lg font-medium text-center text-white">
          <h3>Historial Médico</h3>
        </div>
        <div className="flex flex-col px-2.5 font-normal text-white w-full shrink-0">
          {consultas ? (
            consultas.map((el) => (
              <li
                key={el._id}
                className="flex justify-between text-left sm:px-10 md:px-0"
              >
                <p>{el.fechaConsulta}</p>
                <p>{el.especID.nombre}</p>
              </li>
            ))
          ) : (
            <div>
              <h3 className="text-center">Sin Recetas</h3>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

export default MedicalHistory;
