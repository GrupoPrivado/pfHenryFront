import React from "react";

const AffiliateData = ({ affiliateData }) => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <label className="py-4 mt-8 text-3xl">Afiliado</label>
      <div className="flex gap-4">
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">Nombre y Apellido</label>
        <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.nombre} {affiliateData.apellido}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">DNI</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.DNI}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">Activo</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.activo ? "Si" : "No"}</label>
        </div>
        <div className="relative">
          <label className="absolute bg-white -top-[1.3rem] left-4 px-1 text-green-500">E-mail</label>
          <label className="resize-none ring-2 ring-stone-800 focus:ring-blue-500 outline-none rounded-md p-2 px-12">{affiliateData.correoElectronico}</label>
        </div>
      </div>
    </section>
  );
};

export default AffiliateData;
