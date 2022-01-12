import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { logout } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Logo from "../../assets/logo.svg"


const userDetails = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigationa = [
    { name: 'Dashboard', href: '/afiliado', current: true },
    { name: 'Grupo Familiar', href: '/afiliado/group', current: false },
    { name: 'Credencial Digital', href: '/afiliado/credencial', current: false }, // anularia la ruta
    { name: 'Autorizaciones', href: '/afiliado/autorizaciones', current: false },
    { name: 'Historial', href: '/afiliado/historial', current: false },
    { name: 'Cartilla', href: '/afiliado/prestadores', current: false },
]
export default function NavBarDashboard() {
    const [navigation, setNavigation] = useState([
        { name: 'Dashboard', href: '/afiliado', current: true },
        { name: 'Grupo Familiar', href: '/afiliado/group', current: false },
        { name: 'Autorizaciones', href: '/afiliado/autorizaciones', current: false },
        { name: 'Historial', href: '/afiliado/historial', current: false },
        { name: 'Cartilla', href: '/afiliado/prestadores', current: false },
    ])
    
    const navigate = useNavigate()
    const { user, route } = useSelector(state => state.auth)
    

    return (
      <>
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-white">
            {({ open }) => (
              <>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img src={Logo} alt="Workflow" />
                      </div>
                      <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                          {navigation.map((item, index) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-secondary text-white"
                                  : "text-primary hover:bg-primary hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                              onClick={() => {
                                const oldState = navigation;
                                const prev = oldState.find(
                                  (e) => e.current === true
                                );
                                prev.current = !prev.current;

                                oldState[index].current =
                                  !oldState[index].current;
                                setNavigation([...oldState]);
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-center ml-4 md:ml-6">
                        <button
                          type="button"
                          className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="w-6 h-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 z-50">
                          <div>
                            <Menu.Button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="w-8 h-8 rounded-full"
                                src={userDetails.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to={"/afiliado/micuenta"}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Mi Cuenta
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                    onClick={() => {
                                      logout();
                                      navigate("/");
                                    }}
                                  >
                                    Cerrar Sesión
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className="flex -mr-2 md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block w-6 h-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block w-6 h-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={userDetails.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="flex-shrink-0 p-1 ml-auto text-gray-400 rounded-full bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </>
    );
}