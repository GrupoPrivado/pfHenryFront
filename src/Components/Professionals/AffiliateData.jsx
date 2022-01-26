import React from "react";

const AffiliateData = ({ affiliateData }) => {
  return (
    <section className="grid grid-cols-2 gap-2 justify-items-center">
      <label className="col-span-2 justify-self-center">Nombre y Apellido: {affiliateData.nombre} {affiliateData.apellido}</label>
      {/* <label>Apellido: </label> */}
      <label>DNI: {affiliateData.DNI}</label>
      <label>Activo: {affiliateData.activo ? "Si" : "No"}</label>
      <label className="col-span-2 justify-self-center">E-mail: {affiliateData.correoElectronico}</label>
    </section>
  );
};

export default AffiliateData;
