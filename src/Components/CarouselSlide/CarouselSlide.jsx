import React from 'react'
import {Link} from "react-router-dom"
//import Banner1 from "./../../assets/bannerCoberturaMedica.jpg"
import Banner2 from "./../../assets/BannerCoberturaMedica2.jpg"

function CarouselSlide() {
    return (
        <div>
            <div className="relative ">
                <img src={Banner2} alt="" />
                <div className='absolute top-52 right-52'>
                    <h1 className='text-5xl font-semibold text-primary'>Cuidá tu salud y <br/> la de tu familia</h1>
                    <h2 className='text-3xl text-primary'>Elegí el mejor plan médico</h2>
                    <Link to="/contact">
                        <button className='w-64 h-12 my-5 text-2xl font-semibold text-white rounded-md bg-secondary'>Conocé más</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CarouselSlide
