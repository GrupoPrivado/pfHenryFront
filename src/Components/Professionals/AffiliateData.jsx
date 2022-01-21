import React from "react";

const AffiliateData = ({ affiliateData }) => {
  return (
    <div>
      <label>DNI: {affiliateData.DNI}</label>
      <label>Apellido: {affiliateData.apellido}</label>
      <label>Nombre: {affiliateData.nombre}</label>
      <label>E-mail: {affiliateData.correoElectronico}</label>
      <label>Activo: {affiliateData.activo ? "Si" : "No"}</label>
    </div>
  );
};

export default AffiliateData;
