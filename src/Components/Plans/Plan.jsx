import React from 'react'

const Plan = ({plan}) => {
    return (
        <div className='absolute'>
            <h2>{plan.name}</h2>
            <h2>{plan.description}</h2>
        </div>
    )
}

export default Plan
