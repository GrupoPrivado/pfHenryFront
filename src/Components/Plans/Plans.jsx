import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getPlanes } from "../../actions/actionPlanes";
import {Link} from "react-router-dom"

function Plans() {
    const dispatch = useDispatch()
    const {planes} = useSelector((state) => state.planes)
    console.log(planes)

    useEffect(() => {
        dispatch(getPlanes());
    }, [dispatch]);

    return (
        <div className='flex justify-evenly'>
            {planes?.map((plan) => (
                <div className='w-80 h-80 bg-gradient-to-r from-indigo-500 to-indigo-900 m-10 rounded-3xl flex flex-col items-center justify-evenly p-6'>
                    <h2 className='text-5xl text-white text-center '>Plan {plan.name}</h2>
                    <Link to="/contact">
                        <button className='bg-white text-lg p-2 rounded-md'>Conocer más</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Plans
