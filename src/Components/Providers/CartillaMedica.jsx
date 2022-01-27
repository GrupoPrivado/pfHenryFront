import React
// , { useEffect } 
from "react";
import { SpinnerCircular } from "spinners-react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllProviders } from "./../../actions/actionProviders";

function CartillaMedica({ providers, isLoading }) {
  return (
    <div className="flex flex-col w-full bg-cover start min-h-70vh contenair mb-10">
      <table className="mx-auto text-gray-900 bg-white shadow-none w-90vw bg-opacity-40 rounded-tl-xl rounded-tr-xl backdrop-filter backdrop-blur-lg">
        <thead>
          <tr>
            <th className="p-2 w-[340px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Profesional
            </th>
            <th className="p-2 w-[300px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Especialidad
            </th>
            <th className="p-2 w-[280px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              E-mail
            </th>
            <th className="p-2 w-[200px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Teléfono
            </th>
            <th className="p-2 w-[300px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Provincia
            </th>
            <th className="p-2 w-[300px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Localidad
            </th>
          </tr>
        </thead>
      </table>

      {isLoading ? (
        <SpinnerCircular
          color="#fff"
          style={{ margin: "auto", paddingTop: "20px" }}
        />
      ) : (
        <table className="mx-auto text-gray-900 bg-white shadow-none w-90vw bg-opacity-40 rounded-br-xl rounded-bl-xl backdrop-filter backdrop-blur-lg">
          <tbody>
            {providers.length ? (
              providers.map((prof, index) => (
                <tr
                  key={index}
                  className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg"
                >
                  <td className="p-2 w-[340px]">
                    Dr. {prof.nombre} {prof.apellido}
                  </td>
                  <td className="p-2 w-[300px]">{prof.especID.nombre}</td>
                  <td className="p-2 w-[280px]">{prof.mail}</td>
                  <td className="p-2 w-[200px]">{prof.telefono}</td>
                  <td className="p-2 w-[300px]">{prof.provinciaID.nombre}</td>
                  <td className="p-2 w-[300px]">{prof.ciudadID.localidad}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
                <td className="p-2">Sin profesionales activos</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CartillaMedica;
