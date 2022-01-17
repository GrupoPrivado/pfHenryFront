import React from "react";

const Pharmacies = ({ pharmacies }) => {
    console.log(pharmacies)
  return (
    <table className="bg-white text-gray-900 shadow-none w-80vw mx-auto mt-10">
      <thead>
        <tr>
          <th className="bg-primary text-white p-2">Nombre</th>
          <th className="bg-primary text-white p-2">Teléfono</th>
          <th className="bg-primary text-white p-2">Mail</th>
          <th className="bg-primary text-white p-2 w-auto">Dirección</th>
          <th className="bg-primary text-white p-2 w-auto">Provincia</th>
          <th className="bg-primary text-white p-2 w-auto">Ciudad</th>
        </tr>
      </thead>
      <tbody>
        {pharmacies &&
          pharmacies.map((p) => (
            <tr key={p._id} className="bg-blue-100 text-blue-900 text-center">
              <td className="p-2">{p.nombre}</td>
              <td className="p-2">{p.telefono}</td>
              <td className="p-2">{p.mail}</td>
              <td className="p-2">{p.direccion}</td>
              <td className="p-2">{p.provinciaID.nombre}</td>
              <td className="p-2">{p.ciudadID.localidad}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Pharmacies;
