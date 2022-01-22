import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Logo from "./../../assets/bg2.jpg"
import { getRecetas, getRecetaDetail } from "../../actions/actionRecet";
import CardReceta from './CardReceta';

const Authorizations = () => {
    const dispatch = useDispatch();
    const { recipes } = useSelector(state => state.recetas);
    console.log(recipes)
    const [modal, setModal] = useState(false);
    useEffect(() => {
        dispatch(getRecetas())
    }, [])

    const handleClick = (e) => {
        setModal(!modal)
        dispatch(getRecetaDetail(e.target.value))
    }
    return (
        <div className="flex flex-col w-full bg-cover start min-h-70vh contenair" style={{ backgroundImage: `url(${Logo})` }}>
            <h3 className='mt-3 ml-3 text-4xl font-bold text-left text-white'>Recetas y Autorizaciones</h3>
            <table className="mx-auto mt-10 text-gray-900 bg-white shadow-none w-80vw bg-opacity-40 rounded-xl backdrop-filter backdrop-blur-lg">
                <thead>
                    <tr>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Receta Nº</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Tipo de Receta</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Estado</th>
                        <th className="p-2 text-white bg-primary bg-opacity-40 backdrop-filter backdrop-blur-lg">Ver receta</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes ?
                        recipes.map((recipe, index) => (
                            <tr key={index} className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <td className="p-2">{recipe.numReceta}</td>
                                <td className="p-2">{recipe.tipoReceta}</td>
                                <td className="p-2">{recipe.status}</td>
                                <td className="flex justify-center p-2">
                                    <button value={recipe._id} onClick={handleClick} className="flex items-center w-3/5 px-2 py-1 text-white bg-gray-500 text-s hover:bg-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                                        <span>{recipe.descripcion}</span>
                                    </button>
                                </td>
                            </tr>
                        )) : <tr className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg"><td className="p-2">Sin consultas</td></tr>}
                </tbody>
            </table>
            {modal && (
                <CardReceta modal={modal} setModal={setModal}
                />
            )}

        </div>
    )
}

export default Authorizations

// {
//     modal && (
//         <CardReceta
//             numReceta={recipe.numReceta}
//             tipo={recipe.tipoReceta}
//             nombre={recipe.profesionalID.nombre}
//             apellido={recipe.profesionalID.apellido}
//             matricula={recipe.profesionalID.matricula}
//             especialidad={recipe.profesionalID.especID.nombre}
//             descripcion={recipe.descripcion}
//             setModal={setModal}
//         />
//     )
// }