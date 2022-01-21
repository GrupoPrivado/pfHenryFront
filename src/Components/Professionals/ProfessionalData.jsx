import React from "react";

const ProfessionalData = ({ professionalData }) => {
  return (
    <div>
      <label>DNI: {professionalData.DNI}</label>
      <label>Apellido: {professionalData.apellido}</label>
      <label>Nombre: {professionalData.nombre}</label>
      <label>E-mail: {professionalData.mail}</label>
      <label>Matrícula: {professionalData.matricula}</label>
    </div>
  );
};

export default ProfessionalData;
