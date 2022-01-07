import React from "react";
import { Link } from "react-router-dom";
import CarouselSlide from "../../Components/CarouselSlide/CarouselSlide";
import NavBar from '../../Components/NavBar/NavBar'
import Plans from "../../Components/Plans/Plans";

export default function LandingPage() {
    return (
        <div>
            <NavBar/>
            <CarouselSlide/>
            <Plans/>
        </div>
    )
}
