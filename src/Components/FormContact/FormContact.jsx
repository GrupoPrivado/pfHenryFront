import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {sendMail} from '../../actions/actionMail'
import { validateContact } from '../../utils/constantes';

const functionErrors = (data) => {
    const arrayKeys = Object.keys(data);
    const arrayData = arrayKeys.filter((element, index) => data[element] !== "");
    if (arrayKeys.length === arrayData.length) {
      return false;
    } else {
      return true;
    }
  };

export default function FormContact() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState(true);
    const [errores, setErrores] = useState({})

    const [input, setInput] = useState({
        name: "",
        lastName: "",
        phone: "",
        mail:"",
        message:""
     })

    const handleChange = (e) => {
        const newInput = {
            ...input,
            [e.target.name]: e.target.value,
          };
        setInput(newInput)
        setErrors(functionErrors(newInput));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateErrors = validateContact(input)
        setErrores(validateErrors)
        console.log(validateErrors, 'Validate')
        if(Object.entries(validateErrors).length <= 0){
            let response = await dispatch(sendMail(input));
            setInput({
                name: "",
                lastName: "",
                phone: "",
                mail:"",
                message:""
            })
            console.log('response',response)
            navigate("/");
        } 
        
    }

    return (
        <div className='flex items-center justify-start w-full px-4 py-12 sm:px-6 lg:px-8'>
            <div className="w-full max-w-md space-y-8">
                <form className="mt-8 space-y-6 " onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid items-center grid-cols-3 grid-rows-5 gap-4 -space-y-px rounded-md shadow-sm -z-0 w-90vw sm:grid-cols-4 sm:grid-rows-2">
                        <h3 className='col-span-4 row-span-1 text-2xl font-bold text-left text-primary'>Contacto</h3>
                            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                                <label className='text-lg font-semibold'>Nombre: </label>
                                <input type="text" 
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none -z-0 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required 
                                value={input.name}
                                onChange={(e) => handleChange(e)} name="name"/>
                                {errores.name && (
                                    <p className="absolute text-red-700">{errores.name}</p>
                                )}
                            </div>
                                
                            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                                <label 
                                className='text-lg font-semibold'>Apellido: </label>
                                <input type="text" 
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                value={input.lastName}
                                onChange={(e) => handleChange(e)}
                                name='lastName'/>
                                {errores.lastName && (
                                    <p className="absolute text-red-700">{errores.lastName}</p>
                                )}
                            </div>

                            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                                <label 
                                className='text-lg font-semibold'>Telefono: </label>
                                <input type="text" 
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                value={input.phone}
                                onChange={(e) => handleChange(e)}
                                name='phone'/>
                            </div>

                            <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
                                <label
                                className='text-lg font-semibold'>Mail: </label>
                                <input type="text" 
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                value={input.mail}
                                onChange={(e) => handleChange(e)}
                                name='mail'/>
                                {errores.mail && (
                                    <p className="absolute text-red-700">{errores.mail}</p>
                                )}
                            </div>    

                            <div className='col-span-6 sm:col-span-4'>
                                <label
                                className='text-lg font-semibold'>Consulta: </label>
                                <textarea type="text" 
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                value={input.message}
                                onChange={(e) => handleChange(e)}
                                name='message'/>
                                {errores.message && (   
                                    <p className="absolute text-red-700">{errores.message}</p>
                                )}
                            </div>    

                            <input type="submit"
                                value="Enviar"
                                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-10'
                            />
                        </div>
                </form>
            </div>
        </div>
    )
}
