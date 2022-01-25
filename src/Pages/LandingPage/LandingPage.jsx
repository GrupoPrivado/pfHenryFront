import React from "react";
import CarouselSlide from "../../Components/CarouselSlide/CarouselSlide";
import NavBar from '../../Components/NavBar/NavBar'
import Plans from "../../Components/Plans/Plans";
import {motion} from 'framer-motion'

export default function LandingPage() {
    return (
        <motion.div 
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1.30 }}>
            {/* <NavBar/> */}
            <CarouselSlide/>
            <Plans/>
        </motion.div>
    )
}
