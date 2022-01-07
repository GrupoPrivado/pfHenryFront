import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Banner1 from "./../../assets/bannerCoberturaMedica.jpg"
import Banner2 from "./../../assets/BannerCoberturaMedica2.jpg"

function CarouselSlide() {
    return (
        <div>
            <div className="w-screen">
                <img className="w-screen" src={Banner1} alt="" />
            </div>
        </div>
    );
}

export default CarouselSlide
