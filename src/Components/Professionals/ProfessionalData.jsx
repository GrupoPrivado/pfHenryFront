import React from "react";

const ProfessionalData = ({ professionalData }) => {
  return (
    <section className="grid grid-cols-2 gap-2 justify-center">
      <label className="col-span-2 justify-self-center">Nombre y Apellido: {professionalData.nombre}{professionalData.apellido}</label>
      {/* <label>Apellido: </label> */}
      <label>DNI: {professionalData.DNI}</label>
      <label>Matrícula: {professionalData.matricula}</label>
      <label className="col-span-2 justify-self-center">E-mail: {professionalData.mail}</label>
    </section>
  );
};

export default ProfessionalData;
