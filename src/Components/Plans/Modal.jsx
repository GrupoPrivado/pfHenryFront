import React from 'react'

const Modal = ({plan}) => {
    console.log(plan)
    return (
        <div className='absolute bg-white'>
            <h2>{plan.name}</h2>
            {
                plan.descripcion && plan.descripcion.map((desc, index) => (
                    <div key={index}> <p> <span>{desc[0]}:</span> {desc[1]} </p> </div>
                ))
            }
        </div>
    )
}

export default Modal