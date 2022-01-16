import React from 'react'
// bottom-0 right-0 h-16 w-16
function SuccessAlert({message}) {
    return (
        <div>
            <div className="absolute flex flex-row items-center p-5 bg-green-200 border-b-2 border-green-300 rounded bottom-11 right-3 alert ">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-green-100 border-2 border-green-500 rounded-full alert-icon">
                    <span className="text-green-500">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
                <div className="ml-4 alert-content">
                    <div className="text-sm text-green-600 alert-description">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessAlert
