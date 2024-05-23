import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { HashLink as HashLink } from 'react-router-hash-link';


function Navbar() {
  return (
    <div className='navbar'>
    <nav className="menubar">
        <HashLink to="/Main#MainScreen" className="navbar-link" id="Logo"><img class="Logo" src="LogoGCA.png" alt="Logo de la Fundacion" height={80}></img></HashLink>
        <HashLink to="/Main#MainScreen" className="navbar-link">Inicio</HashLink>
        <HashLink to="/Main#Acercade" className="navbar-link">Nosotros</HashLink>
        <HashLink to="/Main#buscador" className="navbar-link">Especies</HashLink>
        <HashLink to="/Main#alertanos"className="navbar-link">Alertas</HashLink>
        <HashLink to="/Main#Contactanos" className="navbar-link">Contacto</HashLink>
    </nav>
    </div>
  );
};

export default Navbar;
