import React from "react";

const ProfessionalData = ({ professionalData }) => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <label className="py-4 text-3xl">Profesional</label>
      <div className="flex gap-4">
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">Nombre y Apellido</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{professionalData.nombre}{professionalData.apellido}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">DNI</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{professionalData.DNI}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">Matrícula</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{professionalData.matricula}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">E-mail</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{professionalData.mail}</label>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalData;
