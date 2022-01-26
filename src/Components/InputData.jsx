import React from 'react'


const InputData = ({name, title, value, onChange, placeholder, type}) => {
    return (
      <div className="col-span-3 row-span-1 -space-y-px rounded-md shadow-sm sm:col-span-2 sm:row-span-1">
      <label htmlFor="DNI" className="text-lg font-semibold">{title}</label>
      <input
        required
        className="block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
    )
  }

  export default InputData
  