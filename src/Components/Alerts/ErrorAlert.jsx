import React from "react";

const ErrorAlert = ({ message }) => {
  return (
<<<<<<< HEAD
    <div className='bottom-0 sticky'>
      <div className="absolute alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300 right-3 bottom-11 ">
        <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
          <span className="text-red-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
=======
    <div className="sticky bottom-0">
      <div className="absolute flex flex-row items-center p-5 bg-red-200 border-b-2 border-red-300 rounded alert right-3 bottom-11 ">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-red-100 border-2 border-red-500 rounded-full alert-icon">
          <span className="text-red-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
>>>>>>> development
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
<<<<<<< HEAD
        <div className="alert-content ml-4">
          <div className="alert-title font-semibold text-lg text-red-800">
            Error
          </div>
          <div className="alert-description text-sm text-red-600">
            {message || "Error"}
=======
        <div className="ml-4 alert-content">
          <div className="text-lg font-semibold text-red-800 alert-title">Error</div>
          <div className="text-sm text-red-600 alert-description">
            {message || 'Error'}
>>>>>>> development
          </div>
        </div>
      </div>
    </div>

  );
};

export default ErrorAlert;
