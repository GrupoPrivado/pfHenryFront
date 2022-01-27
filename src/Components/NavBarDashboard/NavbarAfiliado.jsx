import React, {
  //  useEffect,
    useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../utils/authUtils";
import { useSelector } from "react-redux";
import { profilePhoto } from "../../utils/constantes";
import styles from './NavbarAfiliado.module.css'

const NavbarAfiliado = () => {
  let activeClassName =
    "bg-secondary text-white px-3 py-2 rounded-md text-sm font-medium";
  let disabledClassName =
    "text-primary hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  const location = useLocation();

  const [isOpen, setIsOpen] = useState();
  const [isActive, setActive] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleClass = () => {
    setActive(!isActive);
  };

  let classActive = isActive ? styles.active : '';

  const { user } = useSelector((state) => state.auth);

  // aray de li

  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.toggleMenu + " " + classActive} onClick={toggleClass}>
         <span></span>
         <span></span>
         <span></span>
          <div className={styles.container}>
            <ul className={styles.menuList}>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    location.pathname === "/afiliado"
                      ? activeClassName
                      : disabledClassName
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="group"
                  className={({ isActive }) =>
                    isActive ? activeClassName : disabledClassName
                  }
                >
                  Grupo Familiar
                </NavLink>
              </li>
              <li>
                <NavLink to="autorizaciones">
                  {({ isActive }) => (
                    <span
                      className={isActive ? activeClassName : disabledClassName}
                    >
                      Recetas
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="historial">
                  {({ isActive }) => (
                    <span
                      className={isActive ? activeClassName : disabledClassName}
                    >
                      Historial
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="prestadores">
                  {({ isActive }) => (
                    <span
                      className={isActive ? activeClassName : disabledClassName}
                    >
                      Cartilla
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="farmacias">
                  {({ isActive }) => (
                    <span
                      className={isActive ? activeClassName : disabledClassName}
                    >
                      Farmacias
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
            <div className="relative">
              <button onClick={handleClickMenu}>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.urlPhoto || profilePhoto}
                  alt=""
                />
              </button>
              {isOpen && <MenuList setIsOpen={setIsOpen} />}
            </div>
          </div>
        </div>
    </nav>
  );
};

export default NavbarAfiliado;

export const MenuList = ({setIsOpen}) => {
  const navigate = useNavigate();
  return (
    <div className="absolute bg-white rounded-md shadow-md w-48 h-26 z-50 right-0">
      <ul><Link to={"perfil"} onClick={() => setIsOpen(false)} >
        <li className="p-2 text-center rounded-tl-md rounded-tr-md hover:bg-gray-200">
        Mi Cuenta
        </li></Link>
        <li
          className="p-2 text-center rounded-bl-md rounded-br-md rounded-tl-md hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Cerrar sesión
        </li>
      </ul>
    </div>
  );
};
