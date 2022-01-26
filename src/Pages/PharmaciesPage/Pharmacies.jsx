import React from "react";
import { SpinnerCircular } from "spinners-react";
import Logo from "./../../assets/bg2.jpg";

const Pharmacies = ({ pharmacies, isLoading }) => {
  return (
    <div
      className="flex flex-col w-full bg-cover start min-h-70vh contenair"
      style={{ backgroundImage: `url(${Logo})` }}
    >
      <table className="mx-auto mt-10 text-gray-900 bg-white shadow-none w-90vw bg-opacity-40 rounded-tl-xl rounded-tr-xl backdrop-filter backdrop-blur-lg">
        <thead>
          <tr>
            <th className="p-2 w-[300px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Nombre
            </th>
            <th className="p-2 w-[130px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Teléfono
            </th>
            <th className="p-2 w-[280px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Mail
            </th>
            <th className="p-2 w-[320px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Dirección
            </th>
            <th className="p-2 w-[200px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Provincia
            </th>
            <th className="p-2 w-[420px] text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">
              Localidad
            </th>
          </tr>
        </thead>
      </table>

      {isLoading ? (
        <SpinnerCircular color="#fff"  style={{ margin: "auto", paddingTop: "20px" }} />
      ) : (
        <table className="mx-auto text-gray-900 bg-white shadow-none w-90vw bg-opacity-40 rounded-br-xl rounded-bl-xl backdrop-filter backdrop-blur-lg">
          <tbody>
            {pharmacies.length ? (
              pharmacies.map((p) => (
                <tr
                  key={p._id}
                  className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg"
                >
                  <td className="p-2 w-[300px]">{p.nombre}</td>
                  <td className="p-2 w-[130px]">{p.telefono}</td>
                  <td className="p-2 w-[280px]">{p.mail}</td>
                  <td className="p-2 w-[320px]">{p.direccion}</td>
                  <td className="p-2 w-[200px]">{p.provinciaID.nombre}</td>
                  <td className="p-2 w-[420px]">{p.ciudadID.localidad}</td>
                </tr>
              ))
            ) : (
              <tr className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
                <td className="p-2">Sin consultas</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      
    </div>
  );
};

export default Pharmacies;
