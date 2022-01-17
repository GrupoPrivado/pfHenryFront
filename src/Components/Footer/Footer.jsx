import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-5 grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-2 pb-2 md:mb-0">
        <p className="text-gray-200">Nosotros</p>
        <ul className="pt-5 text-gray-400">
          <li>Quienes somos</li>
          <li>Fundación Arpy</li>
          <li>Capital Humano</li>
          <li>Staff</li>
        </ul>
      </div>
      <div className="md:col-span-2 pb-2 md:mb-0">
        <p className="text-gray-200">Centros</p>
        <ul className="pt-5 text-gray-400">
          <li>Nuestros Sanatorios</li>
          <li>Sanatorios Propios</li>
          <li>Centros Médicos</li>
          <li>Centro de Vacunación</li>
        </ul>
      </div>
      <div className="md:col-span-2 pb-2 md:mb-0">
        <p className="text-gray-200">Planes</p>
        <ul className="pt-5 text-gray-400">
        <li>Plan Bronce</li>
          <li>Plan Plata</li>
          <li>Plan Oro</li>
        </ul>
      </div>
      <div className="md:col-span-2 pb-2 md:mb-0">
        <p className="text-gray-200">Seguinos en nuestras redes</p>
        <ul className="pt-5 text-gray-400">
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Instragram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="md:col-span-4 pb-2 md:mb-0">
        <p className="text-gray-200">Newsletter Subscription</p>
        <div className="pt-5">
          <input
            type="text"
            className="rounded p-2 w-full"
            placeholder="@ Subscribe to our newsletter...."
          />
          <button className="bg-red-600 text-white px-3 py-2 rounded mt-2">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-5 md:col-span-12 text-center text-gray-400 pt-2">
      ArpyMedical Argentina S.A. CUIT: 30-34152354-3. Av. Córdoba  1710, 9º PISO. C.A.B.A.
      </div>
    </footer>
  );
};

export default Footer;


