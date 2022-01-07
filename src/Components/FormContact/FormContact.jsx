import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {sendMail} from '../../actions/index'

export default function FormContact() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        lastName: "",
        phone: "",
        mail:"",
        message:""
     })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await dispatch(sendMail(input));
        console.log('response',response)
        //navigate("/");
    }

    return (
        <div className='mt-5 md:mt-0 md:col-span-2 '>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className=' overflow-hidden sm:rounded-md w-50%'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                        <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                                <label className='block text-sm font-medium text-gray-700'>Nombre: </label>
                                <input type="text" 
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8'
                                required value={input.name}
                                onChange={(e) => handleChange(e)} name="name"/>
                            </div>
                            
                            <div className='col-span-6 sm:col-span-3'>
                                <label value={input.lastName}
                                onChange={(e) => handleChange(e)}
                                className='block text-sm font-medium text-gray-700'>Apellido: </label>
                                <input type="text" 
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8'
                                required/>
                            </div>

                            <div className='col-span-6 sm:col-span-4'>
                                <label value={input.phone}
                                onChange={(e) => handleChange(e)}
                                className='block text-sm font-medium text-gray-700'>Telefono: </label>
                                <input type="text" 
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8'/>
                            </div>

                            <div className='col-span-6 sm:col-span-4'>
                                <label value={input.mail}
                                onChange={(e) => handleChange(e)}
                                className='block text-sm font-medium text-gray-700'>Mail: </label>
                                <input type="text" 
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8'
                                required/>
                            </div>    

                            <div className='col-span-6 sm:col-span-4'>
                                <label value={input.message}
                                onChange={(e) => handleChange(e)}
                                className='block text-sm font-medium text-gray-700'>Consulta: </label>
                                <input type="text" 
                                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10'
                                required/>
                            </div>    

                                <input type="submit"
                                value="Enviar"
                                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-10'
                                />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


//Poner requiere en el input de todos menos el telefono