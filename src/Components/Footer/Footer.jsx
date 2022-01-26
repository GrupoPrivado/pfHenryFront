import React from "react";
import { useLocation } from "react-router-dom";
import fbIcon from "./../../assets/facebook-svgrepo-com.svg"
import IgIcon from "./../../assets/instagram-svgrepo-com.svg"
import InIcon from "./../../assets/linkedin-svgrepo-com.svg"

const Footer = () => {
  const location = useLocation();

  const actualRoute = location.pathname !== "/login";

  return (
    <>
      {actualRoute && (
        <footer className="grid items-start grid-cols-1 p-5 bg-gray-800 md:justify-items-center md:grid-cols-8">
          <div className="pb-2 md:col-span-2 md:mb-0">
            <p className="text-gray-200">Nosotros</p>
            <ul className="pt-5 text-gray-400">
              <li>Quienes somos</li>
              <li>Fundación Arpy</li>
              <li>Capital Humano</li>
              <li>Staff</li>
            </ul>
          </div>
          <div className="pb-2 md:col-span-2 md:mb-0">
            <p className="text-gray-200">Centros</p>
            <ul className="pt-5 text-gray-400">
              <li>Nuestros Sanatorios</li>
              <li>Sanatorios Propios</li>
              <li>Centros Médicos</li>
              <li>Centro de Vacunación</li>
            </ul>
          </div>
          <div className="pb-2 md:col-span-2 md:mb-0">
            <p className="text-gray-200">Planes</p>
            <ul className="pt-5 text-gray-400">
              <li>Plan Bronce</li>
              <li>Plan Plata</li>
              <li>Plan Oro</li>
              <li>Plan Platinum</li>
            </ul>
          </div>
          <div className="pb-2 md:col-span-2 md:mb-0">
            <p className="text-gray-200">Seguinos en nuestras redes</p>
            <ul className="flex items-center pt-5 mt-5 text-gray-400 md:justify-center">
              <li>
                <a href="https://www.facebook.com/" target="blank">
                  <img className="w-8 h-8 mr-1" src={fbIcon} alt="Facebook Icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="blank">
                  <img className="w-8 h-8 mr-1" src={IgIcon} alt="Instagram Icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="blank">
                  <img className="w-8 h-8 mr-1" src={InIcon} alt="Linkedin Icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-2 mt-5 text-center text-gray-400 md:col-span-12">
            ArpyMedical Argentina S.A. CUIT: 30-34152354-3. Av. Córdoba 1710, 9º
            PISO. C.A.B.A.
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
