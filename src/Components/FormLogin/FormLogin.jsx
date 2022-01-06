import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import Logo from "../../assets/logo.svg"

function FormLogin() {
    const [input, setInput] = useState({
        dni: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const users = useSelector((state) => state.users);

    // useEffect(() => {
    //     dispatch(getUsers());

    // }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src={Logo}
                        alt="Workflow"
                    />
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="dni" className="sr-only">
                                DNI
                            </label>
                            <input
                                id="dni"
                                name="dni"
                                type="dni"
                                autoComplete="dni"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="DNI"
                                onChange={(e) => handleChange(e)}
                                value={input.dni}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                                onChange={(e) => handleChange(e)}
                                value={input.password}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Olvide mi contraseña
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    aria-hidden="true"
                                />
                            </span>
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        // <form onSubmit={(e) => handleSubmit(e)}>
        //     <div>
        //         <label>Usuario: </label>
        //         <input type="text"
        //         value={input.user}
        //         name="user"
        //         placeholder='Usuario'
        //         onChange={(e) => handleChange(e)}
        //         />
        //     </div>

        //     <div>
        //         <label>Contraseña: </label>
        //         <input type="password"
        //         value={input.password}
        //         name="password"
        //         placeholder='Contraseña'
        //         onChange={(e) => handleChange(e)}
        //         />
        //     </div>

        //     <input type="submit"
        //     value="Ingresar"
        //     />
        // </form>
    );
}

export default FormLogin;
