import React from 'react'

const Modal = ({plan}) => {
    return (
        <div className='absolute'>
            <h2>{plan.name}</h2>
        </div>
    )
}

export default Modal
