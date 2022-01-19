import React from "react";

const ErrorAlert = ({ message }) => {
  return (
    <div className="sticky bottom-0">
      <div className="absolute flex flex-row items-center p-5 bg-red-200 border-b-2 border-red-300 rounded alert right-3 bottom-11 ">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-red-100 border-2 border-red-500 rounded-full alert-icon">
          <span className="text-red-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="ml-4 alert-content">
          <div className="text-lg font-semibold text-red-800 alert-title">Error</div>
          <div className="text-sm text-red-600 alert-description">
            {message || 'Error'}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ErrorAlert;
