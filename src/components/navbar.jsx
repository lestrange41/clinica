/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <img src="https://png.pngtree.com/png-clipart/20220328/original/pngtree-tooth-simple-modern-logo-dentist-blue-and-green-png-image_7483572.png" alt="" />
            <ul>
                <li>INICIO</li>
                <li>NUESTRA CLÍNICA</li>
                <li>EQUIPO</li>
                <li>TRATAMIENTOS</li>
                <li>FOTOS</li>
                <li>BLOG</li>
                <li>CONTACTO</li>
            </ul>
        </nav>
    );
}

export default Navbar;