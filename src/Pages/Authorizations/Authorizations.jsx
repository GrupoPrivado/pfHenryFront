import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Logo from "./../../assets/bg2.jpg"
import { getRecetas, getRecetaDetail } from "../../actions/actionRecet";
import CardReceta from './CardReceta';
import { ClipboardListIcon } from '@heroicons/react/outline'


const Authorizations = () => {
    const dispatch = useDispatch();
    const { recipes } = useSelector(state => state.recetas);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        if(!recipes.length) dispatch(getRecetas())
    }, [])

    const handleClick = (e, rec_id) => {
        if(rec_id){
            dispatch(getRecetaDetail(rec_id))
            setModal(true)
        } 

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
                        recipes.map((recipe) => (
                            <tr key={recipe._id} className="text-center text-blue-900 bg-white shadow-none bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <td className="p-2">{recipe.numReceta}</td>
                                <td className="p-2">{recipe.tipoReceta}</td>
                                <td className="p-2">{recipe.status}</td>
                                <td className="flex justify-center p-2">
                                    <button type={'button'} value={recipe._id} onClick={(e) => handleClick(e, recipe._id)} className="flex items-center w-1/2 px-2 py-1 text-white bg-gray-500 text-s hover:bg-gray-600">
                                        <ClipboardListIcon className="w-5 h-5 mr-3 text-white pointer-events-none" />
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