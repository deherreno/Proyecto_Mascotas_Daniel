import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/Inicio">
            <img 
              src="https://omegapet.es/wp-content/uploads/2021/01/OMEGAPET_LOGO_RGB.png" 
              alt="Omega Petshop" 
              className="logo-image"
            /> 
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/Inicio">Inicio</Link></li> 
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/acerca-de-nosotros">Acerca de nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Registro</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
